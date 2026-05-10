# VakeelOS — Image asset prompts (ChatGPT image generator)

Self-contained prompts for every raster asset the marketing site needs.
Each block embeds the palette, typography, and aesthetic constraints, so
you can paste any one prompt directly into ChatGPT without preamble.

> **Tip.** Most prompts ask for the asset on a transparent background.
> ChatGPT's image generator honours "transparent background" reliably for
> icons. For raster compositions (hero poster, OG card) it returns an
> opaque PNG — that's correct.

---

## 0 · Universal style DNA (reference only — already inlined in every prompt below)

This is what every prompt embeds. Don't paste this section on its own.

- **Palette, strict, no other hues:**
  - Cinema-black warm-tinted `#0E0D0B`
  - Warm ivory `#F5F2EC`
  - Cream-gold accent `#E5C188`
  - Deeper cream-gold `#CBA260`
  - Hairline rules `#B0A793`
- **Typography:** Inter (weights 600–700, tracking -0.025em) for marks; JetBrains Mono (9–11pt, 0.22em tracking, uppercase) for labels. **No serif. No italic. No script. No blackletter. No Trajan caps.**
- **Aesthetic:** Joseph Law / Milan Webionics restraint. Pentagram editorial, Base Design system rigour. Engraved, considered, never flashy SaaS.
- **Forbidden across all assets:** scales of justice, Lady Justice, gavels, pillars, columns, Greco-Roman temples, Ashoka lions, Devanagari clip-art, lotus motifs, courthouse silhouettes, books with bookmarks, briefcases, fountain-pen nibs, American-firm crest emblems, generic shield/badge frames. No gradients, no drop shadows, no 3D bevels, no glow, no photographic textures, no AI noise, no saturated colour outside the palette.

---

# BRAND ASSETS

## 1 · Primary wordmark logo

```
Generate a minimalist brand wordmark for "VakeelOS" — a calm premium
practice-management product for Indian advocates, in the spirit of Joseph
Law by Milan Webionics. Set "VakeelOS" in Inter Tight 700, kerned tight at
-0.025em letter-spacing. The first six letters "Vakeel" are rendered in
warm-tinted cinema black #0E0D0B; the final two letters "OS" are rendered
in deeper cream-gold #CBA260. A 1px hairline rule in #B0A793 sits 8px
below the wordmark, with a length matching the wordmark width exactly.
Background: warm ivory #F5F2EC. Vector-clean, flat, no serif, no italic,
no shadow, no gradient, no glow, no flourish. Generous padding around the
wordmark — at least 2x the cap-height on every side. Output 2048×1024,
production-grade brand asset.
```

## 2 · Favicon / monogram

```
Generate a square favicon mark for "VakeelOS". A single geometric letter
"V" in Inter Black 900, drawn with precise angled strokes and tight
optical kerning, rendered in warm-tinted cinema black #0E0D0B, sitting
centred on a warm ivory #F5F2EC field with a soft 3px corner radius. A
single 4px square dot in cream-gold #E5C188 sits at the bottom-right
corner of the V's right stroke, precisely aligned. No serif, no italic,
no shadow, no gradient, no decoration. Generous interior padding — the V
occupies roughly 60% of the canvas. Output 512×512, vector-clean and
flat, production-grade favicon.
```

## 3 · App icon (PWA / iOS-style rounded square)

```
Generate a rounded-square app icon for "VakeelOS". A 1024×1024 canvas
with a 22% corner radius (iOS squircle proportion), filled with
warm-tinted cinema black #0E0D0B. Centred on the dark field is a single
geometric letter "V" in Inter Black 900, rendered in warm ivory #F5F2EC,
occupying roughly 55% of the canvas height. A 6px circular dot in
cream-gold #E5C188 sits at the bottom-right of the V's right stroke.
Edges are clean and crisp; no shadow, no gradient, no inner glow, no
embossing, no texture. Vector-clean, flat, production-grade app icon.
```

## 4 · Open Graph / Twitter share card

```
Generate a 1200×630 social share card for "VakeelOS — Practice management
for the Indian bar". Background: warm-tinted cinema black #0E0D0B. Top
left corner: the wordmark "VakeelOS" set in Inter 600 #F5F2EC at 28pt,
with the "OS" in cream-gold #E5C188. Top right corner: small JetBrains
Mono 11pt #B0A793 label "MADE IN INDIA · EST. 2026" in uppercase with
0.22em tracking. Centred on the canvas: the headline "Practice
management, for the Indian bar." set in Inter Tight 700 #F5F2EC at 72pt,
tracking -0.035em, line-height 0.96, with the words "Indian bar" rendered
in cream-gold #CBA260. Bottom edge: a 1px hairline rule in #B0A793
spanning the full width, with the URL "vakeelos.com" sitting beneath in
JetBrains Mono 12pt #B0A793, 0.22em tracking, uppercase. Generous
margins — 64px from every edge. No imagery, no shadow, no gradient.
```

