"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
    {
        company: "Aspects Technologies Pvt. Ltd",
        role: "Software Development Intern",
        period: "Jul 2023 - Jan 2024",
        description: [
            "Developed and maintained Python backend services and RESTful APIs for internal web applications used by 1,000+ users.",
            "Optimized database queries and API execution paths, reducing average response time by 25% and improving service reliability.",
            "Participated in the full SDLC (requirements clarification, implementation, testing, release support) in Agile sprints; accelerated releases by 20%.",
            "Strengthened code quality via code reviews and unit tests (Jest), reducing post-release defects by 30%.",
            "Assisted with debugging and issue resolution by reproducing bugs, analyzing failures, and supporting fixes during release cycles."
        ],
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" // Abstract Tech Office
    },
    {
        company: "Tata Consultancy Services",
        role: "Software Development Intern",
        period: "Apr 2023 - Jun 2023",
        description: [
            "Automated KPI dashboards using Python and Tableau, reducing manual reporting time by 30% for stakeholders.",
            "Built RESTful APIs for real-time data synchronization across systems, improving throughput by 20% and supporting operational workflows.",
            "Refactored legacy modules and improved maintainability; reduced production defects by 15% through cleaner implementation and validation.",
            "Collaborated with cross-functional teams to refine requirements and deliver high-quality software in Agile ceremonies."
        ],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" // Corporate Building
    },
    {
        company: "Forage",
        role: "Software Engineer Intern",
        period: "Jan 2023 - Mar 2023",
        description: [
            "Designed and deployed AWS serverless microservices using Lambda + Python, improving execution efficiency by 15%.",
            "Implemented CI/CD pipelines (GitHub Actions, AWS CodePipeline), shortening deployment cycles by 25%.",
            "Improved resilience using fault-tolerant patterns and operational best practices, reducing downtime by 20%."
        ],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" // Clean Workspace
    }
];

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative z-10 w-full bg-[#121212] px-6 py-24 md:px-12 md:py-32 border-t border-white/5 overflow-hidden">

            {/* Background Image Transition */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none transition-all duration-700">
                <AnimatePresence mode="wait">
                    {hoveredIndex !== null && (
                        <motion.img
                            key={hoveredIndex}
                            src={experiences[hoveredIndex].image}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover grayscale"
                        />
                    )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212]"></div>
            </div>

            <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-16 relative z-10">

                {/* Left Column: List */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
                        <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
                    </motion.div>

                    <div className="relative border-l border-white/10 ml-3 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`relative pl-8 md:pl-12 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    animate={{
                                        scale: hoveredIndex === index ? 1.5 : 1,
                                        backgroundColor: hoveredIndex === index ? "#6366f1" : "#121212",
                                        borderColor: hoveredIndex === index ? "#6366f1" : "#333"
                                    }}
                                    className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300"
                                />

                                <h3 className={`text-2xl font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-indigo-400' : 'text-white'}`}>
                                    {exp.company}
                                </h3>
                                <h4 className="text-lg text-gray-300 mb-2 font-medium">{exp.role}</h4>
                                <p className="text-sm font-mono text-gray-500 mb-4">{exp.period}</p>

                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.ul
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="space-y-2 overflow-hidden"
                                        >
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-gray-400 leading-relaxed text-sm flex items-start">
                                                    <span className="mr-2 text-indigo-500 mt-1.5 basis-1">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                                {/* Always show summary if not hovered? No, user wants transition. Let's keep it collapsed for a cleaner look or just subtle fade. */}
                                {hoveredIndex !== index && (
                                    <p className="text-gray-500 text-sm italic">Hover to view details...</p>
                                )}

                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image Preview (Sticky) */}
                <div className="hidden md:block h-[500px] sticky top-32">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={hoveredIndex ?? 'default'}
                                src={hoveredIndex !== null ? experiences[hoveredIndex].image : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"}
                                initial={{ opacity: 0.5, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Overlay Text on Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                            <AnimatePresence mode="wait">
                                {hoveredIndex !== null ? (
                                    <motion.div
                                        key={hoveredIndex}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                    >
                                        <p className="text-indigo-400 font-mono text-sm mb-1">{experiences[hoveredIndex].period}</p>
                                        <h3 className="text-white text-3xl font-bold">{experiences[hoveredIndex].company}</h3>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-gray-400"
                                    >
                                        <p>Select an experience to view details.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
