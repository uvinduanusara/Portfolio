"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Subtle background gradient/glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sidebar-accent/20 via-background to-background opacity-50" />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
                className="max-w-3xl space-y-6"
            >
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="text-sm md:text-base font-medium text-muted-foreground tracking-wide uppercase"
                >
                    Hi there, I'm
                </motion.p>

                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="text-4xl md:text-7xl font-bold tracking-tight text-foreground"
                >
                    Uvindu Weerawarna
                </motion.h1>

                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="text-xl md:text-3xl text-muted-foreground font-light"
                >
                    Software Engineer & Web Developer
                </motion.h2>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="max-w-lg mx-auto text-base md:text-lg text-muted-foreground/80 leading-relaxed"
                >
                    I build minimalist, high-performance web applications with a focus on user experience and subtle design details.
                </motion.p>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="pt-8"
                >
                    <Link href="#projects">
                        <Button size="lg" className="rounded-full px-8 h-12 text-base">
                            View My Work
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
        </section>
    );
}
