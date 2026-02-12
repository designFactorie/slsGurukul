"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Users, GraduationCap, Star } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Certified Teachers", value: 60, suffix: "+", icon: GraduationCap },
    { label: "Students Enrolled", value: 1000, suffix: "+", icon: Users },
    { label: "Satisfied Parents", value: 100, suffix: "%", icon: Star },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    React.useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const totalSteps = duration * 60;
            const increment = end / totalSteps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
}

export function StatsSection() {
    return (
        <section className="py-20 bg-primary-purple relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-overlay filter blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="flex flex-col items-center space-y-4 group"
                            >
                                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-300 backdrop-blur-sm border border-white/10">
                                    <Icon size={40} className="text-brand-gold group-hover:text-primary-purple transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif text-5xl md:text-6xl font-bold text-brand-gold tracking-tight">
                                    <Counter value={stat.value} />
                                    <span className="ml-1">{stat.suffix}</span>
                                </h3>
                                <p className="text-sm md:text-base font-bold text-white tracking-widest uppercase">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
