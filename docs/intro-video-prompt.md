# Hero intro video — generation prompt

Reference: <https://www.awwwards.com/inspiration/intro-video-and-animation-joesph-law-for-the-times> (Joseph Law / forthetimes.law).
Adapted to the VakeelOS visual system (paper/ink/saffron) and the Indian bar.
Rendered output goes at `public/hero.mp4` (already wired by `src/components/marketing/hero-cinematic.tsx`).

Tested against: **Sora 2 / Veo 3 / Runway Gen-4 / Kling 2.0**. Most generators cap a single render at 5–10 s, so this is a shot-list of eight ~6 s clips that edit together to ~48 s.

---

## Master look prompt — paste at the top of every shot

```
Cinematic corporate-law intro film, 16:9 widescreen, anamorphic 35mm look, shot on
Arri Alexa with Cooke S4 lenses. Quiet, contemplative pacing — no quick cuts.

Palette: warm off-white paper #FBF8F0 and aged-cream #F4F0E2 against deep ink-blue
#0E1626; one accent — a deep saffron / terracotta #9F4E15 used sparingly. Soft
window light, low contrast, gentle film grain (16mm density), Kodak 250D
emulation, slight halation in highlights. No harsh sun, no neon, no digital glow.

Camera language: slow push-ins, gentle parallax, motion-controlled rigs, occasional
locked-off macro. No handheld. No whip-pans. No drone shots.

Subject: an Indian advocate's chamber and a high court interior. Wood, brass, red
string-tied case files, fountain pen on cause-paper, advocate's black coat with
white bands hanging on a stand, stacks of bound All India Reporter volumes. Brass
nameplate engraved "Chambers of —". A single brass desk lamp casting warm pool of
light. No gavels (Indian courts don't use them). No Lady Justice statue. No clichés.

Negative: cartoon, CGI plastic, anime, oversaturated, vlog, social-media cuts,
courtroom drama tropes, wig-and-gown American/British costume, Lady Justice
statue, gavel, scales, american flag, golden glow, lens flares, dutch tilts,
shaky cam, fast zoom.
```

---

## Shot list — 48s cut

Each shot is a ~6s clip. Render with the master look prompt prepended, then concatenate in any NLE. Type overlays are added in post — DO NOT bake them in (the generator will spell them wrong).

### 01 — Cold open: the file (6s)
`Extreme close-up, macro lens, very shallow depth of field. A red string slowly
unwinds from a brown legal case file on a wooden desk. The camera holds, then
pushes in 4cm. Dust motes drift through a single shaft of warm window light.
Faint sound of a ceiling fan. No people in frame.`

### 02 — The cause-paper (6s)
`Top-down macro. A fountain pen rests on a printed cause-list page; the typeface
is small, formal, monospaced. The pen's nib catches a single highlight.
A hand wearing a black sleeve with a thin white band briefly enters frame from
the right and exits. Camera does a slow 1cm dolly-in. No face shown.`

### 03 — The chamber wide (6s)
`Wide locked-off shot of an empty Indian advocate's chamber at dawn. Tall
wooden bookshelves filled with red and dark-green bound legal volumes, brass
nameplate on the desk, a black coat on a wooden stand. Soft cool blue light
from the window mixes with one warm pool from a brass desk lamp. The fan
turns slowly overhead. Held still for 6 seconds, almost a photograph.`

### 04 — Causelist on screen (6s, abstract 3D)
`Abstract 3D animation: a stack of paper sheets, each one a court causelist,
fanning open like a deck of cards. Render in same paper #FBF8F0 + ink #0E1626
palette, with saffron #9F4E15 highlight on a single row. Rotates slowly along
its vertical axis. Studio key light, soft. Style: Apple keynote product
animation, but on textured paper with subtle fibre detail.`

### 05 — High court colonnade (6s)
`Slow wide tracking shot moving left-to-right past tall sandstone columns of an
Indian high court verandah at 06:30 IST. Long shadows. A clerk in a grey
safari suit walks in deep background, blurred. Pigeons fly out of frame top.
Cool first-light blue, single warm column of sun cutting between two pillars.
No faces clearly visible. No signage readable.`

