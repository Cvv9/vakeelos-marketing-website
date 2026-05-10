# Image-gen prompts — VakeelOS intro film reference frames

Stills used as reference frames for Seedance v2 (image-to-video). Compatible
with **FLUX 1.1 Pro · Imagen 4 · Midjourney v7 · Nano Banana**. Each prompt
produces one frame; Shot 08 produces two (first-frame + last-frame).

For the matching Seedance v2 motion prompts see
`intro-video-prompts-seedance.md`. For text-to-video (no reference frame
required) see `intro-video-prompts-veo.md`.

---

## Aesthetic lock — paste this once, every prompt assumes it

> 16:9 anamorphic 35 mm look. Arri Alexa + Cooke S4 lenses. Kodak 250D film
> emulation. 16 mm grain density. Soft halation in highlights. Palette: warm
> off-white #FBF8F0 and aged-cream #F4F0E2 against deep ink-blue #0E1626. One
> accent only — deep saffron / terracotta #9F4E15, used sparingly. Low
> contrast. No harsh sun. No neon. No digital glow.

**Subject vocabulary:** Indian advocate's chamber and a high court interior.
Wood, brass, red string-tied case files, fountain pen, cause-paper, advocate's
black coat with thin white bands, stacks of bound All India Reporter volumes,
brass nameplate, brass desk lamp.

**Universal negatives:** cartoon, CGI plastic, anime, oversaturated, vlog,
courtroom-drama tropes, Lady Justice statue, gavel, scales, American flag,
lens flares, captions, watermarks, signage with readable text, faces clearly
identifiable.

---

## Consistency strategy

1. **One batch, one seed.** Generate all 8 (9 with shot 08's pair) frames in
   a single session, locking the seed if your model supports it (`--seed` in
   FLUX/Imagen, session-pin in MJ v7). This is the strongest possible look-
   match across stills.
2. **Lock shot 01 first.** Render shot 01, decide grain / palette / halation
   feel right, then run shots 02–08 with the same look modifiers.
3. **Don't paraphrase.** Re-use phrasing like "Kodak 250D, 16mm grain,
   halation" verbatim — the model picks up on exact wording.
4. **Aspect ratio:** force 16:9. Crop at export if needed; never let the
   model decide.

---

## Shot 01 — Cold open: the file

```
Cinematic still, extreme close-up macro, very shallow depth of field, 100mm
lens at f/2.8. A red cotton string tied around a brown manila legal case
file on an aged wooden desk. The string is loose, beginning to unspool. Dust
motes suspended in a single shaft of warm window light cutting diagonally
across frame. Background goes to soft ink-blue #0E1626 fall-off. Foreground
bathed in warm aged-cream #F4F0E2. Kodak 250D film emulation, 16mm grain,
soft halation. No people, no text. Editorial photography style.
```

---

## Shot 02 — The cause-paper

```
Cinematic still, top-down overhead macro, 60mm lens at f/4. A black fountain
pen with a steel nib resting on a printed Indian court causelist page. The
paper is faintly off-white #FBF8F0, the typography small, formal,
monospaced, listing case numbers and party names (illegible blur). The pen's
nib catches a single highlight. Soft warm window light from upper left. Aged
wooden desk just visible at frame edge. Kodak 250D, 16mm grain, halation. No
hands in frame. No legible text. Editorial photography.
```

---

## Shot 03 — The chamber wide

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

---

## Shot 04 — Causelist on screen, abstract 3D

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

---

## Shot 05 — High court colonnade

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

---

## Shot 06 — Hands typing

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

---

## Shot 07 — Abstract drift: orders & invoices

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

---

## Shot 08 — Wordmark resolve · first frame + last frame

Generate both. Feed both into Seedance v2 if first/last keyframe mode is
available; otherwise use the last-frame still alone.

### First-frame reference

```
Cinematic still, completely empty composition. Pure deep ink-blue #0E1626
background filling the entire frame. Subtle 16mm grain texture. Slight
vignette. No subject, no text, no objects. Style: minimalist editorial
title card. Kodak 250D processing.
```

### Last-frame reference

```
Cinematic still, minimalist editorial title card. Pure deep ink-blue
#0E1626 background. In the upper-left, a single small saffron #9F4E15
square approximately 4mm wide. A long horizontal hairline rule (1px) in
warm off-white #FBF8F0 drawn fully across the frame at roughly 60% height.
Wide empty negative space below the rule. Subtle 16mm grain. Slight
vignette. No text, no logo, no other elements — just the square, the rule,
and empty space. Kodak 250D processing.
```

---

## Cost

Image-gen (FLUX 1.1 Pro / Imagen 4): ~$0.04 per still × 9 frames ≈ **$0.36**
for the full reference set. Run as one batch.
