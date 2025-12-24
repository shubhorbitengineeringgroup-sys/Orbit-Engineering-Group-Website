import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Gauge, FlaskConical, Settings, Droplets, Target, Hammer, BarChart3, Zap, Eye, Wrench, ChevronDown } from "lucide-react";
import logo from "@/assets/orbit-engineering-group.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const productsCloseTimer = useRef<number | null>(null);

  const openProducts = () => {
    if (productsCloseTimer.current) {
      window.clearTimeout(productsCloseTimer.current);
      productsCloseTimer.current = null;
    }
    setIsProductsOpen(true);
  };

  const scheduleCloseProducts = () => {
    if (productsCloseTimer.current) {
      window.clearTimeout(productsCloseTimer.current);
    }
    productsCloseTimer.current = window.setTimeout(() => {
      setIsProductsOpen(false);
      productsCloseTimer.current = null;
    }, 150);
  };
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Products", href: "/products" },
    { name: "Partners", href: "/partners" },
    { name: "Ecosystem", href: "/ecosystem" },
    { name: "Solutions", href: "/solutions" },
    { name: "Team", href: "/team" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  const productCategories = [
    { name: "Analytical Instruments", id: "analytical-instruments", icon: <FlaskConical className="h-4 w-4" /> },
    { name: "Automation", id: "automation", icon: <Settings className="h-4 w-4" /> },
    { name: "Chlorinators", id: "chlorinators", icon: <Droplets className="h-4 w-4" /> },
    { name: "Flow Meters", id: "flow-meters", icon: <Gauge className="h-4 w-4" /> },
    { name: "Industrial Pressure Transmitters", id: "industrial-pressure", icon: <Target className="h-4 w-4" /> },
    { name: "Jointing Machines And Accessories", id: "jointing-machines", icon: <Hammer className="h-4 w-4" /> },
    { name: "Level Transmitters", id: "level-transmitters", icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Pressure Transmitters", id: "pressure-transmitters", icon: <Zap className="h-4 w-4" /> },
    { name: "Surveillance", id: "surveillance", icon: <Eye className="h-4 w-4" /> },
    { name: "Valves and Fittings", id: "valves-fittings", icon: <Wrench className="h-4 w-4" /> },
  ];

  // Function to check if a nav item is active
  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/" && !location.hash;
    }
    if (href.startsWith("/#")) {
      // For hash links, check if we're on home page and the hash matches
      return location.pathname === "/" && location.hash === href.substring(1);
    }
    if (href.includes("#")) {
      // For links with hash like /solutions#faq
      const [path, hash] = href.split("#");
      return location.pathname === path && location.hash === `#${hash}`;
    }
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center hover-scale">
            <img
              src={logo}
              alt="Orbit Engineering Group"
              className="h-14 w-auto object-contain mix-blend-multiply"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              if (item.name === "Products") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={openProducts}
                    onMouseLeave={scheduleCloseProducts}
                  >
                    <a
                      href={item.href}
                      className={`group transition-all duration-300 font-medium relative py-2 px-3 rounded-lg flex items-center gap-1 ${active
                        ? "text-primary bg-primary/10 border-b-2 border-primary"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                        }`}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : "rotate-0"}`} />
                    </a>
                    {isProductsOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-[720px] max-w-[90vw] bg-popover text-popover-foreground border border-border rounded-xl shadow-2xl p-4 z-50"
                        onMouseEnter={openProducts}
                        onMouseLeave={scheduleCloseProducts}
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {productCategories.map((cat) => (
                            <a
                              key={cat.id}
                              href={`/products#${cat.id}`}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-primary/10 text-primary">
                                {cat.icon}
                              </span>
                              <span className="line-clamp-2 text-left">{cat.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 font-medium relative py-2 px-3 rounded-lg ${active
                    ? "text-primary bg-primary/10 border-b-2 border-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:bg-primary/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-slide-in-bottom">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const active = isActive(item.href);
                if (item.name === "Products") {
                  return (
                    <div key={item.name} className="space-y-1">
                      <a
                        href={item.href}
                        className={`transition-all duration-300 font-medium px-3 py-2 rounded-lg ${active
                          ? "text-primary bg-primary/10 border-l-4 border-primary"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                      <div className="pl-3 grid grid-cols-1">
                        {productCategories.map((cat) => (
                          <a
                            key={cat.id}
                            href={`/products#${cat.id}`}
                            className="transition-all duration-300 text-sm px-3 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded bg-primary/10 text-primary">
                              {cat.icon}
                            </span>
                            <span>{cat.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`transition-all duration-300 font-medium px-3 py-2 rounded-lg ${active
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;