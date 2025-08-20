import { motion } from "framer-motion";
import { BarChart3, Zap, Lightbulb, Lock } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Tracking",
    description: "Monitor every shipment across all carriers with live updates and predictive delivery windows.",
  },
  {
    icon: Zap,
    title: "Automated Compliance",
    description: "AI-powered documentation and regulatory compliance checks across all jurisdictions.",
  },
  {
    icon: Lightbulb,
    title: "Predictive Analytics",
    description: "Machine learning algorithms predict potential delays and optimize routing decisions.",
  },
  {
    icon: Lock,
    title: "Secure Integration",
    description: "Enterprise-grade security with seamless ERP and WMS system integration.",
  },
];

const mockChartData = [
  { height: "60%", delay: 0 },
  { height: "80%", delay: 0.1 },
  { height: "40%", delay: 0.2 },
  { height: "90%", delay: 0.3 },
  { height: "70%", delay: 0.4 },
  { height: "50%", delay: 0.5 },
];

const mockMetrics = [
  { label: "On-Time", value: "92%" },
  { label: "This Month", value: "$2.1M" },
  { label: "Countries", value: "156" },
];

export default function DigitalHub() {
  const handleRequestDemo = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    // Track demo request
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "demo_request",
        data: { source: "digital_hub_section" },
      }),
    }).catch(console.error);
  };

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
            Digital Trade Hub
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Real-time analytics and automation platform providing complete visibility into your global operations.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid-pattern w-full h-full" />
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Dashboard Mockup */}
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="glass rounded-2xl p-6 border border-surface-border">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-text-primary">
                      Trade Analytics Dashboard
                    </h3>
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-2 h-2 bg-accent rounded-full"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs text-text-secondary">Live</span>
                    </div>
                  </div>

                  {/* Mock Chart */}
                  <div className="space-y-6">
                    <div className="glass rounded-xl p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-text-secondary">Shipment Status</span>
                        <span className="text-sm font-medium gradient-text">847 Active</span>
                      </div>
                      <div className="flex gap-2 h-20 items-end">
                        {mockChartData.map((bar, index) => (
                          <motion.div
                            key={index}
                            className={`flex-1 rounded-t ${
                              index % 3 === 0
                                ? "bg-primary-start/30"
                                : index % 3 === 1
                                ? "bg-primary-end/30"
                                : "bg-accent/30"
                            }`}
                            initial={{ height: 0 }}
                            whileInView={{ height: bar.height }}
                            viewport={{ once: true }}
                            transition={{ delay: bar.delay + 0.5, duration: 0.8, ease: "easeOut" }}
                          />
                        ))}
                      </div>
                    </div>

                    <motion.div
                      className="grid grid-cols-3 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      {mockMetrics.map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          className="glass rounded-xl p-4 text-center"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                        >
                          <div className="text-lg font-bold gradient-text">{metric.value}</div>
                          <div className="text-xs text-text-secondary">{metric.label}</div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              <div className="order-1 lg:order-2 space-y-8">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    
                    return (
                      <motion.div
                        key={feature.title}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      >
                        <motion.div 
                          className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0"
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 360,
                            boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)",
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-primary mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-text-secondary leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <MagneticButton
                    className="gradient-bg text-white px-8 py-4"
                    onClick={handleRequestDemo}
                    testId="digital-hub-request-demo"
                  >
                    Request Demo
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
