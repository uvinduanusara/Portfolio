"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/10",
          isScrolled
            ? "bg-white/70 dark:bg-black/70 shadow-lg w-[90%] md:w-[60%] lg:w-[40%]"
            : "bg-transparent w-full max-w-5xl border-transparent"
        )}
      >
        <div className="font-bold text-lg tracking-tight">
            UW.
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} passHref>
                <Button variant="ghost" className="text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 rounded-full px-4 text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                </Button>
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
             {/* Simple Mobile Menu Placeholder - keeping it clean for now */}
             <Button variant="ghost" size="sm">Menu</Button>
        </div>
      </div>
    </motion.header>
  );
}
