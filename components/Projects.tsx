"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Hand, Car, MessageSquare, Film, BookOpen } from "lucide-react";
import Link from "next/link";
import { ProjectModal } from "@/components/ProjectModal";

const projects = [
    {
        title: "Sign Language Recognition System",
        category: "Full Stack, AI / Machine Learning",
        description: "A full-stack Sign Language Recognition system that translates hand gestures into text in real time. The system combines a React-based frontend, secure REST APIs, and a Python-powered AI backend using computer vision and deep learning for accurate gesture detection.",
        tags: ["MERN Stack", "Python", "TensorFlow", "OpenCV", "MediaPipe"],
        logoColor: "bg-emerald-500",
        link: "https://github.com/uvinduanusara/Sign-Frontend",
        icon: Hand,
        image: "/projects/SignLanguage.jpg",
    },
    {
        title: "Online Cab Booking System",
        category: "Full Stack Web Application",
        description: "A complete online cab booking platform featuring real-time ride management, JWT-based authentication, and role-based access for customers and drivers. Built with a modern React frontend and a scalable backend architecture.",
        tags: ["React", "Spring Boot", "MongoDB", "JWT", "Tailwind CSS"],
        logoColor: "bg-blue-500",
        link: "https://github.com/uvinduanusara/Online-Cab-Booking-App-Frontend",
        icon: Car,
        image: "/projects/CabBooking.jpg",
    },
    {
        title: "MERN Real-Time Chat App",
        category: "Real-Time Web Application",
        description: "A real-time chat application with secure authentication, private and group messaging, and live typing indicators. Designed for performance and scalability using WebSockets and modern frontend state management.",
        tags: ["MERN Stack", "Socket.io", "JWT", "Real-Time"],
        logoColor: "bg-indigo-500",
        link: "https://github.com/uvinduanusara/mern-chat-app",
        icon: MessageSquare,
    },
    {
        title: "Movie Ticket Booking System",
        category: "Web Application",
        description: "A responsive movie ticket booking platform allowing users to browse movies, select seats, and complete bookings through a smooth and user-friendly interface. Focused on clean UI and efficient state management.",
        tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
        logoColor: "bg-rose-500",
        link: "https://github.com/uvinduanusara/Movie-Ticket-Booking-System",
        icon: Film,
    },
    {
        title: "HI MCQ Platform",
        category: "Production System / Internship",
        description: "Contributed to a production-ready online MCQ platform during a software engineering internship. Worked on security-related unit testing, database management, and UI/UX collaboration within an Agile development environment.",
        tags: ["MERN Stack", "MongoDB", "Jest", "Docker", "Agile"],
        logoColor: "bg-amber-500",
        link: "#",
        icon: BookOpen,
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                    <h2 className="text-lg font-medium text-muted-foreground">Projects</h2>
                </div>
                <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                    View All <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="space-y-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <ProjectModal project={project}>
                            <div className="bg-black dark:bg-card hover:bg-neutral-900 dark:hover:bg-muted/50 transition-colors rounded-2xl p-4 flex items-center justify-between border border-white/10 dark:border-border/50 cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full ${project.logoColor} flex items-center justify-center text-white font-bold text-lg shadow-sm`}>
                                        <project.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-semibold text-white dark:text-foreground group-hover:text-blue-500 dark:group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-sm text-gray-400 dark:text-muted-foreground">{project.category}</p>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/5 dark:bg-secondary text-white dark:text-muted-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </ProjectModal>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

