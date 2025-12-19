import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ExpertiseSection />
      {/* About section moved to dedicated /about page */}
      {/* Partners section moved to dedicated /partners page */}
      {/* Solutions section moved to dedicated /solutions page */}
      {/* FAQ section moved to dedicated /faq page */}
      <ContactSection />
    </div>
  );
};

export default Index;
