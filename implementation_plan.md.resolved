# Implementation Plan - Scrollytelling Portfolio

## Goal
Build a high-end personal portfolio website featuring a scroll-linked image sequence animation using Next.js 14, Framer Motion, and HTML5 Canvas.

## User Review Required
> [!IMPORTANT]
> The image sequence directory contains **192 PNG files** (not 89 WebP files as mentioned in the prompt). I will use the 192 PNG files found in `/Users/sriram/Downloads/sequence`.
> I will rename these files to `frame_[index].png` (e.g., `frame_000.png`) for cleaner code handling.

## Proposed Changes

### Project Structure
- Initialize Next.js 14 app (App Router)
- Setup Tailwind CSS
- Dependencies: `framer-motion`, `clsx`, `tailwind-merge`

### Asset Management
- **Script**: Create a script to move and rename images from `/Users/sriram/Downloads/sequence` to `<project_root>/public/sequence`.

### Components

#### [NEW] [ScrollyCanvas.tsx](file:///src/components/ScrollyCanvas.tsx)
-   `canvas` element covering the viewport.
-   `useScroll` hook from Framer Motion to track scroll progress.
-   `useEffect` to preload all 192 images.
-   Render loop drawing the correct image frame to canvas based on scroll position.
-   `object-fit: cover` logic implementation for the canvas image.

#### [NEW] [Overlay.tsx](file:///src/components/Overlay.tsx)
-   Absolute positioned text layers over the canvas.
-   Framer Motion animations triggered by scroll position (parallax effect).
-   Sections:
    -   "My Name. Creative Developer."
    -   "I build digital experiences."
    -   "Bridging design and engineering."

#### [NEW] [Projects.tsx](file:///src/components/Projects.tsx)
-   Section following the scroll sequence.
-   Grid layout for project case studies.
-   Glassmorphism styling.

#### [MODIFY] [page.tsx](file:///src/app/page.tsx)
-   Composition of `ScrollyCanvas`, `Overlay`, and `Projects`.
-   Div with `500vh` height to drive the scroll animation.

#### [MODIFY] [globals.css](file:///src/app/globals.css)
-   Set global background color `#121212`.
-   Reset defaults.

## Verification Plan

### Automated Tests
-   Verify build success: `npm run build`
-   Verify lint success: `npm run lint`

### Manual Verification
-   **Scroll Smoothness**: Open local server, scroll down. Verify images scrub smoothly without flickering.
-   **Responsiveness**: Resize browser window. Verify canvas maintains `object-fit: cover` aspect ratio. Vertical/Horizontal resizing.
-   **Overlay Animation**: Verify text fades in/out at correct scroll thresholds.
-   **Performance**: Check Chrome DevTools Performance tab for frame drops during scroll.
