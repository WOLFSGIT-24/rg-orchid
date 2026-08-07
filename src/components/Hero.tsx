import { motion } from 'motion/react';
import { Calendar, ChevronDown, Download, CheckCircle } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full h-auto min-h-screen flex items-center justify-center overflow-hidden bg-[#191c1d] pt-[116px] sm:pt-[120px] pb-16 md:pb-24"
    >
      {/* Background Image with Rich Premium Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-bg.jpg"
          alt="RG Orchids Gardenia Luxury Residence"
          className="w-full h-full object-cover"
        />
        {/* Lighter, ultra-sophisticated glass-like gradient overlay to match Lumina theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#191c1d]/60 via-[#191c1d]/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#191c1d]/70 via-[#191c1d]/30 to-transparent" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center gap-12 text-left mt-8">
        
        <div className="flex-1 w-full flex flex-col items-start text-left">
            {/* Eyebrow Text */}
            <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-white/10 border border-white/20 rounded-full backdrop-blur-md shadow-sm"
            >
            <span className="h-2 w-2 rounded-full bg-[#D4B47C] animate-pulse shadow-[0_0_8px_rgba(212,180,124,0.6)]" />
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.1em] text-white uppercase">
                Luxury Jumbo 3 BHK Residences • Opposite Manyata Tech Park • Hebbal, Bangalore
            </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] tracking-tight max-w-3xl"
            >
            Jumbo Living, Crafted for a <br className="hidden md:block"/>
            <span className="text-[#D4B47C] font-serif italic font-normal tracking-wide mt-2 inline-block">
                Life Without Compromise.
            </span>
            </motion.h1>

            {/* Display Subtitle */}
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-gray-300 mt-6 max-w-2xl font-medium leading-relaxed"
            >
            Experience exclusive 3 BHK residences with expansive layouts, signature floating balconies, and premium amenities in one of North Bangalore's most connected addresses.
            </motion.p>
            

            {/* Action Buttons */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-stretch justify-start"
            >
            <button
                onClick={() => onScrollToSection('register')}
                className="flex items-center justify-center gap-2 bg-[#D4B47C] text-[#191c1d] px-8 py-4 font-sans text-xs md:text-sm tracking-widest font-bold rounded-sm hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(212,180,124,0.3)] cursor-pointer group active:scale-95"
            >
                <Calendar size={18} className="group-hover:translate-x-0.5 transition-transform" />
                SCHEDULE A SITE VISIT
            </button>
            <button
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 font-sans text-xs md:text-sm tracking-widest font-bold rounded-sm hover:bg-white/20 transition-all duration-300 backdrop-blur-sm cursor-pointer group active:scale-95"
            >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                DOWNLOAD BROCHURE
            </button>
            </motion.div>

            {/* Trust Strip */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.7 }}
               className="mt-10 flex flex-wrap items-center gap-3 md:gap-4 text-[10px] md:text-xs font-semibold tracking-wider text-gray-400 uppercase"
            >
                <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#D4B47C]" /> RERA Approved</div>
                <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block"></span>
                <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#D4B47C]" /> 40+ Projects Delivered</div>
                <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block"></span>
                <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#D4B47C]" /> 4000+ Happy Families</div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
