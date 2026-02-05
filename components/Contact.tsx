"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Whether you have a question, a project in mind, or just want to say hi, feel free to reach out. I'm currently open to new opportunities.
                </p>

                <div className="flex justify-center gap-4">
                    <Link href="mailto:contact@uvindu.com">
                        <Button size="lg" className="rounded-full gap-2">
                            <Mail className="w-4 h-4" />
                            Say Hello
                        </Button>
                    </Link>
                </div>

                <Separator className="my-12 w-1/2 mx-auto" />

                <div className="flex justify-center gap-6">
                    <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="w-6 h-6" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                </div>

                <footer className="mt-20 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Uvindu Weerawarna. All rights reserved.
                </footer>
            </motion.div>
        </section>
    );
}
