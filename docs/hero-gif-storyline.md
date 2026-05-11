# Hero GIF — product-story arc

A 5-frame sequence that tells *what VakeelOS does*, not just *who uses it*.
Each frame advances one beat of the daily loop the product owns:

> **mess → sync → draft → brief → calm**

Output: five stills at 1920×1200 (16:10, matches the hero tile aspect).
Assemble into a looping GIF or short MP4 (see "Assembly" below).
Drop the final asset at `public/hero.gif` or `public/hero.mp4` and wire the hero tile to it (retire the brief-card placeholder).

---

## Master look — paste at the top of every frame prompt

```
Cinematic still, anamorphic 35mm look, Arri Alexa + Cooke S4 lens, Kodak
250D film emulation, 16mm grain density, slight halation in highlights.
Quiet, contemplative, low contrast.

Palette: cinema-black #15140F as the dominant negative space, warm
off-white paper #F4F0E2 for documents and highlights, a single accent of
cream-gold / muted saffron #C28A4F used sparingly. Single source of warm
window or desk-lamp light. No harsh sun, no neon, no digital glow.

Subject: an Indian senior advocate's chamber. Wood, brass, red string-tied
case files, fountain pen on cause-paper, black coat with white bands on a
stand, bound All India Reporter volumes. Brass desk lamp casting a warm
pool. No gavels (Indian courts don't use them). No Lady Justice. No wigs.

Negative: cartoon, CGI plastic, anime, oversaturated, vlog, social-media
cuts, courtroom drama tropes, American/British wig-and-gown, Lady Justice
statue, gavel, scales, American flag, golden glow, lens flares, dutch
tilts, shaky cam, fast zoom. No readable text on documents. No signage,
captions, titles, logos, UI screenshots, phone screens, or laptop screens.

Aspect ratio: 16:10, 1920×1200.
```

---

## Frame 01 — THE MESS

> **The problem.** A Monday morning before VakeelOS. Information lives everywhere — paper, phone, post-its — and the advocate's first hour is spent gathering, not thinking.

```
Top-down overhead shot, slight 5° tilt. A worn wooden desk crowded with
artefacts: a phone face-up with a single small notification light, three
printed cause-papers fanned across the desk at different angles, a brown
case file tied with red string half-open, a fountain pen uncapped, a
folded black coat draped over a chair-back at the edge of frame, two
loose hand-written post-its, a brass paperweight, a steel water tumbler.
A single warm desk-lamp pool from the upper-right corner. Most of the
frame remains in cinema-black shadow. The scene reads as quiet chaos —
not cluttered, but unsorted. Slight film grain.
```

---

## Frame 02 — THE SYNC

> **Causelist sync.** The same surface, moments later. eCourts / APHC / TSHC / NCLT data has converged. The scattered cause-papers have aligned themselves into one neat stack at the centre of the desk.

```
Top-down overhead, same desk geometry as Frame 01, same lamp, identical
framing. The previously scattered cause-papers are now a single neat
stack at the exact centre of the desk, edges aligned, top sheet face-up.
The brown case file is closed, red string re-tied. The phone is
face-down at the top-right of frame. Post-its gone. A thin saffron
#C28A4F hairline runs under the stack, just visible. The desk lamp
glows slightly warmer. Nothing in frame is crooked. The scene reads as
ordered, deliberate, calm.
```

---

## Frame 03 — THE DRAFT

> **AI drafting.** A drafting moment. The advocate's pen has paused mid-clause; the next line is being suggested — a faint saffron underline writing itself across the page.

```
Tight three-quarter macro from a low angle. A printed petition on
cause-paper fills the lower two-thirds of the frame. A fountain pen
with a brass-toned nib rests on the page, mid-sentence, ink wet on the
previous line. Below the pen, a faint saffron #C28A4F hairline traces
itself across the next blank line — the same colour and weight as a
fresh ink stroke. The line stops three-quarters of the way across.
Warm pool of desk-lamp light from the upper-left, soft fall-off into
cinema-black at the corners. Slight film grain. No hands, no face in
frame. No screens.
```

