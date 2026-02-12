"use client";

import { motion } from "framer-motion";
import { Handshake, Shield, Target, TrendingUp, Search, Heart } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const values = [
    {
        title: "Respect",
        icon: Handshake,
        description: "Honoring the inherent worth and dignity of every individual in our community.",
        color: "bg-primary-purple",
    },
    {
        title: "Integrity",
        icon: Shield,
        description: "Upholding the highest moral and ethical standards in all our actions and decisions.",
        color: "bg-secondary-red",
    },
    {
        title: "Responsibility",
        icon: Target,
        description: "Being accountable for our own actions and contributing positively to our environment.",
        color: "bg-brand-blue",
    },
    {
        title: "Growth",
        icon: TrendingUp,
        description: "Continuously striving for personal and academic excellence through dedication.",
        color: "bg-brand-lime",
    },
    {
        title: "Curiosity",
        icon: Search,
        description: "Nurturing an inquisitive mind and a lifelong passion for learning and discovery.",
        color: "bg-brand-gold",
    },
    {
        title: "Compassion",
        icon: Heart,
        description: "Showing kindness, empathy, and understanding towards others in all circumstances.",
        color: "bg-dark-slate",
    },
];

function FlipCard({ value, index }: { value: typeof values[0]; index: number }) {
    const [isFlipped, setIsFlipped] = React.useState(false);

    return (
        <div
            className="relative w-full h-[300px] perspective-1000 p-2"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="relative w-full h-full preserve-3d"
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-xl">
                    <div className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white",
                        value.color
                    )}>
                        <value.icon size={40} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-dark-slate">{value.title}</h3>

                </div>

                {/* Back */}
                <div className={cn(
                    "absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 text-white rounded-3xl shadow-xl text-center",
                    value.color
                )}>
                    <div className="mb-6 opacity-40">
                        <value.icon size={64} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-sm md:text-base leading-relaxed opacity-90">
                        {value.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export function CoreValues() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-3xl md:text-5xl font-bold text-dark-slate"
                        >
                            Our Core <span className="text-secondary-red">Values</span>
                        </motion.h2>
                        <p className="text-primary-purple text-xs max-w-xl">
                            These six pillars form the foundation of our educational philosophy and guide our students' development.
                        </p>
                    </div>
                    <div className="w-24 h-1 bg-brand-gold rounded-full hidden md:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <FlipCard value={value} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </section>
    );
}
