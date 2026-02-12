import { PageHero } from "@/components/layout/PageHero";
import { AboutUs } from "@/components/story/AboutUs";
import { VisionMission } from "@/components/story/VisionMission";
import { Testimonials } from "@/components/story/Testimonials";

export default function StoryPage() {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                title={<span>The Gurukul <span className="text-primary-purple">Story</span></span>}
                subtitle="A legacy of excellence, rooted in tradition and driven by innovation."
                backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
            />
            <AboutUs />
            <VisionMission />
            <Testimonials />
        </div>
    );
}
