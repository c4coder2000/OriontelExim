import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import PartnerMarquee from "@/components/sections/partner-marquee";
import Traction from "@/components/sections/traction";
import Services from "@/components/sections/services";
import Solutions from "@/components/sections/solutions";
import Markets from "@/components/sections/markets";
import CaseStudies from "@/components/sections/case-studies";
import DigitalHub from "@/components/sections/digital-hub";
import Trust from "@/components/sections/trust";
import Leadership from "@/components/sections/leadership";
import FinalCTA from "@/components/sections/final-cta";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    // Add keyboard navigation class for accessibility
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('using-keyboard');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress"
        style={{ scaleX }}
      />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <motion.div 
          className="glow-orb absolute top-20 left-20 w-64 h-64"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="glow-orb absolute top-96 right-32 w-48 h-48"
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="glow-orb absolute bottom-40 left-1/3 w-32 h-32"
          animate={{
            y: [-8, 8, -8],
            x: [-3, 3, -3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <PartnerMarquee />
        <Traction />
        <Services />
        <Solutions />
        <Markets />
        <CaseStudies />
        <DigitalHub />
        <Trust />
        <Leadership />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
