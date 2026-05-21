"use client";

import { PageHero } from "@/components/layout/PageHero";
import { motion } from "framer-motion";
import { Building2, FileText, GraduationCap, Users, School, ExternalLink } from "lucide-react";

const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const generalInfo = [
    { label: "Name of The School", value: "SLS International Gurukul" },
    { label: "Affiliation No.", value: "831261" },
    { label: "School Code", value: "46894" },
    { label: "Complete Address", value: "2nd Cross, K Channasandra, Horamavu Post, Bangalore – 560043" },
    { label: "Principal Name & Qualification", value: "Smt. Smitha Pradeepan, M.A, M.Ed" },
    { label: "School Email Id", value: "slsigkcblr@gmail.com" },
    { label: "Contact Details", value: "9148490201" },
];

const documents = [
    { name: "Copies of Affiliation Letter", href: "" },
    { name: "Copies of Trust Deed", href: "/documents/trust-deed.pdf" },
    { name: "Copy of No Objection Certificate (NOC) Issued by The State Govt./UT", href: "/documents/noc.pdf" },
    { name: "Copy of Recognition Certificate", href: "/documents/recognition-certificate.pdf" },
    { name: "Copy of Valid Building Safety Certificate As Per The National Building Code", href: "/documents/building-safety.pdf" },
    { name: "Copy of Valid Fire Safety Certificate Issued by The Competent Authority", href: "/documents/fire-safety.pdf" },
    { name: "Copies of Valid Water, Health and Sanitation Certificates", href: "/documents/health-sanitation.pdf" },
    { name: "Copies of Land Certificates", href: "/documents/land-certificates.pdf" },
];

const academics = [
    { name: "Fee Structure of The School", href: "/documents/fee-structure.pdf" },
    { name: "Annual Academic Calendar", href: "/documents/academic-calendar.pdf" },
    { name: "List of School Management Committee (SMC)", href: "/documents/smc.pdf" },
    { name: "List of Parents Teachers Association (PTA) Members", href: "/documents/pta.pdf" },
    { name: "Last Three-Year Result of The Board Examination As Per Applicability", href: "" },
];

const staffInfo = [
    { label: "Principal", value: "01" },
    { label: "Total No. of Teachers", value: "20" },
    { label: "PGT", value: "00" },
    { label: "PRT", value: "08" },
    { label: "TGT", value: "05" },
    { label: "PPRT", value: "02" },
    { label: "Art and Craft", value: "01" },
    { label: "PTI", value: "01" },
    { label: "Librarian", value: "01" },
    { label: "Teachers Section Ratio", value: "1:1.5" },
    { label: "Details of Special Educator", value: "Smt. Priyanka Zutshi" },
    { label: "Details of Counselling and Wellness Teacher", value: "Smt. Priyanka Zutshi" },
];

const infrastructure = [
    { label: "Total Campus Area", value: "4,467 Sq. Mtrs" },
    { label: "No. of Classrooms", value: "34" },
    { label: "Size of Classrooms", value: "51 Sq. Mtr" },
    { label: "Composite Lab", value: "01 – 75.83 Sq. Mtr" },
    { label: "Mathematics Lab", value: "01 – 51 Sq. Mtr" },
    { label: "Computer Lab", value: "01 – 72 Sq. Mtr" },
    { label: "Internet Facility", value: "Yes" },
    { label: "No. of Girls Toilets", value: "17" },
    { label: "No. of Boys Toilets", value: "14 Toilets and 17 Urinals" },
];

const sections = [
    {
        id: "general",
        title: "General Information",
        icon: Building2,
        color: "primary-purple",
    },
    {
        id: "documents",
        title: "Documents & Information",
        icon: FileText,
        color: "secondary-red",
    },
    {
        id: "academics",
        title: "Result & Academics",
        icon: GraduationCap,
        color: "brand-blue",
    },
    {
        id: "staff",
        title: "Staff (Teaching)",
        icon: Users,
        color: "brand-lime",
    },
    {
        id: "infrastructure",
        title: "School Infrastructure",
        icon: School,
        color: "brand-gold",
    },
];

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
    "primary-purple": { bg: "bg-primary-purple/5", text: "text-primary-purple", border: "border-primary-purple/20", badge: "bg-primary-purple" },
    "secondary-red": { bg: "bg-secondary-red/5", text: "text-secondary-red", border: "border-secondary-red/20", badge: "bg-secondary-red" },
    "brand-blue": { bg: "bg-brand-blue/5", text: "text-brand-blue", border: "border-brand-blue/20", badge: "bg-brand-blue" },
    "brand-lime": { bg: "bg-brand-lime/5", text: "text-brand-lime", border: "border-brand-lime/20", badge: "bg-brand-lime" },
    "brand-gold": { bg: "bg-brand-gold/5", text: "text-brand-gold", border: "border-brand-gold/20", badge: "bg-brand-gold" },
};