---

# HERO ASSETS

## 5 · Hero video poster (`/hero-poster.jpg`)

```
Generate a cinematic still frame, 1920×1200, depicting a quiet Indian
advocate's chamber after sunset — desk corner with a single brass
gooseneck lamp casting warm amber light, a stack of paper briefs bound
with red ribbon, a fountain pen resting beside, the edge of a leather
chair just visible. Shot on 35mm film aesthetic, shallow depth of field,
heavy bokeh in the background, subtle film grain. Colour graded toward a
strict palette: deep warm-tinted black #0E0D0B in the shadows, warm ivory
#F5F2EC on the paper highlights, cream-gold #E5C188 in the lamp glow and
on the brass fixtures. Mood: chamber after hours, contemplative,
unhurried, leather-and-foil luxury legal — Joseph Law by Milan Webionics
restraint, never flashy SaaS. No people, no faces, no scales of justice,
no gavels, no pillars, no books with bookmarks, no Devanagari, no logos,
no text. Composition leaves the right two-thirds of the frame
intentionally darker for overlay text. Production-grade cinematic poster
still.
```

---

# SERVICE ICONS — 6-service set

These pair with the six rows in `services-section.tsx`. Generate each as
an isolated icon on a transparent background; they get composited into
tiles and inverted on hover automatically.

## 6 · Case Management icon

```
Generate a minimal line-art icon for "Case Management" — a stack of three
horizontal sheets of paper viewed in three-quarter perspective, with a
single fine-line bracket connecting their right edges, suggesting a
unified spine. Stroke weight 1.5px, all strokes in warm-tinted cinema
black #0E0D0B, with a single cream-gold #E5C188 dot at the bracket's
midpoint. Rounded line caps. Background: transparent. Canvas 512×512,
icon occupies the centre 60% with generous padding. Vector-clean, flat,
no fill, no shadow, no gradient. No briefcase, no folder with tab, no
clipboard. Production-grade UI icon.
```

## 7 · Causelist Sync icon

```
Generate a minimal line-art icon for "Causelist Sync" — three horizontal
hairlines stacked vertically suggesting a list, with a small circular
arrow loop on the right side suggesting refresh, and a tiny clock-tick
mark indicating 06:30. Stroke weight 1.5px, all strokes in warm-tinted
cinema black #0E0D0B; the circular arrow renders in cream-gold #E5C188.
Rounded line caps. Background: transparent. Canvas 512×512, icon centred
in the middle 60% with generous padding. Vector-clean, flat, no fill, no
shadow, no gradient. No calendar grid, no clock face, no sun. Production-
grade UI icon.
```

## 8 · AI Drafter (VakeelBrain) icon

```
Generate a minimal line-art icon for "AI Drafter" — a single sheet of
paper with three horizontal text lines on its surface, the lines
progressing from solid to dashed to dotted suggesting streamed
generation, with a small four-pointed sparkle mark in the top-right
corner of the sheet. Stroke weight 1.5px, paper outline and text lines in
warm-tinted cinema black #0E0D0B; the sparkle in cream-gold #E5C188.
Rounded line caps. Background: transparent. Canvas 512×512, icon centred
with generous padding. Vector-clean, flat, no fill, no shadow, no
gradient. No fountain pen, no nib, no quill, no brain shape, no robot,
no chat bubble. Production-grade UI icon.
```

## 9 · AI Research icon

```
Generate a minimal line-art icon for "AI Research" — a circle suggesting
a magnifier, set on a single horizontal text line, with a tiny
four-pointed sparkle in the upper-right of the circle. Stroke weight
1.5px, magnifier and line in warm-tinted cinema black #0E0D0B; the
sparkle in cream-gold #E5C188. Rounded line caps. Background:
transparent. Canvas 512×512, icon centred with generous padding. Vector-
clean, flat, no fill, no shadow, no gradient. No book, no globe, no
brain. Production-grade UI icon.
```

## 10 · Net Invoicing + UPI icon

```
Generate a minimal line-art icon for "Net Invoicing" — a vertically-
oriented receipt with a zigzag bottom edge, three horizontal text lines
on its surface, and a small "₹" rupee symbol set into the upper-right
corner. Stroke weight 1.5px, receipt outline and text lines in warm-
tinted cinema black #0E0D0B; the rupee symbol in cream-gold #E5C188.
Rounded line caps. Background: transparent. Canvas 512×512, icon centred
with generous padding. Vector-clean, flat, no fill, no shadow, no
gradient. No credit card, no QR code, no coin, no currency note, no UPI
logo. Production-grade UI icon.
```

