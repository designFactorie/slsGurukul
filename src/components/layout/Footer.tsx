import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/story" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Achievements", href: "/achievements" },
];

const contactInfo = [
    { icon: MapPin, text: "Horamavu, Bangalore, India" },
    { icon: Phone, text: "+91 80 1234 5678", href: "tel:+918012345678" },
    { icon: Mail, text: "info@slsgurukul.com", href: "mailto:info@slsgurukul.com" },
];

export function Footer() {
    return (
        <footer className="bg-brand-gold text-dark-slate pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* School Info */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <Image
                                src="/assets/sls.png"
                                alt="SLS Gurukul Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-serif font-bold text-lg text-primary-purple">SLS International Gurukul</span>
                    </div>
                    <p className="text-sm text-dark-slate/80 leading-relaxed font-medium">
                        Nurturing responsible citizens through knowledge, discipline, and steadfast moral values. Rooted in wisdom, guided by purpose.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                            <Link
                                key={i}
                                href="#"
                                className="w-10 h-10 bg-white/40 rounded-full flex items-center justify-center text-primary-purple hover:bg-primary-purple hover:text-white transition-all duration-300 group"
                            >
                                <Icon size={20} className="group-hover:scale-110 transition-transform" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-serif font-bold text-xl mb-6 border-b-2 border-primary-purple/30 pb-2 w-fit text-primary-purple">
                        Quick Links
                    </h4>
                    <ul className="space-y-4">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-dark-slate/80 hover:text-primary-purple hover:translate-x-2 inline-block transition-all font-medium"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-serif font-bold text-xl mb-6 border-b-2 border-primary-purple/30 pb-2 w-fit text-primary-purple">
                        Contact Us
                    </h4>
                    <ul className="space-y-6">
                        {contactInfo.map((item, i) => (
                            <li key={i} className="flex gap-4 group">
                                <item.icon className="text-secondary-red shrink-0 group-hover:scale-110 transition-transform" size={24} />
                                {item.href ? (
                                    <a href={item.href} className="text-sm text-dark-slate/80 hover:text-primary-purple transition-colors font-medium">
                                        {item.text}
                                    </a>
                                ) : (
                                    <span className="text-sm text-dark-slate/80 font-medium">{item.text}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter / Map */}
                <div>
                    <h4 className="font-serif font-bold text-xl mb-6 border-b-2 border-primary-purple/30 pb-2 w-fit text-primary-purple">
                        Stay Connected
                    </h4>
                    <p className="text-sm text-dark-slate/80 mb-6 font-medium">
                        Subscribe to our newsletter for the latest updates and events.
                    </p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-white/60 border border-dark-slate/10 rounded-lg py-3 px-4 placeholder:text-dark-slate/50 text-dark-slate focus:outline-none focus:border-primary-purple transition-colors"
                        />
                        <button className="bg-primary-purple text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-purple/90 transition-all active:scale-95 shadow-lg">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-dark-slate/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-dark-slate/60 text-xs font-medium">
                <p>© 2025 SLS International Gurukul. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-primary-purple transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-primary-purple transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
