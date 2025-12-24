import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import valuedClientsIcon from "@/assets/icons/valued-clients.png";
import ContactSection from "@/components/ContactSection";
import partnersIcon from "@/assets/icons/partners.png";
import { motion } from "framer-motion";

// Client logos
import bharatSarkarIcon from "@/assets/icons/bharat-sarkar.png";
import mpudclIndoreDistrictIcon from "@/assets/icons/mpudcl-indore-district.png";
import bhopalMunicipalCorporationIcon from "@/assets/icons/bhopal-municipal-corporation.jpg";
import prismCementIcon from "@/assets/icons/prism-cement.png";
import lupinPharmaIcon from "@/assets/icons/lupin-pharma.png";
import vindhayachalDistilleryIcon from "@/assets/icons/vindhayachal-distillery.png";
import centralIndiaPvtLtdIcon from "@/assets/icons/central-india-pvt-ltd.png";
import dilipBuildconIcon from "@/assets/icons/dilip-buildcon-limited.png";
import tejasConstructionsIcon from "@/assets/icons/tejas-constructions.png";

// Partner logos
import fujiElectricLogo from "@/assets/partners/fuji-electric.png";
import nivelcoLogo from "@/assets/partners/nivelco.png";
import nowatechLogo from "@/assets/partners/nowatech.png";
import phoenixContactLogo from "@/assets/partners/phoenix-contact.png";
import prominentLogo from "@/assets/partners/prominent.png";
import rockwellAutomationLogo from "@/assets/partners/rockwell-automation.png";

const Ecosystem = () => {
    const clients = [
        { name: "MP Jal Nigam", icon: bharatSarkarIcon },
        { name: "MPUDCL Bhopal", icon: mpudclIndoreDistrictIcon },
        { name: "Bhopal Municipal Corporation", icon: bhopalMunicipalCorporationIcon },
        { name: "Indore District Administration", icon: mpudclIndoreDistrictIcon },
        { name: "Tikamgarh Nagar Parishads", icon: bharatSarkarIcon },
        { name: "WRD Bhopal", icon: bharatSarkarIcon },
        { name: "Prism Cement", icon: prismCementIcon },
        { name: "Lupin Pharmaceuticals", icon: lupinPharmaIcon },
        { name: "Vindhayachal Distillery", icon: vindhayachalDistilleryIcon },
        { name: "Central India Pvt Ltd", icon: centralIndiaPvtLtdIcon },
        { name: "Dilip Buildcon", icon: dilipBuildconIcon },
        { name: "Tejas Construction", icon: tejasConstructionsIcon },
    ];

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

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Valued Clients Section */}
            <section className="pt-24 pb-12 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-fade-in-up">
                        <Badge variant="outline" className="mb-4 border-primary text-primary text-xl">
                            <img src={valuedClientsIcon} alt="Valued Clients" className="h-10 w-10 mr-3" />
                            Valued Clients
                        </Badge>
                        <h3 className="text-3xl font-bold mb-4">
                            Serving <span className="text-primary animate-pulse">Government & Private Enterprises</span>
                        </h3>
                        <p className="text-lg text-muted-foreground">
                            Trusted by leading organizations across India for water infrastructure solutions
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-card to-card/80 border border-border rounded-3xl p-12 shadow-float overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {clients.map((client, index) => (
                                <Card key={index} className="group bg-gradient-to-br from-background/80 to-muted/30 rounded-xl text-center hover-lift transition-all duration-500 hover:scale-105 hover:shadow-lg border border-border/50 animate-scale-in">
                                    <CardContent className="p-6">
                                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors overflow-hidden">
                                            <img src={client.icon} alt={client.name} className={`${client.name === "Tejas Construction" ? "w-28 h-28" : "w-20 h-20"} object-contain`} />
                                        </div>
                                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{client.name}</h4>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section (Moved here) */}
            <section className="pt-12 pb-24 bg-gradient-to-b from-muted/30 to-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <Badge variant="secondary" className="mb-6 animate-bounce text-xl">
                            <img src={partnersIcon} alt="Our Partners" className="h-10 w-10 mr-3" />
                            Our Partners
                        </Badge>
                    </div>

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
                                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 group-hover:border-primary/30 h-full flex flex-col items-center justify-center">
                                            <div className="w-28 h-28 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300 flex-shrink-0">
                                                <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain object-center group-hover:scale-110 transition-transform duration-300" style={{ objectPosition: 'center' }} />
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

            <ContactSection />
        </div>
    );
};

export default Ecosystem;
