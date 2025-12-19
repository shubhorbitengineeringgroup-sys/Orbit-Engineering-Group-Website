import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-village-girl.jpg";

const HeroSection = () => {
  const Counter = ({ end, duration = 1200, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let startTimestamp: number | null = null;
      const animate = (timestamp: number) => {
        if (startTimestamp === null) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * end);
        setValue(current);
        if (progress < 1) requestAnimationFrame(animate);
      };
      const raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, [end, duration]);

    return (
      <span>
        {prefix}{value}{suffix}
      </span>
    );
  };
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary/20 mb-8 hover-glow">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-semibold text-foreground">Founded 2022 • ISO 9001 Certified</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-foreground block animate-slide-in-left"> Water Tech for a 
              Greener</span>
              <span className="text-primary block py-2 animate-slide-in-right"> Resilient and Sustainable 
              Tomorrow</span>
            </h1>

            {/* Mobile hero image directly below heading */}
            <div className="relative block lg:hidden animate-zoom-in mb-6" style={{ animationDelay: '0.4s' }}>
              <img
                src={heroImage}
                alt="A village girl drinking water from a tap"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
              />
              {/* Floating stats cards for mobile overlay */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg animate-float">
                <div className="text-xl md:text-2xl font-black mb-1"><Counter end={100} suffix="%" duration={1000} /></div>
                <div className="text-[10px] md:text-xs font-medium">Automation</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-xl md:text-2xl font-black mb-1"><Counter end={24} />/7</div>
                <div className="text-[10px] md:text-xs font-medium">Monitoring</div>
              </div>
            </div>

            <div className="space-y-5 text-xl text-muted-foreground leading-relaxed max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-foreground font-medium">
                <span className="text-primary font-semibold">Sync Water Tech Pvt Ltd</span> propels water management beyond convention — harnessing
                <span className="text-primary"> process automation, SCADA, Industry 4.0, cloud technologies</span>, and precision instrumentation to
                solve real-world water challenges in rural and urban India.
              </p>
              {showMore && (
                <>
                  <p className="text-foreground">
                    Founded in April 2022 in Bhopal, the company builds on a legacy exceeding <span className="text-primary font-semibold">four decades of
                    engineering excellence</span> through its parent firms, Rajat Engineering and Orbit Engineering, to deliver turnkey systems — from design
                    and steel fabrication to PLC/SCADA integration and long-term O&amp;M — through an <span className="text-primary font-semibold">ISO 9001‑certified</span>
                    &nbsp;quality framework that guarantees reliability and ecological accountability.
                  </p>
                  <p className="font-medium">
                    Our ambition is to lead in water innovation — offering <span className="text-primary">holistic, sustainable, and affordable</span> solutions that
                    elevate access to clean water, optimise resource management, and uplift communities.
                  </p>
                  <p className="italic">
                    A clear mission: <span className="text-foreground font-semibold">innovate with purpose</span>, <span className="text-foreground font-semibold">deliver with integrity</span>, and
                    build water systems grounded in environmental stewardship and social well-being — empowering quality water infrastructure across India and beyond.
                  </p>
                  <p className="text-foreground font-semibold">
                    At Sync Water Tech, every project is a promise fulfilled — for a <span className="text-primary">cleaner, more resilient tomorrow</span>.
                  </p>
                </>
              )}
              <div>
                <Button variant="outline" size="sm" onClick={() => setShowMore((v) => !v)}>
                  {showMore ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-slide-in-bottom" style={{ animationDelay: '0.7s' }}>
              <div className="text-center hover-scale">
                <div className="text-4xl font-black text-primary mb-2"><Counter end={40} suffix="+" /></div>
                <div className="text-sm text-muted-foreground font-medium">Years Legacy</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-4xl font-black text-primary mb-2"><Counter end={50} suffix="+" /></div>
                <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-4xl font-black text-primary mb-2"><Counter end={75} prefix="₹" suffix="+" /></div>
                <div className="text-sm text-muted-foreground font-medium">Crores Value</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden animate-zoom-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="A village girl drinking water from a tap"
                className="w-full h-64 md:h-80 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              {/* Floating stats cards */}
              <div className="lg:absolute lg:-top-4 lg:-right-4 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg animate-float mt-4">
                <div className="text-2xl font-black mb-2"><Counter end={100} suffix="%" duration={1000} /></div>
                <div className="text-xs font-medium">Automation</div>
              </div>
              
              <div className="lg:absolute lg:-bottom-4 lg:-left-4 bg-accent text-accent-foreground rounded-2xl p-6 shadow-lg animate-float mt-4" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-black mb-2"><Counter end={24} />/7</div>
                <div className="text-xs font-medium">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;