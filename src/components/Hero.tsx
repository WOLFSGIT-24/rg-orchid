import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full h-auto min-h-screen flex items-center justify-center overflow-hidden bg-[#191c1d] pt-[140px] sm:pt-[160px] pb-16 md:pb-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays to ensure text readability similar to the screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent mix-blend-multiply" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center gap-12 text-left mt-8">
        
        <div className="flex-1 w-full flex flex-col items-start text-left">
            {/* Eyebrow Text */}
            <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-black/40 border border-white/10 rounded-md backdrop-blur-sm"
            >
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-widest text-[#D4B47C] uppercase">
                RG Orchids Gardenia
            </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-sans text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] tracking-tight max-w-4xl font-semibold"
            >
            Experience the <br className="hidden md:block"/>
            True Essence of <span className="text-[#F2D792]">Jumbo Living</span>
            </motion.h1>

            {/* Display Subtitle */}
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-gray-200 mt-6 max-w-2xl font-normal leading-relaxed"
            >
            RG Orchids Gardenia is conceived on the principle of ultra-low density, ensuring every residence feels like an expansive private domain.
            </motion.p>
            

            {/* Action Buttons */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch justify-start"
            >
            <button
                onClick={() => onScrollToSection('register')}
                className="flex items-center justify-center gap-2 bg-[#D1A75B] text-black px-7 py-3.5 font-sans text-sm font-semibold rounded-md hover:bg-[#b88c42] transition-all duration-300 shadow-lg cursor-pointer group active:scale-95"
            >
                Schedule Your Visit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
                className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3.5 font-sans text-sm font-semibold rounded-md hover:bg-white/20 transition-all duration-300 backdrop-blur-md cursor-pointer group active:scale-95"
            >
                <Play size={18} className="group-hover:scale-110 transition-transform fill-white" />
                View Our Campus
            </button>
            </motion.div>

        </div>
      </div>
    </section>
  );
}

