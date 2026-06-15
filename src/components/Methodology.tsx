import { motion } from 'framer-motion';
import { Target, MessageSquare, Workflow, ChevronRight } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      badge: 'Step 1: Strategize',
      title: 'Define Your Authority Positioning Matrix',
      description: 'We don\'t do cookie-cutter content. We sit down with you to extract your unique insights, career stories, and industry perspectives. This forms your custom Content Matrix, ensuring every post reinforces your distinct market position and addresses your buyers\' pain points.',
      bullets: [
        'Proprietary ICP (Ideal Client Profile) alignment framework',
        'Narrative extraction & content angle definition',
        'Direct alignment with your internal marketing and sales goals'
      ],
      icon: Target,
      visual: (
        <div className="relative w-full aspect-video rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-6 overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 via-transparent to-transparent" />
          <div className="absolute w-[200px] h-[200px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative w-full space-y-3">
            {/* Mock Dashboard UI representing Positioning */}
            <div className="h-6 w-1/3 bg-slate-100 rounded-md border border-slate-200 flex items-center px-2 text-[10px] text-slate-600 font-mono">ICP Matrix</div>
            <div className="space-y-2">
              <div className="h-10 w-full bg-slate-50 rounded-lg border border-slate-200 p-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800">Thought Leadership Angle</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20">Active</span>
              </div>
              <div className="h-10 w-full bg-slate-50 rounded-lg border border-slate-200 p-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800">Value-Based Case Studies</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20">Active</span>
              </div>
              <div className="h-10 w-full bg-slate-50 rounded-lg border border-slate-200 p-2 flex items-center justify-between opacity-50">
                <span className="text-xs font-semibold text-slate-500">Industry Rants & Hype</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-600">Disabled</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      badge: 'Step 2: Ghostwrite',
      title: 'High-Retention Content Writing & Publishing',
      description: 'Your audience scrolls past generic updates. Our elite ghostwriters create deep-dive, narrative-driven posts that capture attention immediately and retain readers until the last line. Every post is formatted perfectly for LinkedIn\'s algorithm and designed to drive outbound and inbound clicks.',
      bullets: [
        'Writing style modeled specifically to match your voice',
        'Attention-grabbing hooks that stop the scroll',
        'Algorithm-optimized layouts with custom graphic assets'
      ],
      icon: MessageSquare,
      visual: (
        <div className="relative w-full aspect-video rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-6 overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 via-transparent to-transparent" />
          <div className="absolute w-[200px] h-[200px] bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative w-full space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs font-bold text-slate-800 font-mono">Draft Review</span>
              <span className="text-[10px] text-slate-600 font-mono">100% Quality Check</span>
            </div>
            
            <div className="space-y-2">
              {/* Hook, Body, CTA visual representation */}
              <div className="flex gap-2">
                <span className="text-[10px] font-mono text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20 shrink-0">Hook</span>
                <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/20 shrink-0">Value</span>
                <div className="space-y-1.5 w-5/6">
                  <div className="h-3 w-full bg-slate-200/80 rounded"></div>
                  <div className="h-3 w-4/5 bg-slate-200/80 rounded"></div>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-mono text-green-600 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20 shrink-0">CTA</span>
                <div className="h-4 w-1/2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      badge: 'Step 3: Capture',
      title: 'Turn Engagement Into Warm Inbound Pipelines',
      description: 'We don\'t measure success in meaningless "likes". We optimize your entire platform to build inbound pipelines. When key executives engage with your posts, we trigger conversational comment workflows and targeted profile navigation that convert warm viewers into qualified business leads.',
      bullets: [
        'Prospect profile view tracking and analytics',
        'Conversational engagement frameworks to spark discussions',
        'Direct scheduling setup integration for frictionless call booking'
      ],
      icon: Workflow,
      visual: (
        <div className="relative w-full aspect-video rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-6 overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 via-transparent to-transparent" />
          
          <div className="relative w-full flex flex-col justify-between h-full">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono text-slate-600">Live Inbound Funnel</span>
            </div>
            
            {/* visual funnel path */}
            <div className="flex items-center justify-around py-2">
              <div className="flex flex-col items-center gap-1 bg-slate-50 p-2 rounded-lg border border-slate-200">
                <span className="text-xs font-bold text-slate-800">Post View</span>
                <span className="text-[10px] text-brand-blue font-mono">10,000+</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <div className="flex flex-col items-center gap-1 bg-slate-50 p-2 rounded-lg border border-slate-200">
                <span className="text-xs font-bold text-slate-800">Profile Click</span>
                <span className="text-[10px] text-brand-blue font-mono">540</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <div className="flex flex-col items-center gap-1 bg-brand-blue/10 p-2 rounded-lg border border-brand-blue/20">
                <span className="text-xs font-bold text-slate-800">Call Booked</span>
                <span className="text-[10px] text-brand-gold font-bold font-mono">24 Leads</span>
              </div>
            </div>
            
            <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-brand-blue" 
                initial={{ width: '0%' }}
                whileInView={{ width: '85%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="methodology" className="relative bg-brand-dark py-24 px-6 lg:px-8 overflow-hidden z-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue">
            The Methodology
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Build Your LinkedIn Authority Engine
          </h3>
          <p className="text-base text-slate-600 font-light leading-relaxed">
            We operate in a structured, repeatable format designed to systematically build your profile, scale your reach, and deliver warm pipelines directly to your calendar.
          </p>
        </div>

        {/* Alternate Zig-Zag Steps */}
        <div className="space-y-24 md:space-y-32">
          {steps.map((step, idx) => {
            const isOdd = idx % 2 !== 0;
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isOdd ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`lg:col-span-6 space-y-6 ${isOdd ? 'lg:order-2' : ''}`}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue font-mono bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
                    <Icon className="w-3.5 h-3.5" />
                    {step.badge}
                  </div>
                  
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                    {step.title}
                  </h4>
                  
                  <p className="text-slate-650 font-light leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-cream-dark border border-slate-200 shrink-0 mt-0.5">
                          <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                        </span>
                        <span className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Visual Graphic */}
                <motion.div
                  initial={{ opacity: 0, x: isOdd ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={`lg:col-span-6 ${isOdd ? 'lg:order-1' : ''}`}
                >
                  <div className="p-1.5 bg-gradient-to-br from-brand-cream-dark/40 via-white to-brand-cream-light/60 rounded-3xl border border-slate-200 shadow-md">
                    {step.visual}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
