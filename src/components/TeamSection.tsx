import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import manojTiwariImage from "@/assets/team/manoj-tiwari.jpeg";
import vijayTiwariImage from "@/assets/team/vijay-tiwari-2.jpg";
import {
  Users,
  Award,
  Briefcase,
  ArrowRight,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import careersImage from "@/assets/pioneering-force.jpeg";
import founderCabinImage from "@/assets/sync-water-tech-new-office-founder-cabin.jpg";
import outsideOfficeImage from "@/assets/sync-water-tech-new-office-pictures-outside-1.jpg";
import receptionImage from "@/assets/sync-water-tech-new-office-reception.jpg";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import ourTeamIcon from "@/assets/icons/our-team.png";
import ourOfficeIcon from "@/assets/icons/our-office.png";
import pioneeringForceIcon from "@/assets/icons/pioneering-force.png";

const OfficeCarousel = () => {
  const slides = [
    {
      src: founderCabinImage,
      alt: "Orbit Engineering Group - Founder cabin",
      title: "Orbit Engineering Group - Founder cabin",
    },
    {
      src: outsideOfficeImage,
      alt: "Orbit Engineering Group - Office exterior",
      title: "Orbit Engineering Group - Office exterior",
    },
    {
      src: receptionImage,
      alt: "Orbit Engineering Group - Reception",
      title: "Orbit Engineering Group - Reception",
    },
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, align: "start" }}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide, idx) => (
          <CarouselItem key={idx}>
            <div className="relative overflow-hidden rounded-2xl shadow-float">
              {/* Maintain the native 1500x1125 (4:3) aspect ratio for office images */}
              <div className="w-full" style={{ aspectRatio: "4 / 3" }}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-contain block"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="text-sm md:text-base font-medium">{slide.title}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious aria-label="Previous image" />
      <CarouselNext aria-label="Next image" />
    </Carousel>
  );
};

const TeamSection = () => {
  const leaders = [
    {
      name: "Manoj Tiwari",
      position: "Managing Director",
      experience: "40+ Years Experience",
      expertise: "Water Infrastructure, Sustainable Technology Solutions",
      email: "mktiwari@orbitengineering.com",
      description: "Visionary leader with expertise in water infrastructure and sustainable technology solutions"
    },
    {
      name: "Vijay Tiwari",
      position: "Co-Founder & CTO",
      experience: "18+ Years Experience",
      expertise: "Automation, IoT, Advanced Water Treatment Systems",
      email: "vijay@orbitengineerings.com",
      description: "Technical expert specializing in automation, IoT, and advanced water treatment systems."
    }
  ];

  const teamStrengths = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "40-Year Legacy",
      description: "Built on Rajat Engineering's steel staging and chlorination expertise"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "27-Year Automation Experience",
      description: "Orbit Engineering's strength in automation and SCADA systems"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-Disciplinary Team",
      description: "Engineers, project leads, marketing strategists, and finance experts"
    }
  ];

  const careers = [
    "Mechanical Engineers",
    "Electrical Engineers",
    "Automation Specialists",
    "Project Managers",
    "Water Treatment Technicians",
    "SCADA Engineers"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 text-xl">
            <img src={ourTeamIcon} alt="Our Team" className="h-10 w-10 mr-3" />
            Orbit Engineering Group
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet the Visionaries</span>
            <br />
            <span className="text-primary animate-bounce">Powering Orbit Engineering Group</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Manoj Tiwari and Vijay Tiwari stand at the helm of a world-class team of water-technology
            engineers, project leads, marketing strategists, and finance experts. United by a shared
            ambition, our team delivers seamlessly integrated, turnkey water infrastructure solutions.
          </p>
        </div>



        {/* Leadership Team */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {leaders.map((leader, index) => (
            <Card key={index} className="hover-lift border-0 shadow-water bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6 animate-scale-in">
                  <img
                    src={leader.name === "Manoj Tiwari" ? manojTiwariImage : vijayTiwariImage}
                    alt={leader.name}
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover mb-4 mx-auto border-4 border-primary/20"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-primary font-semibold mb-2">{leader.position}</p>
                    <Badge variant="outline" className="mb-4">
                      {leader.experience}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-center">{leader.description}</p>

                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium mb-2">Expertise:</p>
                    <p className="text-sm text-muted-foreground mb-4">{leader.expertise}</p>

                    <div className="flex items-center justify-center space-x-2 text-sm text-primary">
                      <Mail className="h-4 w-4" />
                      <a
                        href={`mailto:${leader.email}`}
                        className="hover:underline"
                      >
                        {leader.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Strengths */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {teamStrengths.map((strength, index) => (
            <Card key={index} className="hover-lift border-0 shadow-water bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-full mb-4">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{strength.title}</h3>
                <p className="text-muted-foreground">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Office Carousel (large, autoplay + manual arrows) */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src={ourOfficeIcon} alt="Our Office" className="h-10 w-10" />
              <h3 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-primary">Office</span>
              </h3>
            </div>
          </div>
          <OfficeCarousel />
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Card className="bg-card border border-border shadow-float p-12">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">
                Together, we engineer solutions that are not just resilient and efficient—
                <span className="text-primary"> but transformative</span>
              </h3>

            </CardContent>
          </Card>
        </div>
        {/* Careers Section (moved here as requested) */}
        <div className="mt-8">
          <Card className="border-0 shadow-water bg-card/80 backdrop-blur-sm hover-glow">
            <CardContent className="p-0">
              {/* Reuse the standalone CareersSection content inline */}
              <div className="py-12">
                <div className="text-center mb-12 animate-fade-in-up">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <img src={pioneeringForceIcon} alt="Join a Pioneering Force" className="h-10 w-10" />
                    <h3 className="text-3xl md:text-4xl font-bold">
                      Join a Pioneering Force in <span className="text-primary">Water Technology</span>
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Are you a mechanical or electrical engineer eager to make an impact?
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                  <div className="space-y-6 px-6">
                    <h4 className="text-2xl font-semibold">At Orbit Engineering Group, you’ll:</h4>
                    <ul className="space-y-4 mb-4">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Innovate in a dynamic, fast‑growing water‑tech environment.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Collaborate with seasoned professionals skilled across technologies—from traditional water treatment systems to advanced automation.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Build your career through meaningful projects, with strong mentorship and competitive benefits.</span>
                      </li>
                    </ul>
                    <p className="text-lg font-medium">Ready to be part of a team that shapes sustainable water infrastructure solutions?</p>
                  </div>

                  <div className="space-y-6 px-6">
                    <div className="relative overflow-hidden rounded-2xl shadow-float">
                      <img
                        src={careersImage}
                        alt="Pioneering force in water technology at Orbit Engineering Group"
                        className="w-full h-72 object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-semibold text-primary">Write to us:</h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 text-center px-6">
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
                      <a href="tel:+917024128029" className="text-sm hover:text-primary transition-smooth">+91 70241 28029</a>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <a href="mailto:info@orbitengineerings.com" className="text-sm hover:text-primary transition-smooth">info@orbitengineerings.com</a>
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

export default TeamSection;