---

## Frame 04 — THE BRIEF AT 06:00 IST

> **The payoff.** A printed "Morning brief" card resolves on the desk. Four hearings, four times, one synced source. The advocate walks in and the day is already organised.

```
Top-down macro. A single printed card sits at the exact centre of the
desk, paper #F4F0E2, edges crisp. The card is laid out like a
typographic morning brief: a small mono header band at top, four
indented rows below it listing court abbreviations and four-digit case
numbers and 24-hour times. A faint saffron #C28A4F hairline runs under
the second row. A brass desk clock at the top of frame reads exactly
06:00. A folded reading-glasses case sits to the right of the card.
The light is first-light, cool blue from the left mixing with the warm
desk-lamp pool from the right. Document reads as printed and ordered,
never digital. Text on the card should be illegible at a glance —
typographic texture, not literal words.
```

---

## Frame 05 — THE CALM

> **The outcome.** The chambers are ready. The morning brief sits closed on the desk. The advocate hasn't arrived yet — but everything they need to start the day is in its place.

```
Wide locked-off shot, eye-level, slightly low. An Indian advocate's
chamber at dawn. Tall wooden bookshelves filled with red and
dark-green bound All India Reporter volumes line the back wall. A
black coat with two white bands hangs on a wooden stand to the left.
A brass desk lamp glows warm on the right. The morning brief from
Frame 04 sits closed at the centre of the desk. A ceiling fan turns
slowly overhead, motion-blur on its blades. Cool blue first-light
enters from a tall window on the left, mixing with the warm pool from
the lamp. The room is empty, ordered, ready. Hold the frame still for
a held-photograph feel.
```

---

## Mono captions — composite in post, do NOT bake into the image

| Frame | Caption | Anchor |
|-------|---------|--------|
| 01 | `BEFORE` | bottom-left |
| 02 | `CAUSELIST · SYNCED` | bottom-left |
| 03 | `VAKEELBRAIN · DRAFTING` | bottom-left |
| 04 | `BRIEF · 06:00 IST` | bottom-left |
| 05 | `A CALM PRACTICE` | bottom-centre |

Caption style (matches the site): `font-mono, 11px, uppercase, letter-spacing 0.22em, rgba(244,240,226,0.7)`.

---

## Assembly

**Option A — GIF via ezgif.com (no install, fastest)**

1. Open <https://ezgif.com/maker>
2. Upload `frame_01.jpg … frame_05.jpg` in order
3. Per-frame delay: `1500ms` (1.5 s)
4. Crossfade transition: enable, 8 frames
5. Loop: forever
6. Save as `public/hero.gif`

**Option B — MP4 via ffmpeg (smoother, smaller, recommended for production)**

```bash
# Place frames in /tmp/hero/ as frame_01.jpg ... frame_05.jpg
ffmpeg -framerate 1 -i /tmp/hero/frame_%02d.jpg \
  -vf "zoompan=z='1.02':d=24,framerate=fps=24,tblend=all_mode=average" \
  -c:v libx264 -pix_fmt yuv420p -movflags +faststart \
  public/hero.mp4
```

Total duration ~7.5 s, loops cleanly (frame 05 → frame 01 reads as "the next morning").

---

## How to iterate

1. Generate Frame 01 alone first. Lock the look — palette, grain, lens, desk geometry.
2. Once Frame 01 is right, use it as a style reference for Frames 02–05 so the desk geometry stays consistent across the loop.
3. Frames 01 ↔ 02 and 03 ↔ 04 share desk geometry — generate each pair in the same session for continuity.
4. If a generator drifts saturated or too cool, add `desaturated, warm-leaning, paper-toned` to the shot prompt.
5. If a generator inserts text, add `no text, no signage, no captions, no titles, no readable typography on documents` to the negative.
6. Frame 03 (the writing saffron line) is the riskiest single image. Fall back to After Effects if no generator nails the in-progress ink stroke — composite the saffron line over a clean petition still.
