import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Handshake } from "lucide-react";
import careersImage from "@/assets/pioneering-force.jpeg";

const CareersSection = () => {
  return (
    <section id="careers" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join a Pioneering Force in <span className="text-primary">Water Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Are you a mechanical or electrical engineer eager to make an impact?
          </p>
        </div>

        <Card className="border-0 shadow-water bg-card/80 backdrop-blur-sm hover-glow animate-fade-in-up">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">At Orbit Engineering Group, you’ll:</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Rocket className="h-5 w-5 text-primary" />,
                      text:
                        "Innovate in a dynamic, fast‑growing water‑tech environment.",
                    },
                    {
                      icon: <Handshake className="h-5 w-5 text-primary" />,
                      text:
                        "Collaborate with seasoned professionals skilled across technologies—from traditional water treatment systems to advanced automation.",
                    },
                    {
                      icon: <Users className="h-5 w-5 text-primary" />,
                      text:
                        "Build your career through meaningful projects, with strong mentorship and competitive benefits.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="p-2 bg-muted rounded-md">{item.icon}</div>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium">
                  Ready to be part of a team that shapes sustainable water infrastructure solutions?
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl shadow-float">
                  <img
                    src={careersImage}
                    alt="Pioneering force in water technology at Orbit Engineering Group"
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold text-primary">Write to us:</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Flat%20No.%202%2C%20Block%2012%2C%20Shalimar%20Enclave%2C%20E3%20Arera%20Colony%2C%20Bhopal%20462016"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-smooth"
              >
                Flat No. 2, Block 12, Shalimar Enclave, E3 Arera Colony, Bhopal – 462016
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <a href="tel:+917024128029" className="text-sm hover:text-primary transition-smooth">
                +91 70241 28029
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <a href="mailto:info@orbitengineerings.com" className="text-sm hover:text-primary transition-smooth">
                info@orbitengineerings.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;


