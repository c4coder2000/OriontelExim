import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, DollarSign, Clock, Users, Globe } from "lucide-react";

const kpis = [
  {
    icon: TrendingUp,
    title: "Trade Velocity",
    description: "Average improvement in processing speed across all trade routes",
    metric: "23%",
    trend: "↑",
    color: "accent",
  },
  {
    icon: CheckCircle,
    title: "Compliance Rate",
    description: "First-pass customs clearance success rate",
    metric: "99.8%",
    trend: "",
    color: "primary-start",
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Average total landed cost optimization",
    metric: "14%",
    trend: "↓",
    color: "accent",
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description: "Complete shipment visibility across all carriers",
    metric: "24/7",
    trend: "",
    color: "primary-start",
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    description: "Net Promoter Score from enterprise clients",
    metric: "76 NPS",
    trend: "",
    color: "primary-start",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Countries with active trade corridors",
    metric: "42+",
    trend: "",
    color: "primary-start",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function Traction() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space font-bold text-4xl lg:text-5xl gradient-text mb-4">
            Numbers that de-risk your decision.
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Proven track record with measurable outcomes across global trade corridors.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            
            return (
              <motion.div
                key={kpi.title}
                className="glass rounded-2xl p-8 card-tilt group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                }}
                data-testid={`kpi-card-${kpi.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, var(--${kpi.color}), transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    {kpi.trend && (
                      <motion.span 
                        className={`text-accent text-sm font-medium ${
                          kpi.trend === "↑" ? "text-green-400" : "text-accent"
                        }`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {kpi.trend} {kpi.metric}
                      </motion.span>
                    )}
                    {!kpi.trend && (
                      <motion.span 
                        className="text-accent text-sm font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {kpi.metric}
                      </motion.span>
                    )}
                  </div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-text-primary mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {kpi.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-text-secondary leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {kpi.description}
                  </motion.p>
                </div>

                {/* Hover border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, var(--${kpi.color}), transparent)`,
                    padding: "1px",
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
