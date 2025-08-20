import { motion } from "framer-motion";

const solutions = [
  {
    title: "Electronics & ICT",
    description: "Specialized handling for consumer electronics, telecom equipment, and IT hardware with ESD protection.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    badges: ["HS Code Expert", "CE Certified", "RoHS Compliant"],
  },
  {
    title: "Industrial & MRO",
    description: "Heavy machinery, spare parts, and maintenance supplies with specialized logistics and documentation.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    badges: ["ISO 9001", "Custom Bonds", "OEM Certified"],
  },
  {
    title: "FMCG & Retail",
    description: "Fast-moving consumer goods with time-sensitive delivery and brand protection protocols.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    badges: ["FDA Approved", "Cold Chain", "Brand Security"],
  },
  {
    title: "Automotive",
    description: "Vehicle components, parts, and accessories with just-in-time delivery and quality assurance.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    badges: ["IATF 16949", "JIT Delivery", "DOT Certified"],
  },
  {
    title: "Pharmaceuticals",
    description: "Medical devices, pharmaceuticals, and healthcare products with stringent regulatory compliance.",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    badges: ["GMP Certified", "Temperature Controlled", "FDA Compliant"],
  },
  {
    title: "Energy & Infrastructure",
    description: "Renewable energy equipment, power systems, and infrastructure components with project logistics.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    badges: ["IEC Standards", "Project Cargo", "Green Certified"],
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

export default function Solutions() {
  return (
    <section className="py-20" id="solutions">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space font-bold text-4xl lg:text-5xl text-text-primary mb-4">
            Industry-Specific Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Deep expertise across verticals with specialized regulatory knowledge and compliance frameworks.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="glass rounded-2xl p-8 card-tilt group overflow-hidden"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
              }}
              data-testid={`solution-card-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <motion.img
                src={solution.image}
                alt={solution.title}
                className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
              />
              
              <motion.h3 
                className="text-xl font-bold text-text-primary mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {solution.title}
              </motion.h3>
              
              <motion.p 
                className="text-text-secondary mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {solution.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {solution.badges.map((badge, badgeIndex) => (
                  <motion.span
                    key={badge}
                    className="px-3 py-1 text-xs glass rounded-full text-text-secondary border border-surface-border"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.6 + badgeIndex * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
