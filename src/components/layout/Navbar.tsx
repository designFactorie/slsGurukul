"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import slsLogo from "@/assets/sls.png";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const menuItems = [
    { name: "Home", href: "/" },
    { name: "The Gurukul Story", href: "/story" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Achievements", href: "/achievements" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                        <Image
                            src={slsLogo}
                            alt="SLS Gurukul Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={cn(
                        "font-serif font-bold text-xl transition-colors duration-300",
                        isScrolled ? "text-primary-purple" : "text-white drop-shadow-md"
                    )}>
                        SLS International Gurukul
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative px-4 py-2 font-medium text-base transition-all duration-300 rounded-lg text-center flex items-center justify-center leading-tight h-full",
                                isScrolled
                                    ? "text-dark-slate hover:bg-secondary-red hover:text-white"
                                    : "text-white hover:bg-secondary-red hover:text-white",
                                pathname === item.href && "text-secondary-red bg-secondary-red/10"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button
                        variant={isScrolled ? "primary" : "secondary"}
                        size="sm"
                        className="ml-4 text-base hover:!bg-[#FBB900] hover:!text-dark-slate hover:!border-[#FBB900] shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Admissions Open
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "lg:hidden p-2 rounded-lg transition-colors",
                        isScrolled ? "text-primary-purple" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-xl border-t lg:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-lg font-medium py-2 border-b border-gray-100",
                                        pathname === item.href ? "text-secondary-red" : "text-dark-slate"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button variant="primary" className="mt-4 w-full">
                                Admissions Open
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
