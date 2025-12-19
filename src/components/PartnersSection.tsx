import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Award, Zap, Shield, ArrowRight } from "lucide-react";
import fujiElectricLogo from "@/assets/partners/fuji-electric.png";
import nivelcoLogo from "@/assets/partners/nivelco.png";
import nowatechLogo from "@/assets/partners/nowatech.png";
import phoenixContactLogo from "@/assets/partners/phoenix-contact.png";
import prominentLogo from "@/assets/partners/prominent.png";
import rockwellAutomationLogo from "@/assets/partners/rockwell-automation.png";
import partnersIcon from "@/assets/icons/partners.png";
import valuedClientsIcon from "@/assets/icons/valued-clients.png";
import { motion } from "framer-motion";

const PartnersSection = () => {

  const partners = [
    {
      id: "fuji-electric",
      name: "Fuji Electric",
      logo: fujiElectricLogo,
      category: "Automation Solutions"
    },
    {
      id: "nivelco",
      name: "NIVELCO",
      logo: nivelcoLogo,
      category: "Level Measurement"
    },
    {
      id: "nowatech",
      name: "Nowatech",
      logo: nowatechLogo,
      category: "Water Technology"
    },
    {
      id: "phoenix-contact",
      name: "Phoenix Contact",
      logo: phoenixContactLogo,
      category: "Industrial Automation"
    },
    {
      id: "prominent",
      name: "ProMinent",
      logo: prominentLogo,
      category: "Water Treatment"
    },
    {
      id: "rockwell-automation",
      name: "Rockwell Automation",
      logo: rockwellAutomationLogo,
      category: "Industrial Control"
    }
  ];

  const clients = [
    "MP Jal Nigam",
    "MPUDCL Bhopal",
    "Bhopal Municipal Corporation",
    "Indore District Administration",
    "Tikamgarh Nagar Parishads",
    "WRD Bhopal",
    "Prism Cement",
    "Lupin Pharmaceuticals",
    "Vindhayachal Distillery",
    "Central India Pvt Ltd",
    "Dilip Buildcon",
    "Tejas Construction"
  ];


  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 animate-bounce text-xl">
            <img src={partnersIcon} alt="Our Partners" className="h-10 w-10 mr-3" />
            Our Partners
          </Badge>
        </div>

        {/* Horizontal Partners Showcase */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-primary/5 via-background to-primary/5 rounded-3xl p-8 border border-primary/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-16 py-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 group-hover:border-primary/30 h-full flex flex-col items-center justify-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300 flex-shrink-0">
                      <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain object-center group-hover:scale-110 transition-transform duration-300" style={{objectPosition: 'center'}} />
                    </div>
                    <h4 className="font-bold text-base text-center group-hover:text-primary transition-colors duration-300 leading-tight flex-shrink-0">{partner.name}</h4>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        

        
      </div>
    </section>
  );
};

export default PartnersSection;