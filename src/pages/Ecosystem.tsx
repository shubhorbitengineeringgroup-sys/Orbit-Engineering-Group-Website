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
import microthermLogo from "@/assets/partners/microtherm.jpg";
import siemensLogo from "@/assets/partners/siemens.jpg";
import rotronicLogo from "@/assets/partners/rotronic.jpg";
import secureLogo from "@/assets/partners/secure.jpg";
import measurementSpecialtiesLogo from "@/assets/partners/measurement-specialties.jpg";
import forbesMarshallLogo from "@/assets/partners/forbes-marshall.jpg";
import regadaLogo from "@/assets/partners/regada.png";

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
            id: "forbes-marshall",
            name: "Forbes Marshall",
            logo: forbesMarshallLogo,
            category: "Process Efficiency"
        },
        {
            id: "fuji-electric",
            name: "Fuji Electric",
            logo: fujiElectricLogo,
            category: "Automation Solutions"
        },
        {
            id: "measurement-specialties",
            name: "Measurement Specialties",
            logo: measurementSpecialtiesLogo,
            category: "Sensors"
        },
        {
            id: "microtherm",
            name: "MICROTHERM",
            logo: microthermLogo,
            category: "Thermal Protection"
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
            id: "regada",
            name: "Regada",
            logo: regadaLogo,
            category: "Actuators"
        },
        {
            id: "rockwell-automation",
            name: "Rockwell Automation",
            logo: rockwellAutomationLogo,
            category: "Industrial Control"
        },
        {
            id: "rotronic",
            name: "Rotronic",
            logo: rotronicLogo,
            category: "Measurement Solutions"
        },
        {
            id: "secure",
            name: "SECURE",
            logo: secureLogo,
            category: "Energy Management"
        },
        {
            id: "siemens",
            name: "SIEMENS",
            logo: siemensLogo,
            category: "Industrial Automation"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <section className="py-24 bg-gradient-to-b from-background to-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Valued Clients Section */}
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

                    <div className="bg-gradient-to-br from-card to-card/80 border border-border rounded-3xl p-6 md:p-12 shadow-float overflow-hidden mb-24 perspective-1000">
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >
                            {clients.map((client, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            scale: 0,
                                            rotateX: -90, // Start flipped back completely
                                            y: 100,
                                            filter: "blur(20px)",
                                        },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            rotateX: 0,
                                            y: 0,
                                            filter: "blur(0px)",
                                            transition: {
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                mass: 1
                                            }
                                        }
                                    }}
                                    style={{ transformStyle: "preserve-3d" }} // Enable 3D transitions
                                >
                                    <Card className="group bg-gradient-to-br from-background/80 to-muted/30 rounded-xl text-center hover-lift transition-all duration-500 hover:scale-105 hover:shadow-lg border border-border/50 h-full backface-hidden">
                                        <CardContent className="p-4 md:p-6 h-full flex flex-col items-center justify-center">
                                            <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors overflow-hidden p-3 shadow-inner transform group-hover:rotate-12 transition-transform duration-500">
                                                <img src={client.icon} alt={client.name} className="w-full h-full object-contain drop-shadow-sm" />
                                            </div>
                                            <h4 className="font-semibold text-xs md:text-sm group-hover:text-primary transition-colors">{client.name}</h4>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Our Partners Section (Moved here from Partners page) */}
                    <div className="text-center mb-12 animate-fade-in-up">
                        <Badge variant="secondary" className="mb-6 text-xl">
                            <img src={partnersIcon} alt="Our Partners" className="h-10 w-10 mr-3" />
                            Our Partners
                        </Badge>
                        <h3 className="text-3xl font-bold mb-4">
                            <span className="text-foreground">Global Technology</span> <span className="text-primary">Alliances</span>
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Collaborating with world-class leaders to bring the finest water technology solutions to India.
                        </p>
                    </div>

                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="bg-gradient-to-r from-primary/5 via-background to-primary/5 rounded-3xl p-8 border border-primary/10 overflow-hidden">
                            {/* Marquee Container */}
                            <motion.div
                                className="flex gap-8 w-max"
                                animate={{ x: "-50%" }}
                                transition={{
                                    ease: "linear",
                                    duration: 40,
                                    repeat: Infinity,
                                }}
                            >
                                {/* Duplicated list for seamless infinite scroll */}
                                {[...partners, ...partners].map((partner, index) => (
                                    <div
                                        key={`${partner.id}-${index}`}
                                        className="group relative flex-shrink-0 w-[220px]"
                                    >
                                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 group-hover:border-primary/30 h-full flex flex-col items-center justify-center">
                                            <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300 flex-shrink-0">
                                                <img src={partner.logo} alt={partner.name} className="w-20 h-20 object-contain object-center group-hover:scale-110 transition-transform duration-300" style={{ objectPosition: 'center' }} />
                                            </div>
                                            <h4 className="font-bold text-sm text-center group-hover:text-primary transition-colors duration-300 leading-tight flex-shrink-0">{partner.name}</h4>
                                        </div>
                                        {/* Decorative elements */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </section>
            <ContactSection />
        </div>
    );
};

export default Ecosystem;
