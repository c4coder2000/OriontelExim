import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Asif Rehman",
    role: "Founder & CEO / Director",
    description:
      "A visionary entrepreneur and international trade strategist, Mr. Rehman leads ORIONTEL EXIM with a passion for regulatory excellence, technological innovation, and client-centric performance. His leadership ensures measurable results for partners in both local and global markets.",
    image:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    linkedin: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Leadership() {
  const handleLinkedInClick = (name: string) => {
    // Track LinkedIn clicks
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "linkedin_click",
        data: { leader: name },
      }),
    }).catch(console.error);
  };

  return (
    <section className="py-20" id="leadership">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space font-bold text-4xl lg:text-5xl text-text-primary mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Seasoned executives with decades of experience in global trade,
            logistics, and regulatory compliance.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="glass rounded-2xl p-8 text-center card-tilt group"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
              }}
              data-testid={`leader-card-${leader.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <motion.img
                src={leader.image}
                alt={`${leader.name} portrait`}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-surface-border group-hover:border-primary-start transition-colors duration-300"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.h3
                className="text-xl font-bold text-text-primary mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {leader.name}
              </motion.h3>

              <motion.p
                className="text-primary-start font-medium mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {leader.role}
              </motion.p>

              <motion.p
                className="text-text-secondary text-sm mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {leader.description}
              </motion.p>

              <motion.button
                className="inline-flex items-center text-text-secondary hover:text-primary-start transition-colors group/link"
                onClick={() => handleLinkedInClick(leader.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`leader-linkedin-${leader.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                </motion.div>
                <span className="group-hover/link:underline">LinkedIn</span>
              </motion.button>

              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at center, var(--primary-start), transparent 70%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
