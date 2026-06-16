import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Quote, TrendingUp, Send, Sparkles, AlertCircle } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  metricLabel: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    quote: '',
    metric: '',
    metricLabel: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch testimonials on load
  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch('/api/testimonials');
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
      } catch (err) {
        console.error('Error fetching testimonials:', err);
      }
    }
    fetchTestimonials();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.company || !formData.quote) {
      setErrorMessage('Please fill in all required fields (Name, Role, Company, Testimonial).');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setTestimonials(data.testimonials);
        setFormData({
          name: '',
          role: '',
          company: '',
          quote: '',
          metric: '',
          metricLabel: '',
        });
        // Reset success banner after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setErrorMessage(data.message || 'Failed to publish testimonial. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      console.error('Submit testimonial error:', err);
      setErrorMessage('Could not connect to the server. Please try again later.');
      setStatus('error');
    }
  };

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
          <p className="text-base text-slate-605 font-light leading-relaxed">
            See how high-growth B2B founders, partners, and executives command authority and drive revenue with our personal branding engine.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <AnimatePresence mode="popLayout">
            {testimonials.map((test, idx) => (
              <motion.div
                key={`${test.name}-${idx}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.5) }}
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
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue font-bold text-lg shrink-0">
                    {test.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">{test.name}</h4>
                    <p className="text-xs text-slate-500">
                      {test.role} at <span className="text-brand-blue font-medium">{test.company}</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Write a Testimonial Section */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-100/50">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 bg-brand-blue/10 rounded-xl text-brand-blue">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Partnered with us?</h3>
              <p className="text-xs text-slate-500">Share your success story and publish it live on our site.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  required
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g. Managing Director"
                  required
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Acme Corp"
                  required
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Key Result Metric (Optional)
                </label>
                <input
                  type="text"
                  name="metric"
                  value={formData.metric}
                  onChange={handleChange}
                  placeholder="e.g. 10x ROI, $500K+"
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Metric Description (Optional)
                </label>
                <input
                  type="text"
                  name="metricLabel"
                  value={formData.metricLabel}
                  onChange={handleChange}
                  placeholder="e.g. Revenue Raised, Sales Generated"
                  className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Testimonial <span className="text-red-500">*</span>
              </label>
              <textarea
                name="quote"
                value={formData.quote}
                onChange={handleChange}
                placeholder="Describe your experience working with us, the results obtained, and the value of our personal branding engine..."
                required
                rows={4}
                className="w-full bg-slate-50/50 border border-slate-200 focus:border-brand-blue focus:bg-white text-slate-900 rounded-xl p-4 text-sm transition-all duration-300 outline-none resize-none"
              />
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-xs text-red-650 bg-red-500/10 border border-red-500/30 p-3 rounded-xl">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success Message */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-xs text-emerald-650 bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl">
                <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Success! Your testimonial has been published and added below.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-blue-hover hover:from-brand-blue-hover hover:to-brand-blue disabled:opacity-50 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/25 transition-all duration-300 cursor-pointer"
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Publishing testimonial...
                </>
              ) : (
                <>
                  Publish Testimonial
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
