import { useEffect } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import PublicationsSection from "../components/PublicationsSection";
import AchievementsSection from "../components/AchievementsSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Background from "../components/Background";

const Index = () => {
  useEffect(() => {
    document.title = "Saminathan M";
  }, []);

  return (
    <div className="min-h-screen relative">
      <Background />
      <Header />
      <Navigation />
      
      <main>
        <HeroSection />              {/* 01 */}
        <AboutSection />             {/* 02 */}
        <SkillsSection />            {/* 03 */}
        <PortfolioSection />         {/* 04 */}
        <PublicationsSection />      {/* 05 */}
        <AchievementsSection />      {/* 06 */}
        <ContactSection />           {/* 07 */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
