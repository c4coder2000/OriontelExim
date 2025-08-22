import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";

const partners = [
  { name: "DHL", logo: "https://cdn.worldvectorlogo.com/logos/dhl-1.svg" },
  {
    name: "FedEx",
    logo: "https://static.vecteezy.com/system/resources/previews/020/335/975/original/fedex-logo-fedex-icon-free-free-vector.jpg",
  },
  {
    name: "UPS",
    logo: "https://cdn.worldvectorlogo.com/logos/ups-united-parcel-service.svg",
  },
  {
    name: "Maersk",
    logo: "https://www.dafont.com/forum/attach/orig/1/2/12616.gif",
  },
  { name: "MSC", logo: "https://cdn.worldvectorlogo.com/logos/msc-1.svg" },
  {
    name: "Aramex",
    logo: "https://planetexpress.com/wp-content/uploads/2017/10/aramex.png",
  },
];

export default function PartnerMarquee() {
  const handlePartnerClick = (partnerName: string) => {
    // Track analytics for partner logo clicks
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "partner_logo_click",
        data: { partner: partnerName },
      }),
    }).catch(console.error);
  };

  return (
    <section className="py-12 border-t border-b border-surface-border">
      <div className="container mx-auto px-6 text-center mb-8">
        <motion.p
          className="text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by logistics leaders
        </motion.p>
      </div>

      <Marquee speed={25} pauseOnHover data-testid="partner-marquee">
        {partners.map((partner, index) => (
          <motion.button
            key={`${partner.name}-${index}`}
            className="h-8 opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 focus:grayscale-0 focus:opacity-100"
            onClick={() => handlePartnerClick(partner.name)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            data-testid={`partner-logo-${partner.name.toLowerCase()}`}
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-full w-auto object-contain"
              loading="lazy"
            />
          </motion.button>
        ))}
      </Marquee>
    </section>
  );
}
