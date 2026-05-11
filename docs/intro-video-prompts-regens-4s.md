# Regen prompts — 4s versions for shots 02, 04, 07

Companion to `docs/intro-video-prompts-veo-seedance.md`. Use these only for
the three shots that missed brief in the v1 generation. Keep shots 01, 03,
05, 06, 08 as-is.

## Cross-cutting locks (paste into every regen)

- **Duration:** 4 seconds, 24fps, 16:9, **1080p** (not 720p).
- **Saffron hex is `#9F4E15` — deep saffron/terracotta.** Reject any output
  that reads as bright orange, peach, or `#E89968`-ish. Add the words "NOT
  bright orange, NOT peach" to negatives.
- **Illegible text means illegible.** No formed letters anywhere on documents
  unless the prompt explicitly says otherwise. Treat OCR-garbled pseudo-text
  as a failure, not a pass.
- **Master look prefix unchanged:** 16:9 anamorphic 35mm, Arri Alexa +
  Cooke S4, Kodak 250D, 16mm grain, soft halation, palette warm off-white
  `#FBF8F0` + aged-cream `#F4F0E2` against deep ink-blue `#0E1626`, saffron
  `#9F4E15` accent only.

---

## Shot 02 — Cause-paper (4s regen v3)

### Root cause of repeated failure
A top-down overhead macro + a hand entering from the *side* is
anatomically impossible to render naturally. In a real top-down view of a
page on a desk, the writer is seated below the frame — their arm only ever
comes from the **bottom edge**. Every model that gets "hand enters from
right" reverts to a floating disembodied claw because there's no body the
arm can plausibly belong to.

Two fixes below. **Path A is strongly recommended** — the shot already
tells the story without a human in it, and it generates reliably.

---

### Path A — Drop the hand entirely (recommended)

The pen + dust + slow dolly already says "this is someone's working desk."
A hand was a nice-to-have, not load-bearing. Cutting it gives you a clip
that renders cleanly on the first attempt.

#### Image-gen reference frame

```
Cinematic still, top-down overhead macro, 60mm lens at f/4. A black fountain
pen with a steel nib RESTING FLAT — nib touching the page surface, body of
pen lying horizontal across the right third of frame — on a printed Indian
court causelist page on an aged wooden desk. The page is faintly off-white
#FBF8F0. Its text is rendered as PURE PRINTED BLUR — no individual
characters formed, just the suggestion of monospaced rows of ink. Heavy
depth-of-field blur on all type so nothing reads as letters. The pen nib
catches a single highlight. Soft warm window light from upper-left. Aged
wooden desk visible at frame edge. Kodak 250D, 16mm grain, halation. NO
HANDS, NO ARM, NO FINGERS, NO HUMAN ANYWHERE IN FRAME. ABSOLUTELY NO
LEGIBLE TEXT. Editorial photography.
```

#### Seedance v2 motion prompt (4s)

```
Camera: top-down locked, then a 1cm slow dolly-in over 4 seconds. Motion:
the pen does not move — it stays resting flat on the page throughout.
Subtle dust motes drift through warm window light from upper-left. No
human entry, no hand, no arm, no page turn. The page itself holds
completely still. Contemplative pacing. 24fps. 16:9. 1080p.
```

#### Veo 3 single prompt (4s)

```
Cinematic 35mm anamorphic, 4-second locked-off shot with very slight 1cm
dolly-in over the duration, 24fps, 16:9, 1080p. Top-down overhead macro of
a black fountain pen RESTING FLAT — nib touching the page, body horizontal
— on a printed Indian court causelist page on an aged wooden desk. The
pen never moves. The page never moves. Subtle dust motes drift through
warm window light from upper-left. NO HUMAN, NO HAND, NO ARM, NO FINGERS,
NO SLEEVE ANYWHERE IN FRAME — only the pen, the page, the wood. Kodak
250D, 16mm grain, halation. Palette: warm off-white #FBF8F0, aged-cream
paper, deep ink-blue shadows. Sound: paper rustle, soft clock tick, faint
ceiling fan whir. No music. Page text completely illegible — pure printed
blur, no formed letters. Negative: hand, fingers, arm, sleeve, wrist,
human, person, body, legible text, formed letters, vertical pen, pen
standing upright, gavel, scales, lens flare, shaky cam, drone, anime,
plastic CGI.
```

---

### Path B — Hand from the bottom (only if you really want the human beat)

Veo 3 only. Seedance struggles with mid-clip arm entry because the
reference frame either has the hand or doesn't — both are wrong.

