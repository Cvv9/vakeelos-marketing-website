# Per-shot prompts — Veo 3 + Seedance v2

Companion to `docs/intro-video-prompt.md`. Same 8-shot, 48 s structure. Two
generation paths covered:

- **Veo 3** — text-to-video, native audio, 8 s max per clip. Paste the prompt
  verbatim. One render = one shot.
- **Seedance v2** — image-to-video. You must first generate a still
  **reference frame** (FLUX 1.1 Pro / Imagen 4 / Midjourney v7 / Nano Banana),
  then feed it to Seedance with a motion prompt.

**Aesthetic lock — read this once, then it's baked into every prompt below.**

> 16:9 anamorphic 35 mm look. Arri Alexa + Cooke S4 lenses. Kodak 250D film
> emulation. 16 mm grain density. Soft halation in highlights. Palette: warm
> off-white #FBF8F0 and aged-cream #F4F0E2 against deep ink-blue #0E1626. One
> accent only — deep saffron / terracotta #9F4E15, used sparingly. Low
> contrast. No harsh sun. No neon. No digital glow.

**Camera language:** slow push-ins, gentle parallax, motion-controlled rigs,
locked-off macros. Never handheld. Never whip-pans. Never drone.

**Subject vocabulary:** Indian advocate's chamber and a high court interior.
Wood, brass, red string-tied case files, fountain pen, cause-paper, advocate's
black coat with thin white bands, stacks of bound All India Reporter volumes,
brass nameplate, brass desk lamp.

**Universal negatives:** cartoon, CGI plastic, anime, oversaturated, vlog,
social-media cuts, courtroom-drama tropes, wig-and-gown American/British
costume, Lady Justice statue, gavel, scales, American flag, golden glow, lens
flares, dutch tilts, shaky cam, fast zoom, captions, watermarks, signage with
readable text, faces clearly identifiable.

---

## Consistency strategy across both pipelines

1. **Lock shot 01 first.** Render shot 01 in your chosen pipeline. Tweak
   master-look phrasing until palette, grain, lens feel correct.
2. **Re-use the locked look prefix verbatim** as the prefix for shots 02–08.
   Don't paraphrase between shots — the model picks up on the exact wording.
3. **Seedance:** generate all 8 reference frames in **one batch with one
   seed** so they share lighting and lens character. Most image models accept
   `--seed` or have a session lock.
4. **Veo 3:** has no seed control; consistency comes from prompt
   identicality. Keep the master-look paragraph byte-identical across runs.
5. **Shots 04 + 07 (abstract motion design)** are the riskiest in either
   pipeline. If both fail, do them in After Effects from a still reference —
   note in `intro-video-prompt.md`.

---

## Shot 01 — Cold open: the file (6 s)

### Image-gen prompt (for Seedance reference frame)

```
Cinematic still, extreme close-up macro, very shallow depth of field, 100mm
lens at f/2.8. A red cotton string tied around a brown manila legal case file
on an aged wooden desk. The string is loose, beginning to unspool. Dust motes
suspended in a single shaft of warm window light cutting diagonally across
frame. Background goes to soft ink-blue #0E1626 fall-off. Foreground bathed
in warm aged-cream #F4F0E2. Kodak 250D film emulation, 16mm grain, soft
halation. No people, no text. Editorial photography style.
```

### Seedance v2 motion prompt

```
Camera: locked-off, then a 4cm slow dolly push-in over 6 seconds. Motion:
the red string slowly, gently unwinds — one revolution unspooling across
the duration. Dust motes drift through the shaft of light. The wood grain
catches a single highlight as the camera moves. No human entry. Contemplative
pacing. No cuts. 24fps. 16:9.
```

### Veo 3 single prompt

