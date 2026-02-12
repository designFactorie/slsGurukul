"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Vedic Wisdom",
        icon: BookOpen,
        description: "Rooted in the Bhagavad Gita, Ramayana, and Srimad Bhagavatam, we strengthen your child's foundations while celebrating India's rich heritage.",
        // Explicit classes to ensure Tailwind scans them
        gradientClass: "from-brand-lime/20",
        bgClass: "bg-brand-lime",
        iconColor: "text-brand-lime",
        accentColor: "border-brand-lime", // Keeping for reference if needed
    },
    {
        title: "Strong Sanskars",
        icon: Heart,
        description: "Instilling values that shape character, nurturing responsible and compassionate future citizens.",
        gradientClass: "from-brand-blue/20",
        bgClass: "bg-brand-blue",
        iconColor: "text-brand-blue",
        accentColor: "border-brand-blue",
    },
    {
        title: "Growth Mindset",
        icon: TrendingUp,
        description: "Empowering young minds with positivity, resilience, and confidence to thrive in life's challenges.",
        gradientClass: "from-secondary-red/20",
        bgClass: "bg-secondary-red",
        iconColor: "text-secondary-red",
        accentColor: "border-secondary-red",
    },
];

export function WhyChooseGurukul() {
    return (
        <section className="py-24 px-6 md:px-12 bg-off-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl md:text-5xl font-bold text-dark-slate"
                    >
                        Why Choose <span className="text-primary-purple">SLS International Gurukul?</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={cn(
                                "group relative overflow-hidden p-8 bg-white rounded-3xl shadow-xl transition-all duration-300",
                                "hover:shadow-2xl shadow-primary-purple/5"
                            )}
                        >
                            {/* Gradient Background on Hover */}
                            <div className={cn(
                                "absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                feature.gradientClass
                            )} />

                            <div className={cn(
                                "relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                                feature.bgClass + "/10",
                                feature.iconColor
                            )}>
                                <feature.icon size={32} />
                            </div>
                            <h3 className="relative z-10 font-serif text-2xl font-bold text-dark-slate mb-4">
                                {feature.title}
                            </h3>
                            <p className="relative z-10 text-primary-purple leading-relaxed text-xs">
                                {feature.description}
                            </p>

                            {/* Bottom colored line (optional, kept for brand consistency but inside) */}
                            <div className={cn(
                                "absolute bottom-0 left-0 right-0 h-1",
                                feature.bgClass
                            )} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
