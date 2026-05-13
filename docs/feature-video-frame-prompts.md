# VakeelOS — Video Reference Frame Prompts

> These are **static image prompts** — one per key frame — to feed into video generators that require input images (Kling O3, Seedance v2, Happy Horse, Runway image-to-video).
>
> **Image generator:** Midjourney v6, Flux Pro 1.1, or DALL-E 3
> **Style anchor (append to every prompt):**
> `flat UI screenshot, dark mode SaaS dashboard, deep charcoal background #111111, saffron gold accent #C9962A, off-white body text #F0EDE8, clean sans-serif and monospaced fonts, 1px gold borders on active elements, 24px border-radius cards, no people, no hands, no gradients, no lens flare, photorealistic screen render, 16:9 aspect ratio`
>
> **Negative prompt (append to every prompt):**
> `no people, no hands, no courtroom, no gavel, no bokeh, no 3D, no isometric, no illustration, no cartoon, no blur, no watermark, no bright colors other than gold`
>
> **Per-video frame count guide:**
> - Kling V3 / O3 Image-to-Video: use **Frame A** (start) + **Frame B** (end)
> - Seedance v2 / Happy Horse: use **Frame A** + **Frame B** + optionally **Frame M** (mid)
> - Runway image-to-video: use **Frame A** only, describe motion in text prompt
> - Kling O3 Reference-to-Video (up to 7): use all frames provided

---

## VIDEO 01 — Hero / Product Overview

### Frame A · Cold Open
```
Dark SaaS terminal screen. Pure black background. Center of screen: two lines of monospaced text in off-white. Line 1 reads "VakeelOS · 06:30 IST" in small caps. Line 2 reads "Causelist ready · 11 matters today" — the word "ready" is rendered in saffron gold (#C9962A). A thin blinking vertical cursor in saffron gold sits at the end of line 2. No other UI elements. Minimal, stark.
```

### Frame M · Dashboard State
```
Full SaaS dashboard. Three-column layout on deep charcoal. Left column: a calendar heatmap with today's date cell highlighted in saffron gold, surrounded by dimmer date cells in warm gray. Center column: a vertical list of 5 case rows — each row has a case number in monospaced font on the left, a short case title in off-white, and a small court tag chip (rounded pill, 1px gold border). Right column: a donut chart labeled "Fees collected this month" — the arc is 72% filled in saffron gold on a dark track. Below the chart: the number "72%" in large gold text. All panel borders are 1px warm gray lines. Top navigation bar: slim, dark, with "VakeelOS" wordmark at left in gold.
```

### Frame B · Logo Lock-up
```
Pure black screen. Center of frame: a stylized letter "V" glyph in saffron gold, geometric and minimal, approximately 80px tall. Below the glyph, in small monospaced off-white text: "Practice management for the Indian bar". No other elements. Generous negative space above and below.
```

---

## VIDEO 02 — Causelist Sync

### Frame A · Empty Causelist
```
Dark SaaS list view. Full-width panel on charcoal background. Top of frame: a slim status bar with text "Tuesday · 06:30 IST" in monospaced off-white. To the right of "06:30 IST": a small circle dot in saffron gold with a faint pulse ring around it. Below the status bar: a list container with column header row in dim gray text — columns read "# · CASE · COURT · STATUS" in small uppercase monospaced font. The list body is completely empty — just the charcoal background below the headers. No rows. Waiting state.
```

### Frame M · Cases Streaming In (Mid)
```
Dark SaaS causelist. Same layout as Frame A but now 6 case rows have appeared in the list body. Each row: left side has a monospaced case number like "MHC-OS-14471", center has a case title in off-white like "M/s Reddy Enterprises v. Union of India", right side has a court tag chip with rounded corners and text "Madras HC" in saffron-tinted text, and a status badge pill — most show "NEW" in saffron gold text on a dark gold-bordered pill. Row 4 shows "CONFLICT" in amber (#F59E0B) text on an amber-bordered pill. That row has a very faint amber background tint. Top-right shows a row counter: "6 / 11" in small monospaced gray text.
```

