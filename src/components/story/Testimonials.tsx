"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        name: "Jayanthi",
        rating: 5,
        text: "I am happy to see my son growing to be a respectful and disciplined child. Thanks to SLS for inculcating the moral values.",
    },
    {
        name: "Shalini",
        rating: 5,
        text: "I truly appreciate the management's vision of blending modern education with our rich Indian culture. My child enjoys the events and celebrations and has gained wonderful knowledge of our traditions and heritage.",
    },
    {
        name: "Raghuram",
        rating: 5,
        text: "I have witnessed remarkable improvement in my child's academic performance. Beyond that, he has grown more disciplined, motivated, and confident, taking initiative in his work without needing any reminders.",
    },
    {
        name: "Seema",
        rating: 5,
        text: "I am happy that we have such a wonderful school in Horamavu. It focuses not just on academics but also on extracurricular activities, most importantly staying rooted in our Indian values.",
    },
    {
        name: "Nandini",
        rating: 5,
        text: "I am confident that SLS International Gurukul was the right choice for my daughter. As working parents, we didn't always have the time to teach her about our traditions, and the school is filling that gap beautifully.",
    },
    {
        name: "Prasad",
        rating: 5,
        text: "SLS International Gurukul is the school I always wished for my son with a balance between academics and extracurricular activities.",
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(0);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 12000);
        return () => clearInterval(interval);
    }, [currentIndex]); // Reset interval when manually changed to prevent quick skips

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-white overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-secondary-red font-bold tracking-widest uppercase text-sm"
                    >
                        Testimonials
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-3xl md:text-5xl font-bold text-dark-slate"
                    >
                        What <span className="text-primary-purple">Parents Say</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        className="h-1 bg-brand-gold rounded-full"
                    />
                </div>

                <div className="relative flex items-center justify-center min-h-[400px]">
                    {/* Main Card Container */}
                    <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-primary-purple rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12 group">
                                    {/* Quote Icon Background */}
                                    <Quote className="absolute top-10 right-10 text-white/10" size={120} />

                                    {/* Photo Placeholder */}
                                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/20 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonials[currentIndex].name}`}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full object-cover bg-white/10"
                                        />
                                    </div>

                                    <div className="flex-grow space-y-6 text-center md:text-left">
                                        <div className="flex justify-center md:justify-start gap-1">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={20} className="fill-brand-gold text-brand-gold" />
                                            ))}
                                        </div>
                                        <p className="text-xl md:text-2xl font-medium leading-relaxed italic opacity-90">
                                            "{testimonials[currentIndex].text}"
                                        </p>
                                        <div>
                                            <h4 className="font-serif text-2xl font-bold text-brand-gold">{testimonials[currentIndex].name}</h4>
                                            <p className="text-white/60 font-medium">SLS Gurukul Parent</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-px-12 pointer-events-none">
                        <button
                            onClick={prev}
                            className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-xl rounded-full flex items-center justify-center text-primary-purple hover:bg-primary-purple hover:text-white transition-all duration-300 pointer-events-auto active:scale-90"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 md:w-16 md:h-16 bg-white shadow-xl rounded-full flex items-center justify-center text-primary-purple hover:bg-primary-purple hover:text-white transition-all duration-300 pointer-events-auto active:scale-90"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                i === currentIndex ? "w-12 bg-primary-purple" : "w-2 bg-primary-purple/20 hover:bg-primary-purple/40"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
