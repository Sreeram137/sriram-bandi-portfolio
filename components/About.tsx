"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative z-10 w-full bg-[#121212] px-6 py-24 md:px-12 md:py-32 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h2>
                    <div className="w-20 h-1 bg-indigo-500 rounded-full mb-10"></div>

                    <div className="space-y-8 text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
                        <motion.p
                            className="hover:text-white transition-colors duration-300 cursor-none"
                            whileHover={{ x: 10 }}
                        >
                            I am a <span className="text-white font-medium">Full Stack Developer</span> & Software Engineer (M.S. Computer Science, Dec 2025) with a passion for building robust, scalable digital ecosystems.
                        </motion.p>

                        <motion.p
                            className="hover:text-white transition-colors duration-300"
                            whileHover={{ x: 10 }}
                        >
                            My expertise spans the entire software spectrum: from crafting responsive <span className="text-indigo-400">frontend interfaces</span> (React, Next.js) to architecting high-performance <span className="text-purple-400">backend systems</span> (Python, Node.js) and orchestrating <span className="text-blue-400">cloud infrastructure</span> on AWS.
                        </motion.p>

                        <motion.p
                            className="hover:text-white transition-colors duration-300"
                            whileHover={{ x: 10 }}
                        >
                            I thrive on solving complex problems across the stack—whether it's optimizing API latency by 25%, designing fault-tolerant microservices, or implementing pixel-perfect UI designs. I bridge the gap between <span className="text-white">engineering logic</span> and <span className="text-white">creative design</span>.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
