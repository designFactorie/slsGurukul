import { PageHero } from "@/components/layout/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import galleryHero from "@/assets/gallery_hero.png";

export default function GalleryPage() {
    return (
        <div className="flex flex-col w-full">
            <PageHero
                title={<span>Events <span className="text-primary-purple">Gallery</span></span>}
                subtitle="Capturing moments of joy, learning, and celebration at SLS Gurukul."
                backgroundImage={galleryHero}
            />
            <GalleryGrid />
        </div>
    );
}
