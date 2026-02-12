import { PageHero } from "@/components/layout/PageHero";
import { StudentShowcase } from "@/components/achievements/StudentShowcase";

export default function AchievementsPage() {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                title={<span><span className="text-primary-purple">Achieve</span>ments</span>}
                subtitle="Celebrating the milestones and successes of our brilliant students."
                backgroundImage="/assets/achievements_hero.png"
            />

            <section className="py-20 px-6 md:px-12 bg-white text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-slate">
                        Our Hall of <span className="text-primary-purple">Fame</span>
                    </h2>
                    <p className="text-xs text-primary-purple">
                        At SLS International Gurukul, we take immense pride in the consistent performance of our students
                        in board examinations and various competitive fields.
                    </p>
                </div>
            </section>

            <StudentShowcase />

            <section className="py-24 bg-dark-slate text-white text-center">
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                        <Award size={32} className="text-dark-slate" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
                        100% Academic <span className="text-brand-gold">Result Excellence</span>
                    </h2>
                    <p className="text-xs text-white opacity-80 max-w-2xl mx-auto">
                        Year after year, our students achieve remarkable results through dedication, discipline, and the
                        constant support of our expert faculty and traditional values.
                    </p>
                    <div className="pt-6">
                        <button className="bg-white text-primary-purple px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-gold hover:text-dark-slate transition-all shadow-xl active:scale-95">
                            Enquire About Admissions
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

import { Award } from "lucide-react";
