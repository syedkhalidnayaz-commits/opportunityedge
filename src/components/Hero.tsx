import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Award } from 'lucide-react';


export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };


  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 lg:px-8 overflow-hidden bg-brand-dark">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/30 border border-slate-200/10 rounded-full pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F3EDE2_1px,transparent_1px),linear-gradient(to_bottom,#F3EDE2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content Column */}
        <motion.div 
          className="lg:col-span-7 text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium LinkedIn Growth Agency</span>
          </motion.div>

          {/* Main H1 */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]"
          >
            Transform Your LinkedIn Profile into an{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-gold to-brand-blue-hover font-black relative">
              Opportunity Engine.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-650 font-light leading-relaxed max-w-2xl"
          >
            We manage your content, scale your network, and build high-ticket industry authority so you can focus entirely on closing high-value deals.
          </motion.p>

          {/* Key Value Highlights */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200 max-w-xl"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold text-slate-900 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-brand-blue" />
                10x+
              </span>
              <span className="text-xs text-slate-500">Reach Growth</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold text-slate-900 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-blue" />
                100%
              </span>
              <span className="text-xs text-slate-500">Targeted Execs</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold text-slate-900 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-blue" />
                B2B
              </span>
              <span className="text-xs text-slate-500">Authority First</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-blue-hover hover:from-brand-blue-hover hover:to-brand-blue text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/25 border border-brand-blue/20 hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              Claim Your Free Profile Audit
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a
              href="#methodology"
              onClick={(e) => handleScrollTo(e, '#methodology')}
              className="inline-flex items-center justify-center border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold px-8 py-4 rounded-xl shadow-sm transition-all duration-300 text-center"
            >
              View Our Methodology
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphic Column */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Decorative Backdrops */}
          <div className="absolute w-[280px] h-[280px] bg-brand-blue/5 rounded-full border border-brand-blue/10 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[360px] h-[360px] bg-brand-blue/2 rounded-full border border-slate-200 border-dashed animate-[spin_60s_linear_infinite]" />

          {/* Interactive SVG Network Graphic */}
          <svg
            viewBox="0 0 500 500"
            className="w-full max-w-[420px] h-auto drop-shadow-[0_4px_20px_rgba(140,90,60,0.08)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Connection Lines with Pulse Effect */}
            <motion.path
              d="M250 250 L110 150 M250 250 L390 150 M250 250 L150 350 M250 250 L350 350 M250 250 L250 70 M250 250 L250 430"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            />

            {/* Orbit paths */}
            <circle cx="250" cy="250" r="180" stroke="#F3EDE2" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="250" cy="250" r="100" stroke="#F3EDE2" strokeWidth="1" />

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="centerGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8C5A3C" />
                <stop offset="100%" stopColor="#6F4427" />
              </linearGradient>
              <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D4B483" />
                <stop offset="100%" stopColor="#C19A5B" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F3EDE2" />
                <stop offset="50%" stopColor="#8C5A3C" />
                <stop offset="100%" stopColor="#F3EDE2" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Outer Nodes (Clients/Opportunities) */}
            {/* Node 1: Top Center */}
            <motion.g animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
              <circle cx="250" cy="70" r="14" fill="#ffffff" stroke="#8C5A3C" strokeWidth="2" />
              <circle cx="250" cy="70" r="5" fill="#8C5A3C" />
              <text x="250" y="45" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">TECH FOUNDER</text>
            </motion.g>

            {/* Node 2: Top Left */}
            <motion.g animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}>
              <circle cx="110" cy="150" r="16" fill="#ffffff" stroke="#8C5A3C" strokeWidth="2" />
              <circle cx="110" cy="150" r="6" fill="#8C5A3C" />
              <text x="110" y="123" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">VC PARTNER</text>
            </motion.g>

            {/* Node 3: Top Right */}
            <motion.g animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1 }}>
              <circle cx="390" cy="150" r="18" fill="#ffffff" stroke="#8C5A3C" strokeWidth="2" />
              <circle cx="390" cy="150" r="7" fill="#6F4427" />
              <text x="390" y="120" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">SAAS CEO</text>
            </motion.g>

            {/* Node 4: Bottom Left */}
            <motion.g animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}>
              <circle cx="150" cy="350" r="12" fill="#ffffff" stroke="#8C5A3C" strokeWidth="2" />
              <circle cx="150" cy="350" r="4" fill="#8C5A3C" />
              <text x="150" y="380" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">FINTECH VP</text>
            </motion.g>

            {/* Node 5: Bottom Right */}
            <motion.g animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 2 }}>
              <circle cx="350" cy="350" r="16" fill="#ffffff" stroke="#D4B483" strokeWidth="2" />
              <circle cx="350" cy="350" r="6" fill="#D4B483" />
              <text x="350" y="383" fill="#6F4427" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">INBOUND DEAL</text>
            </motion.g>

            {/* Node 6: Bottom Center */}
            <motion.g animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.8 }}>
              <circle cx="250" cy="430" r="14" fill="#ffffff" stroke="#8C5A3C" strokeWidth="2" />
              <circle cx="250" cy="430" r="5" fill="#8C5A3C" />
              <text x="250" y="460" fill="#475569" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">PRODUCT LEAD</text>
            </motion.g>

            {/* Center Hub: Your Brand */}
            <motion.g
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            >
              <circle cx="250" cy="250" r="38" fill="url(#centerGrad)" filter="url(#glow)" />
              <circle cx="250" cy="250" r="30" fill="#ffffff" />
              <path d="M242 245 L258 245 M250 238 L250 262" stroke="#8C5A3C" strokeWidth="3" strokeLinecap="round" />
              <path d="M242 258 L258 258" stroke="#8C5A3C" strokeWidth="3" strokeLinecap="round" />
              <text x="250" y="282" fill="#8C5A3C" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="2">YOU</text>
            </motion.g>

          </svg>
        </motion.div>

      </div>
    </section>
  );
}
