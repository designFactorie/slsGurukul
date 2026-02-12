"use client";

import { motion } from "framer-motion";
import {
    ClipboardCheck, MessageSquare, FileText,
    CreditCard, CheckCircle, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const admissionSteps = [
    {
        title: "Application",
        description: "Submit the online enquiry form or visit the school campus to collect the application kit.",
        icon: ClipboardCheck,
        color: "bg-primary-purple",
    },
    {
        title: "Interaction",
        description: "A friendly interaction with the child and parents to understand the student's needs and interests.",
        icon: MessageSquare,
        color: "bg-secondary-red",
    },
    {
        title: "Documentation",
        description: "Submission of required documents including birth certificate, academic records, and photographs.",
        icon: FileText,
        color: "bg-brand-blue",
    },
    {
        title: "Fee Payment",
        description: "Payment of the admission fee to secure the seat for the upcoming academic session.",
        icon: CreditCard,
        color: "bg-brand-gold",
    },
    {
        title: "Confirmation",
        description: "Official confirmation of admission and sharing of orientation details and school calendar.",
        icon: CheckCircle,
        color: "bg-brand-lime",
    },
];

export function AdmissionProcess() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white relative">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center text-center mb-20 space-y-4">
                    <h4 className="text-secondary-red font-bold tracking-widest uppercase text-sm">Step-by-Step</h4>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-slate">
                        Our Admission <span className="text-primary-purple">Journey</span>
                    </h2>
                    <p className="text-primary-purple text-xs max-w-2xl mx-auto">
                        We follow a simple and transparent admission process designed to ensure a smooth transition for your child.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-100 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {admissionSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                                    {/* Icon Node (Desktop Center) */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-auto z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-4 border-gray-100 shadow-xl group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-dark-slate transition-all duration-500">
                                        <Icon size={28} className="group-hover:rotate-12 transition-transform" />
                                    </div>

                                    {/* Step Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className={cn(
                                            "w-full md:w-[42%] bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-50 hover:shadow-2xl transition-all duration-500",
                                            isEven ? "md:text-right" : "md:ml-auto"
                                        )}
                                    >
                                        <div className={cn(
                                            "w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 md:hidden",
                                            step.color
                                        )}>
                                            <Icon size={28} />
                                        </div>

                                        <div className="space-y-4">
                                            <span className={cn(
                                                "text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-block",
                                                step.color, "text-white"
                                            )}>
                                                Step {index + 1}
                                            </span>
                                            <h3 className="font-serif text-2xl font-bold text-dark-slate">{step.title}</h3>
                                            <p className="text-dark-slate/70 leading-relaxed">{step.description}</p>
                                        </div>
                                    </motion.div>

                                    {/* Connection Arrows/Dots (Visual Polish) */}
                                    <div className={cn(
                                        "hidden md:block absolute top-1/2 -translate-y-1/2",
                                        isEven ? "left-[45%] text-primary-purple/20" : "right-[45%] rotate-180 text-primary-purple/20"
                                    )}>
                                        <ArrowRight size={32} strokeWidth={3} className="animate-pulse" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