```
Cinematic 35mm anamorphic, 4-second shot with 1cm slow dolly-in, 24fps,
16:9, 1080p. Top-down overhead macro of a black fountain pen resting flat
on a printed Indian court causelist page on an aged wooden desk. Camera
performs a slow 1cm dolly-in over the full duration. At second 1, the
BACK OF A RIGHT HAND enters from the BOTTOM EDGE of frame — NOT from the
right side, NOT from the top, NOT from any other edge, ONLY from the
bottom. The hand is palm-down resting flat on the wooden desk just below
the page edge, in a natural relaxed pose: knuckles up, fingers loosely
curled toward the palm, thumb resting flat against the side of the index
finger. No fingers extended. No pointing. No claw. No splayed fingers. A
black advocate's coat sleeve with thin white bands is visible at the wrist
extending down out of frame. The hand does NOT touch the page or the pen.
The hand stays motionless on the desk for two seconds. At second 3, the
hand slowly withdraws back DOWNWARD out of frame, exiting the same edge
it entered. The pen never moves. The page never moves. Soft warm window
light from upper-left. Kodak 250D, 16mm grain, halation. Palette: warm
off-white #FBF8F0, aged-cream paper, deep ink-blue shadows. Sound: paper
rustle, soft clock tick. No music. No face. Page text completely
illegible — pure printed blur, no formed letters. Negative: hand from
side, hand from right edge, hand from left edge, hand from top edge,
floating hand, claw hand, splayed fingers, pointing finger, fingers
touching pen, fingers touching page, fingers on the pen, hand picking up
pen, vertical pen, pen standing upright, legible text, formed letters,
garbled characters, gavel, scales, lens flare, shaky cam, drone, anime,
plastic CGI.
```

---

## Shot 04 — Causelist fan (4s regen)

### What v1 got wrong
- Came out looking like a bound book opening, not loose individual sheets.
- Saffron underline not visible at the 2s midframe (uncertain whether it
  animated in within 4s at all).
- Timing was scaled to 6s.

### Image-gen reference frame

```
Studio still, abstract editorial product photography. A stack of about 20
LOOSE, INDIVIDUAL paper sheets — each completely separate, no binding,
no spine, no thread, no staple. Each sheet is printed as an Indian court
causelist with monospaced rows of ink, rendered as pure printed blur — no
formed letters. Sheets are aged-cream #F4F0E2 with subtle paper-fibre
texture. The stack rests on or floats just above a clean warm off-white
#FBF8F0 backdrop. Soft top-down studio key light, gentle directional
shadow. Style: Apple keynote product render meets Swiss editorial design.
No people. NO LEGIBLE TEXT. ABSOLUTELY NO BOUND BOOK, NO SPINE, NO BINDING,
NO STAPLE, NO THREAD — these are loose sheets only. Kodak 250D processing.
```

### Seedance v2 motion prompt (4s)

```
Camera: locked-off three-quarter angle. Motion: from second 0 to second
2.5, the stack of LOOSE individual paper sheets fans open like a deck of
cards — each sheet rotating out about 8 degrees from the next around a
common pivot point on the right edge of the stack. The sheets are clearly
separate from each other and never connect at a spine. From second 2.5 to
second 4, the fanned formation rotates slowly along its vertical axis. At
second 3, a single saffron #9F4E15 hairline underline animates in, drawing
left-to-right along the bottom edge of the top sheet, completing by second
4. Lighting holds. Mechanical, deliberate, slow. No physics overshoot.
24fps. 16:9. 1080p.
```

### Veo 3 single prompt (4s)

```
Abstract 3D animated 35mm shot, 4 seconds, 24fps, 16:9, 1080p. About 20
LOOSE INDIVIDUAL paper sheets — each separate, no binding, no spine, no
staple, no thread — printed as Indian court causelists (text rendered as
illegible blur). They rest on or float just above a clean warm off-white
#FBF8F0 backdrop. From 0 to 2.5 seconds, the sheets fan open like a deck
of cards, each rotating 8 degrees from the next around a common pivot on
the right edge of the stack. From 2.5 to 4 seconds, the fanned formation
rotates slowly along its vertical axis. At second 3, a single saffron
#9F4E15 hairline underline draws itself left-to-right along the bottom
of the top sheet, completing by second 4. Saffron must be exact hex
#9F4E15 (deep saffron/terracotta), NOT bright orange, NOT peach. Soft top-
down studio key light, gentle directional shadow. Mechanical, deliberate
motion. Style: Apple keynote product render meets Swiss editorial design.
Sound: faint paper rustle, single soft mechanical click on the saffron
underline. No music. No legible text. Negative: bound book, book spine,
binding, staple, thread, cartoon, plastic, glossy, anime, oversaturated,
neon, bright orange, peach, lens flare, glow.
```

