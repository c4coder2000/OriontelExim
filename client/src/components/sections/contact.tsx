import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import MagneticButton from "@/components/ui/magnetic-button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: "Empire Plaza, II-B-II-2R-34/RH/SH, Machine Mohallah No.3, Jhelum, Punjab, Pakistan - 49600",
    link: "https://maps.google.com/?q=Empire+Plaza+Jhelum+Punjab+Pakistan",
  },
  {
    icon: Mail,
    title: "Email",
    details: "oriontelexim@gmail.com",
    link: "mailto:oriontelexim@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+92 300 2711881 | +92 333 2711881",
    link: "tel:+923002711881",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        // Track form submission
        fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "contact_form_submit",
            data: { company: data.company || "Not provided" },
          }),
        }).catch(console.error);
      } else {
        setSubmitStatus("error");
        toast({
          title: "Failed to send message",
          description: result.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setSubmitStatus("error");
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "923002711881"; // ORIONTEL EXIM main number
    const message = encodeURIComponent(
      "Hi! I'm interested in ORIONTEL EXIM's global trade solutions. I'd like to discuss my requirements."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");

    // Track WhatsApp click
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "whatsapp_click",
        data: { source: "contact_section" },
      }),
    }).catch(console.error);
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.h2
                className="font-space font-bold text-4xl lg:text-5xl text-text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                className="text-xl text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Ready to optimize your global trade operations? Let's discuss your specific requirements and challenges.
              </motion.p>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 group"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                    data-testid={`contact-info-${info.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ 
                        rotate: 360,
                        boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)",
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary-start transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-text-secondary group-hover:text-text-primary transition-colors">
                        {info.details}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <MagneticButton
                className="glass text-text-primary border border-surface-border hover:border-accent px-8 py-4"
                variant="outline"
                onClick={handleWhatsApp}
                testId="contact-whatsapp-button"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-text-primary">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="glass border-surface-border focus:border-primary-start bg-transparent text-text-primary placeholder:text-text-secondary"
                    placeholder="Your name"
                    data-testid="contact-form-name"
                  />
                  {errors.name && (
                    <motion.p
                      className="text-accent text-sm flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-text-primary">
                    Company
                  </Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className="glass border-surface-border focus:border-primary-start bg-transparent text-text-primary placeholder:text-text-secondary"
                    placeholder="Company name"
                    data-testid="contact-form-company"
                  />
                  {errors.company && (
                    <motion.p
                      className="text-accent text-sm flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.company.message}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-text-primary">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="glass border-surface-border focus:border-primary-start bg-transparent text-text-primary placeholder:text-text-secondary"
                  placeholder="your@email.com"
                  data-testid="contact-form-email"
                />
                {errors.email && (
                  <motion.p
                    className="text-accent text-sm flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-text-primary">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  className="glass border-surface-border focus:border-primary-start bg-transparent text-text-primary placeholder:text-text-secondary resize-none"
                  placeholder="Tell us about your trade requirements..."
                  data-testid="contact-form-message"
                />
                {errors.message && (
                  <motion.p
                    className="text-accent text-sm flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="gradient-bg w-full py-4 text-white font-medium hover:scale-105 transition-transform"
                data-testid="contact-form-submit"
              >
                {isSubmitting ? (
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </motion.div>
                ) : submitStatus === "success" ? (
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </Button>

              <motion.p
                className="text-xs text-text-secondary text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                By submitting this form, you agree to our privacy policy and terms of service.
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
