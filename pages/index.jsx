import { useState, useEffect } from 'react';
import LoadingScreen from '../components/sections/LoadingScreen';
import Navigation from '../components/layout/Navigation';
import MenuOverlay from '../components/layout/MenuOverlay';
import ScrollProgress from '../components/layout/ScrollProgress';
import HeroSection from '../components/sections/HeroSection';
import IntroSection from '../components/sections/IntroSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ApproachSection from '../components/sections/ApproachSection';
import PricingSection from '../components/sections/PricingSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navigation onMenuOpen={() => setMenuOpen(true)} />
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <HeroSection />
      <IntroSection />
      <PortfolioSection />
      <ApproachSection />
      <PricingSection />
      <TestimonialSection />
      <ContactSection />
      <ScrollProgress progress={scrollProgress} />
    </div>
  );
}
