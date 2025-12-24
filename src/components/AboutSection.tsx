import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Users,
  Award,
  Brain,
  Clock,
  CheckCircle,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import villageProjectImage from "@/assets/village-water-project.jpg";
import aboutSyncWaterTechIcon from "@/assets/icons/about-sync-waterTech.png";
import provenRecordIcon from "@/assets/icons/proven-record-across-sectors.png";

const AboutSection = () => {
  const values = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Decades of Proven Expertise",
      description: "With deep roots in EPC (Engineering, Procurement & Commissioning) and instrumentation, our team brings decades of trusted experience to every project—ensuring excellence from concept to completion.",
      color: "text-blue-600"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "End-to-End, Turnkey Solutions",
      description: "From designing and constructing integrated systems to deploying digital monitoring and automation, we manage the full lifecycle—providing seamless, scalable, and cost-effective solutions.",
      color: "text-green-600"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Socially and Environmentally Responsible",
      description: "Driven by a firm commitment to sustainability, our technologies prioritize eco-efficiency, water conservation, and community well-being, safeguarding resources for generations to come.",
      color: "text-emerald-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Advanced Technology Integration",
      description: "We harness advanced IoT, AI, and cloud-based analytics—integrating real-time data, predictive insights, and smart SCADA control to optimize water operations with unmatched precision and responsiveness.",
      color: "text-primary"
    },
    {
      icon: <img src={provenRecordIcon} alt="Proven Record Across Sectors" className="h-10 w-10" />,
      title: "Proven Record Across Sectors",
      description: "Our portfolio spans successful implementations in both government and private enterprises, reflecting our ability to deliver high-value, mission-critical projects across diverse environments.",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 text-xl">
            <img src={aboutSyncWaterTechIcon} alt="About Orbit Engineering Group" className="h-10 w-10 mr-3" />
            About Orbit Engineering Group
          </Badge>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-foreground">Orbit Engineering Group: Pioneering Water</span>
            <br />
            <span className="text-primary">Innovation with 40 Years of</span>
            <br />
            <span className="text-primary">Engineering Excellence</span>
          </h2>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Fortifying the Future of Water Management
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Orbit Engineering Group, we've merged the formidable 40-year legacy of Rajat Engineering with Orbit
              Engineering's instrumentation mastery to set a new standard in water technology.
            </p>
          </div>
        </div>

        {/* Why Sync WaterTech Stands Apart */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Why Orbit Engineering Group <span className="text-primary">Stands Apart</span>
            </h3>
          </div>

          {/* Village Project Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-float hover-glow transition-smooth">
                <img
                  src={villageProjectImage}
                  alt="Village water project"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                    <h3 className="font-semibold text-lg mb-2">Community Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Empowering communities with sustainable water access across rural and urban India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className={`${value.color} p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">{value.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>


        {/* Legacy Meets Innovation */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-border rounded-3xl p-12 shadow-float hover-glow transition-smooth mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-8">
              <span className="text-foreground">Orbit Engineering Group: Where Legacy</span>
              <br />
              <span className="text-primary">Meets Innovation</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              By unifying decades of engineering know-how with cutting-edge, sustainable instrumentation,
              we redefine what's possible in water technology. Partner with Orbit Engineering Group to experience
              intelligent, impactful, and responsible water solutions—today and for the future.
            </p>
            <div className="text-2xl font-bold text-primary bg-primary/10 px-8 py-4 rounded-2xl inline-block">
              Let's build a sustainable water future together.
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-card border border-border rounded-3xl p-12 shadow-float hover-glow transition-smooth">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Contact Us</span>
            </h3>
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground">
                Orbit Engineering Group
              </p>
              <p className="text-2xl font-bold text-primary">
                Your turnkey partner for sustainable water solutions
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://maps.google.com/maps?q=Flat+No.+2,+Block+12,+Shalimar+Enclave,+E3+Arera+Colony,+Bhopal+462016"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover-lift transition-smooth border border-border hover:shadow-lg cursor-pointer"
            >
              <div className="inline-flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-full mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Address</h4>
              <p className="text-muted-foreground leading-relaxed hover:text-primary transition-colors">
                Flat No. 2, Block 12, Shalimar Enclave, E3 Arera Colony, Bhopal – 462016
              </p>
            </a>

            <a
              href="tel:+917024128029"
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover-lift transition-smooth border border-border hover:shadow-lg cursor-pointer"
            >
              <div className="inline-flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-full mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Phone</h4>
              <p className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                +91 70241 28029
              </p>
            </a>

            <a
              href="mailto:info@orbitengineerings.com"
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 hover-lift transition-smooth border border-border hover:shadow-lg cursor-pointer"
            >
              <div className="inline-flex items-center justify-center p-4 bg-primary text-primary-foreground rounded-full mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Email</h4>
              <p className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                info@orbitengineerings.com
              </p>
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;