## 11 · Intelligence Dashboard icon

```
Generate a minimal line-art icon for "Intelligence Dashboard" — a
rectangular panel divided into a 2×2 grid of cells, with the top-left
cell holding a tiny rising line-chart, the top-right cell holding a small
horizontal bar, the bottom-left cell holding a single dot, and the
bottom-right cell holding a four-pointed sparkle. Stroke weight 1.5px,
panel and contents in warm-tinted cinema black #0E0D0B; the sparkle in
cream-gold #E5C188. Rounded line caps. Background: transparent. Canvas
512×512, icon centred with generous padding. Vector-clean, flat, no
fill, no shadow, no gradient. No pie chart, no gauge, no speedometer.
Production-grade UI icon.
```

---

# WORKFLOW STEP ICONS — 4-step set

These pair with the steps in `workflow-section.tsx`. Same constraints as
service icons, slightly more illustrative since they appear larger.

## 12 · Sync (Tuesday · 06:30 IST)

```
Generate a minimal line-art icon for "Sync" — a sunrise glyph: a single
horizontal hairline representing a horizon, with a half-circle rising
above it, and three short vertical hash-marks above the half-circle
suggesting first light. Stroke weight 1.5px, horizon and rays in warm-
tinted cinema black #0E0D0B; the half-circle filled with cream-gold
#E5C188. Rounded line caps. Background: transparent. Canvas 512×512,
icon centred with generous padding. Vector-clean, flat, no shadow, no
gradient. No clock, no calendar, no clouds. Production-grade UI icon.
```

## 13 · Brief (Tuesday · 09:14 IST)

```
Generate a minimal line-art icon for "Brief" — an open document with a
small fold at the top-right corner, three horizontal text lines on its
surface, and a single underlined emphasis on the second line. Stroke
weight 1.5px, document and text in warm-tinted cinema black #0E0D0B; the
underline emphasis in cream-gold #E5C188. Rounded line caps. Background:
transparent. Canvas 512×512, icon centred with generous padding. Vector-
clean, flat, no fill, no shadow, no gradient. No gavel, no pillar, no
courtroom, no scales. Production-grade UI icon.
```

## 14 · Draft (Tuesday · 14:02 IST)

```
Generate a minimal line-art icon for "Draft" — a sheet of paper with two
solid horizontal text lines at the top and a single dashed line at the
bottom suggesting in-progress generation, with a small four-pointed
sparkle mark in the upper-right corner. Stroke weight 1.5px, paper and
text in warm-tinted cinema black #0E0D0B; the sparkle in cream-gold
#E5C188. Rounded line caps. Background: transparent. Canvas 512×512,
icon centred with generous padding. Vector-clean, flat, no fill, no
shadow, no gradient. No fountain pen, no quill, no brain. Production-
grade UI icon.
```

## 15 · Bill (Tuesday · 18:45 IST)

```
Generate a minimal line-art icon for "Bill" — a vertically-oriented
receipt with a zigzag bottom edge and three horizontal text lines, with
a small "₹" rupee symbol replacing the bottom-most line's middle
character. Stroke weight 1.5px, receipt outline and text in warm-tinted
cinema black #0E0D0B; the rupee symbol in cream-gold #E5C188. Rounded
line caps. Background: transparent. Canvas 512×512, icon centred with
generous padding. Vector-clean, flat, no fill, no shadow, no gradient.
No credit card, no coin, no UPI logo, no QR code. Production-grade UI
icon.
```

---

# TRUST / VERIFICATION BADGES

Small circular seal-style marks for the security and footer sections.
Refined, almost-invisible authority — never literal court seals.

## 16 · Bar Council Verified badge

```
Generate a circular seal-style verification badge. Outer ring is a 1px
hairline in #B0A793 with diameter 256px. Inner field is warm ivory
#F5F2EC. Around the inner edge of the ring, set the text "BAR COUNCIL ·
VERIFIED · BAR COUNCIL · VERIFIED" in JetBrains Mono 11pt uppercase
#0E0D0B with 0.22em tracking, curved to follow the ring. At the centre,
a single small geometric checkmark "✓" rendered as a hairline stroke in
cream-gold #CBA260, 24px tall. Background: transparent outside the ring.
Canvas 320×320 with the seal centred. Vector-clean, flat, no shadow, no
gradient, no embossing. Not a court seal — refined to almost nothing.
Production-grade trust badge.
```

