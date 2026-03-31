import { motion, useScroll, useTransform } from "motion/react";
import { 
  Satellite, 
  Network, 
  ShieldCheck, 
  CodeXml, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  DraftingCompass, 
  Rocket, 
  CircleCheckBig,
  Shield,
  Menu,
  X,
  Activity,
  Lock,
  Globe,
  Cpu
} from "lucide-react";
import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import { cn } from "@/src/lib/utils";
import { AnimatePresence } from "motion/react";

const TechnicalBracket = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => (
  <div className={cn(
    "w-2.5 h-2.5 absolute border-outline/40",
    position === 'tl' && "top-0 left-0 border-t border-l",
    position === 'tr' && "top-0 right-0 border-t border-r",
    position === 'bl' && "bottom-0 left-0 border-b border-l",
    position === 'br' && "bottom-0 right-0 border-b border-r"
  )} />
);

const SectionLabel = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={cn("flex items-center gap-4 mb-4", className)}>
    <span className="w-12 h-[1px] bg-primary/40" />
    <span className="font-label text-[10px] tracking-[0.4em] uppercase text-outline">
      {children}
    </span>
  </div>
);

const slides = [
  {
    id: "FIRE-X1",
    protocol: "Thermal Signature Analysis",
    title: "Wildfire Containment // ID: FIRE-X1",
    image: "input_file_0.png",
    imagePath: "/img/fire.jpg"
  },
  {
    id: "FLOOD-V2",
    protocol: "Hydrological Assessment",
    title: "Regional Inundation // ID: FLOOD-V2",
    image: "input_file_1.png",
    imagePath: "/img/flood.jpg"
  },
  {
    id: "ARID-F3",
    protocol: "Arid Zone Verification",
    title: "Flash Flood Intel // ID: ARID-F3",
    image: "input_file_2.png",
    imagePath: "/img/flood2.jpg"
  },
  {
    id: "HELI-S4",
    protocol: "Aerial Suppression",
    title: "Asset Deployment // ID: HELI-S4",
    image: "input_file_3.png",
    imagePath: "/img/aid.jpg"
  },
  {
    id: "GRID-F6",
    protocol: "Urban Grid Monitoring",
    title: "Residential Sector Flood // ID: GRID-F6",
    image: "input_file_4.png",
    imagePath: "/img/flood3.jpg"
  },
  {
    id: "DEBRIS-D5",
    protocol: "Post-Event Analysis",
    title: "Structural Integrity // ID: DEBRIS-D5",
    image: "input_file_5.png",
    imagePath: "/img/disaster.jpg"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [systemTime, setSystemTime] = useState(new Date().toISOString());
  const [logs, setLogs] = useState<string[]>(["SYSTEM INITIALIZED", "ENCRYPTION ACTIVE", "NODE US-EAST-1 CONNECTED"]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date().toISOString());
      if (Math.random() > 0.7) {
        const newLogs = [
          "PACKET RECEIVED: " + Math.random().toString(16).slice(2, 10).toUpperCase(),
          "SIGNAL STRENGTH: " + (Math.random() * 100).toFixed(2) + "%",
          "OPERATIONAL STATUS: NOMINAL",
          "ENCRYPTION KEY ROTATED",
          "SATELLITE LINK STABLE"
        ];
        setLogs(prev => [newLogs[Math.floor(Math.random() * newLogs.length)], ...prev].slice(0, 5));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % slides.length), []);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary grid-bg">
      <div className="scanline" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-blur border-b border-outline-variant/10">
        <div className="flex justify-between items-center w-full px-6 md:px-12 py-4 md:py-6 max-w-[1920px] mx-auto">
          <div className="flex items-center gap-4">
            <div className="font-headline text-xl font-bold tracking-[0.2em] text-white">IA SYSTEMS</div>
            <div className="hidden lg:flex items-center gap-3 px-3 py-1 border border-outline-variant/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-label text-[8px] tracking-widest uppercase text-outline">Node: US-EAST-1 // Active</span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-12">
            {['Intelligence', 'Systems', 'Network', 'Archive'].map((item, i) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={cn(
                  "font-label tracking-[0.1em] uppercase text-xs font-light transition-all duration-300",
                  i === 0 ? "text-white border-b border-white pb-1" : "text-outline hover:text-white"
                )}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden xl:block text-right mr-4">
              <div className="font-label text-[8px] tracking-widest text-outline uppercase">System Time</div>
              <div className="font-mono text-[10px] text-white/60">{systemTime.split('T')[1].split('.')[0]} UTC</div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:block bg-primary text-on-primary px-6 py-3 font-label text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-secondary transition-colors"
            >
              Request Brief
            </button>
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface border-b border-outline-variant/10 overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {['Intelligence', 'Systems', 'Network', 'Archive'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-headline text-2xl tracking-widest uppercase text-white hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full bg-primary text-on-primary py-4 font-label text-xs tracking-[0.2em] uppercase font-bold mt-4">
                  Request Capability Brief
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative grid grid-cols-1 lg:grid-cols-[45%_55%] lg:items-start pb-24 md:pb-32 overflow-hidden pt-[160px] min-h-screen" style={{ background: '#111' }}>
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full h-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-100 contrast-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Left Column */}
        <div className="relative lg:col-start-1 lg:col-end-2 z-10 px-6 md:px-12" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <SectionLabel>Operational Status: Active // {slides[currentSlide].id}</SectionLabel>
            <h1 className="font-headline text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] text-white uppercase mb-8">
              {slides[currentSlide].title.split(' // ')[0]}<br />
              <span className="text-outline/40">{slides[currentSlide].protocol}</span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <p className="font-body text-on-surface-variant max-w-md text-lg leading-relaxed">
                Independent Operational Verification & Deployment Systems for Government and Critical Infrastructure.
              </p>
              <div className="hidden md:block h-16 w-[1px] bg-outline-variant/30" />
              <div className="font-label text-[10px] tracking-widest text-outline uppercase">
                System ID: IA-092<br />
                Protocol: {slides[currentSlide].id}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column Wrapper */}
        <div className="relative lg:col-start-2 lg:col-end-3 h-fit self-start mt-0">
          {/* Image */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="overflow-hidden"
            style={{ width: '100%', height: '55vh', minHeight: '350px' }}
          >
            <img
              src={slides[currentSlide].imagePath}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
            />
          </motion.div>

          {/* Arrow Buttons */}
          <div className="flex justify-end gap-2 mt-3" style={{ width: '100%' }}>
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-16 md:h-16 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300 glass-blur"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-16 md:h-16 border border-white/20 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300 glass-blur"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute right-6 md:right-12 bottom-12 z-20 flex flex-col items-center gap-4">
          <span className="font-label text-[10px] tracking-widest uppercase rotate-90 mb-8 text-outline">Scroll</span>
          <div className="w-[1px] h-24 bg-surface-container-highest relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 96, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 w-full h-8 bg-primary"
            />
          </div>
        </div>

        {/* Carousel Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="intelligence" className="py-24 md:py-32 px-6 md:px-12 bg-surface-low">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
            <div>
              <SectionLabel>Core Competencies</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl tracking-tight text-white uppercase">System Capabilities</h2>
            </div>
            <div className="text-right">
              <span className="font-label text-sm tracking-widest text-outline">01 // 04</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10">
            {[
              { icon: Satellite, title: "Aerial Intelligence", desc: "High-altitude orbital verification and real-time sensory mapping for global strategic positioning." },
              { icon: Network, title: "Infrastructure", desc: "Hardened system architecture designed for persistence in high-threat or degraded environments." },
              { icon: ShieldCheck, title: "Operational Verification", desc: "Decentralized proof of ground-truth using cryptographic telemetry and multi-source cross-referencing." },
              { icon: CodeXml, title: "Rapid Deployment", desc: "Turnkey drone systems deployable within 24 hours to any domestic or international operating environment." }
            ].map((cap, i) => (
              <motion.div 
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface p-8 md:p-10 relative group hover:bg-surface-container-low transition-colors duration-500"
              >
                {i === 0 && <TechnicalBracket position="tl" />}
                {i === 3 && <TechnicalBracket position="tr" />}
                
                <div className="mb-12 md:mb-16">
                  <cap.icon className="w-10 h-10 text-primary" strokeWidth={1} />
                </div>
                <h3 className="font-headline text-2xl mb-4 tracking-tight uppercase">{cap.title}</h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">{cap.desc}</p>
                <div className="flex items-center gap-2 text-outline group-hover:text-primary transition-colors cursor-pointer">
                  <span className="font-label text-[10px] tracking-widest uppercase">Analyze Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Domains Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-lowest">
        <div className="max-w-[1920px] mx-auto">
          <SectionLabel>Operational Domains</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl tracking-tight text-white uppercase mb-16 md:mb-24">
            Where We Operate
          </h2>

          {[
            {
              number: "01",
              title: "Disaster Response & Recovery",
              subtitle: "Rapid Deployment. Verified Outcomes.",
              body: "IA Systems provides rapid aerial verification and documentation support for FEMA-aligned disaster response operations.",
              capabilities: [
                "Rapid aerial damage assessment",
                "Debris field mapping and volumetric analysis",
                "Route clearance and access identification",
                "Temporary debris site monitoring",
                "FEMA Public Assistance documentation support",
                "Real-time aerial reconnaissance for operations teams"
              ],
              outcome: "Accelerated recovery operations, reduced reporting risk, and audit-ready documentation for reimbursement and compliance.",
              image: "/img/flood.jpg",
              imageAlt: "Aerial flood disaster view"
            },
            {
              number: "02",
              title: "Infrastructure & Environmental Intelligence",
              subtitle: "Continuous Monitoring. Engineering-Grade Data.",
              body: "IA Systems delivers high-fidelity geospatial intelligence for infrastructure inspection and environmental assessment.",
              capabilities: [
                "Infrastructure inspection and condition assessment",
                "LiDAR terrain mapping and volumetric analysis",
                "Environmental monitoring and impact assessment",
                "Engineering survey support and site analysis",
                "Urban planning and infrastructure mapping"
              ],
              outcome: "Improved asset visibility, data-driven decision-making, and reduced operational risk across critical infrastructure systems.",
              image: "/img/flood3.jpg",
              imageAlt: "Infrastructure aerial monitoring"
            },
            {
              number: "03",
              title: "Defense & Government Support",
              subtitle: "Trusted Systems. Operational Readiness.",
              body: "IA Systems supports federal and defense environments with verified aerial intelligence and field validation.",
              capabilities: [
                "Military installation infrastructure assessment",
                "ISR and Counter-UAS (CUAS) integration",
                "Operational verification and field validation",
                "Security systems and sensor integration",
                "Mission support and deployment logistics"
              ],
              outcome: "Enhanced operational readiness, trusted intelligence, and validated field data for defense and government decision makers.",
              image: "/img/disaster.jpg",
              imageAlt: "Defense operational support"
            }
          ].map((domain, i) => (
            <motion.div
              key={domain.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-outline-variant/10 mb-px items-stretch"
            >
              <div className="py-16 md:py-24 pr-8 md:pr-16 pl-8 border-l-[3px] border-primary h-full">
                <span className="font-label text-[10px] tracking-[0.4em] uppercase text-outline mb-4 block">
                  {domain.number}
                </span>
                <h3 className="font-headline text-3xl md:text-4xl uppercase tracking-tight text-white mb-4">
                  {domain.title}
                </h3>
                <p className="font-headline text-lg text-white/70 mb-6">
                  {domain.subtitle}
                </p>
                <p className="font-body text-on-surface-variant mb-8 max-w-md">
                  {domain.body}
                </p>
                <div className="mb-8">
                  <span className="font-label text-[9px] tracking-[0.3em] uppercase text-outline block mb-4">
                    Core Capabilities
                  </span>
                  {domain.capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 mb-2">
                      <span className="w-1.5 h-1.5 bg-primary mt-1.5 flex-shrink-0" />
                      <span className="font-body text-sm text-on-surface-variant">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-sm text-on-surface-variant border-l border-primary pl-4">
                  <strong className="text-white font-body">Outcome:</strong>{" "}
                  {domain.outcome}
                </p>
              </div>
              <div className="relative h-[400px] lg:h-auto overflow-hidden">
                <img
                  src={domain.image}
                  alt={domain.imageAlt}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface-lowest/60 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Proof Metrics Strip */}
      <section className="py-16 px-6 md:px-12 bg-surface-low border-t border-b border-outline-variant/10">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "$3.7M+", label: "Executed Federal & Infrastructure Projects" },
              { value: "3+", label: "Federal Agency Deployments" },
              { value: "Nationwide", label: "Operational Environments" },
              { value: "24hr", label: "Average Deployment Response Time" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-headline text-4xl md:text-5xl text-white tracking-tighter block mb-2">
                  {stat.value}
                </span>
                <span className="font-label text-[9px] tracking-[0.3em] uppercase text-outline">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1920px] mx-auto">
          <SectionLabel>Who We Support</SectionLabel>
          <h2 className="font-headline text-4xl md:text-5xl tracking-tight text-white uppercase mb-16">
            Built for Decision Makers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10">
            {[
              {
                icon: Shield,
                title: "Federal Agencies",
                desc: "USACE, DoD, FEMA, and civilian agency partners requiring verified aerial intelligence and audit-ready documentation."
              },
              {
                icon: Network,
                title: "Prime Contractors",
                desc: "Teaming partners seeking UAS capability for large-scale federal infrastructure and disaster response contracts."
              },
              {
                icon: Globe,
                title: "Infrastructure Operators",
                desc: "Energy, utility, and transportation operators requiring continuous monitoring and engineering-grade geospatial data."
              },
              {
                icon: Cpu,
                title: "State & Municipal Governments",
                desc: "Local and regional authorities managing disaster recovery, infrastructure assessment, and urban planning operations."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface p-8 md:p-10 relative group hover:bg-surface-container-low transition-colors duration-500"
              >
                <div className="mb-12">
                  <item.icon className="w-10 h-10 text-primary" strokeWidth={1} />
                </div>
                <h3 className="font-headline text-xl mb-4 tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Truth Section */}
      <section className="relative min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover filter contrast-[1.5] brightness-50" 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
            alt="Dark misty mountains"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center max-w-[1920px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter text-white leading-tight uppercase">
              Not just data collection. <br />
              <span className="bg-white text-black px-4 inline-block transform -skew-x-12 mt-4">Verified truth.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-surface/80 backdrop-blur-xl border-l border-primary relative"
          >
            <TechnicalBracket position="tr" />
            <TechnicalBracket position="br" />
            <p className="font-body text-lg md:text-xl leading-relaxed text-on-surface mb-8 italic">
              "In modern conflict and crisis, data is abundant but truth is rare. We provide the infrastructure to bridge the gap between observation and action."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-label text-xs tracking-widest uppercase text-white block">Director of Ops</span>
                <span className="font-label text-[10px] tracking-widest uppercase text-outline">Office of the Director of Operations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proven Environments Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-lowest">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
              <SectionLabel>Operational History</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl tracking-tight text-white mb-8 uppercase">Proven in Extreme Environments</h2>
              <p className="text-on-surface-variant font-body mb-12 max-w-sm">
                Our systems are battle-tested in the most demanding theaters of operation, from dense urban clusters to remote arctic infrastructure.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { id: "01", title: "Disaster Response" },
                  { id: "02", title: "Military Logistics" },
                  { id: "03", title: "Urban Grid Management" }
                ].map((item) => (
                  <div key={item.id} className="flex items-center gap-4 border-b border-outline-variant/10 pb-4 group cursor-pointer">
                    <span className="font-label text-2xl text-outline-variant/40 group-hover:text-primary transition-colors">{item.id}</span>
                    <span className="font-headline text-xl uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="aspect-[4/5] bg-surface relative overflow-hidden group">
                <img 
                  className="w-full h-full object-cover filter opacity-80 group-hover:scale-105 transition-transform duration-[2s]" 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                  alt="Technical command center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                  <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary block mb-2">Theater A-9</span>
                  <h4 className="font-headline text-2xl text-white tracking-tight uppercase">Operational Verification System</h4>
                </div>
              </div>
              <div className="aspect-[4/5] bg-surface relative overflow-hidden group">
                <img 
                  className="w-full h-full object-cover filter opacity-80 group-hover:scale-105 transition-transform duration-[2s]" 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern architecture"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                  <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary block mb-2">Global Urban</span>
                  <h4 className="font-headline text-2xl text-white tracking-tight uppercase">Critical Infrastructure Monitoring</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="network" className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1920px] mx-auto text-center mb-16 md:mb-24">
          <SectionLabel className="justify-center">The Methodology</SectionLabel>
          <h2 className="font-headline text-4xl md:text-6xl tracking-tighter text-white uppercase">Define. Deploy. Deliver.</h2>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-[3.5rem] left-0 w-full h-[1px] bg-outline-variant/10 hidden md:block" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 relative z-10">
            {[
              { icon: DraftingCompass, title: "Define", desc: "Establishing baseline truth metrics and defining operational parameters within the target theater.", bracket: "tl_br" },
              { icon: Rocket, title: "Deploy", desc: "Rapid hardware deployment and system integration. Establishing persistent presence and data link-up within hours.", bracket: "" },
              { icon: CircleCheckBig, title: "Deliver", desc: "Continuous operational verification and high-fidelity intelligence output directly to decision makers.", bracket: "tr_bl" }
            ].map((step, i) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 bg-surface border border-outline-variant/20 flex items-center justify-center mx-auto mb-8 md:mb-10 relative">
                  {step.bracket === "tl_br" && (
                    <>
                      <TechnicalBracket position="tl" />
                      <TechnicalBracket position="br" />
                    </>
                  )}
                  {step.bracket === "tr_bl" && (
                    <>
                      <TechnicalBracket position="tr" />
                      <TechnicalBracket position="bl" />
                    </>
                  )}
                  <step.icon className="w-10 h-10 text-primary" strokeWidth={1} />
                </div>
                <h3 className="font-headline text-2xl text-white mb-4 tracking-widest uppercase">{step.title}</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Procurement Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface-lowest">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16 md:mb-24">
            <div>
              <SectionLabel>Compliance & Procurement</SectionLabel>
              <h2 className="font-headline text-4xl md:text-5xl tracking-tight text-white uppercase mb-6">
                Ready for Government Engagement
              </h2>
              <p className="font-body text-on-surface-variant max-w-md">
                IA Systems is fully registered and compliant for federal
                procurement, prime contractor teaming, and direct
                government engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-outline-variant/10">
              {[
                { label: "UEI", value: "JSKCCS15147" },
                { label: "CAGE Code", value: "7TMA7" },
                { label: "Certification", value: "VOSB Certified" },
                { label: "UAS Framework", value: "Blue UAS Aligned" },
                { label: "Flight Authority", value: "FAA Authorized Operations" },
                { label: "Primary NAICS", value: "541370 / 517110 / 336411" }
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-surface p-6 relative"
                >
                  <TechnicalBracket position="tl" />
                  <span className="font-label text-[9px] tracking-[0.3em] uppercase text-outline block mb-2">
                    {item.label}
                  </span>
                  <span className="font-headline text-sm text-white uppercase tracking-widest">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="pt-12 border-t border-outline-variant/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="/capability-statement.pdf"
              download
              className="bg-primary text-on-primary px-8 py-4 font-label text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-secondary transition-all flex items-center gap-3"
            >
              Download Capability Statement
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="font-label text-[9px] tracking-widest uppercase text-outline">
              PDF · Current as of 2025
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="archive" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden bg-surface-lowest">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay" 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            alt="Technical schematic"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <SectionLabel>Access Protocol</SectionLabel>
            <h2 className="font-headline text-5xl md:text-8xl tracking-tighter text-white mb-12 uppercase leading-[0.9]">
              Structured Capability Delivery
            </h2>
            
            <div className="flex flex-wrap gap-6 md:gap-8">
              <button className="bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 font-label text-xs tracking-[0.3em] uppercase font-bold hover:bg-secondary transition-all">
                Request Capability Brief
              </button>
              <button className="border border-outline-variant/30 text-white px-8 md:px-10 py-4 md:py-5 font-label text-xs tracking-[0.3em] uppercase font-bold hover:bg-white/5 transition-all">
                Engage for Deployment
              </button>
            </div>
            
            <a
              href="/capability-statement.pdf"
              download
              className="flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-outline hover:text-white transition-colors mt-2"
            >
              <ArrowRight className="w-3 h-3" />
              Download Capability Statement
            </a>
            
            <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-outline-variant/10 pt-12">
              {[
                { label: "Encryption", value: "AES-256 Quantum" },
                { label: "Uptime", value: "99.999% SLA" },
                { label: "Compliance", value: "FEDRAMP HIGH" },
                { label: "Regions", value: "Global-24" }
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-label text-[10px] text-outline block mb-2 tracking-widest uppercase">{stat.label}</span>
                  <span className="font-headline text-sm text-white uppercase">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-surface-lowest border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 py-12 md:py-16 gap-8 max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="font-headline text-lg font-bold tracking-[0.2em] text-white uppercase">IA SYSTEMS</div>
            <p className="font-label tracking-widest text-[10px] uppercase text-outline">
              © 2025 IA SYSTEMS & INTELLIGENCE. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="flex gap-6 md:gap-8 flex-wrap justify-center">
            {['Privacy Protocol', 'Terms of Engagement', 'Institutional Data', 'Security', 'Contact'].map((link) => (
              <a 
                key={link}
                href="#" 
                className="font-label tracking-widest text-[10px] uppercase text-outline hover:text-white transition-all duration-300 hover:tracking-[0.15em]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Floating System Log */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
        <div className="bg-surface/80 backdrop-blur-md border border-outline-variant/20 p-4 w-64">
          <div className="flex items-center gap-2 mb-3 border-b border-outline-variant/10 pb-2">
            <Activity size={12} className="text-primary" />
            <span className="font-label text-[8px] tracking-widest uppercase text-outline">System Log // Live</span>
          </div>
          <div className="flex flex-col gap-1">
            {logs.map((log, i) => (
              <div key={i} className="font-mono text-[8px] text-white/40 flex gap-2">
                <span className="text-primary/40">[{i}]</span>
                <span className={cn(i === 0 && "text-primary/80")}>{log}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capability Brief Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-surface border border-outline-variant/20 p-8 md:p-12 max-w-xl w-full"
            >
              <TechnicalBracket position="tl" />
              <TechnicalBracket position="tr" />
              <TechnicalBracket position="bl" />
              <TechnicalBracket position="br" />
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <SectionLabel>Secure Request</SectionLabel>
                  <h3 className="font-headline text-3xl text-white uppercase tracking-tight">Capability Brief</h3>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-outline hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div className="space-y-2">
                  <label className="font-label text-[10px] tracking-widest uppercase text-outline">Entity Name</label>
                  <input type="text" className="w-full bg-surface-container border border-outline-variant/20 p-4 text-white font-body focus:border-primary outline-none transition-colors" placeholder="Agency / Organization" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] tracking-widest uppercase text-outline">Secure Email</label>
                  <input type="email" className="w-full bg-surface-container border border-outline-variant/20 p-4 text-white font-body focus:border-primary outline-none transition-colors" placeholder="name@domain.gov" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] tracking-widest uppercase text-outline">Clearance Level</label>
                  <select className="w-full bg-surface-container border border-outline-variant/20 p-4 text-white font-body focus:border-primary outline-none transition-colors appearance-none">
                    <option>Public / Unclassified</option>
                    <option>Confidential</option>
                    <option>Secret</option>
                    <option>Top Secret</option>
                  </select>
                </div>
                <button className="w-full bg-primary text-on-primary py-5 font-label text-xs tracking-[0.3em] uppercase font-bold hover:bg-secondary transition-all">
                  Initialize Request
                </button>
                <p className="text-[8px] font-label tracking-widest text-outline text-center uppercase">
                  All requests are subject to operational verification.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