### 06 — Hands typing (6s)
`Tight medium shot from above, behind the shoulder. Hands of a senior advocate
type slowly into a quiet laptop on the wooden desk. The screen is angled so
its content is unreadable — only soft warm glow on the face below frame.
Paper notes, a steel tumbler of water, a brass paperweight visible. The hands
pause, then type two more keystrokes. Composition is symmetric.`

### 07 — Abstract drift: orders & invoices (6s)
`3D abstract: three rectangular paper sheets — a court order, a hearing
notice, an invoice — float in negative space and align themselves into a
single vertical stack. Saffron #9F4E15 underline animates along the bottom of
the stack. Background is paper #FBF8F0. Lighting is soft, top-down, no
shadows. Movement is slow, deliberate, mechanical. Style: Swiss editorial
motion design.`

### 08 — Wordmark resolve (6s)
`Black ink #0E1626 background. A single 4mm saffron #9F4E15 square fades in
top-left. A long horizontal hairline rule draws itself across the frame from
left to right over 2 seconds. Then the camera holds on empty space for the
final 2 seconds — leaving room for the "VakeelOS" wordmark to be composited
in post. No text rendered by the model.`

---

## Type overlays — add in post (After Effects / DaVinci / Premiere)

Match the site's mono-uppercase treatment: `font-mono, 11px, uppercase, letter-spacing 0.22em, color #525569 on paper or rgba(255,255,255,0.7) on dark`.

| Time | Overlay | Anchor |
|------|---------|--------|
| 00:02 | `MADE IN INDIA` | top-left |
| 00:02 | `EST. 2026` | top-right |
| 00:14 | `CAUSELIST · 06:30 IST` | bottom-left |
| 00:24 | `APHC · TSHC · ECOURTS` | bottom-left |
| 00:36 | `INDIAN BAR · 1.8M ADVOCATES` | bottom-left |
| 00:44 | wordmark `VakeelOS` + tagline `Practice management, for the Indian bar.` | center |

---

## Sound design (Veo 3 / Sora 2 native, or score in post)

```
Score: solo piano, mid-low register, sparse, 60 BPM, in C minor. Joins at
00:08, builds gently, resolves on the wordmark. Reference: Max Richter "On
the Nature of Daylight" but at 50% intensity.

SFX bed:
- 00:00 – 00:06   ceiling-fan whir + distant traffic horn (Mumbai/Hyderabad)
- 00:06 – 00:14   single fountain-pen scratch, paper-rustle, clock tick
- 00:14 – 00:20   ambient verandah: pigeons, footsteps on stone
- 00:20 – 00:30   typewriter-like soft mechanical key clacks
- 00:30 – 00:42   silent abstract section, only a low sub-bass swell
- 00:42 – 00:48   one chime hit on wordmark resolve, then silence
```

---

## Tech specs

- **Aspect ratio:** render 16:9 1920×1080 at 24 fps (cinematic). The hero tile crops to 16:10 — no detail at the very top/bottom edges.
- **Duration:** 48 s. Loop-friendly: shot 01 cold-opens with no audio bed, so a tail-to-head cut loops cleanly.
- **Bitrate:** export H.264 at 6 Mbps for `public/hero.mp4`. Also export a WebM (VP9, 4 Mbps) for Safari fallback.
- **Poster frame:** export shot 03 at t=2s as `public/hero-poster.jpg` (already referenced by the `<video poster>` attribute).
- **Muted by default:** the hero tile autoplays muted — keep the score important but not load-bearing for storytelling.

---

## How to iterate

1. Generate shot 01 alone first. Lock the look (palette, grain, lens). Once it feels right, fan out the same look prompt to shots 02–08.
2. If a generator drifts saturated or too cool, add `desaturated, warm-leaning, paper-toned` to the shot prompt.
3. If a generator inserts text, add `no text, no signage, no captions, no titles` to the negative.
4. The abstract shots (04, 07) are the riskiest — fall back to After Effects if no generator nails the Swiss-editorial paper feel.
