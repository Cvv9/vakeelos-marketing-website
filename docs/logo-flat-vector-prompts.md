# VakeelOS — Flat-vector logo prompts

Companion to [docs/image-asset-prompts.md](image-asset-prompts.md). Where the
earlier doc commissioned the **carved photographic V** that now lives at
[public/logo-monogram.png](../public/logo-monogram.png), this doc commissions
**flat-vector twins** of the same V — the form factor we actually need for
nav glyphs, favicons, app icons, OG cards, and social avatars.

The carved render is gorgeous as a brand artifact (showcase placements,
business cards, a footer placard) but compresses to mush at 16-32px.
Browsers request favicons at exactly those sizes, and the site's nav uses a
24-48px glyph. Hence: flat versions.

> **Design intent:** preserve the carved V's silhouette — a thick chevron
> with an inner negative-space V outline running parallel to the outer
> stroke, sitting on a square cinema-black plate. Strip the embossing,
> gradients, lighting, and texture. Keep the proportions, the cream-gold
> stroke colour, and the warm-tinted black plate. Result reads as the
> carved plate's "blueprint" — same shape, infinitely scalable.

---

# TRACK A — flat-vector primary set

Generate these in order — each builds on the V silhouette established by
prompt 1. Run them in a single ChatGPT image conversation back-to-back so
the model maintains visual consistency.

## A1 · Flat-vector V on cinema black (PRIMARY — drives everything else)

Use this for: nav glyph at 24-48px, favicon source, generic brand mark.
Save to `public/logo-glyph.png` (or `.svg` if you can get a vector export).

```
Generate a flat 2D vector brand mark for "VakeelOS" — a calm premium legal
practice-management product for India's bar. The composition is a square
1024×1024 canvas filled edge-to-edge with warm-tinted cinema black
#0E0D0B (oklch 0.115 0.005 80, the same warm black as a leather notebook
in low light). Centred on this dark field is a single geometric letter "V"
rendered as a thick double-stroke chevron in flat cream-gold #E5C188
(oklch 0.82 0.085 75) — the V is constructed from two parallel chevron
strokes: an outer chevron forming the V silhouette, and a thinner inner
chevron running parallel to it inside, leaving a narrow negative-space
band of cinema black between them. Both chevrons are mitred to a sharp
point at the bottom apex. Stroke weight of the outer band is roughly 12%
of the canvas width; the inner band is roughly half that. The V occupies
about 65% of the canvas height and is centred both horizontally and
vertically with comfortable square plate margin around it. Soft 3% corner
radius on the outer canvas (so the plate reads as a name-plate, not a
sticker). Absolutely flat — no gradients, no embossing, no inner glow, no
drop shadow, no 3D bevel, no metallic texture, no film grain, no
photographic noise. Pure two-tone: cinema black plate, cream-gold V.
Vector-clean edges, mathematically precise mitre at the bottom apex.
Reference geometry: the carved V monogram in the existing brand
artifact at public/logo-monogram.png — match its proportions and double-
stroke construction exactly, just stripped of embossing. Export as PNG
1024×1024 with the cinema-black plate as the background (no
transparency). Production-grade flat brand mark, suitable for rendering
at any size from 16px favicon to 1024px app icon.
```

## A2 · Inverted V (cinema-black V on cream-gold field)

Use this for: light-mode surfaces, the chamber-mode app, Bar Council
verification badges, business-card alternate.
Save to `public/logo-glyph-inverse.png`.

```
Generate the inverted version of the VakeelOS flat brand mark from the
previous prompt. Same 1024×1024 canvas, same V silhouette and double-
stroke construction, same proportions and 65% V height. Now invert the
two-tone palette: the canvas plate is filled with cream-gold #E5C188
(oklch 0.82 0.085 75) and the V chevron is rendered in warm-tinted
cinema black #0E0D0B (oklch 0.115 0.005 80). The negative-space band
between the outer and inner V chevrons is now cream-gold (matching the
plate). Maintain the soft 3% canvas corner radius. Absolutely flat — no
gradients, no embossing, no drop shadow, no 3D bevel, no metallic
texture. Pure two-tone, inverse of the primary mark. Vector-clean
edges. Production-grade flat brand mark for use on light surfaces.
```

