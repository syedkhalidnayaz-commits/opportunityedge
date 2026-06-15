import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Founder from './components/Founder';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark overflow-x-hidden text-brand-slate flex flex-col justify-between">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Area */}
        <Hero />

        {/* Client Industries Banner */}
        <SocialProof />

        {/* Services & Offerings */}
        <Services />

        {/* The Edge / Methodology */}
        <Methodology />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Meet the Founder */}
        <Founder />

        {/* About / Competitor Matrix */}
        <About />

        {/* Lead Capture form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

