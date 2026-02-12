"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Tag, ChevronRight, Play } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const categories = [
    { name: "All", count: 24 },
    { name: "Event", count: 8 },
    { name: "Celebration", count: 6 },
    { name: "Sports", count: 4 },
    { name: "Arts", count: 3 },
    { name: "Culture", count: 3 },
];

const galleryItems = [
    {
        id: 1,
        title: "Annual Sports Day 2024",
        category: "Sports",
        date: "Feb 15, 2024",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600",
        type: "image",
    },
    {
        id: 2,
        title: "Independence Day Celebration",
        category: "Celebration",
        date: "Aug 15, 2024",
        image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=600",
        type: "image",
    },
    {
        id: 3,
        title: "Yoga & Meditation Session",
        category: "Culture",
        date: "Jan 10, 2024",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
        type: "image",
    },
    {
        id: 4,
        title: "Science Fair Highlights",
        category: "Event",
        date: "Nov 20, 2023",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
        type: "video",
    },
    {
        id: 5,
        title: "Art & Craft Workshop",
        category: "Arts",
        date: "Oct 05, 2023",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600",
        type: "image",
    },
    {
        id: 6,
        title: "Diwali Festivities",
        category: "Celebration",
        date: "Nov 12, 2023",
        image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&q=80&w=600",
        type: "image",
    },
    {
        id: 7,
        title: "Inter-School Cricket Match",
        category: "Sports",
        date: "Dec 02, 2023",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600",
        type: "image",
    },
    {
        id: 8,
        title: "Republic Day Parade",
        category: "Celebration",
        date: "Jan 26, 2024",
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=600",
        type: "image",
    },
];

export function GalleryGrid() {
    const [activeCategory, setActiveCategory] = React.useState("All");
    const [searchQuery, setSearchQuery] = React.useState("");

    const filteredItems = galleryItems.filter((item) => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 space-y-10">
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl font-bold text-dark-slate flex items-center gap-3">
                            <Tag className="text-primary-purple" />
                            Categories
                        </h3>
                        <div className="flex flex-col gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => setActiveCategory(cat.name)}
                                    className={cn(
                                        "flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group",
                                        activeCategory === cat.name
                                            ? "bg-primary-purple text-white shadow-lg shadow-primary-purple/20"
                                            : "bg-off-white text-dark-slate hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100"
                                    )}
                                >
                                    <span className="font-medium">{cat.name}</span>
                                    <span className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                                        activeCategory === cat.name ? "bg-white/20" : "bg-primary-purple/10 text-primary-purple group-hover:bg-primary-purple group-hover:text-white"
                                    )}>
                                        {cat.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-primary-purple rounded-[2.5rem] text-white space-y-4">
                        <h4 className="font-serif text-xl font-bold">Have event photos?</h4>
                        <p className="opacity-70 text-sm">Our gallery is updated regularly with student activities and school events.</p>
                        <button className="text-brand-gold font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            Contact School <ChevronRight size={18} />
                        </button>
                    </div>
                </aside>

                {/* Main Gallery Area */}
                <div className="w-full lg:w-3/4 space-y-8">
                    {/* Search bar */}
                    <div className="relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-dark-slate/40 group-focus-within:text-primary-purple transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by event name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-6 py-5 bg-off-white border border-transparent focus:border-primary-purple focus:bg-white rounded-2xl outline-none transition-all text-dark-slate font-medium"
                        />
                    </div>

                    {/* Masonry-like Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-dark-slate aspect-[4/3]"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1 bg-brand-gold text-dark-slate text-[10px] font-bold uppercase tracking-wider rounded-full">
                                                {item.category}
                                            </span>
                                            {item.type === "video" && (
                                                <span className="w-6 h-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                                                    <Play size={12} fill="currentColor" />
                                                </span>
                                            )}
                                        </div>
                                        <h4 className="text-white font-serif text-xl font-bold mb-2">{item.title}</h4>
                                        <div className="flex items-center gap-2 text-white/60 text-sm">
                                            <Calendar size={14} />
                                            {item.date}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20 bg-off-white rounded-[2rem] border-2 border-dashed border-gray-200">
                            <Search className="mx-auto text-gray-300 mb-4" size={48} />
                            <h4 className="text-xl font-bold text-dark-slate">No items found</h4>
                            <p className="text-gray-500">Try adjusting your category or search query.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