## A3 · PWA / iOS app icon

Use this for: the manifest's `icons` array, Apple's `apple-touch-icon`,
Android's adaptive icon foreground.
Save to `public/app-icon.png` (1024×1024 base).

```
Generate a flat iOS-style app icon for "VakeelOS" at 1024×1024. The
canvas is a rounded square with a 22% corner radius (matching Apple's
squircle proportion), filled with warm-tinted cinema black #0E0D0B
(oklch 0.115 0.005 80). Centred on the dark squircle is the same flat
double-stroke V chevron from the primary brand mark, in cream-gold
#E5C188 (oklch 0.82 0.085 75). Because iOS will compose this icon onto
home screens at 60-180px and Android adaptive icons crop to circles, the
V is sized slightly smaller than the primary mark — roughly 55% of the
canvas height — with generous safe-area margin so the V never approaches
the rounded corners. Absolutely flat — no gradients, no embossing, no
inner glow, no drop shadow, no 3D bevel, no metallic texture. Two-tone
only. Pure cinema black + cream-gold. Production-grade iOS/PWA app icon.
```

## A4 · Favicon-tuned glyph (16/32/48 optimised)

Use this for: `favicon.ico` source. Optical compensations because at 16px
even a single anti-aliased pixel matters.
Save to `public/favicon-source.png` (then convert to .ico with
`favicon.io` or imagemagick).

```
Generate a favicon-optimised version of the VakeelOS V brand mark at
512×512. The composition is the same square cinema-black plate
(#0E0D0B) with the cream-gold #E5C188 double-stroke V centred on it.
Two adjustments compared to the primary mark, optimised for legibility
at 16px and 32px: (1) the V's stroke weight is bumped up — outer
chevron stroke is 16% of canvas width, inner chevron 7% — so anti-
aliasing doesn't dissolve the strokes at small sizes; (2) the inner
negative-space band between the two V strokes is widened so it doesn't
fill in at 16px. The V occupies 70% of canvas height with slightly less
plate margin than the primary mark. Sharp mitred apex. Absolutely flat,
no gradients, no embossing, no shadow. Two-tone only. Pure pixel-clean
geometry intended to scale down to 16×16 without losing the double-
stroke read. Production-grade favicon source.
```

## A5 · Social avatar (Twitter / LinkedIn / GitHub profile)

Use this for: `og:image` profile, Twitter avatar, LinkedIn company logo,
GitHub organisation avatar.
Save to `public/social-avatar.png`.

```
Generate a 1024×1024 social profile avatar for VakeelOS. Same flat V
brand mark on cinema-black plate as the primary mark, with one
adjustment for the circular-crop platforms: the V is shifted upward
very slightly (about 3% of canvas height) so when Twitter and other
platforms crop the avatar to a circle, the V appears optically centred
rather than slightly low. The V occupies 60% of canvas height. A
single small 4% canvas-width cream-gold #E5C188 dot sits at the
bottom-right corner of the V's right stroke as a brand signature
detail (it appears in the favicon and app icon too). Absolutely flat,
two-tone cinema black + cream-gold, no gradients or embossing. The
square corners of the canvas remain crisp (platforms will mask to
circle as needed). Production-grade social avatar.
```

## A6 · Static OG card (replaces opengraph-image.tsx)

Use this for: `<meta property="og:image">`. The current
[opengraph-image.tsx](../src/app/opengraph-image.tsx) is on the legacy
ivory/navy/saffron palette — predates the cinema-black + cream-gold
system. This generates a static 1200×630 PNG that's on-brand and embeds
the new monogram.
Save to `public/og-card.png` (then update opengraph-image.tsx to serve
this static file, or delete that file and add `app/opengraph-image.png`).

