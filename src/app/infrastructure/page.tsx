import { PageHero } from "@/components/layout/PageHero";
import { FacilitiesGrid } from "@/components/infrastructure/FacilitiesGrid";

export default function InfrastructurePage() {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                title={<span><span className="text-primary-purple">Infra</span>structure</span>}
                subtitle="World-class facilities designed to nurture every aspect of your child's growth."
                backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2000"
            />
            <FacilitiesGrid />

            {/* Call to Action Section */}
            <section className="py-20 px-6 md:px-12 bg-off-white text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-slate">
                        See the Gurukul Experience <span className="text-primary-purple">Firsthand</span>
                    </h2>
                    <p className="text-xs text-primary-purple">
                        We invite you to visit our campus and explore the facilities that make SLS International Gurukul
                        one of the premier educational institutions in Bangalore.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-primary-purple text-white px-8 py-4 rounded-full font-bold hover:bg-primary-purple/90 transition-all shadow-lg active:scale-95">
                            Book a Campus Tour
                        </button>
                        <button className="border-2 border-primary-purple text-primary-purple px-8 py-4 rounded-full font-bold hover:bg-primary-purple hover:text-white transition-all active:scale-95">
                            Download Prospectus
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