## 17 · Made & Hosted in India badge

```
Generate a circular seal-style badge. Outer ring is a 1px hairline in
#B0A793 with diameter 256px. Inner field is warm ivory #F5F2EC. Around
the inner edge of the ring, set the text "MADE IN INDIA · HOSTED IN
INDIA ·" in JetBrains Mono 11pt uppercase #0E0D0B with 0.22em tracking,
curved to follow the ring. At the centre, a single cream-gold #CBA260
geometric pin glyph (a small triangle pointing down with a circle above
it), 32px tall, rendered as a 1.5px hairline stroke. Background:
transparent outside the ring. Canvas 320×320 with the seal centred.
Vector-clean, flat, no shadow, no gradient, no flag, no Ashoka lion, no
lotus, no Devanagari. Production-grade trust badge.
```

## 18 · DPDPA Compliant badge

```
Generate a circular seal-style compliance badge. Outer ring is a 1px
hairline in #B0A793 with diameter 256px. Inner field is warm ivory
#F5F2EC. Around the inner edge of the ring, set the text "DPDPA ·
COMPLIANT · DPDPA · COMPLIANT" in JetBrains Mono 11pt uppercase #0E0D0B
with 0.22em tracking, curved to follow the ring. At the centre, a small
geometric shield silhouette drawn as a 1.5px hairline in cream-gold
#CBA260, 32px tall, with a single hairline checkmark inside it.
Background: transparent outside the ring. Canvas 320×320 with the seal
centred. Vector-clean, flat, no shadow, no gradient, no padlock, no key.
Production-grade compliance badge.
```

## 19 · Razorpay Secure / UPI badge

```
Generate a circular seal-style payments badge. Outer ring is a 1px
hairline in #B0A793 with diameter 256px. Inner field is warm ivory
#F5F2EC. Around the inner edge of the ring, set the text "PAYMENTS · BY
RAZORPAY · UPI · INR ·" in JetBrains Mono 11pt uppercase #0E0D0B with
0.22em tracking, curved to follow the ring. At the centre, a single
"₹" rupee symbol set in Inter 700 cream-gold #CBA260, 36px tall.
Background: transparent outside the ring. Canvas 320×320 with the seal
centred. Vector-clean, flat, no shadow, no gradient, no credit card, no
QR code, no Razorpay logo. Production-grade payments badge.
```

---

# STATE / EMPTY ILLUSTRATIONS

## 20 · 404 illustration

```
Generate a minimal editorial illustration for a 404 page, 1024×768. Set
on a warm ivory #F5F2EC background, render a single sheet of paper
floating slightly off-centre, with the corner gently folded over, and
three horizontal text lines that fade from solid to dotted as they
descend. The paper outline and lines are 1.5px stroke in warm-tinted
cinema black #0E0D0B. A single small four-pointed sparkle in cream-gold
#E5C188 sits in the empty space to the right of the paper. Generous
negative space — the paper occupies only the left third. Vector-clean,
flat, no shadow, no gradient. No magnifying glass, no question mark, no
broken-cable cliché, no astronaut, no 404 numerals. Mood: a brief that
went missing, calmly. Production-grade error-state illustration.
```

## 21 · Empty-state illustration (generic — no cases yet, no invoices yet)

```
Generate a minimal editorial illustration for a generic empty state,
1024×768. Set on a warm ivory #F5F2EC background, render a stack of
three horizontal hairlines centred on the canvas, suggesting a list with
no entries, with a single tiny four-pointed sparkle in cream-gold
#E5C188 sitting just above the top hairline. Stroke weight 1.5px, all
strokes in warm-tinted cinema black #0E0D0B. Generous negative space —
the lines occupy only the centre 30%. Vector-clean, flat, no shadow, no
gradient, no character, no figure, no decoration beyond the sparkle.
Mood: calm absence, not loneliness. Production-grade empty-state
illustration.
```

---

# TESTIMONIAL AVATARS

Generate as a set; each portrait must read as a real Indian advocate
without any specific likeness. Use the same lighting and framing across
all four so they sit together on a strip.

## 22 · Advocate portrait set (4 portraits, generate one prompt at a time)

