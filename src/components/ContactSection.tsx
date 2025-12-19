import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";
import getInTouchIcon from "@/assets/icons/get-in-touch.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91-9425005008",
      action: "tel:+919425005008",
      description: "Call us directly for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "info@syncwatertech.com",
      action: "mailto:info@syncwatertech.com",
      description: "Send us an email for detailed inquiries"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "Flat no.1, Block 12, Shalimar Enclave, E3 Arera Colony, Bhopal. 462016",
      action: "https://maps.google.com/?q=Flat+no.1,+Block+12,+Shalimar+Enclave,+E3+Arera+Colony,+Bhopal+462016",
      description: "Visit our office for consultations"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 text-xl">
            <img src={getInTouchIcon} alt="Get In Touch" className="h-10 w-10 mr-3" />
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-primary">We are always ready to help you</span>
            <br />
            <span className="text-foreground">and answer your questions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8 animate-slide-in-left">
          

          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift border-0 shadow-water bg-card/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                      <a
                        href={info.title === "Address" ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Flat no.1, Block 12, Shalimar Enclave, E3 Arera Colony, Bhopal, Madhya Pradesh 462016, India")}` : info.action}
                        target={info.title === "Address" ? "_blank" : "_self"}
                        rel={info.title === "Address" ? "noopener noreferrer" : ""}
                        className="text-primary hover:text-primary/80 transition-smooth font-medium text-sm break-all"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

            {/* Business Hours */}
            <Card className="border-0 shadow-water bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-float bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="text-sm font-medium mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="transition-smooth focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                      rows={5}
                      className="transition-smooth focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-water-gradient hover:shadow-glow transition-smooth"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional CTA */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Need immediate assistance or have a complex project?
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 animate-fade-in-up">
          <Card className="border-0 shadow-float overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <iframe
                  src="https://maps.google.com/maps?q=Flat+no.1,+Block+12,+Shalimar+Enclave,+E3+Arera+Colony,+Bhopal,+Madhya+Pradesh+462016&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sync Water Tech Office Location"
                  className="w-full h-64"
                ></iframe>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold text-sm">Visit Our Office</h4>
                      <p className="text-xs text-muted-foreground">
                        Flat no.1, Block 12, Shalimar Enclave,<br />
                        E3 Arera Colony, Bhopal. 462016
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;