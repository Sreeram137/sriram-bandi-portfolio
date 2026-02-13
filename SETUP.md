# Project Setup Instructions

Since the automated environment could not execute `npm install` directly, please follow these steps to run your Scrollytelling Portfolio locally.

## 1. Prerequisites
Ensure you have Node.js 18+ installed.
Check by running:
```bash
node -v
```
If not installed, download it from [nodejs.org](https://nodejs.org/).

## 2. Install Dependencies
Open your terminal in the project root directory and run:
```bash
npm install
```
This will install Next.js, React, Framer Motion, and Tailwind CSS.

## 3. Run Development Server
Start the local development server:
```bash
npm run dev
```

## 4. View Project
Open your browser to:
[http://localhost:3000](http://localhost:3000)

## Troubleshooting
- **Missing Images**: Ensure the `public/sequence` folder contains `frame_000.png` through `frame_191.png`.
- **Canvas Issues**: If the canvas is blank, check the browser console for any image loading errors. The application validates that images exist in `public/sequence/`.

## Project Structure
- `app/page.tsx`: Main entry point.
- `components/ScrollyCanvas.tsx`: Core scrolling logic using Canvas + Framer Motion.
- `components/Overlay.tsx`: Parallax text animations.
- `components/Projects.tsx`: Projects grid.
