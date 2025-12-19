import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import filtrationImg from "@/assets/water-filteration-systems.png";
import softeningImg from "@/assets/water-softening-systems.png";
import disinfectionImg from "@/assets/disinfection-systems.png";
import wastewaterImg from "@/assets/waste-water-treatment-systems.png";
import waterTreatmentSolutionsIcon from "@/assets/icons/water-treatment-solutions.png";

const cards = [
  {
    title: "Water Filteration Systems",
    image: filtrationImg,
    href: "/products#flow-meters",
    cta: "Go to Flow Meters",
  },
  {
    title: "Water Softening Systems",
    image: softeningImg,
    href: "/products#pressure-transmitters",
    cta: "Go to Pressure Transmitters",
  },
  {
    title: "Disinfection Systems",
    image: disinfectionImg,
    href: "/products#level-transmitters",
    cta: "Go to Level Transmitters",
  },
  {
    title: "Wastewater Treatment Systems",
    image: wastewaterImg,
    href: "/products#analytical-instruments",
    cta: "Go to Analytical Instruments",
  },
];

const WaterTreatmentSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background" id="water-treatment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 text-xl">
            <img src={waterTreatmentSolutionsIcon} alt="Solutions" className="h-10 w-10 mr-3" />
            Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Water Treatment Solutions</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <a key={idx} href={card.href} className="group block">
              <Card className="border-0 shadow-water bg-card/80 backdrop-blur-sm h-full transform transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
                <CardContent className="p-0">
                  <div className="w-full h-44 bg-muted overflow-hidden rounded-t-xl">
                    <img src={card.image} alt={card.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                    <div className="flex items-center text-primary font-medium">
                      <span className="mr-2">{card.cta}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterTreatmentSection;








