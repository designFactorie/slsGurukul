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
                backgroundImage="/assets/gurukulstoryhome.png"
            />
            <AboutUs />
            <VisionMission />
            <Testimonials />
        </div>
    );
}
