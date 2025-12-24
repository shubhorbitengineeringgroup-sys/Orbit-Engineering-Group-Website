import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cog,
  MonitorSpeaker,
  Zap,
  Shield,
  BarChart3,
  Droplets,
  Settings,
  Cloud,
  Wifi
} from "lucide-react";
import villageProjectImage from "@/assets/village-project-2.jpg";
import panoramicUpperLakeImage from "@/assets/panaromic-view-of-upperlake.jpg";
import innovativeTechnologyIcon from "@/assets/icons/innovative-technology.png";
import automationSystemsIcon from "@/assets/icons/automation-systems.png";
import digitalManagementIcon from "@/assets/icons/digital-management.png";
import fusionTechnologyIcon from "@/assets/icons/fusion-technology.png";

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 text-xl">
              <img src={innovativeTechnologyIcon} alt="Innovative Technology" className="h-10 w-10 mr-3" />
              Innovative Technology
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Innovative Tech to</span>
              <br />
              <span className="text-primary">Drive Sustainable Water</span>
              <br />
              <span className="text-foreground">Management</span>
            </h2>
          </div>

          {/* Village Project Image */}
          <div className="relative">
            <img
              src={villageProjectImage}
              alt="Village water project"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Automation Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary text-xl">
                <img src={automationSystemsIcon} alt="Automation Systems" className="h-10 w-10 mr-3" />
                Automation Systems
              </Badge>
              <h3 className="text-3xl font-bold mb-6">Automation of Water Systems</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Orbit Engineering Group specialises in advanced automation — adopting state-of-the-art
                technologies to enhance water resource management, efficiency and sustainability:
              </p>

              <div className="space-y-4">
                {[
                  "Modernising existing infrastructure (dams, canals) to meet rising water demands.",
                  "Smart water management systems combining SCADA and GIS for centralised urban water utility control.",
                  "Sensor & IoT integration for real-time monitoring of flow, quality, levels, soil moisture and weather conditions.",
                  "Data-driven decision-making utilising analytics and predictive maintenance to optimise resource allocation, detect leaks and plan upkeep.",
                  "Enhanced conservation by precisely controlling distribution to reduce leaks, overflows and inefficient irrigation.",
                  "Cost-efficiency gains via automation of pump stations, distribution networks and maintenance alerts—minimising manual labour and resource wastage."
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-muted-foreground mt-8 font-medium">
                Orbit Engineering Group empowers communities with smarter, greener, and more reliable water
                infrastructure across both rural and urban settings.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative -mt-8">
                <img
                  src={panoramicUpperLakeImage}
                  alt="Panoramic view of Upper Lake - Water infrastructure automation"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Upper Lake Water Infrastructure</p>
                  <p className="text-xs opacity-90">Advanced automation systems in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OWMS Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary text-xl">
                <img src={digitalManagementIcon} alt="Digital Management" className="h-10 w-10 mr-3" />
                Digital Management
              </Badge>
              <h3 className="text-3xl font-bold mb-6">Online Works Management System (OWMS)</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our Online Works Management System completely digitises and streamlines public-works
                project management—delivering efficiency, transparency and timely execution:
              </p>

              <div className="space-y-4">
                {[
                  "Digital, centralised workflow from planning to completion on one unified platform.",
                  "Full transparency and accountability, with live updates on project status, resources and contractor performance.",
                  "Enhanced speed and efficiency, eliminating delays and accelerating approvals, execution and delivery.",
                  "Real-time monitoring and evaluation through automated tracking of progress and resource usage.",
                  "OWMS empowers civic agencies to deliver infrastructure projects faster, smarter and with greater public trust."
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fusion Tech Section */}
        <div className="mt-24">
          <div className="bg-card border border-border rounded-3xl p-12 shadow-lg">
            <Badge variant="secondary" className="mb-6 text-xl">
              <img src={fusionTechnologyIcon} alt="Fusion Technology" className="h-10 w-10 mr-3" />
              Fusion Technology
            </Badge>
            <h3 className="text-3xl font-bold mb-6">
              Fusion Tech: Durable Joints, Compact Treatment, <span className="text-primary">Sustainable Water</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
              "Fusion" technologies are pivotal in delivering resilient, sustainable water infrastructure.
              From weld-strength pipe joints to compact, high-performance wastewater treatment systems,
              fusion engineering upholds water system integrity and ecological responsibility.
            </p>

            <h4 className="text-xl font-semibold mb-6">Key Benefits & Advantages</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  {
                    title: "Seamless, durable joints:",
                    desc: "Butt-fusion welding creates homogeneous bonds as strong as the pipe itself, delivering exceptional resistance to leaks and corrosion—critical for long-lasting distribution networks and challenging environments."
                  },
                  {
                    title: "Flexible, precise installations:",
                    desc: "Electrofusion utilises fittings with internal heating coils to melt and unite PE pipes under current—ideal for repairs, complex configurations, and confined spaces."
                  }
                ].map((benefit, idx) => (
                  <div key={idx}>
                    <h5 className="font-semibold text-foreground mb-2">{benefit.title}</h5>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Compact, efficient wastewater treatment:",
                    desc: "The Clarus Fusion Series are drop-in units delivering superior secondary effluent outcomes."
                  },
                  {
                    title: "Low power consumption & environmental gains:",
                    desc: "These treatment systems operate using under 80 W (for smaller models), with non-corrosive materials and lifetime media warranty, ensuring both energy efficiency and long-term reliability."
                  }
                ].map((benefit, idx) => (
                  <div key={idx}>
                    <h5 className="font-semibold text-foreground mb-2">{benefit.title}</h5>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;