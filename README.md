# YUKI TANAKA — THE VOID

## Brand Summary
Yuki Tanaka is an international fashion model known for extreme stillness and editorial restraint. "The Void" is a digital meditation on *Ma* (間) — the profound emptiness that gives shape to the whole.

## Experience Overview
A single-page cinematic scroll experience. 90% negative space. No parallax. No scale. No rotation. Only opacity fades and the signature "Ink Dissolution" interaction. The scroll enforces contemplation.

## Design Philosophy
Minimalism as a philosophical position, not an aesthetic choice. The whitespace is not wasted space; it is the space between breaths in a meditation.

## Story Architecture
1. **Scene 00 (Loader):** Sumi brushstroke draws and fades.
2. **Scene 01 (Name):** 田中 雪 / YUKI TANAKA. Fades to a 15% ghost.
3. **Scene 02 (Prologue):** Extreme whitespace before the first image fades in.
4. **Scene 03 (Gallery):** One image per viewport. 40vh of pure white space between each.
5. **Scene 04 (Passage):** The only prose on the site. The concept of *Ma*.
6. **Scene 05 (Archive):** Text list. Hovering reveals a ghost image (0.15 opacity) behind the text.
7. **Scene 06 & 07 (Contact & End Card):** Pure utility, fading into an almost invisible final name.

## Motion Doctrine
- **Rule of Stillness:** NO parallax. NO scale. NO rotation. NO stagger.
- **The Only Motion:** Opacity fades and `clip-path` text reveals.
- **Scroll Speed:** Lenis at `lerp 0.05` on desktop. Native scroll on mobile.

## Signature Interaction
**Ink Dissolution:** As gallery images scroll out of view, they apply `blur(8px)`, drop to `0.15` opacity, and dissolve inward via a CSS mask. They fade like ink in water.

## Technical Stack
- Vanilla JS
- GSAP (ScrollTrigger)
- Lenis (Desktop only)
- Google Fonts: Noto Serif JP, DM Mono

## Folder Structure
```text
yuki-tanaka/
├── index.html
├── css/
│   ├── main.css
│   └── sections.css
├── js/
│   ├── app.js
│   ├── cursor.js
│   ├── loader.js
│   ├── hero.js
│   ├── prologue.js
│   ├── gallery.js
│   ├── passage.js
│   ├── archive.js
│   └── contact.js
└── images/
    ├── hero/
    ├── editorial/
    ├── campaign/
    └── archive/