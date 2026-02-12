import { PageHero } from "@/components/layout/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                title={<span>Events <span className="text-primary-purple">Gallery</span></span>}
                subtitle="Capturing moments of joy, learning, and celebration at SLS Gurukul."
                backgroundImage="/assets/gallery_hero.png"
            />
            <GalleryGrid />
        </div>
    );
}