### Frame B · Synced State
```
Dark SaaS causelist. 11 case rows fully populated. Three of the rows have a gold checkbox on the far left — a filled square with a white checkmark, saffron gold fill. Those three rows have a slightly elevated appearance (brighter background, 1px top highlight). At the bottom of the screen: a floating pill button centered, reading "SCHEDULE HEARINGS (3)" — dark background, 1px saffron gold border, gold text. At the very top of the screen, just above the status bar: a slim toast notification sliding in, dark panel with text "Causelist synced · 3 matters added to calendar" and a small green check icon on the left.
```

---

## VIDEO 03 — VakeelBrain AI Drafter

### Frame A · Template Selection
```
Split-screen SaaS UI. Left panel (30% width): a case summary card on dark charcoal. Card content: "Case #MHC-2024-4471" in small monospaced gold, "Rajan v. State of Tamil Nadu" in off-white heading text, "Last order: 14 Nov 2024" in gray. Below the card: a template selector showing 7 rounded pill buttons arranged in a 2-column grid — labels: "Legal Notice", "Bail Application", "Writ Petition", "Plaint", "Vakalatnama", "Written Statement", "Reply". The "Legal Notice" pill is selected: filled saffron gold background, dark text. All others: dark background, gray text, subtle border. Right panel (70% width): a completely blank dark editor. A thin vertical blinking cursor in saffron gold sits at the top-left of the editor area. No text yet. A slim toolbar at top of editor: "Untitled Document" in dim gray.
```

### Frame M · Document Mid-Generation
```
Split-screen SaaS UI. Left panel unchanged from Frame A. Right panel: a dark editor now showing a document in progress. Top line: "LEGAL NOTICE" in all-caps bold off-white, large size. Below the heading: two full paragraphs of monospaced body text in warm off-white, streaming left-to-right. The text is dense, justified left. In the middle of the second paragraph: two inline citation chips — small rounded rectangles with gold background fill and dark text, containing "[AIR 1997 SC 734]" and "[Section 80 CPC]". A blinking gold cursor sits at the end of the last typed character. The text cuts off mid-sentence — generation is still in progress.
```

### Frame B · Export Ready
```
Split-screen SaaS UI. Left panel unchanged. Right panel: editor now fully populated — three complete paragraphs of monospaced legal text, two gold citation chips inline. At the bottom-right corner: a subtle shimmer line (very faint gold horizontal line at 30% opacity) just finishing its animation. A toolbar has appeared above the editor area with three buttons: "Edit" (gray outlined), "Export .docx" (saffron gold border, gold text, slightly highlighted), "Send to client" (gray outlined). At the very bottom of the screen: a notification bar sliding in from below — dark background, text "legal_notice_rajan_v_state.docx · Ready", a small blue file icon on the left.
```

---

## VIDEO 04 — Intelligence Dashboard

### Frame A · Morning Greeting
```
Dark SaaS screen. Near-black background. Center of screen, left-aligned within a max-width container: three lines of text appearing with stagger. Line 1 (large, off-white): "Good morning, Advocate Sharma". Line 2 (medium, warm gray): "Tuesday, 19 Nov". Line 3: three bullet points in a row — "4 hearings today" (off-white), "2 overdues" (amber), "1 conflict flagged" (amber with a small amber dot bullet). The conflict bullet has a slightly stronger amber glow. No panels visible yet — just text on dark background.
```

### Frame M · Dashboard Assembled
```
Full SaaS dashboard. Three panels on charcoal background, arranged horizontally. Left panel: "TODAY'S HEARINGS" header in small gold monospaced caps. Below: 4 hearing rows — each shows a time ("09:30", "11:00", "14:30", "16:00") in saffron gold on the left, a court name in off-white on the right ("Madras HC Room 4", "City Civil Court"). Center panel: "OVERNIGHT ALERTS" header in amber. Below: 2 alert items in amber-tinted text with small warning triangle icons. Right panel: "TASKS DUE" header in off-white. Below: 3 task rows — first two have gold checkboxes (checked), third has a red left-border highlight indicating overdue. A conflict resolution card is appearing below the center panel — a dark card with text "Hearing conflict · 09:30 vs 09:45 · Suggest: reschedule City Civil to 11:30" and a "RESOLVE" gold pill button.
```