```
Generate a 1200×630 OpenGraph social-share card for VakeelOS. Background
is warm-tinted cinema black #0E0D0B (oklch 0.115 0.005 80) edge to
edge. On the left third of the canvas, vertically centred, place the
flat double-stroke V brand mark (cream-gold #E5C188 V on the cinema-
black field — but here without the squircle plate, since the whole
canvas already provides the dark field). The V occupies roughly 60% of
canvas height. To the right of the V, with comfortable horizontal
gutter (~64px), set the headline "Practice management, for the Indian
bar." in Inter Tight 700 at 64pt warm ivory #F5F2EC, with the words
"Indian bar" set in cream-gold #CBA260, line-height 0.96, letter-
spacing -0.025em. Below the headline at 32pt set the supporting line
"VakeelOS — for India's 1.8 million advocates" in Inter 500 at warm
ivory #F5F2EC at 70% opacity. Bottom edge of the canvas: a 1px
hairline rule in #B0A793 spanning the full width, with "vakeelos.com"
set beneath in JetBrains Mono 14pt cream-gold #B0A793, 0.22em
tracking, uppercase. Top-right corner: small JetBrains Mono 11pt
"MADE IN INDIA · EST. 2026" in 0.22em uppercase, #B0A793. 64px
margins from every edge. No imagery beyond the V mark, no gradients,
no shadows, no decorative flourishes. Production-grade social share
card matching the design language at docs/design-language.md.
```

---

# TRACK B — alternative directions (only if you want options beyond the carved V)

