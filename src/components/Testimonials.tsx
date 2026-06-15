import { motion } from 'framer-motion';
import { MessageSquare, Quote, TrendingUp } from 'lucide-react';
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  metricLabel: string;
  image: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Elena Rostova',
      role: 'CEO & Co-Founder',
      company: 'SaaSFlow',
      quote: 'Opportunity Edge completely transformed our outbound strategy. Within 60 days of launching our ghostwritten executive content, we booked 14 discovery calls with Fortune 500 decision-makers purely from inbound LinkedIn DMs.',
      metric: '$280K+',
      metricLabel: 'Pipeline Generated',
      image: client1
    },
    {
      name: 'Marcus Vance',
      role: 'Managing Partner',
      company: 'Scale Ventures',
      quote: 'As VCs, personal branding is our primary source of deal flow. The team at Opportunity Edge did not just write posts; they aligned my profile with our investment thesis. The quality is unmatched.',
      metric: '6.4M',
      metricLabel: 'Impressions & 4x Dealflow',
      image: client2
    }
  ];

  return (
    <section id="testimonials" className="relative bg-brand-cream-dark py-24 px-6 lg:px-8 overflow-hidden z-20 border-t border-slate-200">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Social Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-base text-slate-650 font-light leading-relaxed">
            See how high-growth B2B founders, partners, and executives command authority and drive revenue with our personal branding engine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-brand-blue/45 hover:bg-white hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Result Metric Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600">
                      <TrendingUp className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-lg font-black text-emerald-600 leading-none">{test.metric}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5 uppercase tracking-wider">{test.metricLabel}</div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-brand-blue/20 transition-colors shrink-0" />
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm md:text-base font-light italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-brand-blue/30 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">{test.name}</h4>
                  <p className="text-xs text-slate-605">
                    {test.role} at <span className="text-brand-blue font-medium">{test.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
