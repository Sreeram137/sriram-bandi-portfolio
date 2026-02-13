"use client";

import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 192; // Total frames found
const IMAGES_PATH = "/sequence/frame_";
const PADDING = 3;

export default function ScrollyCanvas({ onLoadComplete }: { onLoadComplete?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Use scroll progress from the window
  const { scrollYProgress } = useScroll();

  // Map scroll progress 0..1 to frame index 0..FRAME_COUNT-1
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let canceled = false;

    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises: Promise<void>[] = [];

      for (let i = 0; i < FRAME_COUNT; i++) {
        const promise = new Promise<void>((resolve, reject) => {
          const img = new Image();
          const indexStr = i.toString().padStart(PADDING, "0");
          img.src = `${IMAGES_PATH}${indexStr}.png`;
          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };
          img.onerror = (e) => {
            console.error(`Failed to load image ${i}`, e);
            resolve(); // Don't block
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);

      if (!canceled) {
        setImages(loadedImages);
        setIsLoaded(true);
        if (onLoadComplete) onLoadComplete();
      }
    };

    loadImages();

    return () => {
      canceled = true;
    };
  }, [onLoadComplete]);

  // Render logic
  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    // Optimize with alpha: false and desynchronized
    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    // HiDPI Scaling
    const dpr = window.devicePixelRatio || 1;
    // Set physical dimensions to match resolution
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    // Scale context to match logical pixels
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Initial draw
    const index = Math.min(Math.round(frameIndex.get()), FRAME_COUNT - 1);
    drawFrame(index);

    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;

        const ctx = canvasRef.current.getContext("2d", { alpha: false, desynchronized: true });
        if (ctx) {
          ctx.scale(dpr, dpr);
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
        }

        drawFrame(Math.min(Math.round(frameIndex.get()), FRAME_COUNT - 1));
      }
    };

    window.addEventListener("resize", handleResize);
    // handleResize(); // Already set up initial size above

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded]);

  // Subscribe to updates for smooth animation
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isLoaded) return;
    const index = Math.min(Math.round(latest), FRAME_COUNT - 1);
    requestAnimationFrame(() => drawFrame(index));
  });

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ensure smoothing is always on
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const img = images[index];

    // Logical dimensions for drawing (since we scaled the context)
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    // Crop Zoom Factor (to remove watermark)
    const ZOOM = 1.05;

    if (canvasRatio > imgRatio) {
      drawWidth = canvasWidth * ZOOM;
      drawHeight = (canvasWidth / imgRatio) * ZOOM;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = (canvasHeight * imgRatio) * ZOOM;
      drawHeight = canvasHeight * ZOOM;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    // Clear using logical dimensions
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50 z-50">
          <p className="animate-pulse">Loading Experience...</p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover"
        style={{ imageRendering: "auto" }} // 'high-quality' isn't a standard CSS keyword for image-rendering, 'auto' or 'pixelated' or 'crisp-edges'. Browser default (auto) is usually best for smoothing. 'high-quality' is a canvas context prop.
      />
    </div>
  );
}