### Frame B · Clean State
```
Full SaaS dashboard. Same three-panel layout. All panels now populated and calm. No amber or red indicators — all cleared. Left panel: 4 hearing rows, all off-white. Center panel: "OVERNIGHT ALERTS" header, 2 items now showing as resolved (dim gray with strikethrough). Right panel: all 3 tasks checked with gold checkboxes. Bottom of screen: a single monospaced line in dim gray: "auto-generated at 06:30 IST · 0 clicks". The top summary line now reads "4 hearings today · 0 overdues · 0 conflicts" — all in off-white.
```

---

## VIDEO 05 — Net Invoicing + UPI

### Frame A · Time Entries
```
Dark SaaS screen. Center-aligned panel. A slim list of 3 time-entry rows at the top of the panel — each row shows: a date ("19 Nov"), a matter name ("Rajan v. State"), and a duration ("2.5 hrs") in monospaced text. The rows are separated by 1px gray lines. Below the list: a horizontal divider. Below that: a large pill button centered, reading "DRAFT INVOICE" — saffron gold background, dark text, 24px border-radius. The button has a very subtle gold glow behind it.
```

### Frame M · Invoice Building
```
Dark SaaS screen. Centered invoice card, large, occupying 60% of screen width. The card has: a firm letterhead at top — a monogram circle in gold on the left, "Sharma & Associates" in off-white next to it. Below: two-column detail rows — "Client:" / "M/s Reddy Enterprises" and "Matter:" / "TN HC Writ · 2024" in gray/white pairs. A divider line. Below: three line item rows sliding in from left — "Appearance fees", "Drafting — Writ Petition", "Filing charges" — each with an amount on the right in off-white. A subtotal row in gray. A total row in large bold saffron gold: "₹42,000". The total number is the visual focal point. Status pill top-right of card: "PENDING" in gray text, gray border.
```

### Frame B · Paid State
```
Dark SaaS screen. Same invoice card. QR code block has faded in below the total — an abstract pixelated square pattern in off-white on a slightly lighter dark background, labeled "UPI · pay@vakeelostest" in small monospaced gray below it. Status pill top-right: now reads "PAID" — saffron gold text, gold border, very faint gold background tint. Four tiny gold dot particles are visible just above the status pill, mid-float, at varying heights (particle burst caught mid-animation). The "₹42,000" text has a faint gold glow around it. Bottom of card: small text "Payment received · Razorpay UPI · 19 Nov 18:42" in dim monospaced gray.
```

---

## VIDEO 06 — Court Order Vault

### Frame A · Fetching Order
```
Dark document-reader UI. A centered panel, 70% of screen width, 80% of screen height. Panel header: "MHC-OS-14471-2024 · Rajan v. State" in off-white, with a small court seal icon in dim gold on the left. Below the header: a thin progress bar spanning the full width of the panel — the bar is saffron gold, approximately 85% filled, with the text "Fetching order from court portal…" in small monospaced gray above it. Below the progress bar: the PDF viewer body — showing a blurred, abstracted document image (faint text shapes, paragraph blocks, court header area visible but unreadable, like a soft-focused photograph of a legal document). No sidebar yet.
```

### Frame M · AI Reading
```
Dark document-reader UI. Same centered PDF panel, now fully loaded (progress bar gone). PDF still blurred/abstracted. From the right edge, a sidebar panel has slid in, occupying 30% of the screen width. Sidebar header: "VakeelBrain" in small saffron gold monospaced text. Below: "Analysing order…" in dim gray with a soft three-dot animation indicator. Below that: two bullet points have already appeared — "Result: Petition admitted" and "Interim relief: Status quo granted" — each with a small saffron gold square bullet on the left, monospaced cream text. The other two bullets are not yet visible.
```

