import AboutMeSection from "@/components/sections/AboutMeSection";
import HomeSection from "@/components/sections/HomeSection";
import ServicesSection from "@/components/sections/ServicesSection";




export default function Home() {



  return (
    <main className="h-screen flex-1 mt-10 md:mt-20 lg:mt-24 overflow-y-auto snap-y snap-mandatory scroll-smooth w-full scrollbar-hide">
      <HomeSection />
      <AboutMeSection />
      <ServicesSection/>
    </main>

  );
}
