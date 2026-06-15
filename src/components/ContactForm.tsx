import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Calendar, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedinUrl: '',
    goal: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.linkedinUrl.trim()) {
      tempErrors.linkedinUrl = 'LinkedIn URL is required';
    } else if (!formData.linkedinUrl.includes('linkedin.com/')) {
      tempErrors.linkedinUrl = 'Please enter a valid LinkedIn profile link';
    }
    
    if (!formData.goal.trim()) tempErrors.goal = 'Please select or describe your primary growth goal';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', linkedinUrl: '', goal: '' });
      } else {
        setErrors((prev) => ({
          ...prev,
          submit: data.message || 'Failed to submit application. Please try again.'
        }));
        setStatus('idle');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrors((prev) => ({
        ...prev,
        submit: 'Could not connect to the server. Please try again later.'
      }));
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="relative bg-brand-dark py-24 px-6 lg:px-8 overflow-hidden z-20 border-t border-slate-200">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
              <Calendar className="w-3.5 h-3.5" />
              Limited Openings
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ready to Turn LinkedIn into Your Best Customer Source?
            </h3>
            
            <p className="text-slate-650 font-light leading-relaxed">
              We work exclusively with a select group of founders, B2B executives, and partners at any given time to maintain institutional quality.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-brand-blue shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Free Profile Audit</h5>
                  <p className="text-xs text-slate-500 font-light mt-0.5">We analyze your profile optimization and provide 3 immediate improvements.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-brand-blue shrink-0">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900">Custom Brand Blueprint</h5>
                  <p className="text-xs text-slate-500 font-light mt-0.5">A tailored outline of content pillars custom-fit for your core customer base.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Card Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-xl relative">
              
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full bg-brand-cream-dark/30 border ${
                            errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                          } rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors duration-300`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                          Business Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`w-full bg-brand-cream-dark/30 border ${
                            errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                          } rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors duration-300`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* LinkedIn Profile */}
                    <div className="space-y-2">
                      <label htmlFor="linkedinUrl" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="text"
                        id="linkedinUrl"
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/username"
                        className={`w-full bg-brand-cream-dark/30 border ${
                          errors.linkedinUrl ? 'border-red-500/60 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                        } rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors duration-300`}
                      />
                      {errors.linkedinUrl && (
                        <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.linkedinUrl}
                        </p>
                      )}
                    </div>

                    {/* Goal Option */}
                    <div className="space-y-2">
                      <label htmlFor="goal" className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        What is your primary growth goal?
                      </label>
                      <select
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className={`w-full bg-brand-cream-dark/30 border ${
                          errors.goal ? 'border-red-500/60 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'
                        } rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none transition-colors duration-300`}
                      >
                        <option value="">Select a goals category...</option>
                        <option value="lead-generation">Generate High-Ticket B2B Inbound Leads</option>
                        <option value="personal-brand">Build Executive Authority & Industry Presence</option>
                        <option value="recruiting">Hire Top Talent & Showcase Company Culture</option>
                        <option value="other">Other Growth Metrics</option>
                      </select>
                      {errors.goal && (
                        <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.goal}
                        </p>
                      )}
                    </div>

                    {errors.submit && (
                      <p className="text-xs text-red-650 flex items-center gap-1.5 mt-2 bg-red-500/10 border border-red-500/30 p-3 rounded-xl">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                        <span>{errors.submit}</span>
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-blue-hover hover:from-brand-blue-hover hover:to-brand-blue disabled:opacity-50 text-white font-semibold py-4 rounded-xl shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/25 border border-brand-blue/20 transition-all duration-300 cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Analyzing profile blueprint...
                        </>
                      ) : (
                        <>
                          Apply for Strategy Session
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="text-center py-12 space-y-6 flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-600">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-slate-900">Application Received!</h4>
                      <p className="text-slate-650 text-sm max-w-md font-light leading-relaxed">
                        Thank you for applying. Our leadership team will review your LinkedIn profile within the next 24 hours to check qualifications.
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-mono">
                      A confirmation email was sent to your inbox.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
