"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    X, Search, Sofa, Laptop, Library,
    Trophy, Music, ShieldCheck, Bus, Tablet
} from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const facilities = [
    {
        title: "Well-Equipped Classrooms",
        icon: Sofa,
        description: "Spacious, well-lit classrooms with modern learning aids, smart boards, and comfortable seating to facilitate effective learning.",
        image: "https://images.unsplash.com/photo-1577891729319-f4874c73a5ae?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Science and Computer Labs",
        icon: Laptop,
        description: "State-of-the-art laboratories equipped with latest instruments and technology for hands-on experimentation and digital literacy.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Library",
        icon: Library,
        description: "A treasure trove of books, journals, and digital resources encouraging reading habits and research skills.",
        image: "https://images.unsplash.com/photo-1521587760476-6c1d70a3045d?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Sports Facilities",
        icon: Trophy,
        description: "Expansive playgrounds, indoor sports areas, and equipment for cricket, football, basketball, athletics, and more.",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Arts and Music",
        icon: Music,
        description: "Dedicated spaces for visual arts, performing arts, music, and dance to nurture creative expression.",
        image: "https://images.unsplash.com/photo-1514525253361-bee87184747c?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Health and Safety",
        icon: ShieldCheck,
        description: "Well-equipped medical room with trained staff, fire safety systems, CCTV surveillance, and strict security protocols.",
        image: "https://images.unsplash.com/photo-1505751172107-57322a3ad532?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Transportation",
        icon: Bus,
        description: "Safe and reliable transportation with GPS-enabled buses, trained drivers, and attendants ensuring secure commute.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Technology Integration",
        icon: Tablet,
        description: "Smart classrooms, digital learning platforms, and EdTech tools integrated for 21st-century education.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800",
    },
];

export function FacilitiesGrid() {
    const [selectedFacility, setSelectedFacility] = React.useState<typeof facilities[0] | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[450px] overflow-hidden rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 bg-dark-slate"
                        >
                            {/* Image with zoom effect */}
                            <img
                                src={facility.image}
                                alt={facility.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-slate via-dark-slate/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white space-y-4">
                                <div className="w-14 h-14 bg-primary-purple rounded-2xl flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                    <facility.icon size={28} />
                                </div>
                                <h3 className="font-serif text-2xl md:text-3xl font-bold">{facility.title}</h3>
                                <p className="text-white/70 line-clamp-2 md:line-clamp-none group-hover:line-clamp-none transition-all duration-500">
                                    {facility.description}
                                </p>
                                <div className="pt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="rounded-full flex items-center gap-2"
                                        onClick={() => setSelectedFacility(facility)}
                                    >
                                        View Gallery <Search size={18} />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedFacility && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark-slate/90 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFacility(null)}
                            className="absolute inset-0"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
                        >
                            <button
                                onClick={() => setSelectedFacility(null)}
                                className="absolute top-6 right-6 z-10 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all shadow-lg hover:rotate-90"
                            >
                                <X size={28} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px]">
                                <div className="relative h-[300px] lg:h-full">
                                    <img
                                        src={selectedFacility.image}
                                        alt={selectedFacility.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-slate/80 to-transparent flex items-end p-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary-purple rounded-xl flex items-center justify-center text-white">
                                                <selectedFacility.icon size={24} />
                                            </div>
                                            <h2 className="font-serif text-3xl font-bold text-white">{selectedFacility.title}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 md:p-16 flex flex-col justify-center space-y-6">
                                    <h4 className="text-secondary-red font-bold tracking-widest uppercase text-sm">Detailed Overview</h4>
                                    <p className="text-dark-slate/70 text-lg leading-relaxed">
                                        Our {selectedFacility.title.toLowerCase()} are designed to provide the best possible environment for student development.
                                        Equipped with modern technology and maintained to the highest standards, we ensure that every child has access
                                        to resources they need to excel.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="h-1 w-20 bg-brand-gold rounded-full" />
                                        <p className="text-dark-slate font-medium italic">
                                            "World-class facilities that nurture world-class minds."
                                        </p>
                                    </div>
                                    <Button variant="primary" className="w-fit">
                                        Schedule a Visit
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
