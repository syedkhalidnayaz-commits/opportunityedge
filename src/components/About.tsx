import { motion } from 'framer-motion';
import { ShieldAlert, Award, BadgeCheck } from 'lucide-react';


export default function About() {
  const comparisons = [
    {
      title: 'Opportunity Edge',
      subtitle: 'B2B Revenue Focus',
      isBrand: true,
      points: [
        'Dedicated professional ghostwriters',
        'Direct integration with CRM & calendars',
        'Custom positioning matching executive style',
        'Content mapping to sales-cycle pipeline',
        'Verifiable pipeline metric reporting'
      ]
    },
    {
      title: 'Typical Agencies',
      subtitle: 'General Engagement Focus',
      isBrand: false,
      points: [
        'Generic AI-generated boilerplate text',
        'Only optimize for vanity metrics (likes/reach)',
        'Junior writers who do not understand tech/SaaS',
        'Zero integration with actual pipeline metrics',
        'Uncoordinated posting with no CTA direction'
      ]
    }
  ];

  return (
    <section id="about" className="relative bg-brand-dark py-24 px-6 lg:px-8 overflow-hidden z-20 border-t border-slate-200">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-blue">
            Why Choose Us
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Outpace Traditional Social Media Agencies
          </h3>
          <p className="text-base text-slate-650 font-light leading-relaxed">
            Most social agencies chase viral videos and emoji-laden comments. We design high-intent brand engines for B2B executives looking to command premium market pricing.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {comparisons.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`p-8 rounded-3xl border flex flex-col justify-between ${
                comp.isBrand
                  ? 'bg-white border-brand-blue/35 shadow-lg shadow-brand-blue/5'
                  : 'bg-brand-cream-dark/40 border-slate-200/80 opacity-70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className={`text-xl font-bold ${comp.isBrand ? 'text-slate-900' : 'text-slate-500'}`}>
                    {comp.title}
                  </h4>
                  {comp.isBrand ? (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/30">
                      Our Standard
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600 bg-brand-cream-dark px-2 py-0.5 rounded border border-slate-200">
                      Standard Practice
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 font-mono mt-1">{comp.subtitle}</p>

                <ul className="space-y-4 mt-8">
                  {comp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm">
                      {comp.isBrand ? (
                        <BadgeCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      ) : (
                        <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                      )}
                      <span className={comp.isBrand ? 'text-slate-800' : 'text-slate-600 font-light'}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {comp.isBrand && (
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-brand-blue font-semibold">
                  <Award className="w-4 h-4" />
                  Premium Ghostwriting & Authority, Guaranteed.
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
