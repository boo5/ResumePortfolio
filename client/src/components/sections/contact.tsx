import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Twitter, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: data.message,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error sending message",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "boo798467@gmail.com",
      href: "mailto:boo798467@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+905391054876",
      href: "tel:+905391054876"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/boo-amjad-14b29533b/",
      href: "https://www.linkedin.com/in/boo-amjad-14b29533b/"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", color: "hover:text-gray-300" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/boo-amjad-14b29533b/", color: "hover:text-blue-600" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[var(--portfolio-accent)]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--portfolio-accent)] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[var(--portfolio-secondary)]/30 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-[var(--portfolio-accent)]">Let's Connect</h3>
                <p className="text-slate-300 mb-6">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you're looking for a developer, have a question, or just want to connect, 
                  I'd love to hear from you.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div 
                        key={info.label}
                        className="flex items-center space-x-4"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-12 h-12 bg-[var(--portfolio-accent)]/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-[var(--portfolio-accent)]" />
                        </div>
                        <div>
                          <p className="text-slate-300">{info.label}</p>
                          <a 
                            href={info.href}
                            className="text-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent)]/80 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 bg-[var(--portfolio-accent)]/20 rounded-lg flex items-center justify-center hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-primary)] transition-colors duration-200 ${social.color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[var(--portfolio-secondary)]/30 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-[var(--portfolio-secondary)] border-slate-600 focus:border-[var(--portfolio-accent)] text-slate-50 placeholder-slate-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-[var(--portfolio-secondary)] border-slate-600 focus:border-[var(--portfolio-accent)] text-slate-50 placeholder-slate-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-[var(--portfolio-secondary)] border-slate-600 focus:border-[var(--portfolio-accent)] text-slate-50 placeholder-slate-400"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-[var(--portfolio-secondary)] border-slate-600 focus:border-[var(--portfolio-accent)] text-slate-50 placeholder-slate-400 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)]/90 text-[var(--portfolio-primary)] px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--portfolio-primary)] mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
