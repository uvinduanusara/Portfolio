"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProjectModalProps {
    children: React.ReactNode;
    project: {
        title: string;
        category: string;
        description: string;
        link: string;
        logoColor: string;
        tags?: string[];
        icon: React.ElementType;
        image?: string;
    };
}

export function ProjectModal({ children, project }: ProjectModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-[#1a1a1a] border-white/10 text-white p-0 overflow-hidden">
                <div className={`h-48 w-full ${project.logoColor} relative flex items-center justify-center overflow-hidden`}>
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-4xl shadow-sm backdrop-blur-sm">
                            <project.icon className="w-10 h-10" />
                        </div>
                    )}
                </div>

                <div className="p-6 space-y-6">
                    <DialogHeader>
                        <div className="flex items-center justify-between">
                            <DialogTitle className="text-2xl font-bold tracking-tight">{project.title}</DialogTitle>
                            <Link href={project.link} target="_blank">
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                                    <ArrowUpRight className="w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                        <DialogDescription className="text-muted-foreground text-base mt-2">
                            {project.category}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>

                        {project.tags && (
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="bg-white/5 hover:bg-white/10 text-muted-foreground font-normal">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="pt-2">
                        <Link href={project.link} target="_blank" className="w-full">
                            <Button className="w-full rounded-full h-11 text-base font-medium">
                                View Project
                            </Button>
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