```
Cinematic 35mm anamorphic widescreen, 6-second shot, 24fps, 16:9. Extreme
close-up macro of a red cotton string tied around a brown manila legal case
file on an aged wooden desk. Camera does a slow 4cm dolly push-in. Over 6
seconds, the red string slowly unspools by one revolution. Dust motes drift
through a single shaft of warm window light. Very shallow depth of field.
Kodak 250D look, 16mm grain, soft halation. Palette: warm off-white #FBF8F0,
aged-cream #F4F0E2, deep ink-blue #0E1626 background fall-off. Sound: ceiling
fan whir, faint distant traffic horn, paper rustle. No music. No people. No
text. Negative: gavel, Lady Justice, scales, courtroom drama, lens flare,
shaky cam, drone, oversaturated, anime, plastic CGI.
```

---

## Shot 02 — The cause-paper (6 s)

### Image-gen prompt

```
Cinematic still, top-down overhead macro, 60mm lens at f/4. A black fountain
pen with a steel nib resting on a printed Indian court causelist page. The
paper is faintly off-white #FBF8F0, the typography small, formal,
monospaced, listing case numbers and party names (illegible blur). The pen's
nib catches a single highlight. Soft warm window light from upper left. Aged
wooden desk just visible at frame edge. Kodak 250D, 16mm grain, halation. No
hands in frame. No legible text. Editorial photography.
```

### Seedance v2 motion prompt

```
Camera: top-down locked, then 1cm slow dolly-in over 6 seconds. Motion: a
hand wearing a black sleeve with thin white bands enters frame from the
right at second 2, briefly hovers near the pen for one beat, then exits
right by second 4. The pen does not move. The paper holds steady. No face.
Contemplative pacing. 24fps. 16:9.
```

### Veo 3 single prompt

```
Cinematic 35mm anamorphic, 6-second shot, 24fps, 16:9. Top-down overhead
macro of a black fountain pen resting on a printed Indian court causelist
page on an aged wooden desk. Camera does a slow 1cm dolly-in. At 2 seconds,
a hand wearing a black sleeve with thin white bands enters from the right
edge, hovers briefly near the pen, then exits right by 4 seconds. The pen
stays still. Soft warm window light from upper-left. Kodak 250D, 16mm grain,
halation. Palette: warm off-white #FBF8F0, aged-cream paper, deep ink-blue
shadows. Sound: a single fountain-pen scratch, paper rustle, soft clock
tick. No music. No face shown. No legible text on the page. Negative:
gavel, Lady Justice, scales, lens flare, shaky cam, drone, oversaturated,
anime, plastic CGI.
```

---

## Shot 03 — The chamber wide (6 s)

### Image-gen prompt

```
Cinematic still, wide angle 24mm, locked-off composition. Empty Indian
advocate's chamber at dawn. Tall wooden bookshelves filled with red and
dark-green bound legal volumes (All India Reporter style spines). Brass
nameplate engraved on a wooden desk. A black advocate's coat with thin
white bands hangs on a wooden coat-stand. A brass desk lamp casts a single
warm pool of light onto the desk. Soft cool blue first-light spilling
through tall window blinds. A ceiling fan visible overhead, mid-rotation.
No people. Symmetric composition. Kodak 250D, 16mm grain, halation. Palette:
warm off-white, aged-cream, deep ink-blue. Editorial architectural
photography.
```

### Seedance v2 motion prompt

```
Camera: locked-off, completely static for the full 6 seconds. Motion: only
the ceiling fan turns, one slow rotation over 6 seconds. Light shifts almost
imperceptibly warmer. Dust drifts. No people enter. The chamber breathes.
Almost a photograph. 24fps. 16:9.
```

### Veo 3 single prompt

```
Cinematic 35mm anamorphic wide, 6-second locked-off shot, 24fps, 16:9.
Empty Indian advocate's chamber at dawn. Tall wooden bookshelves with red
and dark-green bound legal volumes. Brass nameplate on the wooden desk. A
black advocate's coat with thin white bands hangs on a stand. A brass desk
lamp casts a warm pool of light. Soft cool blue first-light through tall
window blinds. The ceiling fan turns one slow rotation over the full 6
seconds. Otherwise completely still. Symmetric composition. No people. No
camera movement. Kodak 250D, 16mm grain, halation. Sound: low ceiling-fan
whir, distant pigeons, faint clock tick. No music. No text. Negative: gavel,
Lady Justice, scales, courtroom drama, lens flare, shaky cam, drone,
oversaturated, anime, plastic CGI.
```

