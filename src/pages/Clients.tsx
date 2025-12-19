import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import valuedClientsIcon from "@/assets/icons/valued-clients.png";
import ContactSection from "@/components/ContactSection";

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

const Clients = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
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
       <ContactSection />
    </div>
  );
};

export default Clients;


