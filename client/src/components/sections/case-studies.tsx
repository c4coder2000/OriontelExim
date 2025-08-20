import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    title: "Global Electronics Manufacturer",
    industry: "Electronics",
    outcome: "-14% Landed Cost",
    description: "Streamlined supply chain for consumer electronics across 12 countries, reducing total landed costs by 14% while improving delivery times by 22%.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    implementation: "3 months",
    roi: "340%",
  },
  {
    title: "Automotive Parts Distributor",
    industry: "Automotive",
    outcome: "+22% Speed",
    description: "Optimized just-in-time delivery system for automotive OEM, achieving 99.7% on-time performance with integrated compliance management.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    implementation: "6 months",
    roi: "NPS: 84",
  },
  {
    title: "Medical Device Company",
    industry: "Healthcare",
    outcome: "99.8% Compliance",
    description: "Established compliant distribution network for medical devices across 8 regulated markets with zero regulatory violations.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    implementation: "4 months",
    roi: "Uptime: 99.9%",
  },
  {
    title: "Fashion Retail Chain",
    industry: "Retail",
    outcome: "-31% Inventory",
    description: "Implemented demand-driven supply chain for fast fashion retailer, reducing inventory holding by 31% while improving stock availability.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    implementation: "5 months",
    roi: "Savings: $2.4M",
  },
];

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20" id="case-studies">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space font-bold text-4xl lg:text-5xl text-text-primary mb-4">
            Proven Results, Real Impact
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Success stories from enterprise clients across diverse industries and geographies.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                className="glass rounded-2xl p-8 min-w-[400px] snap-start card-tilt flex-shrink-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                }}
                data-testid={`case-study-${study.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <motion.img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="flex items-center gap-2 mb-4">
                  <motion.span
                    className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {study.outcome}
                  </motion.span>
                  <motion.span
                    className="px-3 py-1 text-xs bg-primary-start/20 text-primary-start rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {study.industry}
                  </motion.span>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {study.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-text-secondary">
                    Implementation: {study.implementation}
                  </div>
                  <div className="text-sm font-medium gradient-text">
                    {study.roi}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full glass border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-testid="case-studies-scroll-left"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === 0 ? "gradient-bg" : "bg-surface"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  data-testid={`case-studies-dot-${index}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full glass border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              data-testid="case-studies-scroll-right"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
