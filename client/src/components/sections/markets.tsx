import { motion } from "framer-motion";

const regions = [
  { emoji: "🇺🇸", name: "North America", percentage: 24 },
  { emoji: "🇪🇺", name: "Europe", percentage: 28 },
  { emoji: "🇦🇪", name: "Middle East", percentage: 32 },
  { emoji: "🇮🇳", name: "South Asia", percentage: 16 },
  { emoji: "🇿🇦", name: "Africa", percentage: 12 },
  { emoji: "🇦🇺", name: "Australia", percentage: 8 },
];

const metrics = [
  { label: "Active Trade Lanes", value: "156+" },
  { label: "Local Partners", value: "89" },
  { label: "Regulatory Experts", value: "24" },
  { label: "Languages Supported", value: "12" },
];

export default function Markets() {
  return (
    <section className="py-20" id="markets">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space font-bold text-4xl lg:text-5xl text-text-primary mb-4">
            Global Market Presence
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Strategic positioning across key trade corridors with local expertise and regulatory knowledge.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Map Visual */}
            <div className="lg:col-span-2">
              <motion.img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
                alt="Global trade routes map"
                className="w-full rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                data-testid="global-map-image"
              />
              
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {regions.map((region, index) => (
                  <motion.button
                    key={region.name}
                    className="glass rounded-xl p-4 text-center hover:bg-primary-start/10 transition-colors cursor-pointer group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    onClick={() => {
                      // Track region clicks
                      fetch("/api/analytics", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          event: "region_click",
                          data: { region: region.name },
                        }),
                      }).catch(console.error);
                    }}
                    data-testid={`region-${region.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <motion.div 
                      className="text-2xl mb-2"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {region.emoji}
                    </motion.div>
                    <div className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {region.name}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Market Stats */}
            <div className="space-y-8">
              <motion.div
                className="glass rounded-xl p-6 border border-surface-border"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h3 className="text-lg font-bold text-text-primary mb-4">Regional Expertise</h3>
                <div className="space-y-4">
                  {regions.slice(0, 4).map((region, index) => (
                    <motion.div
                      key={region.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-text-secondary text-sm">{region.name}</span>
                        <span className="text-text-primary text-sm font-medium">{region.percentage}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="gradient-bg h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${region.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-xl p-6 border border-surface-border"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <h3 className="text-lg font-bold text-text-primary mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      className="flex justify-between"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <span className="text-text-secondary">{metric.label}</span>
                      <span className="text-text-primary font-medium">{metric.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
