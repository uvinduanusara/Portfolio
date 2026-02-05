"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, Copy, Check } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { HireMeModal } from "@/components/HireMeModal";
import Image from "next/image";

export function Hero() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("uvindu03@gmail.com"); // Replace with actual email
        setCopied(true);
        toast.success("Email copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="hero"
            className="min-h-[80vh] flex flex-col justify-center px-4 pt-20 mt-2"
        >
            <div className="max-w-3xl mx-auto w-full space-y-12">
                {/* Top Info Row */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between"
                >
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/50"></span>
                        Software Engineer
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-semibold tracking-wide uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for Work
                    </div>
                </motion.div>

                {/* Content Row */}
                <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start justify-between">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 flex-1 text-center md:text-left"
                    >
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                                I’m Uvindu <br className="hidden md:block" /> Weerawarna
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed mx-auto md:mx-0">
                                Software engineer from Sri Lanka. <br />
                                Building secure, scalable full-stack web applications with
                                real-world experience.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                            {/* Primary CTA */}
                            <HireMeModal>
                                <Button
                                    size="lg"
                                    className="rounded-full px-8 h-12 text-base gap-2 bg-foreground text-background hover:bg-foreground/90"
                                >
                                    <Plus className="w-4 h-4" />
                                    Hire Me
                                </Button>
                            </HireMeModal>

                            {/* Copy Email */}
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleCopyEmail}
                                className="rounded-full px-6 h-12 text-base gap-2 border-white/10 hover:bg-white/5"
                            >
                                {copied ? (
                                    <Check className="w-4 h-4" />
                                ) : (
                                    <Copy className="w-4 h-4" />
                                )}
                                Copy Email
                            </Button>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative"
                    >
                        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-white/5 bg-secondary/30 flex items-center justify-center overflow-hidden shadow-2xl skew-y-0">
                            {/* Placeholder for Profile Image - Replace with Image component */}
                            {/* <div className="text-4xl">👋</div> */}
                            <Image
                                src="/Profile2.jpg"
                                alt="Uvindu"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
