"use client";

import { motion } from "framer-motion";

const education = [
    {
        school: "University at Buffalo, State University of New York",
        degree: "Master of Science, Computer Science",
        period: "Aug 2024 - Dec 2025",
        gpa: "3.75/4.00",
        coursework: "Operating Systems, Cloud Computing, Data Mining, Machine Learning"
    },
    {
        school: "Sathyabama University",
        degree: "Bachelor of Engineering, Computer Science",
        period: "Sep 2020 - May 2024",
        gpa: "9.45/10.00",
        coursework: "Computer Networks, Artificial Intelligence, Database Systems, Object-Oriented Programming"
    }
];

const skills = {
    Languages: ["Python", "Java", "C", "JavaScript", "SQL", "Bash"],
    Frontend: ["React", "HTML", "CSS", "Vue.js", "Angular"],
    Backend: ["REST API design", "Node.js", "Express.js"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "AWS (EC2, Lambda, S3)", "Git"],
    "AI & Data": ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Pandas", "NumPy", "TensorFlow", "OpenCV"],
    Practices: ["SDLC", "Agile/Scrum", "System Design", "Unit Testing", "Performance Optimization"]
};

export default function EducationSkills() {
    return (
        <section className="relative z-10 w-full bg-[#121212] px-6 py-24 md:px-12 md:py-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Education Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
                        <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
                    </div>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-6 border-l-2 border-white/10">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#121212] border-2 border-purple-500" />
                                <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                                <p className="text-purple-400 font-medium mb-2">{edu.degree}</p>
                                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                                    <span>{edu.period}</span>
                                    <span className="bg-white/5 px-2 py-1 rounded">GPA: {edu.gpa}</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    <span className="text-gray-300 font-medium">Coursework:</span> {edu.coursework}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                        <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {Object.entries(skills).map(([category, items], index) => (
                            <div key={index}>
                                <h4 className="text-lg font-bold text-gray-200 mb-3">{category}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
