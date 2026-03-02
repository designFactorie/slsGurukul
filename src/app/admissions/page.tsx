"use client";

import { PageHero } from "@/components/layout/PageHero";
import { AdmissionProcess } from "@/components/admissions/AdmissionProcess";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function AdmissionsPage() {
    const [formData, setFormData] = useState({
        parentName: "",
        email: "",
        phone: "",
        grade: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const scriptUrl = process.env.NEXT_PUBLIC_ENQUIRY_SCRIPT_URL;
            if (!scriptUrl) {
                console.warn("Google Apps Script URL not found in environment variables.");
                // For demo/development purposes if not configured
                await new Promise((resolve) => setTimeout(resolve, 1500));
                setStatus("success");
                return;
            }

            const params = new URLSearchParams();
            params.append("parentName", formData.parentName);
            params.append("email", formData.email);
            params.append("phone", formData.phone);
            params.append("grade", formData.grade);

            await fetch(scriptUrl, {
                method: "POST",
                mode: "no-cors",
                body: params,
            });

            // In no-cors mode, we can't reliably read the response status.
            // But if the fetch itself didn't throw, we assume the request was sent.
            setStatus("success");
            setFormData({ parentName: "", email: "", phone: "", grade: "" });
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

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
                                    <p className="text-dark-slate/60 group-hover:text-white/80 transition-colors">+91 9980481450</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center p-6 bg-white rounded-3xl shadow-md border border-gray-50 hover:bg-secondary-red transition-all duration-300 group cursor-pointer">
                                <div className="w-14 h-14 bg-secondary-red/10 rounded-2xl flex items-center justify-center text-secondary-red group-hover:bg-white group-hover:text-secondary-red transition-colors">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-slate group-hover:text-white transition-colors">Email Us</h4>
                                    <p className="text-dark-slate/60 group-hover:text-white/80 transition-colors">Info@slsinternationalgurukul.org</p>
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

                    <div id="enquiry-form" className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 relative overflow-hidden scroll-mt-32">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/5 rounded-bl-full" />
                        <div className="relative z-10 space-y-8">
                            <h3 className="font-serif text-3xl font-bold text-dark-slate">Admission Enquiry</h3>
                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold text-dark-slate">Enquiry Submitted!</h4>
                                        <p className="text-dark-slate/60">Thank you for your interest. Our team will contact you soon.</p>
                                    </div>
                                    <Button
                                        variant="outline"
                                        onClick={() => setStatus("idle")}
                                        className="mt-6"
                                    >
                                        Send Another Enquiry
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-dark-slate/60 uppercase tracking-widest pl-2">Parent Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-6 py-4 bg-off-white rounded-2xl border border-transparent focus:border-primary-purple outline-none transition-all text-dark-slate"
                                            placeholder="Enter your full name"
                                            value={formData.parentName}
                                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-dark-slate/60 uppercase tracking-widest pl-2">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full px-6 py-4 bg-off-white rounded-2xl border border-transparent focus:border-primary-purple outline-none transition-all text-dark-slate"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-dark-slate/60 uppercase tracking-widest pl-2">Phone Number</label>
                                            <input
                                                required
                                                type="tel"
                                                className="w-full px-6 py-4 bg-off-white rounded-2xl border border-transparent focus:border-primary-purple outline-none transition-all text-dark-slate"
                                                placeholder="+91 XXXXX XXXXX"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-dark-slate/60 uppercase tracking-widest pl-2">Grade Applying For</label>
                                        <div className="relative">
                                            <select
                                                required
                                                className="w-full px-6 py-4 bg-off-white rounded-2xl border border-transparent focus:border-primary-purple outline-none transition-all appearance-none cursor-pointer text-dark-slate"
                                                value={formData.grade}
                                                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                                            >
                                                <option value="">Select Grade</option>
                                                <option value="Balavatika">Balavatika</option>
                                                <option value="Grade 1 - 5">Grade 1 - 5</option>
                                                <option value="Grade 6 - 8">Grade 6 - 8</option>
                                                <option value="Grade 9 - 10">Grade 9 - 10</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-dark-slate/40">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {status === "error" && (
                                        <p className="text-red-500 text-sm pl-2 font-medium">Something went wrong. Please try again later.</p>
                                    )}

                                    <Button
                                        disabled={status === "submitting"}
                                        type="submit"
                                        variant="primary"
                                        className="w-full py-5 text-lg"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Enquiry"
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