### Frame B · Analysis Complete
```
Dark document-reader UI. Same layout. Sidebar now fully populated with all 4 bullet points in monospaced cream text, each with a gold square bullet:
• Result: Petition admitted
• Interim relief: Status quo granted
• Directions: Respondent to file counter in 4 weeks
• Next date: 16 Jan 2025
The "Analysing order…" text is gone, replaced by "Analysis complete" in dim gray. At the very top of the screen: a slim notification chip — "Next hearing added · 16 Jan 2025 · MHC Room 7" with a tiny mini calendar icon on the left showing a gold-highlighted date cell. At the bottom of the main panel: monospaced text "VakeelBrain · 0 manual steps" in dim gray.
```

---

## VIDEO 07 — Workflow Overview (The Full Tuesday)

*This video has 4 acts. Provide all 5 frames as reference images for models supporting up to 7 inputs (Kling O3 Reference-to-Video, Happy Horse).*

### Frame A · Act I — Sync (06:30)
```
Dark SaaS causelist view. Status bar top: "Madras HC · Causelist ready" in off-white monospaced, a saffron gold pulsing dot on the right. Five case rows in the list — each with a case number, title, and a "NEW" gold badge. Top-right: timestamp "06:30" in large monospaced gold. One row at the bottom has a gold checkbox checked. Below the list: a single word "Synced" in small monospaced gold, bottom center.
```

### Frame B · Act II — Brief (09:14)
```
Dark SaaS case detail view. Header: case name and CNR number in off-white. Main panel: a blurred abstract PDF document (court order) in a centered viewer, unreadable but visually dense. Right sidebar: VakeelBrain panel with 4 gold bullet points in monospaced cream — "Result", "Interim relief", "Directions", "Next date" entries. Top-right timestamp: "09:14" in large monospaced gold. Bottom center: "Briefed in 40 seconds" in small monospaced gray.
```

### Frame C · Act III — Draft (14:02)
```
Dark SaaS full-screen editor. Heading "LEGAL NOTICE" in bold all-caps off-white at the top. Three paragraphs of dense monospaced body text below, nearly filling the editor. Two inline gold citation chips embedded mid-paragraph. Bottom-right corner: a small file icon with ".docx" label in a notification chip. Top-right timestamp: "14:02" in large monospaced gold. Bottom center: "Drafted in 2 minutes" in small monospaced gray.
```

### Frame D · Act IV — Bill (18:45)
```
Dark SaaS screen. Centered invoice card with "₹42,000" in very large saffron gold text as the dominant visual. Status pill in top-right of card: "PAID" in gold. An abstract UPI QR square below the amount. Four tiny gold particles mid-float above the status pill. Top-right timestamp: "18:45" in large monospaced gold. Bottom center: "Paid within 24 hours" in small monospaced gray.
```

### Frame E · Outro / Loop Point
```
Pure black screen. Center of frame: white monospaced text reading "Tuesday. Done." — large, confident, centered. Below it, smaller monospaced text: "VakeelOS" in saffron gold. Generous negative space. Minimal. No other elements.
```

---

## Quick Reference — Frame Map by Model

| Video | Kling V3 / O3 (2 frames) | Seedance / Happy Horse (3 frames) | Kling Reference (up to 7) |
|---|---|---|---|
| 01 Hero | A + B | A + M + B | A + M + B |
| 02 Causelist | A + B | A + M + B | A + M + B |
| 03 Drafter | A + B | A + M + B | A + M + B |
| 04 Dashboard | A + B | A + M + B | A + M + B |
| 05 Invoicing | A + B | A + M + B | A + M + B |
| 06 Orders | A + B | A + M + B | A + M + B |
| 07 Workflow | A + E | A + C + E | A + B + C + D + E |
