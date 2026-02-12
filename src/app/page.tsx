import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseGurukul } from "@/components/home/WhyChooseGurukul";
import { StatsSection } from "@/components/home/StatsSection";
import { CoreValues } from "@/components/home/CoreValues";
import { AcademicPrograms } from "@/components/home/AcademicPrograms";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <WhyChooseGurukul />
      <StatsSection />
      <CoreValues />
      <AcademicPrograms />
    </div>
  );
}
