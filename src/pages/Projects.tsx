import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  IndianRupee, 
  Building, 
  Droplets, 
  ArrowLeft,
  CheckCircle,
  Clock
} from "lucide-react";
// Client icons
import bharatSarkarIcon from "@/assets/icons/bharat-sarkar.png";
import mpudclIndoreDistrictIcon from "@/assets/icons/mpudcl-indore-district.png";
import centralIndiaPvtLtdIcon from "@/assets/icons/central-india-pvt-ltd.png";

const Projects = () => {
  const completedProjects = [
    {
      name: "Kymore & Vijayraghavgarh (Package 5D)",
      client: "MPUDCL Bhopal",
      value: "₹34.60 Lakh",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "Complete automation system with PLC & SCADA integration",
      icon: mpudclIndoreDistrictIcon
    },
    {
      name: "Amarpatan & Ramnagar (Package 7D)",
      client: "MPUDCL Bhopal",
      value: "₹1.37 Crore",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "Turnkey water management solution with advanced monitoring",
      icon: mpudclIndoreDistrictIcon
    },
    {
      name: "Harpalpur & Badagaon (Package 6G)",
      client: "MPUDCL Bhopal",
      value: "₹43.45 Lakh",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "Smart water distribution system with IoT integration",
      icon: mpudclIndoreDistrictIcon
    },
    {
      name: "Bankhedi Turnkey Project",
      client: "Central India Pvt Ltd",
      value: "₹27 Lakh",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "End-to-end water treatment plant automation",
      icon: centralIndiaPvtLtdIcon
    },
    {
      name: "KARI & Lidhorakhas Water Meter SITC",
      client: "Tikamgarh Nagar Parishads",
      value: "₹85.80 Lakh",
      location: "Tikamgarh",
      year: "2023",
      status: "Completed",
      description: "Smart water metering and monitoring system",
      icon: bharatSarkarIcon
    },
    {
      name: "Gangadhar Meher Lift Irrigation Project",
      client: "WRD Bhopal",
      value: "₹74.74 Lakh",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "Irrigation automation with lift management system",
      icon: bharatSarkarIcon
    }
  ];

  type OngoingProject = {
    name: string;
    client: string;
    value: string;
    location: string;
    status: string;
    description: string;
    icon?: string;
  };

  const ongoingProjects: OngoingProject[] = [
    {
      name: "Gandhisagar Package 2",
      client: "MP Jal Nigam - Dilip Buildcon",
      value: "₹10.87 Crore",
      location: "District Neemach",
      status: "Ongoing",
      description: "Multi-village water supply scheme automation",
      icon: bharatSarkarIcon
    },
    {
      name: "Beohari Multi-Village Scheme",
      client: "MP Jal Nigam - Tejas Construction",
      value: "₹1.49 Crore",
      location: "Shahdol",
      status: "Ongoing",
      description: "Comprehensive village water management system",
      icon: bharatSarkarIcon
    },
    {
      name: "Rewa Bansagar Scheme",
      client: "MP Jal Nigam - Dilip Buildcon",
      value: "₹14.24 Crore",
      location: "District Rewa",
      status: "Ongoing",
      description: "Large-scale water distribution automation",
      icon: bharatSarkarIcon
    },
    {
      name: "Pahargarh Multi-Village Scheme",
      client: "MP Jal Nigam - KNK Projects",
      value: "₹27.54 Lakh",
      location: "District Rajgarh",
      status: "Ongoing",
      description: "Rural water supply automation project",
      icon: bharatSarkarIcon
    },
    {
      name: "Narmada Gabhir Multi-Village Scheme",
      client: "MP Jal Nigam - Dilip Buildcon",
      value: "₹10.34 Crore",
      location: "District Ujjain",
      status: "Ongoing",
      description: "Advanced water management for multiple villages",
      icon: bharatSarkarIcon
    },
    {
      name: "Gohad Water Supply Scheme",
      client: "MPUDCL Bhopal - Shree Contractor",
      value: "₹50.04 Lakh",
      location: "Madhya Pradesh",
      status: "Ongoing",
      description: "Modern water supply system with full automation",
      icon: mpudclIndoreDistrictIcon
    }
  ];

  const milestones = [
    {
      year: "2015",
      client: "Prism Cement, Satna",
      project: "Humidity & Temperature Control System",
      value: "₹4.50 Crore",
      description: "Delivered a humidity and temperature control turnkey automation system, redefining industrial climate regulation."
    },
    {
      year: "2016",
      client: "Lupin, Mandideep",
      project: "RO Plant Automation",
      value: "₹18 Lakh",
      description: "Executed a turnkey automation project for the reverse osmosis plant enhancing water purity assurance"
    },
    {
      year: "2017",
      client: "Vindhayachal Distillery, Pilukhedi (Bhopal)",
      project: "40 KL Turnkey Automation",
      value: "₹2.50 Crore",
      description: "Commissioned a 40 KL turnkey automation project, optimising distillery operations with precision control"
    },
    {
      year: "2018",
      client: "Bhopal Municipal Corporation, Idgah Hills",
      project: "3 MGD Water Treatment Plant",
      value: "₹25 Lakh",
      description: "Implemented a 3 MGD water treatment plant with turnkey automation, raising municipal water reliability."
    },
    {
      year: "2020",
      client: "MP Jal Nigam, Punjapura (Neemuch, Badhwani)",
      project: "Turnkey Instrumentation",
      value: "₹28 Lakh",
      description: "Completed a turnkey instrumentation project, strengthening regional water management capacity"
    },
    {
      year: "2021",
      client: "Indore District (Betma, Gautampura, Depalpur)",
      project: "Water Supply Scheme Automation",
      value: "₹12.68 Lakh",
      description: "Delivered a fully integrated water supply scheme automation, enhancing service delivery accuracy"
    },
    {
      year: "2022",
      client: "Betul‑Bazar, Amla & Sarni Nagar Parishads (MP)",
      project: "45 MLD Turnkey Automation",
      value: "₹13.19 Lakh",
      description: "Executed a 45 MLD turnkey automation project, significantly boosting urban water infrastructure"
    },
    {
      year: "2023",
      client: "Gobranawapra STP (Raipur, C.G.)",
      project: "7.6 MLD Sewage Treatment Plant",
      value: "₹11.74 Lakh",
      description: "Commissioned a 7.6 MLD sewage treatment plant, advancing environmental compliance through turnkey instrumentation and automation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            className="mb-8 text-primary hover:text-primary/80"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">Project Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Our</span>
              <span className="text-primary"> Projects</span>
            </h1>
            
          </div>
        </div>
      </section>
      
      {/* Completed Projects - moved after Hero */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                <CheckCircle className="h-8 w-8 inline-block mr-3 text-primary" />
                Completed Works
              </h2>
              <p className="text-muted-foreground">All Executed with PLC, SCADA & Automation Systems</p>
            </div>
            <Badge variant="outline" className="text-primary border-primary">
              Delivered
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover-lift border-0 shadow-water bg-card/90 backdrop-blur-sm"
              >
                <div
                  className="pointer-events-none absolute bottom-[-40px] right-[-40px] h-32 w-32 rounded-full bg-background/95 border border-primary/20"
                  aria-hidden="true"
                ></div>
                {project.icon && (
                  <div className="absolute bottom-2 right-2 h-14 w-14 rounded-full bg-background/90 border border-primary/30 shadow-lg flex items-center justify-center">
                    <img src={project.icon} alt="" className="h-9 w-9 object-contain" />
                  </div>
                )}
                <CardHeader className="relative z-10 pr-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      {project.status}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{project.value}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pr-3 pb-6">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Building className="h-4 w-4 mr-2" />
                      {project.client}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Milestones Timeline */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Droplets className="h-8 w-8 inline-block mr-3 text-primary" />
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Our Milestones</span>
            </h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-foreground/70 to-primary mb-6"></div>
            <p className="text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto">
              These milestones illustrate our unwavering commitment to scalable turnkey automation solutions,
              grounded in robust project execution, technological excellence, and enduring impact across
              industrial, municipal, and water‑utility sectors.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover-lift shadow-water bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="text-primary border-primary">
                            {milestone.year}
                          </Badge>
                          <div className="text-xl font-bold text-primary">{milestone.value}</div>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{milestone.project}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{milestone.client}</p>
                        <p className="text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center dot */}
                  <div className="relative z-10 w-8 h-8 bg-primary border-4 border-background rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects - moved to last */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                <Clock className="h-8 w-8 inline-block mr-3 text-primary" />
                Ongoing Projects
              </h2>
              
            </div>
            <Badge variant="outline" className="text-primary border-primary">
              In Progress
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((project, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover-lift border-0 shadow-water bg-card/50 backdrop-blur-sm"
              >
                <div
                  className="pointer-events-none absolute bottom-[-40px] right-[-40px] h-32 w-32 rounded-full bg-background/95 border border-primary/20"
                  aria-hidden="true"
                ></div>
                {project.icon && (
                  <div className="absolute bottom-2 right-2 h-14 w-14 rounded-full bg-background/90 border border-primary/30 shadow-lg flex items-center justify-center">
                    <img src={project.icon} alt="" className="h-9 w-9 object-contain" />
                  </div>
                )}
                <CardHeader className="relative z-10 pr-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-primary border-primary">
                      {project.status}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{project.value}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 pr-3 pb-6">
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Building className="h-4 w-4 mr-2" />
                      {project.client}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Projects;