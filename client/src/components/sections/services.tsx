import { motion } from "framer-motion";
import { Shield, Link, Monitor, HelpCircle } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Authorized Commodity Trade",
    description: "Regulated sourcing and distribution with full compliance across all commodity categories.",
  },
  {
    icon: Link,
    title: "Tailored End-to-End Solutions",
    description: "Custom-designed supply chains optimized for your specific industry and geography.",
  },
  {
    icon: Monitor,
    title: "Digital Trade Hub",
    description: "Real-time analytics platform providing complete visibility into your global operations.",
  },
  {
    icon: HelpCircle,
    title: "Advisory & Compliance",
    description: "Strategic consulting on regulations, market entry, and risk mitigation across all jurisdictions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function Services() {
  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space font-bold text-4xl lg:text-5xl text-text-primary mb-4">
            From PO to Proof of Delivery—fully orchestrated.
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            End-to-end solutions that transform complex global trade into streamlined operations.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                className="glass rounded-2xl p-8 card-tilt group cursor-pointer relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                }}
                onClick={() => {
                  // Track service card clicks
                  fetch("/api/analytics", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      event: "service_card_click",
                      data: { service: service.title },
                    }),
                  }).catch(console.error);
                }}
                data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at center, var(--primary-start), transparent 70%)",
                  }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ 
                      rotate: [0, 5, -5, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-text-primary mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-text-secondary leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Gradient stroke on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, var(--primary-start), var(--primary-end))",
                    padding: "1px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "exclude",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