---

## Shot 07 — Orders & invoices align (4s regen)

### What v1 got wrong
- Backdrop came out deep ink-blue. Should be warm off-white `#FBF8F0`.
- Sheets had fully readable typeset labels: "court order", "hearing notice",
  "invoice". Prompt explicitly said no legible text.
- A saffron square leaked in from shot 08's wordmark frame.
- Saffron came out too peach-orange.

### Image-gen reference frame

```
Studio still, abstract editorial layout. Three rectangular paper sheets,
each clearly distinct by silhouette and iconography — NOT by readable text:

- top sheet: a court order, identifiable by a subtle circular court seal
  embossed in the upper-left corner; the seal's interior details are
  rendered as illegible blur.
- middle sheet: a hearing notice, identifiable by a single horizontal
  divider rule across its upper third.
- bottom sheet: an invoice, identifiable by a faint blurred ₹ symbol in
  the top-right and a column of right-aligned numeric blurs running down
  the right edge.

All three sheets are aged-cream #F4F0E2 with subtle paper-fibre texture,
slightly tilted at random angles. They float in clean negative space
against a WARM OFF-WHITE #FBF8F0 backdrop — NOT navy, NOT ink-blue, NOT
dark. The backdrop is bright and warm. Soft top-down studio key light, no
shadows. Style: Swiss editorial motion-design layout. Kodak 250D
processing. NO LEGIBLE TEXT ON ANY SHEET — no typeset headings, no
readable labels, no formed words. NO SAFFRON SQUARE in this frame (that
element belongs only to shot 08).
```

### Seedance v2 motion prompt (4s)

```
Camera: locked-off, very slight 1cm dolly-in over 4 seconds. Motion: from
second 0 to second 2.5, the three floating sheets — court order, hearing
notice, invoice — slowly rotate and translate to align themselves into a
single neat vertical stack centered in frame. From second 2.5 to second 4,
a saffron #9F4E15 hairline rule animates in along the BOTTOM edge of the
aligned stack, drawing left-to-right, completing by second 4. Movement is
slow, mechanical, deliberate, no overshoot. Backdrop remains warm off-white
#FBF8F0 throughout. No saffron square appears anywhere. 24fps. 16:9. 1080p.
```

### Veo 3 single prompt (4s)

```
Abstract 3D animated 35mm shot, 4 seconds, 24fps, 16:9, 1080p. Three
rectangular aged-cream #F4F0E2 paper sheets — a court order, a hearing
notice, an invoice — float in clean negative space against a WARM
OFF-WHITE #FBF8F0 backdrop (NOT navy, NOT ink-blue, NOT dark — the
backdrop must be bright and warm). Sheets are slightly tilted at random
angles. Each sheet is identifiable by silhouette only — court order has a
blurred circular seal upper-left, hearing notice has a horizontal divider
rule, invoice has a faint ₹ symbol top-right and a column of numeric blurs
on the right. NO LEGIBLE TEXT ANYWHERE. From 0 to 2.5 seconds, the three
sheets slowly rotate and translate to align into a single neat vertical
stack centered in frame. From 2.5 to 4 seconds, a saffron #9F4E15 hairline
rule — deep saffron/terracotta, NOT bright orange, NOT peach — draws itself
left-to-right along the bottom edge of the aligned stack. Soft top-down
studio key light. No shadows. Slow, mechanical, deliberate movement, no
overshoot. Style: Swiss editorial motion design. Sound: low sub-bass swell
underneath, single soft chime when the rule completes. No music. Negative:
dark background, navy, ink-blue background, legible text, typeset labels,
readable words, court order text, hearing notice text, invoice text,
saffron square, peach, bright orange, neon, glow, cartoon, plastic, anime,
oversaturated, lens flare, fast motion.
```

---

## After regen

1. Replace the three clips in your Downloads folder.
2. Run the duration / palette spot-check again — verify saffron reads as
   `#9F4E15`, backdrops match palette, no legible text leaked in.
3. Concatenate all 8 clips in order. New total runtime: ~32s (not 48s).
4. Re-time the type overlay schedule in `intro-video-prompt.md` to the 32s
   master.
