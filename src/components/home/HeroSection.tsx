"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-36">
            {/* Background Video Placeholder */}
            <div className="absolute inset-0 z-0 bg-brand-gold/20">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/slsGurukul/assets/sls_hero_video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/60 via-brand-gold/40 to-brand-gold/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-dark-slate space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                    Rooted in Wisdom. <br />
                    <span className="text-primary-purple">Guided by Values.</span> <br />
                    Rising with Purpose.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-primary-purple max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    Nurturing responsible citizens through knowledge, discipline, and steadfast moral values.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Button variant="secondary" size="lg" className="group bg-primary-purple text-white hover:bg-primary-purple/90">
                        Explore Our Vision
                        <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-dark-slate text-dark-slate hover:bg-dark-slate hover:text-white">
                        Begin Your Journey
                    </Button>
                </motion.div>
            </div>

        </section>
    );
}
