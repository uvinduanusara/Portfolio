"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus, Copy, Check } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { HireMeModal } from "@/components/HireMeModal";

export function CTASection() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("uvindu03@gmail.com");
        setCopied(true);
        toast.success("Email copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto space-y-8"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Let’s work together.
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                    Developing clean, scalable solutions that work in the real world.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {/* Primary CTA */}
                    <HireMeModal>
                        <Button size="lg" className="rounded-full px-8 h-12 text-base gap-2 bg-foreground text-background hover:bg-foreground/90">
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
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        Copy Email
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
