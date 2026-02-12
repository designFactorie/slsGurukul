"use client";


import { motion } from "framer-motion";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const missionPoints = [
    "Inculcate Indian values and sanskaras through Guru–Shishya Parampara",
    "Impart teachings of Bhagavad Gita, Bhagavatam, Ramayana, and Mahabharata",
    "Identify and nurture the unique potential of every child",
    "Empower learners with 21st-century skills",
    "Holistic education balancing academics, sports, arts, and spirituality",
];

export function VisionMission() {
    return (
        <section className="py-24 px-6 md:px-12 bg-off-white overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl transition-all duration-500 hover:shadow-brand-gold/20 hover:bg-brand-gold"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/5 rounded-bl-full flex items-center justify-center -translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:bg-white/20 transition-all duration-500">
                            <Eye className="text-primary-purple/20 group-hover:text-dark-slate/20" size={48} />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 bg-primary-purple rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform group-hover:bg-white group-hover:text-primary-purple">
                                <Eye size={32} />
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl font-bold text-dark-slate transition-colors duration-300">Our Vision</h3>
                            <p className="text-[14px] md:text-lg text-primary-purple font-medium leading-relaxed group-hover:text-dark-slate/90 transition-colors duration-300">
                                To nurture rooted yet global citizens, guided by wisdom, values, and purpose.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative overflow-hidden bg-primary-purple p-10 md:p-14 rounded-[3rem] shadow-2xl transition-all duration-500 text-white hover:bg-brand-gold hover:text-dark-slate hover:shadow-brand-gold/20"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full flex items-center justify-center -translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:bg-white/20 transition-all duration-500">
                            <Target className="text-white/20 group-hover:text-dark-slate/20" size={48} />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-dark-slate shadow-lg group-hover:-rotate-12 transition-transform group-hover:bg-primary-purple group-hover:text-white">
                                <Target size={32} />
                            </div>
                            <h3 className="font-serif text-3xl md:text-4xl font-bold group-hover:text-dark-slate transition-colors duration-300">Our Mission</h3>
                            <p className="text-xs text-white opacity-90 leading-relaxed group-hover:text-dark-slate/90 transition-colors duration-300">
                                At SLS International Gurukul, our mission is to nurture every child's potential through a perfect blend of traditional wisdom and modern education.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Mission Points List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-10 md:p-16 rounded-[4rem] shadow-xl border border-gray-100"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-6">
                            <h4 className="text-secondary-red font-bold tracking-widest uppercase text-sm">The Roadmap</h4>
                            <h3 className="font-serif text-3xl font-bold text-dark-slate">Strategic Mission Objectives</h3>
                            <div className="w-16 h-1 bg-brand-gold rounded-full" />
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {missionPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className="shrink-0 mt-1">
                                        <CheckCircle2 size={24} className="text-brand-lime group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="text-dark-slate/80 font-medium leading-relaxed">{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
