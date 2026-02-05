"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "PostgreSQL",
    "Git",
];

export function About() {
    return (
        <section id="about" className="py-24 px-4 bg-secondary/20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl font-bold tracking-tight">About Me</h2>

                    <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
                        <p>
                            I am Uvindu Weerawarna, a dedicated software engineer and web developer with a passion for building consistent, high-performing applications. I specialize in the modern web stack, particularly Next.js and React.
                        </p>
                        <p>
                            My philosophy aligns with minimalist principles—creating software that is not only functional but also intuitive and subtle in its presentation. I believe in clean code, accessible design, and user-centric development.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <Badge variant="outline" className="text-base py-1 px-3">
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
