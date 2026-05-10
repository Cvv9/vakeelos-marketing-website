# Joseph Law / forthetimes.law — design audit

Captured **2026-05-07** via Playwright against Awwwards' element pages
(`tools/scrape-josephlaw.mjs`). The live site (forthetimes.law) was unreachable
behind Cloudflare, so each section was read off the Awwwards mirror — every
section has a dedicated "element" page hosting its own preview video.

Studio: **Milan Webionics**. Project: "Joseph Law — for the times."

Raw assets in `tools/scrape-output/{slug}/{screenshot.png, viewport.png, meta.json, page.html}`.

---

## Canonical asset map

These three videos appear on **every** element page (the parent-project rail at
the top of each Awwwards page). They are the project's master previews, not
section assets:

| File | Dim | Dur | Likely role |
|------|-----|-----|-------------|
| `67db316d3ab78679760508.mp4` | 1600×1200 | 7.9 s | Desktop master reel |
| `67db3169a6dbe768386878.mp4` | 1600×1200 | 7.9 s | Mobile master reel |
| `67db3318b0bad730075114.mp4` | 1600×1200 | 2.9 s | Short transition / sting |

Section-specific videos (the actual asset for each element) follow in DOM order
on each element page after these three.

---

## Section-by-section

### Hero (project overview)
Monumental carved-out **"JL"** monogram on a deep black backdrop, with the
wordmark **"FOR THE TIMES"** in fine engraved sans below it, and a hand-script
"Visit Joseph" signature in the lower-right. No subhead, no buttons in the
hero — pure typographic statement. The aesthetic is leather-and-foil
luxury-firm, not modern SaaS.

Tagline body copy from the Awwwards listing: *"Joseph Law is a modern legal
platform by Joseph Law firm, offering seamless client-attorney connections,
efficient case management, and digital-legal practice."*

### 01 · Desktop / 02 · Mobile thumbnails
The same hero composition rendered as a still: black metallic plate with the
"JL" mark embossed, "for the times" engraved beneath, signature mark
bottom-right. Mobile is the same composition reframed for a phone viewport.
This is the project's "front door" — used on Awwwards thumbnails.

### 03 · Intro video & animation (the cinematic film)
- Section asset: `69694c3fc50a0577724102.mp4` — **1800×1350, 15.05 s**.
- A typographic film: serif practice-area names ("Personal Injury",
  presumably also "Family Law", "Criminal Defense", etc.) fade through the
  centre of frame against a dark, almost-black backdrop with subtle
  set-design depth (a desk and lamp blurred behind).
- Pacing: slow, contemplative. Single anchor word at a time. Light cinematic
  grain.
- This is **the** intro video — the one our `docs/intro-video-prompt.md` was
  modelled on. Their version is text-driven; ours is set-driven (chamber,
  causelist, verandah). Both palettes match.

### 04 · Services section
- Headline **"Our Services"** centred on the same dark plate.
- Three floating service cards in a horizontal row, each with an ornate
  emblem-style icon (Lady Justice / scales / pillar — generic
  American-firm imagery; we should NOT carry these icons over).
- A small `services` pill above the headline acts as section eyebrow.
- A "Read More" green ghost button below the cards.

### 05 · About us section
- Headline **"About Us"** flush-left of a 3D dice-cube emblem with the
  Joseph Law mark engraved on its faces. The cube rotates slowly (the
  source video is the section asset).
- Body copy paragraph to the right of the mark.
- Single CTA button below.

### 06 · Testimonial section
- Centred **"Testimonials"** headline against a perforated/dotted dark
  background (looks like a steel mesh pattern).
- A single testimonial card floats in the middle: small avatar,
  attorney/client name, multi-line quote.
- No carousel arrows visible — likely auto-rotates.

### 07 · Workflow section
- Centred **"Our Workflow"** headline.
- Below the headline: a row of tab/pill buttons (looks like 3–4 stages of
  the workflow). Clicking each presumably reveals a step illustration.
- The active state appears to be the first pill, with the rest dimmed.
- Same dark plate + perforated mesh backdrop.

### 08 · Footer section
- Massive wordmark **"JOSEPH LAW"** in carved letterforms, taking up the
  upper third of the viewport.
- Below it: a desaturated **photograph of two men in suits shaking hands**,
  with the caption **"Trusted Roles"** overlaid.
- This is footer-as-brand-billboard, not a utility footer. The actual
  contact links presumably live below the screenshot frame.

### 09 · Mobile version
- A single iPhone mockup floating diagonally (~25° tilt) over the same
  perforated dark backdrop, with a "Visit Joseph" hand-script lockup in the
  lower-right.
- The phone screen plays the mobile-specific reel
  (`67db3169a6dbe768386878.mp4`).
- No body copy on this section page — it's a presentation tile, not a
  responsive-design write-up.

---

## Palette & motion observations

| Trait | Joseph Law | VakeelOS (current) | Verdict |
|-------|-----------|--------------------|---------|
| Base | Near-black `#0A0A0A` | Paper `#FBF8F0` | Inverted. Ours is paper-first; theirs is ink-first. |
| Accent | Champagne / signature gold (the "Visit Joseph" mark) | Saffron `#9F4E15` | Different warmth, equivalent role. |
| Type | Engraved/foil-stamped serif wordmarks; fine sans body | Display sans + mono labels | We're more editorial, theirs is more luxury. |
| Texture | Perforated mesh, leather, metallic plate | Paper grain, halation | Materials differ — ours stays paper-true. |
| Motion | Slow type fades, 3D emblem rotation, segmented-pill workflow reveal | Letter-rise on hero, mask-rise on tile | Comparable cadence; we lack the 3D emblem and the workflow tab-reveal. |

---

## Gaps in our current build vs Joseph Law

Sections their site has that ours **doesn't yet implement**:

1. **Workflow segmented-pill section** — clicking each pill swaps an
   illustration. Our `workflow-section.tsx` is currently static.
2. **About-us 3D rotating emblem** — they spin a cube of their monogram.
   Our about section is text-only.
3. **Mobile-version showcase tile** — a dedicated section showing the phone
   experience as a hero. We don't have one.
4. **Footer as billboard** — their footer leads with a wall-sized wordmark
   and a single hero image. Ours is a 4-column link grid.

Sections we have that **they don't**:
- Causelist live demo, FAQ, booking, OG card. These are substance their
  site doesn't carry — keep them.

---

## What to copy, what to skip

**Copy:**
- The slow typographic intro film (we already have a prompt; their
  reference confirms timing of ~15 s and one-anchor-word-per-beat).
- The segmented-pill workflow reveal interaction.
- The footer-as-billboard treatment for the wordmark.

**Skip:**
- Lady Justice / scales / gavel icons in services. India doesn't use
  those motifs.
- Handshake photography. It's a US-firm cliché. Replace with our
  chamber/verandah imagery if we want a similar moment.
- The cube/3D emblem. Beautiful but generic — our paper aesthetic doesn't
  carry leather/metal materials well.

---

## Re-scrape notes

The current scraper accepts the cookie banner overlay in the screenshots.
For a cleaner second pass, add this before the section screenshot:

```js
const accept = await page.$('button:has-text("Accept all")');
if (accept) await accept.click().catch(() => {});
await page.waitForTimeout(500);
```

Run again with:

```bash
pnpm exec node tools/scrape-josephlaw.mjs
```
