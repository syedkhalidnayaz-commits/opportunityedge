import { motion } from 'framer-motion';
import { UserCheck, PenTool, Radio, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Profile Optimization',
      icon: UserCheck,
      description: 'We restructure your entire profile into a high-converting landing page. From custom high-ticket banner designs and SEO-driven positioning headlines to authority-focused featured sections and a clear booking funnel.',
      deliverables: [
        'Conversion-optimized hero banner',
        'SEO & keyword-optimized headlines',
        'Authority-driven "About" narrative',
        'Custom featured-section funnel configuration'
      ],
      color: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'group-hover:border-blue-500/40'
    },
    {
      title: 'Executive Ghostwriting',
      icon: PenTool,
      description: 'Our elite writers capture your voice and translate your expertise into high-retention content. We write, schedule, and refine a thought leadership strategy that positions you as the default expert in your industry.',
      deliverables: [
        '100% custom content (zero AI-cliché phrasing)',
        'Industry analysis & authority positioning',
        'High-converting post formats & threads',
        'Strategic weekly scheduling & formatting'
      ],
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'group-hover:border-amber-500/40'
    },
    {
      title: 'Network Amplification',
      icon: Radio,
      description: 'We scale your digital presence by actively engaging with target prospects, key partners, and market influencers. Through structured comments and direct outbound networks, we build warm sales pipelines.',
      deliverables: [
        'High-value commenting on target accounts',
        'Outbound network mapping and scaling',
        'Warm introduction setups with decision makers',
        'Detailed monthly audience growth analytics'
      ],
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'group-hover:border-cyan-500/40'
    }
  ];

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
    <section id="services" className="relative bg-brand-cream-dark py-24 px-6 lg:px-8 overflow-hidden z-20">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue">
            Our Core Competencies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Growth Infrastructure
          </h3>
          <p className="text-base text-slate-650 font-light leading-relaxed">
            We handle the end-to-end management of your personal brand, ensuring every piece of content, engagement, and profile update aligns with your revenue goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between bg-brand-dark/95 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 overflow-hidden transition-all duration-300 hover:translate-y-[-6px] hover:bg-white hover:shadow-xl hover:shadow-brand-gold/10"
              >
                {/* Glow Backdrop */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Icon Card */}
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-slate-100 border border-slate-200 text-brand-blue group-hover:text-white group-hover:bg-brand-blue group-hover:border-brand-blue/50 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xl font-bold text-slate-900 mt-6 transition-all duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-600 font-light mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables list */}
                  <ul className="mt-6 space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-6">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-1.5 shrink-0" />
                        <span className="leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer CTA */}
                <div className="mt-8 pt-4">
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, '#contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 group-hover:text-brand-blue transition-colors duration-200"
                  >
                    Get started with this
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
