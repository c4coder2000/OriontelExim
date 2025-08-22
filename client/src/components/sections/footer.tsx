import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowUpCircle } from "lucide-react";

const services = [
  { label: "Import/Export", href: "#services" },
  { label: "Compliance Advisory", href: "#services" },
  { label: "Digital Trade Hub", href: "#services" },
  { label: "Logistics Solutions", href: "#services" },
];

const company = [
  { label: "About Us", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Markets", href: "#markets" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Compliance", href: "/compliance" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/oriontel-exim",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/oriontelexim",
    label: "Twitter",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Track scroll to top
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "scroll_to_top",
        data: { source: "footer" },
      }),
    }).catch(console.error);
  };

  const handleSocialClick = (platform: string) => {
    // Track social media clicks
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "social_click",
        data: { platform, source: "footer" },
      }),
    }).catch(console.error);
  };

  const handleLinkClick = (href: string, section: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Track footer navigation
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "footer_navigation",
        data: { section, href },
      }),
    }).catch(console.error);
  };

  return (
    <footer className="py-16 border-t border-surface-border relative">
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-8 right-8 w-12 h-12 rounded-full glass border border-surface-border flex items-center justify-center text-text-secondary hover:text-primary-start transition-colors group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        data-testid="scroll-to-top"
      >
        <ArrowUpCircle className="w-6 h-6 group-hover:animate-bounce" />
      </motion.button>

      <div className="container mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              data-testid="footer-logo"
            >
              <img
                src="https://i.ibb.co/Hf5NmGS8/Whats-App-Image-2025-08-22-at-07-37-51-91f713b4.jpg"
                alt="ORIONTEL EXIM Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-space font-bold text-2xl text-text-primary">
                ORIONTEL EXIM
              </span>
            </motion.div>

            <p className="text-text-secondary leading-relaxed max-w-md">
              ORIONTEL EXIM (SMC-Private) Limited is your trusted partner in
              modern trade solutions, seamlessly connecting Pakistani businesses
              with international markets. Driven by legal compliance,
              operational integrity, and global best practices.
            </p>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center text-text-secondary hover:text-primary-start transition-colors group"
                    onClick={() => handleSocialClick(social.label)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    data-testid={`footer-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleLinkClick(service.href, "services")}
                    className="text-text-secondary hover:text-text-primary transition-colors hover:translate-x-1 transform duration-200"
                    data-testid={`footer-service-${service.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {service.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {company.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                >
                  <button
                    onClick={() => handleLinkClick(item.href, "company")}
                    className="text-text-secondary hover:text-text-primary transition-colors hover:translate-x-1 transform duration-200"
                    data-testid={`footer-company-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-surface-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Contact Information
            </h3>
            <div className="space-y-2 text-text-secondary">
              <p>Empire Plaza, II-B-II-2R-34/RH/SH</p>
              <p>Machine Mohallah No.3, Jhelum, Punjab</p>
              <p>Pakistan - 49600</p>
              <motion.a
                href="mailto:oriontelexim@gmail.com"
                className="block hover:text-text-primary transition-colors"
                whileHover={{ x: 5 }}
                data-testid="footer-email"
              >
                oriontelexim@gmail.com
              </motion.a>
              <motion.a
                href="tel:+923002711881"
                className="block hover:text-text-primary transition-colors"
                whileHover={{ x: 5 }}
                data-testid="footer-phone"
              >
                +92 300 2711881
              </motion.a>
              <motion.a
                href="tel:+923332711881"
                className="block hover:text-text-primary transition-colors"
                whileHover={{ x: 5 }}
                data-testid="footer-phone-2"
              >
                +92 333 2711881
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Business Hours
            </h3>
            <div className="space-y-2 text-text-secondary">
              <p>Monday - Friday: 9:00 AM - 6:00 PM (PKT)</p>
              <p>Saturday: 9:00 AM - 2:00 PM (PKT)</p>
              <p>Sunday: Closed</p>
              <p className="text-sm italic">24/7 Emergency Support Available</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            className="text-text-secondary text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            © {new Date().getFullYear()} ORIONTEL EXIM (SMC-Private). All
            rights reserved. | Registered with SECP since June 12, 2025
          </motion.div>

          <motion.div
            className="flex items-center space-x-6 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {legal.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => handleLinkClick(item.href, "legal")}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                data-testid={`footer-legal-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-8 pt-8 border-t border-surface-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="text-center">
            <motion.p
              className="text-xs text-text-secondary mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Empowering global trade through technology and compliance
              excellence
            </motion.p>
            <motion.div
              className="w-24 h-px bg-gradient-to-r from-transparent via-primary-start to-transparent mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
