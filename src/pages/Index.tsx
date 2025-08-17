import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResearchSection from "@/components/ResearchSection";
import MembershipsSection from "@/components/MembershipsSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ResearchSection />
        <MembershipsSection />
        <WorkshopsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;