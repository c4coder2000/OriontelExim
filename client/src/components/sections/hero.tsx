import { motion } from "framer-motion";
import Globe from "@/components/ui/globe";
import Counter from "@/components/ui/counter";
import MagneticButton from "@/components/ui/magnetic-button";

const metrics = [
  { value: 120, suffix: "M+", label: "Annual Trade Volume" },
  { value: 42, suffix: "", label: "Countries" },
  { value: 99.3, suffix: "%", label: "On-Time Clearance", decimals: 1 },
  { value: 48, suffix: "h", prefix: "< ", label: "Avg Processing" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const handleBookConsultation = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <motion.h1 
                className="font-space font-bold text-5xl lg:text-7xl leading-tight tracking-tight"
                variants={itemVariants}
              >
                <span className="gradient-text">Global Trade.</span>
                <br />
                <span className="text-text-primary">Next Velocity.</span>
              </motion.h1>

              <motion.p 
                className="text-xl text-text-secondary leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                Compliance-first import/export, automated ops, measurable outcomes.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <MagneticButton
                className="gradient-bg text-white px-8 py-4 text-lg"
                size="lg"
                onClick={handleBookConsultation}
                testId="hero-cta-book-consultation"
              >
                Book a Consultation
              </MagneticButton>
              <MagneticButton
                className="glass text-text-primary border border-surface-border hover:border-primary-start px-8 py-4 text-lg"
                variant="outline"
                size="lg"
                onClick={handleExploreServices}
                testId="hero-cta-explore-services"
              >
                Explore Services
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Globe Visual */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <Globe />
          </motion.div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass rounded-xl p-6 text-center card-tilt"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateX: 2,
                rotateY: 2,
              }}
              data-testid={`metric-card-${metric.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                <Counter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </div>
              <div className="text-text-secondary text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
