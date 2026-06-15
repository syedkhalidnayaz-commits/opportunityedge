import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-cream-dark border-t border-slate-200 py-12 px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo or brand name */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-black tracking-tight text-slate-900 uppercase">
            Opportunity
            <span className="text-brand-blue ml-1 font-light tracking-wide">Edge</span>
          </span>
          <span className="text-[10px] text-slate-600 font-mono">Premium LinkedIn Growth & Branding</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs text-slate-600">
          <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Anti-Spam Policy</a>
        </div>

        {/* Social & Contact */}
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg bg-brand-dark border border-slate-200 text-slate-600 hover:text-brand-blue hover:border-slate-350 hover:bg-brand-cream-light transition-all flex items-center justify-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="mailto:opportunityedgeagency@gmail.com"
            aria-label="Email"
            className="p-2 rounded-lg bg-brand-dark border border-slate-200 text-slate-600 hover:text-brand-blue hover:border-slate-350 hover:bg-brand-cream-light transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600">
        <span>&copy; {currentYear} Opportunity Edge. All rights reserved.</span>
        <span>Made for high-performing B2B Founders & Partners.</span>
      </div>
    </footer>
  );
}
