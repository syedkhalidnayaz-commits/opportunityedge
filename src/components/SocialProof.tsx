import { motion } from 'framer-motion';

export default function SocialProof() {
  const industries = [
    { name: 'Enterprise SaaS', icon: 'SaaS' },
    { name: 'Fintech & Web3', icon: 'Fintech' },
    { name: 'Venture Capital', icon: 'VC' },
    { name: 'Artificial Intelligence', icon: 'AI' },
    { name: 'B2B Consulting', icon: 'Consulting' }
  ];

  return (
    <section className="bg-brand-dark border-y border-slate-200 py-10 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <p className="text-sm font-semibold tracking-widest text-slate-600 uppercase text-center">
            Trusted by founders, executives, and partners at companies in
          </p>
          
          <div className="w-full overflow-hidden relative">
            {/* Sliding Container */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {industries.map((ind, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  className="flex items-center gap-3 cursor-default"
                >
                  {/* Abstract SVG Logo representation */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-slate-500 group-hover:text-brand-blue"
                  >
                    {idx === 0 && (
                      // SaaS
                      <path d="M20 5 L35 15 L35 25 L20 35 L5 25 L5 15 Z M20 5 L20 35 M5 15 L35 25 M35 15 L5 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                    {idx === 1 && (
                      // Fintech
                      <path d="M10 30 L10 10 L25 10 M30 10 L30 30 L15 30 M20 20 H30 M10 20 H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                    {idx === 2 && (
                      // VC
                      <path d="M20 5 L35 32 H5 Z M20 18 L20 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                    {idx === 3 && (
                      // AI
                      <path d="M12 12 H28 V28 H12 Z M20 6 V12 M20 28 V34 M6 20 H12 M28 20 H34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                    {idx === 4 && (
                      // Consulting
                      <path d="M8 32 L20 20 L32 32 M20 8 V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    )}
                  </svg>
                  <span className="text-base font-bold tracking-tight text-slate-800 uppercase">
                    {ind.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
