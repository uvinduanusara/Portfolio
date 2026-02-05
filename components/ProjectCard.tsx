"use client";

import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image?: string;
}

export function ProjectCard({
    title,
    description,
    tags,
    link,
    image,
}: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-secondary/30 backdrop-blur-sm h-full flex flex-col">
                {image && (
                    <div className="relative w-full h-48 overflow-hidden">
                        {/* Using a placeholder if image is not provided or valid, but assuming it is for now */}
                        <div className="absolute inset-0 bg-muted/50 flex items-center justify-center text-muted-foreground">
                            {/* Replace with actual Image component when real images are available */}
                            <span className="text-sm">Project Preview</span>
                        </div>
                        {/* If we had real images, we'd use:
            <Image src={image} alt={title} fill className="object-cover" />
            */}
                    </div>
                )}
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold">{title}</CardTitle>
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1 -mr-2 text-muted-foreground hover:text-primary">
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                    <CardDescription className="mt-2 line-clamp-3">
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    {/* Content spacer if needed */}
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-normal text-xs px-2 py-0.5 pointer-events-none">
                            {tag}
                        </Badge>
                    ))}
                </CardFooter>
            </Card>
        </motion.div>
    );
}
