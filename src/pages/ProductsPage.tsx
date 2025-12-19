import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { productDescriptions } from "@/data/productDescriptions";
import { 
  ArrowLeft,
  Search,
  Filter,
  Gauge,
  FlaskConical,
  Settings,
  Wrench,
  Droplets,
  BarChart3,
  Zap,
  Hammer,
  Eye,
  Target,
  X
} from "lucide-react";

// Product Images
import bulkFlowMeterImg from "@/assets/products/bulk-flow-meter.jpg";
import electromagneticFlowMeterImg from "@/assets/products/electromagnetic-flow-meter.jpg";
import ultrasonicLevelTxImg from "@/assets/products/ultrasonic-level-tx.jpg";
import waterMeterImg from "@/assets/products/water-meter.jpg";
import chlorineTransmitterImg from "@/assets/products/chlorine-transmitter.jpg";
import doTransmitterImg from "@/assets/products/do-transmitter.png";
import phTransmitterImg from "@/assets/products/ph-transmitter.jpg";
import turbidityTransmitterImg from "@/assets/products/turbidity-transmitter.jpg";
import iotImg from "@/assets/products/iot.png";
import plcImg from "@/assets/products/plc.jpg";
import rtuImg from "@/assets/products/rtu.jpg";
import scadaImg from "@/assets/products/scada.jpg";
import butterflyValvesImg from "@/assets/products/butter-fly-valves.jpg";
import gateValveImg from "@/assets/products/gate-valve.jpg";
import hdpeFittingsImg from "@/assets/products/hdpe-fittings.jpg";
import motorizedValvesImg from "@/assets/products/motorized-ball-valve.jpg";
import sluiceValveImg from "@/assets/products/sluce-valves.jpg";
import chlorinatorImg from "@/assets/products/chlorinator.png";
import capacitanceLevelTransmitterImg from "@/assets/products/capacitance-level-transmitter.jpg";
import conductiveLevelSwitchImg from "@/assets/products/conductive-level-switch.jpg";
import floatLevelSwitchImg from "@/assets/products/float-level-switch.jpg";
import hydrostaticLevelTxImg from "@/assets/products/hydrostatic-level-tx.jpg";
import radarLevelTransmitterImg from "@/assets/products/radar-level-transmitter.jpg";
import blindTypePressureTransmitterImg from "@/assets/products/blind-type-pressure-transmitters.jpg";
import differentialPressureTransmitterImg from "@/assets/products/differential-pressure-transmitter.jpg";
import smartTypePressureTransmitterImg from "@/assets/products/smart-type-pressure-transmitter.jpg";
import bigJointingMachineImg from "@/assets/products/big-jointing-machines.jpg";
import buttFusionJointingImg from "@/assets/products/butt-fusion-jointing.jpg";
import electrofusionJointingMachineImg from "@/assets/products/electrofusion-jointing-machine.jpg";
import bulletCameraImg from "@/assets/products/bullet-camera.jpg";
import domeCameraImg from "@/assets/products/dome-camera.jpg";
import highSpeedCameraImg from "@/assets/products/high-speed-camera.jpg";
import ptzCameraImg from "@/assets/products/ptz-camera.jpg";
import serversImg from "@/assets/products/servers.jpg";
import softwareImg from "@/assets/products/softwares.jpg";
import rosemountPressureTransmitterImg from "@/assets/products/rosemount-3051s-series-coplanar-pressure-transmitter.jpg";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();

  // Handle anchor navigation
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const elementId = hash.substring(1); // Remove the # symbol
      const element = document.getElementById(elementId);
      if (element) {
        // Add a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  const productCategories = [
    {
      id: "flow-meters",
      name: "Flow Meters",
      icon: <Gauge className="h-6 w-6" />,
      color: "text-blue-600",
      products: [
        { 
          name: "Bulk Flow Meter", 
          description: "The bulk flow meter is precision made positive displacement liquid measuring instruments which maintain accurate metering over long periods of operation. The simplicity of design and construction together with the sustained accuracy has led to the widespread use of these meters on aviation refueling vehicles in oil terminals throughout the world and also as master meters for use in calibration. The bulk flow meter (PD meter) is a system with freely-moving blades used to measure white petroleum products such as fuels bio-fuels and refined liquid hydrocarbons.", 
          features: ["Serviceability: Designed for quick and easy maintenance", "Automatic additive injector available", "Electronic control available"],
          image: bulkFlowMeterImg
        },
        { 
          name: "Electromagnetic Flow Meter", 
          description: "Electromagnetic flow meters (or magmeters) are a type of velocity or volumetric flow meter that operate pursuant to Faradays law of electromagnetic induction – which states that a voltage will be induced when a conductor moves through a magnetic field. Magmeters can detect the flow rate of conductive fluids only.", 
          features: ["No moving parts", "High accuracy for conductive fluids", "Operates on Faraday's law of electromagnetic induction"],
          image: electromagneticFlowMeterImg
        },
        { 
          name: "Ultrasonic flow meter", 
          description: "An ultrasonic flow meter is a type of flow meter that measures the velocity of a fluid with ultrasound to calculate volume flow. Using ultrasonic transducers the flow meter can measure the average velocity along the path of an emitted beam of ultrasound by averaging the difference in measured transit time between the pulses of ultrasound propagating into and against the direction of the flow or by measuring the frequency shift from the Doppler effect. They are often inexpensive to use and maintain because they do not use moving parts unlike mechanical flow meters.", 
          features: ["Non-contact measurement", "No moving parts", "Low maintenance costs", "Affected by acoustic properties of fluid"],
          image: ultrasonicLevelTxImg
        },
        { 
          name: "Water Meter", 
          description: "Water metering is the practice of measuring water use. Water meters measure the volume of water used by residential and commercial building units that are supplied with water by a public water supply system. They are also used to determine flow through a particular portion of the system. In most of the world water meters are calibrated in cubic metres (m3) or litres but in the United States and some other countries water meters are calibrated in cubic feet or US gallons on a mechanical or electronic register. Modern meters typically can display rate-of-flow in addition to total volume.", 
          features: ["Residential/Commercial use", "Accurate billing measurement", "Available in cubic meters or gallons", "Rate-of-flow display"],
          image: waterMeterImg
        }
      ]
    },
    {
      id: "analytical-instruments",
      name: "Analytical Instruments",
      icon: <FlaskConical className="h-6 w-6" />,
      color: "text-green-600",
      products: [
        { name: "Chlorine Transmitter", description: "Up to four analysis inputs in any combination for direct connection of sensors for liquid analysis. Up to 21 further measuring signals can be connected either directly or via interface. Interfaces: USB host USB device Modbus PROFIBUS DP Ethernet. Ethernet function: web server alarm alerts by email setup per PC readout of recorded measurement data. Vibrant TFT color graphics screen with 5.5″ diagonal screen sizes 320 × 240 pixels and 256 colors. Intuitive operation via touchscreen. Wall-mounted housing (protection type IP67) with spacious connection area.", features: ["Up to 4 analysis inputs", "21 additional measuring signals", "Multiple interface options", "Vibrant TFT color screen", "IP67 protection"], image: chlorineTransmitterImg },
        { name: "DO Transmitter", description: "Measurement of dissolved oxygen (DO) in aqueous solutions. Safe 1-point calibration. 2-wire transmitter (for basic and standard version). Electrical isolation of measurement signal (DO) and output signal (mA). Easy connection to an existing system (e.g PLC). Can be used as stand-alone system in maximum version. Compensation of temperature atmospheric pressure and salinity. Further processing of the temperature of the medium is possible (separate Pt 1000 or 2-wire transmitter).", features: ["Safe 1-point calibration", "2-wire transmitter design", "Electrical isolation", "Temperature compensation", "Stand-alone or PLC integration"], image: doTransmitterImg },
        { name: "pH Transmitter", description: "Up to four analysis inputs in any combination for direct connection of sensors for liquid analysis. Up to 21 further measuring signals can be connected either directly or via interface. Interfaces: USB host USB device Modbus PROFIBUS DP Ethernet. Ethernet function: web server alarm alerts by email setup per PC readout of recorded measurement data. Vibrant TFT color graphics screen with 5.5″ diagonal screen sizes 320 × 240 pixels and 256 colors. Intuitive operation via touchscreen. Wall-mounted housing (protection type IP67) with spacious connection area. Plain language operation multilingual. Graphic display with background lighting. Can be combined with tecLine Ci tecLine Ci-S ecoLine Ci conductivity and temperature sensors.", features: ["Multi-language operation", "Graphic display with backlighting", "Combines with conductivity sensors", "USB and Ethernet interfaces", "Touchscreen operation"], image: phTransmitterImg },
        { name: "Turbidity Transmitter", description: "Water clarity and suspended solids measurement", features: ["Real-time monitoring", "Low maintenance", "High sensitivity"], image: turbidityTransmitterImg }
      ]
    },
    {
      id: "automation",
      name: "Automation",
      icon: <Settings className="h-6 w-6" />,
      color: "text-purple-600",
      products: [
        { name: "IoT", description: "We offer an Integrated IOT Platform to manage Customer Device and Data. We also provided integration plugins with popular CRMs Billing and ERP solutions.", features: ["Integrated platform", "Device and data management", "CRM/Billing/ERP integration", "Real-time monitoring"], image: iotImg },
        { name: "PLC", description: "Programmable Logic Controllers for industrial automation and process control in water treatment systems.", features: ["Industrial grade reliability", "Modular design flexibility", "Programming versatility", "Real-time processing"], image: plcImg },
        { name: "RTU", description: "Event based secure protocol connects clients (producers and subscribers) to get live data (semi real-time) even on non-real-time connections. The dedicated protocol ensures optimal latency with lowest possible traffic even on mobile networks (also 2G) and Narrow Band Iot (NBIoT).", features: ["Event-based secure protocol", "Semi real-time data", "Optimal latency", "Mobile network support", "NBIoT compatible"], image: rtuImg },
        { name: "SCADA", description: "Process visualization with network function. Real time operation. Batch related and continuous logging. Process group and trend pictures. Alarm or event lists. Management of up to 50 plants per PC. Visualization of up to 100 plants per network. Mobile Access. App for Android and iOS systems. Mobile access to devices. Batch related and continuous logging. Process group and trend pictures. Alarm or event lists. Management of up to 50 plants per PC. Visualization of up to 100 plants per network.", features: ["Real-time process visualization", "Manage up to 50 plants per PC", "100 plants per network", "Mobile app support", "Continuous logging"], image: scadaImg }
      ]
    },
    {
      id: "valves-fittings",
      name: "Valves and Fittings",
      icon: <Wrench className="h-6 w-6" />,
      color: "text-red-600",
      products: [
        { name: "Butterfly Valves", description: "Butterfly valves are used where space is limited. Unlike gate valves butterfly valves can be used for throttling or regulating flow as well as in the full open and fully closed position. The pressure loss through a butterfly valve is small in comparison with the gate valve. Type- Lined Size range – 50 mm to 600 mm Pressure- PN 25 Seating material – EPDM/Viton/ Nitrile.", features: ["Space-saving design", "Throttling capability", "Low pressure loss", "Size range: 50-600mm", "PN 25 pressure rating"], image: butterflyValvesImg },
        { name: "Gate Valve", description: "MOC- DI (Ductile Iron). Connection – Flanged End. Size- Up to 400 MM. Pressure – PN 16.", features: ["Ductile Iron construction", "Flanged end connection", "Up to 400mm size", "PN 16 pressure rating", "Full bore design"], image: gateValveImg },
        { name: "HDPE Fittings", description: "HDPE pipe is a type of flexible plastic pipe used for fluid and gas transfer and is often used to replace ageing concrete or steel mains pipeline. We offered range of HDPE pipes & fittings up to 2500mm outer diameter.", features: ["Flexible plastic construction", "Replaces aging pipelines", "Up to 2500mm diameter", "Corrosion resistant", "Long service life"], image: hdpeFittingsImg },
        { name: "Motorized Valves", description: "A motorized valve is an automated device used for controlling the flow of liquids gases and other materials in industrial commercial and manufacturing settings. This type of valve uses a motor to open and close the valve allowing for precise control over the output pressure and flow rate.", features: ["Automated operation", "Motor-driven actuation", "Precise flow control", "Industrial grade", "Remote operation capability"], image: motorizedValvesImg },
        { name: "Sluice Valve", description: "A complete range of Gate valves for all of your applications. We offer the valves in sizes up to 24″ (600 mm). MOC- DI (Ductile Iron). Connection – Flanged End. Pressure – PN 16.", features: ["Complete range available", "Up to 24″ (600mm) size", "Ductile Iron construction", "Flanged end connection", "PN 16 pressure rating"], image: sluiceValveImg }
      ]
    },
    {
      id: "chlorinators",
      name: "Chlorinators",
      icon: <Droplets className="h-6 w-6" />,
      color: "text-cyan-600",
      products: [
        { name: "Chlorinator", description: "Chlorinator adds chlorine to drinking water to eliminate parasites bacteria and viruses. Chlorinators are also used for swimming pool water odor control of slime and marine growths in cooling water towers circulating water and in service water systems.", features: ["Eliminates parasites and bacteria", "Swimming pool applications", "Odor control capability", "Marine growth prevention", "Service water system use"], image: chlorinatorImg }
      ]
    },
    {
      id: "level-transmitters",
      name: "Level Transmitters",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "text-indigo-600",
      products: [
        { name: "Capacitance Level Transmitter", description: "2-wire compact transmitter with high sensitivity. Rod (0.2 – 3 m) or cable (1 – 20 m) probes. Plastic aluminium or stainless steel housing. Fully or partly insulated probes. Plug-in display module. 32-point linearisation. Explosion-proof models. Chemicals with dense gas layers above the surface. High pressure high temperature or vacuum. Viscous or corrosive media.", features: ["2-wire compact design", "Rod or cable probes available", "Multiple housing materials", "32-point linearization", "Explosion-proof options"], image: capacitanceLevelTransmitterImg },
        { name: "Conductive Level Switch", description: "Limit switch or differential switch versions. Adjustable sensitivity. Adjustable time delay. High or low fail-safe mode. All wetted parts stainless steel. Compact unit with two independent relays. Separate probe and relay unit. Rod probes up to 3 m.", features: ["Adjustable sensitivity", "Adjustable time delay", "Fail-safe modes", "Stainless steel construction", "Independent relay system"], image: conductiveLevelSwitchImg },
        { name: "Float Level Switch", description: "Operation without power supply. Low cost polypropylene level switch. Hermetically moulded double chamber. Mercury free micro switch. Adjustable switch differential. For low density liquids.", features: ["No power supply required", "Polypropylene construction", "Mercury-free operation", "Adjustable differential", "Suitable for low density liquids"], image: floatLevelSwitchImg },
        { name: "Hydrostatic Level TX", description: "2- or 3-wire submersible transmitter. Plastic or stainless steel body. Capacitive ceramic piezoresistive stainless steel and piezoresistive ceramic sensor. Up to 200 m range. Reverse polarity protection. Optional lightning protection. Linearity: ±0.25 %. HART communication. Venting tube in cable. Incorporated Pt100 temperature sensor. Explosion-proof models.", features: ["Submersible design", "Up to 200m range", "±0.25% linearity", "HART communication", "Built-in temperature sensor"], image: hydrostaticLevelTxImg },
        { name: "Radar Level Transmitter", description: "2- or 4-wire integrated transmitter. Non-contact level metering. Narrow 5° beam angle. Excellent signal processing. Temperature compensated. Secondary lightning protection. 32-point linearization. PP PVDF PTFE housing and transducers. Plug-in display module. Plastic aluminum or stainless steel housing. Explosion-proof models. Level and volume measurement and display. Open channel flow measurement. Fail-safe indication. For challenging applications such as long distance measurement and light dust during filling.", features: ["Non-contact measurement", "5° narrow beam angle", "Temperature compensated", "32-point linearization", "Long distance capability"], image: radarLevelTransmitterImg },
        { name: "Ultrasonic Level TX", description: "Non-contact ultrasonic level measurement", features: ["Easy installation", "Self-cleaning", "Wide beam angle"], image: ultrasonicLevelTxImg }
      ]
    },
    {
      id: "pressure-transmitters",
      name: "Pressure Transmitters",
      icon: <Zap className="h-6 w-6" />,
      color: "text-yellow-600",
      products: [
        { name: "Blind Type Pressure Transmitter", description: "Gauge pressure measurement without display", features: ["Compact design", "High accuracy", "4-20mA output"], image: blindTypePressureTransmitterImg },
        { name: "Differential Pressure Transmitter", description: "0 to 250 mbar – 0 to 1.6 bar relative / 0 to 600 mbar – 0 to 25 bar absolute. Welded measuring system. Compact design: as of 71 mm in length. High bursting strength. HART® interface. Ex d explosion protection according to ATEX GOST-R. Linearity 0.07 %. Turn down: 1:200. Simple operation with rotary knob. Characteristic line and display also adjustable for flow measurement.", features: ["Wide pressure ranges", "Compact 71mm design", "HART interface", "0.07% linearity", "1:200 turndown ratio"], image: differentialPressureTransmitterImg },
        { name: "SMART TYPE Pressure Transmitter", description: "HART® interface. Optional explosion protection Ex ia according to ATEX GOST-R. Linearity 0.07 %. Turn down: 1:200. Simple operation with rotary knob. Characteristic line and display also adjustable for flow measurement.", features: ["HART communication", "Explosion protection options", "0.07% linearity", "1:200 turndown", "Flow measurement capability"], image: smartTypePressureTransmitterImg }
      ]
    },
    {
      id: "jointing-machines",
      name: "Jointing Machines And Accessories",
      icon: <Hammer className="h-6 w-6" />,
      color: "text-orange-600",
      products: [
        { name: "Big Jointing Machine", description: "Heavy-duty pipe jointing equipment designed for large diameter pipe installations in water infrastructure projects. Features robust construction and precision alignment systems for reliable joint formation.", features: ["Heavy-duty construction", "Large diameter capability", "Precision alignment", "Infrastructure grade", "Reliable joint formation"], image: bigJointingMachineImg },
        { name: "Butt Fusion Jointing", description: "HDPE Butt Fusion Welding Machine – Application & Features: Suitable for butt fusion welding Of plastic pipes and fittings made Of PE PP. and PVDF in construction site or workshop. Consists of basic frame heating plate planning tool and support. Removable PTFE coated heating plate with inbuilt Digital temperature control system with countdown timers for heating T1 T2 & cooling phase T5. Electric facer cutter With double cutting edge blades. Low starting pressure ensures reliable welding quality Of small pipes. Size- 50 to 250 MM.", features: ["PE, PP, PVDF compatible", "Digital temperature control", "Electric facer cutter", "Size range: 50-250mm", "Portable design"], image: buttFusionJointingImg },
        { name: "Electrofusion Jointing Machine", description: "Electrofusion welding machines are universal devices used to connect thermoplastic pipes and fittings (PE PP PVDF) resistance method using electrofusion fittings. Automatic control. Optical and acoustic signaling of the welding process. Automatic compensation of welding time depending on the ambient temperature. An electronic control system that responds to changes in power parameters in real time. Built in memory can record more than 3000 welding records. Welding Range(mm)- 20 -800 mm.", features: ["Automatic control system", "Real-time monitoring", "3000+ weld record memory", "Temperature compensation", "20-800mm welding range"], image: electrofusionJointingMachineImg }
      ]
    },
    {
      id: "surveillance",
      name: "Surveillance",
      icon: <Eye className="h-6 w-6" />,
      color: "text-gray-600",
      products: [
        { name: "Bullet Camera", description: "Fixed direction surveillance camera designed for outdoor monitoring applications. Features weatherproof housing and infrared night vision capabilities for 24/7 security coverage.", features: ["Weatherproof design", "Infrared night vision", "Fixed direction monitoring", "24/7 operation", "High resolution imaging"], image: bulletCameraImg },
        { name: "Dome Camera", description: "360-degree surveillance dome camera with vandal-resistant design. Provides discreet monitoring with wide-angle coverage for comprehensive area surveillance.", features: ["360-degree coverage", "Vandal-resistant housing", "Discreet appearance", "Wide-angle lens", "Professional surveillance"], image: domeCameraImg },
        { name: "High Speed Camera", description: "High frame rate recording camera designed for capturing rapid motion and detailed analysis. Professional-grade equipment for specialized monitoring applications.", features: ["High frame rate capture", "Motion analysis capability", "Professional grade", "Detailed recording", "Specialized applications"], image: highSpeedCameraImg },
        { name: "PTZ Camera", description: "Pan-Tilt-Zoom controllable camera with remote operation capabilities. Features motorized movement and zoom functions for dynamic surveillance coverage.", features: ["Pan-tilt-zoom control", "Remote operation", "Motorized movement", "Dynamic coverage", "Auto-tracking features"], image: ptzCameraImg },
        { name: "Servers", description: "High-capacity video recording and storage servers designed for surveillance systems. Features redundant storage and remote access capabilities for reliable data management.", features: ["High storage capacity", "Redundant backup systems", "Remote access capability", "Reliable data management", "Scalable architecture"], image: serversImg },
        { name: "Software", description: "Comprehensive video management and analytics software for surveillance systems. Provides multi-camera support, intelligent analytics, and user-friendly interface for efficient monitoring.", features: ["Multi-camera management", "Intelligent analytics", "User-friendly interface", "Real-time monitoring", "Advanced reporting"], image: softwareImg }
      ]
    },
    {
      id: "industrial-pressure",
      name: "Industrial Pressure Transmitters",
      icon: <Target className="h-6 w-6" />,
      color: "text-teal-600",
      products: [
        { name: "Rosemount 3051S Series Coplanar Pressure Transmitter", description: "Output: Two-wire 4-20 mA is user-selectable for linear or square root output. Digital signal based on HART Technology. Range: 3051S_CA: 0-0.167 to 0-4000 psia, 3051S_CD: 0-0.01 in H2O to 0-2000 psid, 3051S_CG: 0-8.3 in H2O to 2000 psig", features: ["4-20mA output with HART", "Linear or square root output", "Wide pressure ranges", "Industry standard reliability", "Digital communication"], image: rosemountPressureTransmitterImg }
      ]
    }
  ];

  const filteredProducts = productCategories.filter(category => {
    if (selectedCategory !== "all" && category.id !== selectedCategory) return false;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return category.name.toLowerCase().includes(searchLower) ||
             category.products.some(product => 
               product.name.toLowerCase().includes(searchLower) ||
               product.description.toLowerCase().includes(searchLower) ||
               product.features.some(feature => feature.toLowerCase().includes(searchLower))
             );
    }
    
    return true;
  }).map(category => {
    if (!searchTerm) return category;
    
    // If searching, also filter products within categories
    const filteredCategoryProducts = category.products.filter(product => {
      const searchLower = searchTerm.toLowerCase();
      return product.name.toLowerCase().includes(searchLower) ||
             product.description.toLowerCase().includes(searchLower) ||
             product.features.some(feature => feature.toLowerCase().includes(searchLower));
    });
    
    return {
      ...category,
      products: filteredCategoryProducts
    };
  }).filter(category => category.products.length > 0);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return a.products.length - b.products.length;
  });

  const handleProductDetails = (product: any) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

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
            <Badge variant="secondary" className="mb-4">Product Portfolio</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Water Technology</span>
            <br />
            <span className="text-primary">Products</span>
          </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of water treatment, automation, and monitoring solutions 
              designed for maximum efficiency and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {productCategories.map(category => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="products">Product Count</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12">
          {sortedProducts.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className="animate-fade-in-up transform transition-all duration-500 hover:scale-[1.01]">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-lg bg-muted ${category.color} transform transition-all duration-300 hover:scale-110`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold animate-slide-in-right">{category.name}</h2>
                  <p className="text-muted-foreground animate-fade-in">{category.products.length} products available</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <Card 
                    key={productIndex} 
                    className="hover-lift border-0 shadow-water bg-card/80 backdrop-blur-sm h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
                    style={{ animationDelay: `${productIndex * 100}ms` }}
                  >
                    <CardHeader className="pb-3">
                      {product.image && (
                        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <CardTitle className="text-lg leading-tight hover:text-primary transition-colors duration-300">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{product.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="text-sm font-semibold">Key Features:</h4>
                        <ul className="space-y-1">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-xs text-muted-foreground flex items-center hover:text-foreground transition-colors">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0 animate-pulse"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-center pt-4 border-t border-border">
                        <Button 
                          size="sm" 
                          onClick={() => handleProductDetails(product)}
                          className="bg-water-gradient text-white hover:opacity-90 hover:shadow-glow transition-all duration-300 hover:scale-105 border-0"
                        >
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">No Products Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="bg-water-gradient hover:shadow-glow transition-smooth"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      

      {/* Product Details Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-2xl font-bold">{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="space-y-6">
              {/* Product Image */}
              {selectedProduct.image && (
                <div className="w-full h-80 rounded-lg overflow-hidden bg-muted border border-border">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              )}
              
              {/* Product Description */}
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-primary">Product Description</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProduct.description}</p>
              </div>
              
              {/* Key Features */}
              <div className="bg-muted/30 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-primary">Key Features & Specifications</h3>
                <div className="grid gap-3">
                  {selectedProduct.features?.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-card border border-border rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">Need More Information?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact our technical team for detailed specifications, pricing, and custom solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-water-gradient text-white hover:opacity-90 hover:shadow-glow transition-smooth border-0">
                    Contact Technical Team
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Download Datasheet
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <ContactSection />
    </div>
  );
};

export default ProductsPage;