```
Generate a single editorial portrait, 512×512, of an Indian advocate in
their late 30s to early 50s, photographed in a quiet chamber after
hours. Three-quarter framing, head and shoulders only, soft directional
warm tungsten light from camera-left, deep shadows on the right side of
the frame. Subject wears traditional advocate's black robe with white
neck-bands (bands), set against a deep warm-tinted cinema black #0E0D0B
background. Subject has a calm, considered, unhurried expression — not
smiling, not stern, looking slightly off-camera. Skin tones natural and
warm. Colour grade strict: shadows in #0E0D0B, mid-tones warm, highlights
in #F5F2EC, with the only colour accent a faint cream-gold #E5C188 rim
light on the subject's right shoulder. Shot on 35mm film aesthetic,
shallow depth of field, subtle film grain. No props, no books, no scales,
no gavels, no logos, no text. Production-grade editorial portrait. [Vary
the subject across runs: Run 1 — male, salt-and-pepper hair, light
stubble, gold-rimmed glasses. Run 2 — female, hair tied back, no glasses.
Run 3 — male, full beard, no glasses. Run 4 — female, short hair,
thin-rimmed glasses.]
```

---

# PRICING TIER VISUALS (optional — small decorative marks)

## 23 · Plan-tier glyphs (Solo / Chamber / Firm)

```
Generate three small decorative glyphs on a single 1536×512 canvas,
arranged left-to-right with equal spacing, each labelled in JetBrains
Mono 11pt uppercase #0E0D0B with 0.22em tracking beneath the glyph.

Left — "SOLO": a single 24px filled circle in warm-tinted cinema black
#0E0D0B.

Centre — "CHAMBER": three 24px filled circles in warm-tinted cinema
black #0E0D0B, arranged horizontally with 8px spacing.

Right — "FIRM": a 4×3 grid of 12px filled circles in warm-tinted cinema
black #0E0D0B with 8px spacing, where exactly one circle in the top-
right position is rendered in cream-gold #E5C188.

Background: warm ivory #F5F2EC. Generous padding — at least 96px from
every edge and between glyphs. Vector-clean, flat, no shadow, no
gradient. Production-grade decorative tier marks.
```

---

# COVER / SECTION DIVIDER ART (optional)

## 24 · Section divider — abstract paper-and-ink

```
Generate an abstract editorial divider strip, 2400×400, on a warm-tinted
cinema black #0E0D0B background. Composition: a single horizontal
hairline in #B0A793 spans the full width at vertical centre. A small
1.5px stroke geometric mark in cream-gold #E5C188 — three vertical
lines of varying heights (suggesting columns of a brief, not pillars) —
sits centred on the hairline, occupying roughly 64px of horizontal
space. Generous empty space on either side of the mark. Vector-clean,
flat, no shadow, no gradient, no figurative content, no Greco-Roman
columns. Production-grade section divider.
```

---

# USAGE NOTES

## How to paste into ChatGPT

1. Each prompt above is **self-contained** — you can paste any single
   block on its own and get a coherent asset.
2. For the testimonial avatar set (#22), run the prompt **four times**
   substituting the variation note at the end each time, so the four
   portraits share lighting and framing.
3. For service and workflow icons, run them in **a single ChatGPT
   conversation back-to-back** (one prompt per message) — the model
   maintains visual consistency across the same chat better than across
   separate chats.
4. After generating, request "remove the background and export as
   transparent PNG" for any icon or badge — ChatGPT honours this on a
   follow-up turn.

## File destinations in the repo

| Asset                     | Save to                                |
|---------------------------|----------------------------------------|
| Wordmark                  | `public/logo-wordmark.svg`             |
| Favicon                   | `src/app/favicon.ico` (existing)       |
| App icon                  | `public/app-icon.png` (1024×1024)      |
| OG card                   | Replace `src/app/opengraph-image.tsx`  |
| Hero poster               | `public/hero-poster.jpg`               |
| Service icons             | `public/icons/service-{slug}.svg`      |
| Workflow icons            | `public/icons/workflow-{slug}.svg`     |
| Trust badges              | `public/badges/{name}.svg`             |
| 404 / empty-state         | `public/illustrations/{name}.svg`      |
| Avatars                   | `public/avatars/advocate-{n}.jpg`      |
| Tier glyphs               | `public/illustrations/tier-glyphs.svg` |

## When ChatGPT drifts off-palette

If the output introduces other colours (most often a blue or red), reply
with: **"Regenerate the same composition. Strict palette only — warm-
tinted cinema black #0E0D0B, warm ivory #F5F2EC, cream-gold #E5C188,
deeper cream-gold #CBA260, hairline #B0A793. No other hues. No
gradients."** That correction prompt works on the next turn.

## When ChatGPT introduces forbidden imagery

If the output shows scales, gavels, pillars, lotuses, or any other
forbidden glyph, reply with: **"Regenerate without scales of justice,
gavels, pillars, columns, lotuses, Devanagari, or any traditional legal
iconography. The mark must be abstract or paper-based only."**
