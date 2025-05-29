import AboutMeSection from "@/components/sections/AboutMeSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";




export default function Home() {



  return (
    <main className="h-screen flex-1 mt-10 md:mt-20 lg:mt-24 overflow-y-auto snap-y snap-mandatory scroll-smooth w-full scrollbar-hide ">
      <HomeSection />
      <AboutMeSection />
      <ServicesSection/>
      <ProjectsSection/>
    </main>

  );
}
