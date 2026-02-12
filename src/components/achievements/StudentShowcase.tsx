"use client";

import { motion } from "framer-motion";
import { Award, Star, GraduationCap, Medal, Trophy } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const students = {
    "2023-24": [
        { name: "Aditi Sharma", rank: 1, percentage: "98.5%", class: "Grade X", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditi" },
        { name: "Rahul Verma", rank: 2, percentage: "97.2%", class: "Grade X", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" },
        { name: "Sanya Gupta", rank: 3, percentage: "96.8%", class: "Grade X", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanya" },
        { name: "Aryan Raj", rank: 4, percentage: "95.5%", class: "Grade X", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan" },
        { name: "Meera Nair", rank: 5, percentage: "94.8%", class: "Grade X", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera" },
        { name: "Karthik S", rank: 6, percentage: "94.2%", class: "Grade X", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karthik" },
        { name: "Ananya P", rank: 7, percentage: "93.5%", class: "Grade X", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya" },
        { name: "Vikram R", rank: 8, percentage: "93.0%", class: "Grade X", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram" },
    ],
};

const years = ["2023-24", "2022-23", "2021-22"];

export function StudentShowcase() {
    const [activeYear, setActiveYear] = React.useState("2023-24");
    const currentStudents = students[activeYear as keyof typeof students] || [];

    const podiumStudents = currentStudents.slice(0, 3).sort((a, b) => {
        // Order for podium: 2nd, 1st, 3rd
        if (a.rank === 1) return 0;
        if (b.rank === 1) return 0;
        return a.rank - b.rank;
    });

    // Correct order for visual podium: 2nd (left), 1st (center), 3rd (right)
    const displayPodium = [
        currentStudents.find(s => s.rank === 2),
        currentStudents.find(s => s.rank === 1),
        currentStudents.find(s => s.rank === 3),
    ].filter(Boolean) as typeof currentStudents;

    const otherStudents = currentStudents.slice(3);

    return (
        <section className="py-24 px-6 md:px-12 bg-off-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Year Selector */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={cn(
                                    "px-6 py-3 rounded-xl font-bold transition-all",
                                    activeYear === year
                                        ? "bg-primary-purple text-white shadow-md"
                                        : "text-dark-slate/60 hover:bg-off-white"
                                )}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Podium Display */}
                <div className="mb-24 flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end w-full max-w-5xl">
                        {displayPodium.map((student, index) => {
                            const isFirst = student.rank === 1;
                            const isSecond = student.rank === 2;
                            const isThird = student.rank === 3;

                            return (
                                <motion.div
                                    key={student.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className={cn(
                                        "relative flex flex-col items-center text-center p-8 rounded-[3rem] shadow-2xl transition-all duration-500 hover:-translate-y-4",
                                        isFirst ? "bg-primary-purple text-white h-[500px] z-10 md:scale-110" : "bg-white text-dark-slate h-[420px]"
                                    )}
                                >
                                    {/* Rank Badge */}
                                    <div className={cn(
                                        "absolute -top-6 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-xl",
                                        isFirst ? "bg-brand-gold" : isSecond ? "bg-gray-300" : "bg-orange-400"
                                    )}>
                                        {isFirst ? <Trophy size={32} className="text-dark-slate" /> : <Medal size={32} className="text-white" />}
                                    </div>

                                    {/* Student Image */}
                                    <div className={cn(
                                        "w-32 h-32 md:w-40 md:h-40 rounded-full border-4 overflow-hidden mb-6 shadow-xl",
                                        isFirst ? "border-brand-gold" : "border-primary-purple/20"
                                    )}>
                                        <img src={student.image} alt={student.name} className="w-full h-full object-cover bg-off-white" />
                                    </div>

                                    <div className="space-y-2 flex-grow">
                                        <h3 className="font-serif text-2xl font-bold">{student.name}</h3>
                                        <p className={isFirst ? "text-white/70" : "text-dark-slate/50"}>{student.class}</p>
                                        <div className={cn(
                                            "text-4xl md:text-5xl font-black mt-4",
                                            isFirst ? "text-brand-gold" : "text-primary-purple"
                                        )}>
                                            {student.percentage}
                                        </div>
                                    </div>

                                    <div className={cn(
                                        "p-4 rounded-2xl w-full font-bold uppercase tracking-widest text-sm",
                                        isFirst ? "bg-white/10" : "bg-off-white"
                                    )}>
                                        Rank {student.rank} Achievement
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Other Students Grid */}
                <div className="space-y-12">
                    <div className="text-center">
                        <h3 className="font-serif text-3xl font-bold text-dark-slate mb-2">Honorable <span className="text-secondary-red">Mentions</span></h3>
                        <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                        {otherStudents.map((student, index) => (
                            <motion.div
                                key={student.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all hover:-translate-y-2"
                            >
                                <div className="w-20 h-20 rounded-full border-2 border-primary-purple/10 overflow-hidden mb-4">
                                    <img src={student.image} alt={student.name} className="w-full h-full object-cover bg-off-white" />
                                </div>
                                <h4 className="font-serif font-bold text-dark-slate leading-tight">{student.name}</h4>
                                <p className="text-dark-slate/50 text-xs mb-3">{student.class}</p>
                                <div className="text-primary-purple font-black text-xl">
                                    {student.percentage}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
