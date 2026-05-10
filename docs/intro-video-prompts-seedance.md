# Seedance v2 motion prompts — VakeelOS intro film

Image-to-video. **Each shot requires a reference frame** generated from
`intro-video-prompts-images.md`. Generate all 8 reference frames in one batch
with one seed so they share lighting and lens character — that is your single
biggest consistency lever. Then feed each still + the matching motion prompt
below into Seedance v2 (FAL / Replicate).

Eight shots × 6 s = 48 s total. For the text-to-video alternative see
`intro-video-prompts-veo.md`.

---

## Aesthetic lock — already encoded into the reference frames

> 16:9 anamorphic 35 mm look. Arri Alexa + Cooke S4 lenses. Kodak 250D film
> emulation. 16 mm grain density. Soft halation in highlights. Palette: warm
> off-white #FBF8F0 and aged-cream #F4F0E2 against deep ink-blue #0E1626. One
> accent only — deep saffron / terracotta #9F4E15, used sparingly. Low
> contrast. No harsh sun. No neon. No digital glow.

**Camera language:** slow push-ins, gentle parallax, motion-controlled rigs,
locked-off macros. Never handheld. Never whip-pans. Never drone.

The motion prompts below describe **animation only** — Seedance reads the
visual style from the reference still, so do not re-describe the look in the
motion prompt. Keep motion prompts focused on camera movement, subject
movement, timing, and pacing.

---

## Shot 01 — Cold open: the file (6 s)

```
Camera: locked-off, then a 4cm slow dolly push-in over 6 seconds. Motion:
the red string slowly, gently unwinds — one revolution unspooling across
the duration. Dust motes drift through the shaft of light. The wood grain
catches a single highlight as the camera moves. No human entry. Contemplative
pacing. No cuts. 24fps. 16:9.
```

---

## Shot 02 — The cause-paper (6 s)

```
Camera: top-down locked, then 1cm slow dolly-in over 6 seconds. Motion: a
hand wearing a black sleeve with thin white bands enters frame from the
right at second 2, briefly hovers near the pen for one beat, then exits
right by second 4. The pen does not move. The paper holds steady. No face.
Contemplative pacing. 24fps. 16:9.
```

---

## Shot 03 — The chamber wide (6 s)

```
Camera: locked-off, completely static for the full 6 seconds. Motion: only
the ceiling fan turns, one slow rotation over 6 seconds. Light shifts almost
imperceptibly warmer. Dust drifts. No people enter. The chamber breathes.
Almost a photograph. 24fps. 16:9.
```

---

## Shot 04 — Causelist on screen, abstract 3D (6 s)

```
Camera: locked-off three-quarter angle. Motion: the stack of paper sheets
fans open like a deck of cards from second 0 to second 4, each sheet rotating
out 8 degrees from the next. The fanned stack then rotates slowly along its
vertical axis over the final 2 seconds. The saffron underline animates in
on second 5. Lighting holds. Mechanical, deliberate, slow. No physics
overshoot. 24fps. 16:9.
```

---

## Shot 05 — High court colonnade (6 s)

```
Camera: slow horizontal tracking shot moving left-to-right at constant
velocity over 6 seconds, sliding past the sandstone columns. Motion: the
blurred clerk in the background continues walking left at a slow pace.
Pigeons fly out of frame top-right at second 4. Long shadows shift
imperceptibly. Smooth motion-controlled rig feel. No handheld. 24fps. 16:9.
```

---

## Shot 06 — Hands typing (6 s)

```
Camera: locked-off tight overhead behind shoulder. Motion: hands type slowly
on the laptop — about 6 keystrokes total over the first 4 seconds, then a
1.5 second pause, then 2 final keystrokes at the end. Subtle natural micro-
movement of the wrists. The laptop screen glow flickers very faintly. The
brass paperweight catches one highlight as the hands move. No camera
movement. 24fps. 16:9.
```

---

## Shot 07 — Abstract drift: orders & invoices (6 s)

```
Camera: locked-off, very slight 1cm dolly-in over 6 seconds. Motion: the
three floating sheets — court order, hearing notice, invoice — slowly
rotate to align themselves into a single neat vertical stack centered in
frame, finishing alignment by second 4. From second 4 to second 6, a
saffron #9F4E15 hairline rule animates in along the bottom edge of the
stack, drawing left to right. Movement is slow, mechanical, deliberate,
no overshoot. 24fps. 16:9.
```

---

## Shot 08 — Wordmark resolve (6 s) — first-frame + last-frame mode

This shot uses **two reference frames** (first-frame and last-frame). If
your Seedance v2 endpoint supports first/last keyframe mode, supply both
stills from `intro-video-prompts-images.md` Shot 08. If not, supply the
last-frame still and let the motion prompt drive the build-on.

```
Camera: completely locked-off for the full 6 seconds. Motion: from second 0
to second 1, the small saffron #9F4E15 square fades in at upper-left. From
second 1 to second 3, the horizontal hairline rule draws itself across the
frame from left to right. From second 3 to second 6, hold completely still
on the final composition. No other movement. No text appears. 24fps. 16:9.
```

---

## Cost & runtime

Seedance v2 (FAL / Replicate): ~$0.30 per 6 s shot · 8 shots = ~$2.40.
Add image-gen for the 8 reference frames (~$0.32 batch — see images doc).
Total Seedance pipeline: **under $3 plus image-gen**.

Iterate on the reference frame, not the motion prompt — re-rolling motion
without changing the still wastes credit on the same look.
