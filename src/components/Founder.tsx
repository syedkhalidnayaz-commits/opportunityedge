import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Award, ArrowUpRight, BookOpen } from 'lucide-react';
import founderImg from '../assets/founder.png';

export default function Founder() {
  return (
    <section id="founder" className="relative bg-brand-cream-dark py-24 px-6 lg:px-8 overflow-hidden z-20 border-t border-slate-200">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Founder
          </h2>
          <p className="text-base text-slate-605 font-light leading-relaxed">
            Uncover the philosophy and leadership driving LinkedIn campaigns for industry-leading executives.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Left Column: Picture & Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden relative group"
            >
              <div className="aspect-square w-full rounded-2xl overflow-hidden relative">
                <img
                  src={founderImg}
                  alt="Khalid, Founder of Opportunity Edge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Brand pill */}
                <div className="absolute bottom-4 left-4 z-10 space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">Khalid</h3>
                  <p className="text-xs text-brand-blue font-mono uppercase tracking-wider">Founder & Chief Positioning Officer</p>
                </div>
              </div>
            </motion.div>

            {/* Direct Contact Details Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 font-mono">
                Direct Contact details
              </h4>

              <div className="space-y-3">
                <a
                  href="mailto:opportunityedgeagency@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-brand-dark border border-slate-200/60 hover:bg-brand-cream-dark/50 hover:border-brand-blue/30 transition-all text-xs sm:text-sm text-slate-700 group"
                >
                  <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-slate-400 font-mono leading-none">Professional</span>
                    <span className="truncate mt-1 text-xs sm:text-sm">opportunityedgeagency@gmail.com</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover:text-brand-blue transition-colors shrink-0" />
                </a>

                <a
                  href="mailto:syedkhalidnayaz@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-brand-dark border border-slate-200/60 hover:bg-brand-cream-dark/50 hover:border-brand-blue/30 transition-all text-xs sm:text-sm text-slate-700 group"
                >
                  <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-slate-400 font-mono leading-none">Personal</span>
                    <span className="truncate mt-1 text-xs sm:text-sm">syedkhalidnayaz@gmail.com</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover:text-brand-blue transition-colors shrink-0" />
                </a>

                <a
                  href="tel:+919108182734"
                  className="flex items-center gap-3 p-3 rounded-xl bg-brand-dark border border-slate-200/60 hover:bg-brand-cream-dark/50 hover:border-brand-blue/30 transition-all text-xs sm:text-sm text-slate-700 group"
                >
                  <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>+91 91081 82734</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-slate-400 group-hover:text-brand-blue transition-colors shrink-0" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-dark border border-slate-200/60 text-xs sm:text-sm text-slate-700">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Bengaluru, India & Silicon Valley</span>
                </div>
              </div>

            </motion.div>

          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-8 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-slate-650 font-light text-base leading-relaxed"
            >
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                "We don't sell viral templates. We build market-commanding authority."
              </h3>

              <p>
                In 2024, LinkedIn became flooded with generic AI content. Everybody started using the same hooks, the same formats, and the same hollow advice. Consequently, audience trust plummeted, and vanity likes stopped converting into sales pipeline.
              </p>

              <p>
                I founded <strong className="text-slate-900 font-medium">Opportunity Edge</strong> to reverse this trend. We work exclusively with a handful of selected B2B founders, partners, and high-ticket executives to design content based on their actual business insights, data points, and lived expertise.
              </p>

              <p>
                When you partner with us, you are not handed off to a junior writer. I personally direct the research, position your core message, and audit the output to guarantee the tone reflects your unique style and status.
              </p>
            </motion.div>

            {/* Core Values / Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Direct Advisory</h5>
                  <p className="text-xs text-slate-500 mt-1">Direct access to executive brand strategists, no middle managers.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-650 shrink-0 mt-0.5">
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">High-Ticket Alignment</h5>
                  <p className="text-xs text-slate-500 mt-1">Our processes align strictly with premium enterprise sales cycles.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
