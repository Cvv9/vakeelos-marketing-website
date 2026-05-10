# About-section centerpiece — Red-string file (loop)

Standalone looping asset for the about section's left column. Visual rhyme with
intro-film Shot 01 (same manila-and-red-string vocabulary), but extended to a
seamless 8-second loop where the file fans open and closes back. Reuses the
same aesthetic lock so the intro and the about section feel like one world.

**Aspect:** 3:4 vertical (about-section column shape).
**Length:** 8 s, designed to loop seamlessly (start frame = end frame).
**Output paths:** `/public/about-file.mp4` (H.264 6 Mbps) +
`/public/about-file-poster.jpg` (frame 0).

For pipeline-by-tool prompts of the intro film see
`intro-video-prompts-veo.md`, `intro-video-prompts-seedance.md`,
`intro-video-prompts-images.md`.

---

## Aesthetic lock — identical to intro film

> 16:9 anamorphic 35 mm look, cropped to 3:4 vertical for this asset. Arri
> Alexa + Cooke S4 lenses. Kodak 250D film emulation. 16 mm grain density.
> Soft halation in highlights. Palette: warm off-white #FBF8F0 and aged-cream
> #F4F0E2 against deep ink-blue #0E1626. Saffron / terracotta #9F4E15 only on
> the cotton string itself. Low contrast. No harsh sun. No neon.

---

## Image-gen prompt (Seedance v2 reference frame · also use as poster)

Generate in the same batch as the intro-film stills with the same seed for
look continuity.

```
Cinematic still, three-quarter macro angle, 100mm lens at f/3.5, composed
for vertical 3:4 crop. A brown manila legal case file tied with a red
cotton string on an aged wooden desk, partially fanned open — about eight
sheets of cause-paper visible spreading like a deck of cards, monospaced
Indian-court case-number typography illegible. Soft warm window light from
upper left. A brass desk lamp at frame edge casts a single warm pool of
light. Background falls off into deep ink-blue #0E1626. Foreground bathed
in warm aged-cream #F4F0E2. Kodak 250D film emulation, 16mm grain, soft
halation. No people, no faces, no legible text. Editorial photography
style. Loose composition with breathing room around the file.
```

---

## Seedance v2 motion prompt

```
Camera: locked-off three-quarter angle with a 1cm slow push-in over 8
seconds. Motion: from second 0 to 1, the manila file sits closed with the
red string tied tight. From second 1 to 5, the red string slips loose and
the file fans open into a deck of paper sheets — slow, deliberate, no
overshoot, finishing fully fanned by second 5. From second 5 to 7, very
subtle drift — the topmost sheet rocks 2 degrees in the warm light. From
second 7 to 8, the file closes back to its starting state, ending exactly
where it began so the clip loops seamlessly. 24fps. 3:4 vertical.
```

**Loop integrity check:** before exporting, scrub the last frame and the
first frame side by side. They must match within a few pixels — if they
drift, re-render with the closing motion held longer. A 1 s crossfade at
the loop point in After Effects is the safety net.

---

## Veo 3 single prompt

```
Cinematic 35mm anamorphic, 8-second locked-off shot, 24fps, 3:4 vertical
crop. Three-quarter macro angle on an aged wooden desk. A brown manila
legal case file tied with a red cotton string sits closed at second 0.
Camera does a 1cm slow push-in across the full duration. From second 1 to
5, the red string slips loose and the file fans open into a deck of paper
sheets — Indian causelist printouts with illegible monospaced case numbers
— slow, deliberate, no overshoot. From second 5 to 7, the topmost sheet
rocks 2 degrees in warm light. From second 7 to 8, the file closes back to
its starting state so the clip loops seamlessly. Soft warm window light
from upper left. Brass desk lamp pool at frame edge. Background falls to
deep ink-blue #0E1626. Kodak 250D, 16mm grain, halation. Sound: soft paper
rustle, faint ceiling fan whir, a single subtle thread-slip click at
second 1. No music. No people. No legible text. Negative: gavel, Lady
Justice, scales, courtroom drama, lens flare, shaky cam, drone,
oversaturated, anime, plastic CGI, fast motion.
```

---

## Cost & runtime

| Pipeline | Cost | Notes |
|----------|------|-------|
| Veo 3 Quality (Vertex AI) | ~$0.40 | Single 8 s shot |
| Seedance v2 (FAL / Replicate) | ~$0.30 | + ~$0.04 image-gen |
| Loop polish in AE / Resolve | — | 1 s crossfade if loop drifts |

Pick **Veo 3** if you want native paper-rustle + thread-slip SFX baked in
(strip them later if they clash with the score). Pick **Seedance v2** if
you want maximum visual continuity with the intro stills batch — feeding
in the same-seed reference frame is the strongest possible look-match.