---

## Shot 04 — Causelist on screen, abstract 3D (6 s)

### Image-gen prompt

```
Studio still, abstract editorial product photography. A stack of about 20
sheets of paper, each printed as an Indian court causelist with monospaced
case numbers (illegible blur). The sheets are aged-cream #F4F0E2 with subtle
fibre texture. They float in clean negative space against a warm off-white
#FBF8F0 backdrop. One single row on the top sheet is highlighted with a
thin saffron #9F4E15 underline. Soft top-down studio key light, no shadows.
Style: Apple keynote product render meets Swiss editorial design. No people.
No legible text. Kodak 250D processing.
```

### Seedance v2 motion prompt

```
Camera: locked-off three-quarter angle. Motion: the stack of paper sheets
fans open like a deck of cards from second 0 to second 4, each sheet rotating
out 8 degrees from the next. The fanned stack then rotates slowly along its
vertical axis over the final 2 seconds. The saffron underline animates in
on second 5. Lighting holds. Mechanical, deliberate, slow. No physics
overshoot. 24fps. 16:9.
```

### Veo 3 single prompt

```
Abstract 3D animated 35mm shot, 6 seconds, 24fps, 16:9. A stack of about 20
aged-cream paper sheets — each printed as an Indian court causelist with
monospaced case numbers — floats in clean negative space against a warm
off-white #FBF8F0 backdrop. From 0 to 4 seconds, the sheets fan open like a
deck of cards, each rotating 8 degrees from the next. From 4 to 6 seconds,
the fanned stack rotates slowly along its vertical axis. At second 5, a
single saffron #9F4E15 underline animates in along the bottom of the top
sheet. Soft top-down studio key light. No shadows. Mechanical, deliberate
motion. Style: Apple keynote product render meets Swiss editorial design.
Sound: faint paper rustle, single soft mechanical click on the saffron
underline. No music. No text legible. Negative: cartoon, plastic, glossy,
anime, oversaturated, neon, lens flare, glow effects.
```

---

## Shot 05 — High court colonnade (6 s)

### Image-gen prompt

```
Cinematic still, wide tracking-shot composition, 35mm lens. Tall sandstone
columns of an Indian high court verandah at 06:30 IST. Long morning shadows
across stone flagstones. A single warm column of sun cutting between two
pillars from the right. A clerk in a grey safari suit walking in deep blurred
background. No faces visible. No readable signage. Cool blue first-light
overall, single warm sun streak. Kodak 250D, 16mm grain, halation. Palette:
sandstone aged-cream against deep ink-blue shadows. Editorial architectural
photography. No people in foreground.
```

### Seedance v2 motion prompt

```
Camera: slow horizontal tracking shot moving left-to-right at constant
velocity over 6 seconds, sliding past the sandstone columns. Motion: the
blurred clerk in the background continues walking left at a slow pace.
Pigeons fly out of frame top-right at second 4. Long shadows shift
imperceptibly. Smooth motion-controlled rig feel. No handheld. 24fps. 16:9.
```

### Veo 3 single prompt

```
Cinematic 35mm anamorphic, 6-second shot, 24fps, 16:9. Slow horizontal
tracking shot moving left-to-right past tall sandstone columns of an Indian
high court verandah at 06:30 IST. Long morning shadows on stone flagstones.
A single warm column of sun cuts between two pillars from the right. A clerk
in a grey safari suit walks in deep blurred background. At 4 seconds,
pigeons fly out of frame top-right. Cool blue first-light overall, single
warm sun streak. Smooth motion-controlled track, no handheld. Kodak 250D,
16mm grain, halation. Sound: ambient verandah — distant pigeons, footsteps
on stone, faint city traffic. No music. No faces visible. No readable
signage. Negative: gavel, scales, American flag, lens flare, drone, shaky
cam, oversaturated, anime, plastic CGI.
```

