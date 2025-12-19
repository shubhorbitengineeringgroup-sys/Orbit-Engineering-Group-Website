import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Cog, Cloud, Factory, Sliders, Wrench } from "lucide-react";
import ourExpertiseIcon from "@/assets/icons/our-expertise.png";
import endToEndTreatmentIcon from "@/assets/icons/end-to-end-treatment-systems.png";
import smartWaterSolutionsIcon from "@/assets/icons/smart-water-solutions.png";
import technicalServicesIcon from "@/assets/icons/technical-services.png";

const ExpertiseSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 text-xl">
            <img src={ourExpertiseIcon} alt="Our Expertise" className="h-10 w-10 mr-3" />
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Smart Water Solutions,</span>
            <br />
            <span className="text-primary">Real‑Time Control — Turnkey Treatment, One Source</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            At Sync Water Tech, we deliver comprehensive, cutting-edge water and wastewater treatment solutions. Our expertise
            spans water treatment plants, sewage and effluent systems, and cloud‑enabled IoT automation. We offer a robust
            portfolio — from RO systems, DM and UF units, to STPs in ASP, MBBR, and MBR configurations.
          </p>
        </div>

        {/* Overview */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <Card className="hover-lift border-0 shadow-water bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <img src={endToEndTreatmentIcon} alt="End-to-End Treatment Systems" className="h-10 w-10" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">End‑to‑End Treatment Systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                  Our automation suite includes PLC 
panels, sensors, and remote 
monitoring tools. With high
performance chemicals and 
genuine spare parts like 
 
membranes and FRP vessels, we 
ensure optimal system longevity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-water bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <img src={smartWaterSolutionsIcon} alt="Smart Water Solutions" className="h-10 w-10" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Smart Water Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                  Our services cover installation, 
commissioning, consultancy, and 
turnkey O&M across all treatment 
systems. We also provide expert 
design, GPS survey, and 
automation deployment, tailored 
to your infrastructure needs. Trust 
Sync Water Tech to engineer 
efficiency, sustainability, and 
control-every drop of the way.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services List */}
        <div className="bg-card border border-border rounded-3xl p-10 shadow-float">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <img src={technicalServicesIcon} alt="Technical Services" className="h-10 w-10" />
              <h3 className="text-2xl font-bold">Technical Services</h3>
            </div>
            <Badge variant="outline" className="text-primary border-primary">Turnkey & O&M</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Installation & commissioning of WTP, STP, RO, ETP systems</span>
              </li>
              <li className="flex items-start space-x-3">
                <Sliders className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Consultancy in design, process control, and automation</span>
              </li>
              <li className="flex items-start space-x-3">
                <Wrench className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Operations & maintenance (O&M) services for all water systems</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Cog className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Drawing/design services and GPS survey work (incl. 33kV/11kV/LT line mapping)</span>
              </li>
              <li className="flex items-start space-x-3">
                <Cloud className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">Turnkey automation & secure cloud deployment solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Closing line removed as requested */}
      </div>
    </section>
  );
};

export default ExpertiseSection;



