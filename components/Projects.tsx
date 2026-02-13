"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

const projects = [
  {
    title: "Distributed URL Shortener",
    category: "System Design / AWS",
    description: "Scalable web infrastructure handling 10K+ daily requests using Redis caching, Nginx load balancing, and REST APIs. Added validation and analytics.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "PINTOS OS Enhancements",
    category: "Operating Systems / C",
    description: "Implemented multi-level priority scheduling and priority donation, improving CPU efficiency by 20% and reducing context-switch latency by 15%.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Collision Detection System",
    category: "AI / Computer Vision",
    description: "Real-time vehicle detection pipeline using TensorFlow + OpenCV with 95% precision. Reduced false positives by 40%.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop"
  },
  {
    title: "Electricity Load Forecasting",
    category: "Data Science / Python",
    description: "Created regression models for energy demand prediction with 90% accuracy. Visualized data for optimization insights.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    const xPos = clientX - left;
    const yPos = clientY - top;
    x.set(xPos);
    y.set(yPos);
    currentTarget.style.setProperty("--mouse-x", `${xPos}px`);
    currentTarget.style.setProperty("--mouse-y", `${yPos}px`);
  }

  const rotateX = useTransform(mouseY, [0, 400], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 600], [-5, 5]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300 flex flex-col h-full shadow-2xl"
      >
        {/* Image Container */}
        <div className="aspect-[16/9] overflow-hidden" style={{ transform: "translateZ(20px)" }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow bg-[#121212]/80 backdrop-blur-md" style={{ transform: "translateZ(30px)" }}>
          <p className="text-purple-400 text-sm font-medium mb-2 uppercase tracking-wider">
            {project.category}
          </p>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.4), transparent 40%)`,
            transform: "translateZ(40px)"
          }}
        />
      </motion.div>
    </motion.div>
  );
}


export default function Projects() {
  return (
    <section className="relative z-10 w-full min-h-screen bg-[#121212] px-6 py-24 md:px-12 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
