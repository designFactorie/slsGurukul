"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    X, Search, Sofa, Laptop, Library,
    Trophy, Music, ShieldCheck, Bus, Tablet,
    ChevronLeft, ChevronRight
} from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const facilities = [
    {
        title: "Well-Equipped Classrooms",
        icon: Sofa,
        description: "Spacious, well-lit classrooms with modern learning aids, smart boards, and comfortable seating to facilitate effective learning.",
        image: "/assets/classroom/DSC04174.jpg",
        gallery: [
            "/assets/classroom/DSC04174.jpg",
            "/assets/classroom/DSC04182.jpg",
        ]
    },
    {
        title: "Science and Computer Labs",
        icon: Laptop,
        description: "State-of-the-art laboratories equipped with latest instruments and technology for hands-on experimentation and digital literacy.",
        image: "/assets/Lab/computerlab.png",
        gallery: [
            "/assets/Lab/computerlab.png",
            "/assets/Lab/DSC05039.jpg",
            "/assets/Lab/DSC05071.jpg",
            "/assets/Lab/DSC05013.jpg",
            "/assets/Lab/DSC05061.jpg",
            "/assets/Lab/DSC05097.jpg"
        ]
    },
    {
        title: "Library",
        icon: Library,
        description: "A treasure trove of books, journals, and digital resources encouraging reading habits and research skills.",
        image: "/assets/Library/DSC04979.jpg",
        gallery: [
            "/assets/Library/DSC04979.jpg",
            "/assets/Library/DSC04983.jpg",
            "/assets/Library/DSC04987.jpg"
        ]
    },
    {
        title: "Sports Facilities",
        icon: Trophy,
        description: "Expansive playgrounds, indoor sports areas, and equipment for cricket, football, basketball, athletics, and more.",
        image: "/assets/Sports/DSC04955.jpg",
        gallery: [
            "/assets/Sports/DSC04955.jpg",
            "/assets/Sports/DSC04963.jpg",
            "/assets/Sports/DSC04969.jpg"
        ]
    },
    {
        title: "Arts and Music",
        icon: Music,
        description: "Dedicated spaces for visual arts, performing arts, music, and dance to nurture creative expression.",
        image: "/assets/music/DSC04171.jpg",
        gallery: [
            "/assets/music/DSC04171.jpg",
            "/assets/music/DSC05103.jpg"
        ]
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
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedFacility?.gallery) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedFacility.gallery!.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedFacility?.gallery) {
            setCurrentImageIndex((prev) =>
                (prev - 1 + selectedFacility.gallery!.length) % selectedFacility.gallery!.length
            );
        }
    };

    const closeGallery = () => {
        setSelectedFacility(null);
        setCurrentImageIndex(0);
    };

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
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-dark-slate/95 backdrop-blur-xl">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeGallery}
                            className="absolute inset-0"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-6xl aspect-video bg-black rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeGallery}
                                className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all shadow-lg hover:rotate-90"
                            >
                                <X size={28} />
                            </button>

                            <div className="relative w-full h-full group/modal">
                                {/* Slideshow functionality */}
                                {selectedFacility.gallery && selectedFacility.gallery.length > 0 ? (
                                    <>
                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={currentImageIndex}
                                                src={selectedFacility.gallery[currentImageIndex]}
                                                alt={`${selectedFacility.title} gallery ${currentImageIndex + 1}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="w-full h-full object-contain"
                                            />
                                        </AnimatePresence>

                                        {/* Navigation Arrows */}
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover/modal:opacity-100"
                                        >
                                            <ChevronLeft size={32} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover/modal:opacity-100"
                                        >
                                            <ChevronRight size={32} />
                                        </button>

                                        {/* Indicators */}
                                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                                            {selectedFacility.gallery.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                                                    className={cn(
                                                        "h-2 rounded-full transition-all duration-300",
                                                        currentImageIndex === i ? "w-8 bg-brand-gold" : "w-2 bg-white/30"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-white p-10 space-y-6">
                                        <selectedFacility.icon size={80} className="text-brand-gold opacity-50" />
                                        <h2 className="font-serif text-4xl md:text-5xl font-bold">{selectedFacility.title}</h2>
                                        <p className="text-xl text-white/70 max-w-2xl text-center leading-relaxed">
                                            {selectedFacility.description}
                                        </p>
                                        <div className="bg-brand-gold/10 border border-brand-gold/20 px-6 py-3 rounded-full text-brand-gold font-medium">
                                            Gallery Images Coming Soon
                                        </div>
                                    </div>
                                )}

                                {/* Floating Title (for gallery view) */}
                                {selectedFacility.gallery && selectedFacility.gallery.length > 0 && (
                                    <div className="absolute top-8 left-10 pointer-events-none">
                                        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                                            <div className="w-10 h-10 bg-primary-purple rounded-xl flex items-center justify-center text-white">
                                                <selectedFacility.icon size={20} />
                                            </div>
                                            <div>
                                                <h2 className="font-serif text-lg font-bold text-white">{selectedFacility.title}</h2>
                                                <p className="text-white/50 text-xs">Viewing {currentImageIndex + 1} of {selectedFacility.gallery.length}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
