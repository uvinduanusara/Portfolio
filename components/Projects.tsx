"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
    {
        title: "Portfolio Website",
        description: "A minimalist portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a clean design and smooth animations.",
        tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        link: "https://github.com/uvindu/portfolio", // Placeholder
    },
    {
        title: "SaaS Dashboard",
        description: "A modern SaaS dashboard with data visualization, dark mode support, and responsive layout.",
        tags: ["React", "TypeScript", "Recharts", "Shadcn UI"],
        link: "#",
    },
    {
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates and drag-and-drop functionality.",
        tags: ["Next.js", "Supabase", "Zustand", "Dnd-kit"],
        link: "#",
    },
    {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce solution with cart, checkout, and payment integration.",
        tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
        link: "#",
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12 text-center md:text-left"
            >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Work</h2>
                <p className="text-muted-foreground max-w-2xl">
                    Here are a few projects I've worked on recently.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