The carved V is a deliberate pick from a 5-direction exploration we ran
earlier ([docs/image-asset-prompts.md prompt #4](image-asset-prompts.md)).
The four runners-up are still viable and might suit the site better in
ways the carved V can't.

## B1 · Pure wordmark — no glyph at all

Some legal-tech brands work better as pure type. The footer's massive
"VakeelOS" wordmark is essentially this. If you ditched the V glyph
entirely from nav and OG card, the brand becomes purely typographic —
quieter, more editorial, more "Pentagram for a law firm". The
typographic restraint matches the design language particularly well.

```
Generate a pure typographic brand wordmark for "VakeelOS" at 2048×512.
Set the wordmark in Inter Tight 700, kerned tight at -0.03em letter-
spacing. The first six letters "Vakeel" render in warm-tinted cinema
black #0E0D0B (oklch 0.115 0.005 80); the final two letters "OS"
render in deeper cream-gold #CBA260 (oklch 0.72 0.105 70). Background
is warm ivory #F5F2EC (oklch 0.96 0.008 80). A 1px hairline rule in
#B0A793 sits 12px below the wordmark, length matching the wordmark
width exactly. No icon, no flourish, no gradient, no shadow, no
decoration. Generous 2x cap-height padding on every side. Vector-
clean, flat. Production-grade typographic mark.
```

## B2 · Ligature lettermark "VO"

Tighter than a wordmark, more substantial than a single V. Shares
weight between the cinema-black "V" and cream-gold "O" — visually
encodes "VakeelOS" in two characters.

```
Generate a flat ligature monogram lettermark "VO" at 1024×1024 on warm
ivory #F5F2EC background. The "V" is set in Inter Black 900 in warm-
tinted cinema black #0E0D0B; the "O" is set in Inter Black 900 in
cream-gold #E5C188. The two letters share one baseline and one
hairline cap-line, optically kerned (not metric) so they sit
shoulder-to-shoulder with crisp negative space between. The ligature
occupies the centre 60% of the canvas. Absolutely flat — no gradients,
no shadows, no embossing. Production-grade two-letter brand mark.
```

## B3 · Abstract sigil — paper-and-ink

A non-letter mark suggesting two surfaces meeting (paper meeting ink, or
the spine of a folded brief). Ambient, unconventional. Reads as a
modern legal-tech mark without anchoring on the V.

```
Generate an abstract flat geometric brand sigil at 1024×1024 on warm
ivory #F5F2EC background. The sigil is a single one-stroke geometric
form drawn at 8% canvas-width line weight in warm-tinted cinema black
#0E0D0B, suggesting two surfaces meeting at an obtuse angle (the
spine of a folded brief or the meeting of paper and ink). A single
hairline accent — 2% canvas-width line — in cream-gold #E5C188 runs
parallel to the main stroke at one segment. The sigil occupies the
centre 50% of the canvas with generous negative space around it. No
figurative content, no letterforms, no recognisable objects.
Absolutely flat — no gradients, no shadows. Production-grade abstract
brand mark.
```

## B4 · Refined seal

A circular seal-style mark — not a court seal, deliberately stripped of
notary trappings. Reads as a maker's stamp.

```
Generate a flat circular seal at 1024×1024 on warm ivory #F5F2EC
background. The outer ring is a 1px-equivalent (3% canvas width)
hairline circle in #B0A793 at 78% canvas diameter. The inner field
inside the ring is solid warm ivory #F5F2EC. Set inside the ring,
following its inner edge: the text "VAKEELOS · INDIAN BAR ·" in
JetBrains Mono 36pt uppercase warm-tinted cinema black #0E0D0B with
0.22em tracking, curved to follow the ring. At the dead centre of the
seal: a single cream-gold #E5C188 dot at 5% canvas diameter.
Absolutely flat. No figurative content (no scales, no pillars, no
courthouse). Production-grade refined seal — reads as a maker's stamp,
not a court seal.
```

---

# Generation order recommendation

If you only generate **one**: A1 (flat-vector V on cinema black). It
unblocks the nav, favicon, app icon, and replaces the multi-purpose mark
in one shot.

If you generate **three**: A1 + A3 (PWA app icon) + A6 (OG card). That
covers every browser/social request the marketing site currently fails.

If you generate **the full Track A**: A1 → A2 → A3 → A4 → A5 → A6, in a
single ChatGPT conversation back-to-back so the V silhouette stays
consistent across all six.

# After generation — wiring into the site

Once you have the assets, drop them in and I'll wire them up:

| Asset | Location | What changes in code |
|---|---|---|
| A1 (`logo-glyph.png`) | `public/logo-glyph.png` | Replace `/logo-monogram-glyph.png` reference in [src/components/layout/nav.tsx](../src/components/layout/nav.tsx) |
| A3 (`app-icon.png`) | `public/app-icon.png` | Add `<link rel="apple-touch-icon">` and PWA manifest entries in [src/app/layout.tsx](../src/app/layout.tsx) |
| A4 (`favicon-source.png`) | `public/` | Convert to `app/icon.png` and `app/apple-icon.png` (Next.js conventions) |
| A5 (`social-avatar.png`) | `public/social-avatar.png` | Upload manually to Twitter/LinkedIn/GitHub profiles |
| A6 (`og-card.png`) | `public/og-card.png` | Delete [src/app/opengraph-image.tsx](../src/app/opengraph-image.tsx); Next.js will serve the static PNG instead. Update `metadata.openGraph.images` to point at it. |

# Model-specific suffixes (append to any prompt above)

| Model | Suffix |
|---|---|
| Midjourney | `--ar 1:1 --style raw --stylize 100 --v 7` (use `--ar 1200:630` for A6) |
| Ideogram | `Style: Design · Aspect 1:1 · Magic Prompt: off` |
| GPT-image / DALL-E | `size: 1024x1024, quality: high, background: opaque` (use `size: 1792x1024` for A6) |
| FLUX | `aspect 1:1, guidance 3.5, raw mode on` |
| Recraft | `Style: Vector illustration → Brand mark · custom palette: #0E0D0B #E5C188 #CBA260 #F5F2EC #B0A793` |

# Off-palette correction prompt (use if any model drifts)

If the output introduces blues, reds, or any colour outside the strict
palette, reply on the next turn with:

```
Regenerate the same composition. Strict palette only — warm-tinted
cinema black #0E0D0B, warm ivory #F5F2EC, cream-gold #E5C188, deeper
cream-gold #CBA260, hairline #B0A793. No other hues. No gradients. No
embossing. Two-tone or three-tone only.
```
