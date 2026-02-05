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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { sendEmail } from "@/app/actions/send-email";

interface HireMeModalProps {
    children: React.ReactNode;
}

export function HireMeModal({ children }: HireMeModalProps) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const result = await sendEmail(formData);

            if (result.error) {
                toast.error("Error", {
                    description: result.error,
                });
            } else {
                setOpen(false);
                toast.success("Inquiry sent!", {
                    description: result.simulated
                        ? "Demo mode: Email simulated (API key missing)."
                        : "I'll get back to you as soon as possible."
                });
                // Reset form or specific fields if needed
                (e.target as HTMLFormElement).reset();
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-md bg-[#1a1a1a] border-white/10 text-white p-6">
                <DialogHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                            <span className="text-sm font-medium text-muted-foreground">Hire Me</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-bold tracking-wide uppercase">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                            </span>
                            Available for Work
                        </div>
                    </div>

                    <div className="space-y-1">
                        <DialogTitle className="text-2xl font-bold tracking-tight">Design Inquiry</DialogTitle>
                        <DialogDescription className="text-muted-foreground text-base">
                            Got an idea and need design help? Reach out now
                        </DialogDescription>
                    </div>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-xs font-medium text-muted-foreground">Name</Label>
                            <Input id="name" name="name" required placeholder="Name" className="bg-secondary/50 border-white/5 focus:border-white/20 h-11" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-medium text-muted-foreground">Email Address</Label>
                            <Input id="email" name="email" type="email" required placeholder="Email Address" className="bg-secondary/50 border-white/5 focus:border-white/20 h-11" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-xs font-medium text-muted-foreground">Message</Label>
                        <Textarea id="message" name="message" required placeholder="Tell me about your work..." className="min-h-[120px] bg-secondary/50 border-white/5 focus:border-white/20 resize-none" />
                    </div>

                    <Button type="submit" className="w-full h-11 rounded-md text-base font-medium" disabled={loading}>
                        {loading ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
