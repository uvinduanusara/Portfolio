"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 px-4 border-t border-border/40">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Uvindu Weerawarna. All rights reserved.</p>

                <div className="flex items-center gap-6">
                    <Link href="https://www.linkedin.com/in/uvinduweerawarna" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="https://github.com/uvinduanusara" aria-label="GitHub" className="hover:text-foreground transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href="https://www.instagram.com/uvindu._.anu/" aria-label="Instagram" className="hover:text-foreground transition-colors">
                        <Instagram className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