---

## Shot 06 — Hands typing (6 s)

### Image-gen prompt

```
Cinematic still, tight medium shot from above and behind the shoulder. The
hands of a senior Indian advocate (warm-toned skin, simple wedding ring)
poised over the keyboard of a quiet matte-black laptop on an aged wooden
desk. The laptop screen is angled so its content is unreadable — only soft
warm glow visible spilling onto the face below frame (face out of view).
Paper notes, a steel tumbler of water, a brass paperweight visible. Symmetric
composition. Kodak 250D, 16mm grain, halation. Palette: warm off-white,
aged-cream, deep ink-blue, single warm desk-lamp pool. Editorial photography.
No face shown.
```

### Seedance v2 motion prompt

```
Camera: locked-off tight overhead behind shoulder. Motion: hands type slowly
on the laptop — about 6 keystrokes total over the first 4 seconds, then a
1.5 second pause, then 2 final keystrokes at the end. Subtle natural micro-
movement of the wrists. The laptop screen glow flickers very faintly. The
brass paperweight catches one highlight as the hands move. No camera
movement. 24fps. 16:9.
```

### Veo 3 single prompt

```
Cinematic 35mm anamorphic, 6-second locked-off shot, 24fps, 16:9. Tight
medium shot from above and behind the shoulder. The hands of a senior Indian
advocate (warm-toned skin, simple wedding ring) type slowly on a quiet
matte-black laptop on an aged wooden desk. About 6 keystrokes over the
first 4 seconds, a 1.5-second pause, then 2 final keystrokes. Laptop screen
content unreadable; only soft warm glow on the face below frame (face never
visible). Paper notes, a steel tumbler of water, a brass paperweight in
frame. Symmetric composition. No camera movement. Kodak 250D, 16mm grain,
halation. Sound: soft mechanical key clacks, paper rustle, ceiling fan
underneath. No music. No face. No readable screen content. Negative: gavel,
courtroom drama, glow halos, neon, lens flare, shaky cam, drone, anime,
plastic CGI, vlog framing.
```

---

## Shot 07 — Abstract drift: orders & invoices (6 s)

### Image-gen prompt

```
Studio still, abstract editorial layout. Three rectangular paper sheets,
each clearly distinct: a court order at the top (with subtle court seal
illegible), a hearing notice in the middle, an invoice at the bottom (with
a faint ₹ symbol). All three are aged-cream #F4F0E2 with subtle paper-fibre
texture. They float in clean negative space, slightly tilted at random
angles, against a warm off-white #FBF8F0 backdrop. Soft top-down studio key
light, no shadows. Style: Swiss editorial motion-design layout. Kodak 250D
processing. No legible text on any sheet.
```

### Seedance v2 motion prompt

```
Camera: locked-off, very slight 1cm dolly-in over 6 seconds. Motion: the
three floating sheets — court order, hearing notice, invoice — slowly
rotate to align themselves into a single neat vertical stack centered in
frame, finishing alignment by second 4. From second 4 to second 6, a
saffron #9F4E15 hairline rule animates in along the bottom edge of the
stack, drawing left to right. Movement is slow, mechanical, deliberate,
no overshoot. 24fps. 16:9.
```

### Veo 3 single prompt

```
Abstract 3D animated 35mm shot, 6 seconds, 24fps, 16:9. Three rectangular
aged-cream paper sheets — a court order, a hearing notice, an invoice —
float in clean negative space against a warm off-white #FBF8F0 backdrop,
each slightly tilted at random angles. From 0 to 4 seconds, they slowly
rotate and translate to align themselves into a single neat vertical stack
centered in frame. From 4 to 6 seconds, a saffron #9F4E15 hairline rule
draws itself left-to-right along the bottom of the stack. Soft top-down
studio key light. No shadows. Slow, mechanical, deliberate movement, no
overshoot. Style: Swiss editorial motion design. Sound: low sub-bass swell
underneath, single soft chime when the rule completes. No music. No legible
text on any sheet. Negative: cartoon, plastic, glossy, anime, oversaturated,
neon, lens flare, glow effects, fast motion.
```

