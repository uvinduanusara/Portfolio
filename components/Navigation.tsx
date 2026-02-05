"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HireMeModal } from "@/components/HireMeModal";
import { Home, User, Folder, Sun, Moon, Plus } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Folder },
];

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const shouldBeScrolled = latest > 50;
    if (shouldBeScrolled !== isScrolled) {
      setIsScrolled(shouldBeScrolled);
    }
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        paddingTop: isScrolled ? "1rem" : "1.5rem",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        layout
        className={cn(
          "flex items-center justify-between px-2 py-2 rounded-full backdrop-blur-md border border-white/10 transition-colors duration-500 pointer-events-auto",
          isScrolled
            ? "bg-secondary/80 dark:bg-[#202020]/80 shadow-lg" // Charcoal theme bg
            : "bg-secondary/50 dark:bg-[#1a1a1a]/50 border-transparent"
        )}
        style={{ width: "fit-content" }}
      >
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <div className="relative group">
                <Button
                  variant="ghost"
                  className="rounded-full w-10 h-10 p-0 text-muted-foreground hover:text-foreground hover:bg-white/10"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="sr-only">{item.name}</span>
                </Button>
                {/* Tooltip-ish label */}
                <span className="absolute top-12 left-1/2 -translate-x-1/2 text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-2 py-0.5 rounded pointer-events-none whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}

          <div className="w-px h-6 bg-border mx-1" />

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            className="rounded-full w-10 h-10 p-0 text-muted-foreground hover:text-foreground hover:bg-white/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span className="sr-only">Toggle Theme</span>
          </Button>

          <div className="w-4" /> {/* Spacer */}


          {/* Hire Me CTA */}
          <HireMeModal>
            <Button
              className="rounded-full gap-2 px-5 bg-foreground text-background hover:bg-foreground/90 font-medium"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Hire Me</span>
            </Button>
          </HireMeModal>
        </nav>
      </motion.div>
    </motion.header>
  );
}
