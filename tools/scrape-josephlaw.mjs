/**
 * Scrape the Joseph Law / "for the times" project pages on Awwwards.
 *
 * The actual forthetimes.law site is currently unreachable (CF 522), but
 * Awwwards has the entire site broken into per-section "element" pages,
 * each hosting the section's video/screenshot. We pull all of those.
 *
 * Output: tools/scrape-output/{slug}/{screenshot.png, meta.json}
 *
 * Run: pnpm exec node tools/scrape-josephlaw.mjs
 */

import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "scrape-output");

const TARGETS = [
  { slug: "00-project-overview",      url: "https://www.awwwards.com/sites/joseph-law" },
  { slug: "01-desktop-thumbnail",     url: "https://www.awwwards.com/inspiration/thumbnail-submission-67dae4ec5f723402417917" },
  { slug: "02-mobile-thumbnail",      url: "https://www.awwwards.com/inspiration/mobile_thumbnail-submission-67dae4ec5f723402417917" },
  { slug: "03-intro-video",           url: "https://www.awwwards.com/inspiration/intro-video-and-animation-joesph-law-for-the-times" },
  { slug: "04-services-section",      url: "https://www.awwwards.com/inspiration/services-section-joesph-law-for-the-times" },
  { slug: "05-about-section",         url: "https://www.awwwards.com/inspiration/about-us-section-joesph-law-for-the-times" },
  { slug: "06-testimonial-section",   url: "https://www.awwwards.com/inspiration/testimonial-section-joesph-law-for-the-times" },
  { slug: "07-workflow-section",      url: "https://www.awwwards.com/inspiration/workflow-section-joesph-law-for-the-times" },
  { slug: "08-footer-section",        url: "https://www.awwwards.com/inspiration/footer-section-joesph-law-for-the-times" },
  { slug: "09-mobile-version",        url: "https://www.awwwards.com/inspiration/mobile-version-joesph-law-for-the-times" },
];

async function scrape(page, target) {
  const dir = join(OUT, target.slug);
  await mkdir(dir, { recursive: true });

  console.log(`[${target.slug}] → ${target.url}`);

  // Capture all network responses for video/image asset discovery
  const assets = { videos: [], images: [] };
  page.on("response", (res) => {
    const url = res.url();
    const ct = res.headers()["content-type"] || "";
    if (ct.startsWith("video/") || /\.(mp4|webm|mov)(\?|$)/i.test(url)) {
      assets.videos.push({ url, contentType: ct, status: res.status() });
    } else if (
      ct.startsWith("image/") &&
      !url.includes("data:") &&
      !/awwwards\.com.*\/(icons|logos|avatars)/.test(url)
    ) {
      assets.images.push({ url, contentType: ct });
    }
  });

  try {
    await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 30000 });
  } catch (e) {
    console.warn(`  goto failed: ${e.message}`);
    await writeFile(join(dir, "ERROR.txt"), `goto failed: ${e.message}\n`);
    return;
  }

  // Dismiss Awwwards' cookie banner so it doesn't occlude every screenshot.
  await page.waitForTimeout(800);
  try {
    const accept = await page.$('button:has-text("Accept all")');
    if (accept) {
      await accept.click({ timeout: 1500 });
      await page.waitForTimeout(500);
    }
  } catch {}

  // Some pages (the inspiration "element" pages) gate the main asset behind
  // a click-to-load preview. Trigger any "play"-style buttons we see.
  await page.waitForTimeout(1500);

  // Scroll progressively to trigger every IntersectionObserver-bound video
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 600) {
      window.scrollTo(0, y);
      await sleep(220);
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1200);

  // Hover the main element preview area to trigger Awwwards' hover-to-play
  for (const sel of [
    ".col-image",
    ".card-element",
    "[class*='preview']",
    "video",
  ]) {
    const el = await page.$(sel);
    if (el) {
      try {
        await el.scrollIntoViewIfNeeded();
        await el.hover();
        break;
      } catch {}
    }
  }
  await page.waitForTimeout(1500);

  // Force-promote any data-src/data-poster attributes (Awwwards' lazy pattern)
  // and try to play every video so currentSrc resolves.
  await page.evaluate(() => {
    document.querySelectorAll("video").forEach((v) => {
      const ds = v.getAttribute("data-src");
      if (ds && !v.src) v.src = ds;
      v.querySelectorAll("source[data-src]").forEach((s) => {
        if (!s.src) s.src = s.getAttribute("data-src");
      });
      v.muted = true;
      v.load();
      v.play().catch(() => {});
    });
  });
  await page.waitForTimeout(3500);

  // Pull DOM-side metadata
  const dom = await page.evaluate(() => {
    const videos = Array.from(document.querySelectorAll("video")).map((v) => ({
      src: v.currentSrc || v.src || null,
      sources: Array.from(v.querySelectorAll("source")).map((s) => ({
        src: s.src,
        type: s.type,
      })),
      width: v.videoWidth || v.clientWidth,
      height: v.videoHeight || v.clientHeight,
      duration: Number.isFinite(v.duration) ? v.duration : null,
      poster: v.poster || null,
      autoplay: v.autoplay,
      loop: v.loop,
      muted: v.muted,
    }));

    const heroImages = Array.from(document.querySelectorAll(
      ".col-image img, .imgpreview img, [class*='preview'] img, picture img, img.lazyloaded"
    ))
      .map((img) => ({
        src: img.currentSrc || img.src,
        alt: img.alt,
        w: img.naturalWidth,
        h: img.naturalHeight,
      }))
      .filter((i) => i.src && !i.src.startsWith("data:"));

    // Heading + description text on the page
    const title =
      document.querySelector("h1")?.innerText?.trim() || document.title || "";
    const desc = Array.from(document.querySelectorAll("p, h2, .description, [class*='desc']"))
      .map((el) => el.innerText.trim())
      .filter((t) => t.length > 12 && t.length < 600)
      .slice(0, 12);

    const tags = Array.from(document.querySelectorAll("[class*='tag'], .tags li, ul.tags li"))
      .map((el) => el.innerText.trim())
      .filter((t) => t && t.length < 40);

    return { title, desc, tags, videos, heroImages };
  });

  // Full-page screenshot
  await page.screenshot({
    path: join(dir, "screenshot.png"),
    fullPage: true,
    timeout: 30000,
  });

  // Above-the-fold viewport screenshot too
  await page.screenshot({
    path: join(dir, "viewport.png"),
    fullPage: false,
  });

  const meta = {
    url: target.url,
    capturedAt: new Date().toISOString(),
    title: dom.title,
    description: dom.desc,
    tags: dom.tags,
    videos: dom.videos,
    heroImages: dom.heroImages.slice(0, 24),
    networkVideos: assets.videos,
    networkImages: assets.images.slice(0, 60),
  };
  await writeFile(join(dir, "meta.json"), JSON.stringify(meta, null, 2));

  // Save raw HTML for offline grep — find lazy-loaded src patterns
  const html = await page.content();
  await writeFile(join(dir, "page.html"), html);

  console.log(
    `  ${dom.videos.length} <video> · ${assets.videos.length} net-video · ${dom.heroImages.length} hero-img`
  );
}

(async () => {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
  });
  const page = await ctx.newPage();

  for (const t of TARGETS) {
    await scrape(page, t);
  }

  await browser.close();
  console.log("\nDone. Output → tools/scrape-output/");
})();
