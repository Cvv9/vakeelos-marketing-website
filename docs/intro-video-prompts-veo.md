# Veo 3 prompts — VakeelOS intro film

Text-to-video, native audio, 8 s max per clip. Eight shots × 6 s = 48 s total.
Paste each block verbatim into Veo 3 (Vertex AI). One render = one shot. No
reference frames required (Veo 3 has no seed control — consistency comes from
keeping the master-look paragraph byte-identical across shots).

For the matching reference-frame stills (Seedance pipeline) see
`intro-video-prompts-images.md`. For the Seedance motion prompts see
`intro-video-prompts-seedance.md`.

---

## Aesthetic lock — baked into every prompt below

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

**Universal negatives (reinforced in each prompt's negative line):** cartoon,
CGI plastic, anime, oversaturated, vlog, social-media cuts, courtroom-drama
tropes, wig-and-gown American/British costume, Lady Justice statue, gavel,
scales, American flag, golden glow, lens flares, dutch tilts, shaky cam, fast
zoom, captions, watermarks, signage with readable text, faces clearly
identifiable.

---

## Shot 01 — Cold open: the file (6 s)

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

## Post pipeline

1. Concatenate the 8 clips in order in DaVinci Resolve / Premiere / Final Cut.
2. Composite the type overlays per the schedule in `intro-video-prompt.md`.
3. Layer the piano score (Max Richter "On the Nature of Daylight" reference
   at 50 % intensity) over Veo's native SFX bed; replace the SFX bed entirely
   if Veo's audio is too literal.
4. Composite the "VakeelOS" wordmark + tagline onto shot 08's empty space
   in After Effects.
5. Export H.264 6 Mbps at 1920×1080 24fps to `public/hero.mp4`. Export VP9
   4 Mbps to `public/hero.webm`. Export shot 03 t = 2s as
   `public/hero-poster.jpg`.

---

## Cost & runtime

| Tier | Per shot | 8-shot total | Notes |
|------|----------|--------------|-------|
| Veo 3 Fast (Vertex AI) | ~$0.20 | ~$1.60 | First pass / dailies |
| Veo 3 Quality (Vertex AI) | ~$0.40 | ~$3.20 | Final keepers |

Lock shot 01 first. Reuse the master-look paragraph byte-identical across
shots 02–08 — that is the only consistency lever Veo 3 gives you.
