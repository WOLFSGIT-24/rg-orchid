import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Vision from './components/Vision';
import MasterPlan from './components/MasterPlan';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Gallery from './components/Gallery';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsModal from './components/TermsModal';
import LeadsPanel from './components/LeadsPanel';
import FloatingButtons from './components/FloatingButtons';
import PopupForm from './components/PopupForm';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  // Lightbox modal states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'vision', 'master-plan', 'amenities', 'location', 'gallery', 'register'];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenImage = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };


  const handleSuccessEnquiry = () => {
    // Toggle state to tell LeadsPanel to refresh its data
    setRefreshTrigger((prev) => !prev);
  };

  return (
    <div id="main-container" className="relative bg-[#faf9f8] text-[#191c1d] overflow-x-hidden">
      {/* Fixed Top Navigation Bar containing both Announcement Bar and Header */}
      <div className="fixed top-0 left-0 right-0 z-40 w-full flex flex-col">
        {/* Interactive Global Announcement Bar */}
        <div className="bg-[#1a1c1c] text-white py-2 text-center text-[10px] sm:text-xs font-sans tracking-[0.2em] font-semibold border-b border-white/5 uppercase flex items-center justify-center gap-2 px-4">
          <Sparkles size={12} className="text-[#D4B47C] animate-pulse" />
          <span>LIMITED PERIOD 50:50 BOOKING OFFER IN PROGRESS. PAY 50% NOW & 50% ON POSSESSION*</span>
        </div>

        {/* Header */}
        <Header
          activeSection={activeSection}
          onScrollToSection={handleScrollToSection}
          isAdminOpen={isAdminOpen}
          onAdminToggle={() => setIsAdminOpen(!isAdminOpen)}
        />
      </div>

      {/* Hero Block */}
      <Hero onScrollToSection={handleScrollToSection} />

      {/* Highlights / Features Block */}
      <Highlights />

      {/* Vision / Philosophy Block */}
      <Vision onOpenImage={handleOpenImage} />

      {/* Architectural Master Plan */}
      <MasterPlan onOpenImage={handleOpenImage} />

      {/* Clubhouse Amenities Bento & Specs */}
      <Amenities onOpenImage={handleOpenImage} />

      {/* Walkable Location Coordinates */}
      <Location onOpenImage={handleOpenImage} />

      {/* Lifestyle Photographic Portfolio */}
      <Gallery onOpenImage={handleOpenImage} />

      {/* Enquiry Form / Site Visit Scheduling Section */}
      <section id="register" className="relative py-24 md:py-32 bg-[#141515] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#735b2b]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Info Side */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#D4B47C] uppercase mb-4 block">
                  Reserve VIP Invite
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
                  Schedule Your Private Tour
                </h2>
                <p className="font-sans text-base text-white/70 leading-relaxed font-light">
                  Experience Jumbo Living in person. Our bespoke sample residence is open daily for VIP viewings by appointment.
                </p>
              </div>

              {/* Service inclusions list */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 text-[#D4B47C] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#735b2b] group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white group-hover:text-[#D4B47C] transition-colors duration-300">Personalized Concierge Tour</h4>
                    <p className="font-sans text-sm text-white/50 mt-1.5 font-light leading-relaxed">Walk through structural columns, high-ceilinged balconies, and finishes led by a lead architect.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 text-[#D4B47C] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#735b2b] group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white group-hover:text-[#D4B47C] transition-colors duration-300">Custom Payment Plan Modeling</h4>
                    <p className="font-sans text-sm text-white/50 mt-1.5 font-light leading-relaxed">Customize payment stages based on construction progress milestones or select the 50:50 schedule.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group">
                  <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 text-[#D4B47C] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#735b2b] group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-white group-hover:text-[#D4B47C] transition-colors duration-300">Secure Covered Parking Area</h4>
                    <p className="font-sans text-sm text-white/50 mt-1.5 font-light leading-relaxed">Private valet parking is provided at our sales experience lounge directly opposite Manyata gate.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <EnquiryForm
                selectedSize={selectedSize}
                selectedPrice={selectedPrice}
                onSuccess={handleSuccessEnquiry}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer 
        onScrollToSection={handleScrollToSection} 
        onOpenPrivacyPolicy={() => setPrivacyPolicyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* HD Image Zoom Lightbox */}
      <ImageModal
        isOpen={lightboxOpen}
        src={lightboxSrc}
        alt={lightboxAlt}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={privacyPolicyOpen}
        onClose={() => setPrivacyPolicyOpen(false)}
      />

      {/* Terms Modal */}
      <TermsModal 
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />

      {/* Real-time CRM Leads management drawer */}
      <LeadsPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        refreshTrigger={refreshTrigger}
        onUpdateStatus={() => setRefreshTrigger((prev) => !prev)}
      />

      {/* Floating CTA Buttons */}
      <FloatingButtons onScrollToSection={handleScrollToSection} />

      {/* Auto-trigger Page Load Popup */}
      <PopupForm />
    </div>
  );
}
