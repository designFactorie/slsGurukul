import { PageHero } from "@/components/layout/PageHero";
import { AdmissionProcess } from "@/components/admissions/AdmissionProcess";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function AdmissionsPage() {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                title={<span><span className="text-primary-purple">Ad</span>missions</span>}
                subtitle="Secure your child's future with a blend of tradition, technology, and values."
                backgroundImage="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2000"
            />

            <section className="py-20 px-6 md:px-12 bg-white text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-slate">
                        Join the <span className="text-primary-purple">Gurukul Family</span>
                    </h2>
                    <p className="text-xs text-primary-purple">
                        Admissions are now open for the academic year 2024-25. We invite parents to explore our campus,
                        understand our pedagogy, and begin the journey toward excellence.
                    </p>
                </div>
            </section>

            <AdmissionProcess />

            {/* Contact & Enquiry Section */}
            <section className="py-24 bg-off-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-slate">
                            Need More <span className="text-secondary-red">Information?</span>
                        </h2>
                        <p className="text-xs text-primary-purple leading-relaxed">
                            Our admissions team is here to assist you with any queries regarding the process,
                            curriculum, or facilities. Choose your preferred way to connect.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-6 items-center p-6 bg-white rounded-3xl shadow-md border border-gray-50 hover:bg-primary-purple transition-all duration-300 group cursor-pointer">
                                <div className="w-14 h-14 bg-primary-purple/10 rounded-2xl flex items-center justify-center text-primary-purple group-hover:bg-white group-hover:text-primary-purple transition-colors">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-slate group-hover:text-white transition-colors">Call Us</h4>
                                    <p className="text-dark-slate/60 group-hover:text-white/80 transition-colors">+91 080 2544 0404</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center p-6 bg-white rounded-3xl shadow-md border border-gray-50 hover:bg-secondary-red transition-all duration-300 group cursor-pointer">
                                <div className="w-14 h-14 bg-secondary-red/10 rounded-2xl flex items-center justify-center text-secondary-red group-hover:bg-white group-hover:text-secondary-red transition-colors">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-slate group-hover:text-white transition-colors">Email Us</h4>
                                    <p className="text-dark-slate/60 group-hover:text-white/80 transition-colors">admissions@slsgurukul.com</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center p-6 bg-white rounded-3xl shadow-md border border-gray-100 hover:bg-brand-gold transition-all duration-300 group cursor-pointer">
                                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-white group-hover:text-brand-gold transition-colors">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-slate group-hover:text-white transition-colors">Visit Us</h4>
                                    <p className="text-dark-slate/60 group-hover:text-white/80 transition-colors">Horamavu, Bangalore, Karnataka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/5 rounded-bl-full" />
                        <div className="relative z-10 space-y-8">
                            <h3 className="font-serif text-3xl font-bold text-dark-slate">Admission Enquiry</h3>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-slate/60 uppercase tracking-widest pl-2">Parent Name</label>
                                    <input type="text" className="w-full px-6 py-4 bg-off-white rounded-2xl border border-transparent focus:border-primary-purple outline-none transition-all" placeholder="Enter your full name" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-dark-slate/60 uppercase tracking-widest pl-2">Email Address</label>
                                        <input type="email" className="w-full px-6 py-4 bg-off-white rounded-2xl border border-transparent focus:border-primary-purple outline-none transition-all" placeholder="your@email.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-dark-slate/60 uppercase tracking-widest pl-2">Phone Number</label>
                                        <input type="tel" className="w-full px-6 py-4 bg-off-white rounded-2xl border border-transparent focus:border-primary-purple outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-slate/60 uppercase tracking-widest pl-2">Grade Applying For</label>
                                    <select className="w-full px-6 py-4 bg-off-white rounded-2xl border border-transparent focus:border-primary-purple outline-none transition-all appearance-none cursor-pointer">
                                        <option>Select Grade</option>
                                        <option>Balavatika</option>
                                        <option>Grade 1 - 5</option>
                                        <option>Grade 6 - 8</option>
                                        <option>Grade 9 - 10</option>
                                    </select>
                                </div>
                                <Button variant="primary" className="w-full py-5 text-lg">
                                    Submit Enquiry
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
