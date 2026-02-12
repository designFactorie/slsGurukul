"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: string;
    backgroundImage: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    return (
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center pt-20">
            {/* Background Image with Parallax effect (simulated) */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt={typeof title === 'string' ? title : 'Page Hero Image'}
                    className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/80 via-brand-gold/60 to-brand-gold/80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-dark-slate space-y-6">


                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xs md:text-[14px] text-primary-purple max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>

            {/* Decorative Wave/Bottom Shadow */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </section>
    );
}
