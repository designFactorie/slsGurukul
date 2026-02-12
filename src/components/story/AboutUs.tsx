"use client";

import { motion } from "framer-motion";
import { Users, Leaf, Shield, UserCheck } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const keyPoints = [
    { icon: UserCheck, text: "Strong teacher-student mentorship and personal guidance" },
    { icon: Leaf, text: "Learning that connects with nature and surroundings" },
    { icon: Shield, text: "Emphasis on discipline, simplicity, and responsibility" },
    { icon: Users, text: "Building community spirit and respect for elders" },
];
export function AboutUs() {
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % keyPoints.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h4 className="text-secondary-red font-bold tracking-widest uppercase text-sm">Our Roots</h4>
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-slate leading-tight">
                                Inspired by the Ancient <span className="text-primary-purple">Gurukul System</span>
                            </h2>
                        </div>

                        <p className="text-xs text-primary-purple leading-relaxed">
                            Inspired by the ancient Gurukul system, we believe that education is more than just academics.
                            Like in Gurukuls, our approach emphasizes close teacher-student bonding, respect for nature,
                            learning through real-life experiences, and values that shape character along with intellect.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {keyPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className={cn(
                                        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500",
                                        activeIndex === i
                                            ? "bg-primary-purple text-white shadow-lg scale-110"
                                            : "bg-brand-gold text-dark-slate group-hover:bg-primary-purple group-hover:text-white"
                                    )}>
                                        <point.icon size={20} className={cn(
                                            "transition-colors duration-500",
                                            activeIndex === i ? "text-white" : "text-dark-slate group-hover:text-white"
                                        )} />
                                    </div>
                                    <span className={cn(
                                        "font-medium leading-tight transition-colors duration-500",
                                        activeIndex === i ? "text-primary-purple" : "text-dark-slate/80"
                                    )}>{point.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Placeholder with decoration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-gold rounded-full opacity-20 animate-pulse" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-purple rounded-full opacity-10 animate-float" />

                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
                                alt="Ancient Gurukul Setting"
                                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden xl:block">
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    25+
                                </div>
                                <div>
                                    <p className="text-dark-slate font-bold">Years of</p>
                                    <p className="text-dark-slate/60 text-sm">Educational Excellence</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
