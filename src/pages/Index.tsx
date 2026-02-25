import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import TransformationAreas from "@/components/landing/TransformationAreas";
import ProcessSteps from "@/components/landing/ProcessSteps";
import AboutSection from "@/components/landing/AboutSection";
import TherapiesSection from "@/components/landing/TherapiesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <TransformationAreas />
        <ProcessSteps />
        <AboutSection />
        <TherapiesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