function InfoTable({ data }: { data: { label: string; value: string }[] }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className="bg-primary-purple/10">
                        <th className="text-left py-3 px-4 font-semibold text-primary-purple w-12">Sl.</th>
                        <th className="text-left py-3 px-4 font-semibold text-primary-purple">Information</th>
                        <th className="text-left py-3 px-4 font-semibold text-primary-purple">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className="border-b border-dark-slate/5 hover:bg-primary-purple/5 transition-colors">
                            <td className="py-3 px-4 text-dark-slate/60 font-medium">{String(i + 1).padStart(2, "0")}</td>
                            <td className="py-3 px-4 text-dark-slate/80 font-medium">{row.label}</td>
                            <td className="py-3 px-4 text-dark-slate font-semibold">{row.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function DocumentList({ items, headerColor = "secondary-red" }: { items: { name: string; href: string }[]; headerColor?: string }) {
    const headerClasses: Record<string, { bg: string; text: string; hoverBg: string }> = {
        "secondary-red": { bg: "bg-secondary-red/10", text: "text-secondary-red", hoverBg: "hover:bg-secondary-red/5" },
        "brand-blue": { bg: "bg-brand-blue/10", text: "text-brand-blue", hoverBg: "hover:bg-brand-blue/5" },
    };
    const colors = headerClasses[headerColor] || headerClasses["secondary-red"];

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                    <tr className={colors.bg}>
                        <th className={`text-left py-3 px-4 font-semibold ${colors.text} w-12`}>Sl.</th>
                        <th className={`text-left py-3 px-4 font-semibold ${colors.text}`}>Documents / Information</th>
                        <th className={`text-left py-3 px-4 font-semibold ${colors.text}`}>View Document</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => (
                        <tr key={i} className={`border-b border-dark-slate/5 ${colors.hoverBg} transition-colors`}>
                            <td className="py-3 px-4 text-dark-slate/60 font-medium">{String(i + 1).padStart(2, "0")}</td>
                            <td className="py-3 px-4 text-dark-slate/80 font-medium">{item.name}</td>
                            <td className="py-3 px-4">
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-brand-blue text-white text-xs font-semibold rounded-md hover:bg-brand-blue/90 transition-colors"
                                    >
                                        Click Here
                                        <ExternalLink size={12} />
                                    </a>
                                ) : (
                                    <span className="text-dark-slate/40 font-medium">—</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function MandatoryDisclosuresPage() {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                title={
                    <span>
                        Mandatory{" "}
                        <span className="text-primary-purple">Disclosures</span>
                    </span>
                }
                subtitle="Transparency and compliance as mandated by CBSE for public disclosure."
                backgroundImage="/assets/gurukulstoryhome.png"
            />

            {/* Section Nav */}
            <motion.section {...sectionAnimation} className="py-10 bg-off-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {sections.map((s) => {
                            const colors = colorMap[s.color];
                            return (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border ${colors.border} ${colors.bg} ${colors.text} text-sm font-semibold hover:shadow-md transition-all`}
                                >
                                    <s.icon size={16} />
                                    {s.title}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* A. General Information */}
            <motion.section {...sectionAnimation} id="general" className="py-16 bg-white scroll-mt-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-primary-purple flex items-center justify-center">
                            <Building2 size={20} className="text-white" />
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark-slate">
                            A. General Information
                        </h2>
                    </div>
                    <div className="bg-white rounded-2xl border border-dark-slate/10 overflow-hidden shadow-sm">
                        <InfoTable data={generalInfo} />
                    </div>
                </div>
            </motion.section>

            {/* B. Documents and Information */}
            <motion.section {...sectionAnimation} id="documents" className="py-16 bg-off-white scroll-mt-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-secondary-red flex items-center justify-center">
                            <FileText size={20} className="text-white" />
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark-slate">
                            B. Documents & Information
                        </h2>
                    </div>
                    <div className="bg-white rounded-2xl border border-dark-slate/10 overflow-hidden shadow-sm">
                        <DocumentList items={documents} />
                    </div>
                </div>
            </motion.section>

            {/* C. Result and Academics */}
            <motion.section {...sectionAnimation} id="academics" className="py-16 bg-white scroll-mt-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center">
                            <GraduationCap size={20} className="text-white" />
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark-slate">
                            C. Result & Academics
                        </h2>
                    </div>
                    <div className="bg-white rounded-2xl border border-dark-slate/10 overflow-hidden shadow-sm mb-8">
                        <DocumentList items={academics} headerColor="brand-blue" />
                    </div>

                    {/* Board Results Tables */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl border border-dark-slate/10 overflow-hidden shadow-sm p-6">
                            <h3 className="font-serif font-bold text-lg text-brand-blue mb-4">Result Class X</h3>
                            <p className="text-sm text-dark-slate/60 font-medium italic">Not Applicable</p>
                        </div>
                        <div className="bg-white rounded-2xl border border-dark-slate/10 overflow-hidden shadow-sm p-6">
                            <h3 className="font-serif font-bold text-lg text-brand-blue mb-4">Result Class XII</h3>
                            <p className="text-sm text-dark-slate/60 font-medium italic">Not Applicable</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* D. Staff (Teaching) */}
            <motion.section {...sectionAnimation} id="staff" className="py-16 bg-off-white scroll-mt-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-brand-lime flex items-center justify-center">
                            <Users size={20} className="text-white" />
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark-slate">
                            D. Staff (Teaching)
                        </h2>
                    </div>
                    <div className="bg-white rounded-2xl border border-dark-slate/10 overflow-hidden shadow-sm">
                        <InfoTable data={staffInfo} />
                    </div>
                </div>
            </motion.section>

            {/* E. School Infrastructure */}
            <motion.section {...sectionAnimation} id="infrastructure" className="py-16 bg-white scroll-mt-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center">
                            <School size={20} className="text-white" />
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark-slate">
                            E. School Infrastructure
                        </h2>
                    </div>
                    <div className="bg-white rounded-2xl border border-dark-slate/10 overflow-hidden shadow-sm">
                        <InfoTable data={infrastructure} />
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
