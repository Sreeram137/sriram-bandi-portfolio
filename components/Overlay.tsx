"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1: "My Name. Creative Developer."
  // Visible from 0.05 to 0.2
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [50, -50]);

  // Section 2: "I build digital experiences."
  // Visible from 0.35 to 0.55
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.3, 0.6], [-50, 0]);

  // Section 3: "Bridging design and engineering."
  // Visible from 0.65 to 0.85
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.6, 0.95], [50, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center">

      {/* --- DESKTOP SCROLL ANIMATION (Hidden on Mobile) --- */}
      <div className="hidden md:block w-full h-full relative">
        {/* Section 1 - Centered */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-8xl font-bold tracking-tighter text-white mix-blend-difference">
              SRIRAM BANDI
            </h1>
            <p className="text-2xl font-light text-gray-300 mt-4 tracking-widest uppercase">
              Software Engineer
            </p>
          </div>
        </motion.div>

        {/* Section 2 - Left Aligned */}
        <motion.div
          style={{ opacity: opacity2, x: x2 }}
          className="absolute inset-0 flex items-center justify-start px-20"
        >
          <div className="max-w-2xl">
            <h2 className="text-6xl font-bold leading-tight text-white/90">
              Building scalable <span className="text-indigo-400">full stack systems</span>.
            </h2>
          </div>
        </motion.div>

        {/* Section 3 - Right Aligned */}
        <motion.div
          style={{ opacity: opacity3, x: x3 }}
          className="absolute inset-0 flex items-center justify-end px-20"
        >
          <div className="max-w-2xl text-right">
            <h2 className="text-6xl font-bold leading-tight text-white/90">
              Optimizing <span className="text-purple-400">performance</span> <br />
              and cloud architecture.
            </h2>
          </div>
        </motion.div>
      </div>

      {/* --- MOBILE STATIC LAYOUT (Visible on Mobile Only) --- */}
      <div className="md:hidden flex flex-col items-center justify-center h-full px-6 text-center space-y-6 bg-black/30 backdrop-blur-[2px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold tracking-tighter text-white mb-2">
            SRIRAM BANDI
          </h1>
          <p className="text-lg font-light text-gray-300 tracking-widest uppercase mb-6">
            Software Engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold leading-tight text-white/90">
            Building scalable <span className="text-indigo-400">full stack systems</span>.
          </h2>
          <h2 className="text-xl font-medium text-gray-400">
            Optimizing <span className="text-purple-400">performance</span> & cloud architecture.
          </h2>
        </motion.div>
      </div>

    </div>
  );
}
