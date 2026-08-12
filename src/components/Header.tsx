import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, KeyRound, CheckCircle2, RefreshCw } from 'lucide-react';
import { Enquiry } from '../types';

interface HeaderProps {
  onAdminToggle: () => void;
  isAdminOpen: boolean;
  onScrollToSection: (id: string) => void;
  activeSection: string;
}

export default function Header({
  onAdminToggle,
  isAdminOpen,
  onScrollToSection,
  activeSection,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'HIGHLIGHTS' },
    { id: 'vision', label: 'PHILOSOPHY' },
    { id: 'master-plan', label: 'MASTER PLAN' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'location', label: 'LOCATION' },
    { id: 'gallery', label: 'THE LIFESTYLE' },
  ];

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f8]/95 backdrop-blur-md shadow-sm border-b border-[#e3e2e1] h-16'
          : 'bg-[#faf9f8]/80 backdrop-blur-md border-b border-[#e3e2e1]/30 h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onScrollToSection('hero')}
        >
          <img src="/logo-new.png" alt="RG Unique Structures" className="h-12 md:h-16 w-auto object-contain" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollToSection(item.id)}
              className={`relative font-sans text-xs tracking-widest font-semibold transition-all hover:text-[#735b2b] cursor-pointer pt-1 focus:outline-none ${
                activeSection === item.id
                  ? 'text-[#735b2b]'
                  : 'text-[#4d463a]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-[-18px] left-0 right-0 h-[2px] bg-[#735b2b]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTAs and profile */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onScrollToSection('register')}
            className="bg-[#D4B47C] text-[#191c1d] px-6 py-2.5 font-sans text-xs tracking-wider font-semibold rounded-sm hover:bg-[#b3935b] hover:text-white transition-all cursor-pointer border border-[#D4B47C] active:scale-95"
          >
            ENQUIRE NOW
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#191c1d] p-2 hover:text-[#735b2b] transition-all cursor-pointer focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#faf9f8] border-b border-[#e3e2e1] shadow-lg flex flex-col p-6 gap-4 lg:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`font-sans text-xs tracking-widest font-semibold py-2 text-left hover:text-[#735b2b] ${
                  activeSection === item.id ? 'text-[#735b2b]' : 'text-[#4d463a]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="h-[1px] bg-[#e3e2e1] my-2" />
            <button
              onClick={() => {
                onScrollToSection('register');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#D4B47C] text-[#191c1d] py-3 font-sans text-xs tracking-wider font-semibold rounded-sm text-center hover:bg-[#b3935b] hover:text-white transition-all"
            >
              ENQUIRE NOW
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
