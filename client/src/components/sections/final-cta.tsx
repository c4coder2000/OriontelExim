import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";

export default function FinalCTA() {
  const handleBookCall = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    // Track CTA click
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "final_cta_click",
        data: { action: "book_call", source: "final_cta_section" },
      }),
    }).catch(console.error);
  };

  const handleWhatsApp = () => {
    // WhatsApp deep link with pre-filled message
    const phoneNumber = "923002711881"; // ORIONTEL EXIM main number
    const message = encodeURIComponent(
      "Hi! I'm interested in ORIONTEL EXIM's global trade solutions. I'd like to discuss my import/export requirements."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");

    // Track WhatsApp click
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "final_cta_click",
        data: { action: "whatsapp", source: "final_cta_section" },
      }),
    }).catch(console.error);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="glass rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute inset-0 opacity-10 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, var(--primary-start), var(--primary-end))",
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating orbs */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, var(--primary-start), transparent)",
              filter: "blur(15px)",
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, var(--primary-end), transparent)",
              filter: "blur(15px)",
            }}
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
            <motion.h2
              className="font-space font-bold text-4xl lg:text-6xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-text-primary">Let's move your goods—</span>
              <br />
              <span className="gradient-text">and your KPIs.</span>
            </motion.h2>

            <motion.p
              className="text-xl lg:text-2xl text-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Transform your global trade operations with technology-powered solutions and proven expertise.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <MagneticButton
                className="gradient-bg text-white px-12 py-4 text-lg"
                size="lg"
                onClick={handleBookCall}
                testId="final-cta-book-call"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Call
              </MagneticButton>
              
              <MagneticButton
                className="glass text-text-primary border border-surface-border hover:border-accent px-12 py-4 text-lg"
                variant="outline"
                size="lg"
                onClick={handleWhatsApp}
                testId="final-cta-whatsapp"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </MagneticButton>
            </motion.div>

            <motion.div
              className="pt-8 text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-sm">
                Trusted by 200+ enterprises • $120M+ in annual trade volume • 99.3% on-time performance
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