---

## Shot 08 — Wordmark resolve (6 s)

### Image-gen prompt (use as both first-frame AND last-frame reference if Seedance v2 supports first/last keyframe mode)

**First-frame reference:**

```
Cinematic still, completely empty composition. Pure deep ink-blue #0E1626
background filling the entire frame. Subtle 16mm grain texture. Slight
vignette. No subject, no text, no objects. Style: minimalist editorial
title card. Kodak 250D processing.
```

**Last-frame reference:**

```
Cinematic still, minimalist editorial title card. Pure deep ink-blue
#0E1626 background. In the upper-left, a single small saffron #9F4E15
square approximately 4mm wide. A long horizontal hairline rule (1px) in
warm off-white #FBF8F0 drawn fully across the frame at roughly 60% height.
Wide empty negative space below the rule. Subtle 16mm grain. Slight
vignette. No text, no logo, no other elements — just the square, the rule,
and empty space. Kodak 250D processing.
```

### Seedance v2 motion prompt (use first-frame + last-frame mode if available)

```
Camera: completely locked-off for the full 6 seconds. Motion: from second 0
to second 1, the small saffron #9F4E15 square fades in at upper-left. From
second 1 to second 3, the horizontal hairline rule draws itself across the
frame from left to right. From second 3 to second 6, hold completely still
on the final composition. No other movement. No text appears. 24fps. 16:9.
```

### Veo 3 single prompt

```
Cinematic 35mm anamorphic, 6-second locked-off shot, 24fps, 16:9. Pure
deep ink-blue #0E1626 background filling the entire frame, subtle 16mm
grain. From 0 to 1 second, a small saffron #9F4E15 square (about 4mm wide)
fades in at the upper-left. From 1 to 3 seconds, a long horizontal hairline
rule in warm off-white #FBF8F0 draws itself across the frame from left to
right at roughly 60% height. From 3 to 6 seconds, hold completely still on
the final composition: square upper-left, rule across, empty space below.
No camera movement. No text rendered. No logo. Sound: a single soft chime
hit at second 1, then complete silence. Style: minimalist editorial title
card. Kodak 250D, vignette. Negative: text, captions, watermark, logo,
flicker, oversaturated, anime, plastic CGI, lens flare.
```

---

## Post pipeline (unchanged from `intro-video-prompt.md`)

1. Concatenate the 8 clips in order in DaVinci Resolve / Premiere / Final Cut.
2. Composite the type overlays per the schedule in the master prompt doc.
3. Layer the piano score (Max Richter "On the Nature of Daylight" reference
   at 50% intensity) over Veo's native SFX bed; replace the SFX bed entirely
   if Veo's audio is too literal.
4. Composite the "VakeelOS" wordmark + tagline onto shot 08's empty space
   in After Effects.
5. Export H.264 6 Mbps at 1920×1080 24fps to `public/hero.mp4`. Export VP9
   4 Mbps to `public/hero.webm`. Export shot 03 t=2s as `public/hero-poster.jpg`.

---

## Cost & runtime envelope

| Pipeline | Per-shot cost (approx) | 8-shot total | Notes |
|----------|------------------------|--------------|-------|
| Veo 3 Fast (Vertex AI) | ~$0.20 | ~$1.60 | First pass |
| Veo 3 Quality (Vertex AI) | ~$0.40 | ~$3.20 | Final keepers |
| Seedance v2 (FAL/Replicate) | ~$0.30 | ~$2.40 | + image-gen cost |
| Image-gen (FLUX 1.1 Pro / Imagen 4) | ~$0.04 | ~$0.32 | One batch |

Total budget for a finished cut: **under $10** if you commit on first pass,
**under $25** if you iterate twice on each shot.
