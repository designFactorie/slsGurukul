"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Baby, Glasses, BookOpen, GraduationCap, ChevronRight, X } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const programs = [
    {
        id: "balavatika",
        title: "Balavatika",
        subtitle: "Pre-Primary",
        icon: Baby,
        color: "bg-brand-gold",
        hoverBg: "hover:bg-brand-gold",
        itemText: "text-brand-gold",
        description: "Focus on play-based learning, storytelling, rhymes, art, and foundational values like sharing and respect.",
        details: [
            "Age-appropriate sensory experiences",
            "Interactive storytelling sessions",
            "Creative arts and crafts activities",
            "Foundational value-based learning",
            "Safe and nurturing environment",
        ],
    },
    {
        id: "primary",
        title: "Primary School",
        subtitle: "Grades I–V",
        icon: Glasses,
        color: "bg-brand-lime",
        hoverBg: "hover:bg-brand-lime",
        itemText: "text-brand-lime",
        description: "Emphasis on foundational literacy and numeracy, curiosity-driven projects, and moral stories.",
        details: [
            "Comprehensive literacy and numeracy",
            "Value-based education through stories",
            "Environmental awareness and nature",
            "Introduction to sports and yoga",
            "Holistic development focus",
        ],
    },
    {
        id: "middle",
        title: "Middle School",
        subtitle: "Grades VI–VIII",
        icon: BookOpen,
        color: "bg-brand-blue",
        hoverBg: "hover:bg-brand-blue",
        itemText: "text-brand-blue",
        description: "Strengthening subject knowledge, scientific thinking, teamwork, and social responsibility.",
        details: [
            "Rigorous academic curriculum (CBSE)",
            "Scientific thinking and experimentation",
            "Teamwork and leadership activities",
            "Life skills and moral education",
            "Extracurricular integration",
        ],
    },
    {
        id: "high",
        title: "High School",
        subtitle: "Grades IX–X",
        icon: GraduationCap,
        color: "bg-secondary-red",
        hoverBg: "hover:bg-secondary-red",
        itemText: "text-secondary-red",
        description: "Preparing students for board exams with focus on critical thinking and career guidance.",
        details: [
            "Board exam preparation (CBSE)",
            "Advanced critical thinking skills",
            "Leadership training and responsibility",
            "Career counseling and guidance",
            "Value-driven decision making",
        ],
    },
];

export function AcademicPrograms() {
    const [selectedProgram, setSelectedProgram] = React.useState<typeof programs[0] | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 bg-off-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl md:text-5xl font-bold text-dark-slate"
                    >
                        Academic <span className="text-primary-purple">Programs</span>
                    </motion.h2>
                    <p className="text-primary-purple text-xs max-w-2xl mx-auto">
                        Following the CBSE curriculum structured across different stages of schooling, ensuring holistic growth at every step.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedProgram(program)}
                            className={cn(
                                "group cursor-pointer bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full",
                                program.hoverBg
                            )}
                        >
                            <div className={cn(
                                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
                                "bg-gray-100 text-dark-slate group-hover:bg-white",
                                // On hover, text should be the program color
                                `group-hover:${program.itemText}`
                            )}>
                                <program.icon size={28} className={cn("transition-colors duration-300", `group-hover:${program.itemText}`)} />
                            </div>
                            <h4 className={cn("font-medium mb-1 uppercase tracking-wider text-sm transition-colors duration-300", program.itemText, "group-hover:text-white/90")}>
                                {program.subtitle}
                            </h4>
                            <h3 className="font-serif text-2xl font-bold text-dark-slate mb-4 group-hover:text-white transition-colors duration-300">
                                {program.title}
                            </h3>
                            <p className="text-dark-slate/60 leading-relaxed mb-6 flex-grow group-hover:text-white/80 transition-colors duration-300">
                                {program.description}
                            </p>
                            <button className="flex items-center gap-2 font-bold text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                Learn More <ChevronRight size={20} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Program Modal */}
            <AnimatePresence>
                {selectedProgram && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProgram(null)}
                            className="absolute inset-0 bg-dark-slate/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        >
                            <div className={cn("w-full md:w-1/3 flex flex-col items-center justify-center p-12 text-white text-center", selectedProgram.color)}>
                                <selectedProgram.icon size={64} className="mb-6" />
                                <h3 className="font-serif text-3xl font-bold">{selectedProgram.title}</h3>
                                <p className="opacity-80 mt-2 font-medium">{selectedProgram.subtitle}</p>
                            </div>
                            <div className="w-full md:w-2/3 p-10 md:p-12 relative">
                                <button
                                    onClick={() => setSelectedProgram(null)}
                                    className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X size={24} className="text-dark-slate" />
                                </button>

                                <h4 className="font-serif text-2xl font-bold text-dark-slate mb-6">Key Highlights</h4>
                                <ul className="space-y-4 mb-8">
                                    {selectedProgram.details.map((detail, i) => (
                                        <li key={i} className="flex gap-3 items-start">
                                            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5", selectedProgram.color + "/10", selectedProgram.itemText)}>
                                                <ChevronRight size={14} />
                                            </div>
                                            <span className="text-dark-slate/80 text-lg leading-tight">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="primary" className="w-full">
                                    Enquire for {selectedProgram.title}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
