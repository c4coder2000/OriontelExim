import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const certifications = [
  {
    title: "SECP Registered",
    description: "Securities & Exchange Commission of Pakistan",
  },
  {
    title: "PSW Authorized",
    description: "Pakistan Single Window Clearance",
  },
  {
    title: "Tier-1 Banking",
    description: "International Banking Partnerships",
  },
  {
    title: "ISO Certified",
    description: "Quality Management Standards",
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

export default function Trust() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space font-bold text-4xl lg:text-5xl text-text-primary mb-4">
            Trust & Compliance
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Certified, audited, and compliant across all regulatory frameworks and industry standards.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="glass rounded-2xl p-8 text-center group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
              }}
              data-testid={`trust-cert-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-4 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ 
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                  boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)",
                }}
              >
                <Shield className="w-8 h-8 text-primary-start" />
              </motion.div>
              
              <motion.h3 
                className="text-lg font-semibold text-text-primary mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {cert.title}
              </motion.h3>
              
              <motion.p 
                className="text-sm text-text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {cert.description}
              </motion.p>

              {/* Subtle glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, var(--primary-start), var(--primary-end))",
                  filter: "blur(20px)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
