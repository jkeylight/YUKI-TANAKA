# YUKI TANAKA — THE VOID

A cinematic, single-page editorial lookbook for Yuki Tanaka — an international fashion model known for extreme stillness and editorial restraint.

## About

*The Void* is a digital meditation on **Ma (間)** — the profound emptiness that gives shape to the whole. 90% negative space. No parallax. No scale. No rotation. Only opacity fades and the signature "Ink Dissolution" interaction. The scroll enforces contemplation.

**Photographer DNA:** Araki Nobuyoshi (intimacy + rawness) + Paolo Roversi (ethereal softness) + Daido Moriyama (grain + contrast)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/jkeylight/YUKI-TANAKA.git
   cd YUKI-TANAKA
   ```

2. **Serve locally** (required — won't work with `file://` due to CORS)
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## Features

- **Custom cursor** — black dot + ring that follows the mouse (desktop only)
- **Loading animation** — sumi-e brushstroke SVG draws and fades
- **Scroll-triggered gallery** — images fade in on scroll, dissolve out with "Ink Dissolution" effect (blur + mask)
- **Archive hover** — hovering archive items reveals ghost background images at 15% opacity
- **Smooth scrolling** — Lenis-powered smooth scroll on desktop
- **Navigation overlay** — hamburger menu with Japanese/English labels
- **Grain overlay** — subtle film grain texture across the entire site
- **Responsive** — mobile-optimized with native scroll and hidden cursor
- **Lazy loading** — all gallery and campaign images use native lazy loading

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Custom properties, grid, flexbox, transitions |
| Vanilla JavaScript | No frameworks — pure DOM manipulation |
| GSAP 3.12 | ScrollTrigger animations |
| Lenis 1.1 | Smooth scrolling (desktop) |
| Google Fonts | Noto Serif JP + DM Mono |

## Project Structure

```
YUKI-TANAKA/
├── index.html
├── README.md
├── css/
│   ├── main.css          # Reset, variables, cursor, menu, footer
│   └── sections.css      # Scene-specific styles, responsive
├── js/
│   ├── app.js            # Entry point — initializes all modules
│   ├── menu.js           # Hamburger menu toggle
│   ├── cursor.js         # Custom cursor (dot + ring)
│   ├── loader.js         # SVG brushstroke loading animation
│   ├── hero.js           # Name fade-in/fade-out
│   ├── prologue.js       # Prologue image reveal
│   ├── gallery.js        # Gallery scroll animations + Ink Dissolution
│   ├── passage.js        # Passage text animations
│   ├── archive.js        # Archive hover background reveal
│   ├── contact.js        # Contact section animations
│   └── lenis.min.js      # Lenis smooth scroll library (local)
└── images/
    ├── hero_01.jpg        # Hero section background
    ├── prologue_01.jpg    # Prologue section
    ├── gallery_01-10.jpg  # Gallery editorial images
    ├── campaign_01-04.jpg # Campaign images
    └── archive_01-08.jpg  # Archive background images
```

## Story Architecture

| Scene | Name | Description |
|-------|------|-------------|
| 00 | Loader | Sumi brushstroke draws and fades |
| 01 | Name | 田中 雪 / YUKI TANAKA — fades to 15% ghost |
| 02 | Prologue | Extreme whitespace before the first image fades in |
| 03 | Gallery | One image per viewport — 14 panels total |
| 04 | Passage | The only prose — the concept of Ma (間) |
| 05 | Archive | Text list — hover reveals ghost images |
| 06 | Contact | Bookings information |
| 07 | End Card | Final name, almost invisible |

## Design Principles

- **Minimalism as philosophy** — whitespace is not wasted; it is the space between breaths
- **Rule of Stillness** — no parallax, no scale, no rotation, no stagger
- **Ink Dissolution** — images blur and dissolve like ink in water when scrolling past
- **Sumi-e palette** — deep blacks, warm paper-white highlights, visible grain throughout

## Image Specifications

| Section | Count | Dimensions | Aspect |
|---------|-------|------------|--------|
| Hero | 1 | 1200 × 1600 | 3:4 |
| Prologue | 1 | 1000 × 1300 | 10:13 |
| Gallery | 10 | 1200 × 1600 | 3:4 |
| Campaign | 4 | 1400 × 1000 | 7:5 |
| Archive | 8 | 1200 × 900 | 4:3 |
| **Total** | **24** | | |

## Credits

- **Model:** Yuki Tanaka (fictional)
- **Studio:** A LOOKBOOK Studio Experience
- **Design:** Norman James
- **Development:** Empathy Studio

## License

© Norman James. All rights reserved.