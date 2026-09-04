import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[105vh] bg-[#faf9f8] pt-[140px] sm:pt-[180px] pb-16 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
          {/* Mobile-only Heading (appears above image) */}
          <div className="flex lg:hidden flex-col items-start text-left mb-4 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#735b2b] uppercase">
                RG Orchids Gardenia
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl sm:text-6xl text-[#191C1D] leading-[1.2] tracking-tight font-bold"
            >
              Experience the <br className="hidden md:block"/>
              True Essence of{" "}
              <span className="text-[#D4B47C] font-normal">Jumbo Living.</span>
            </motion.h1>
          </div>
          
          {/* Left Column - Main Polaroid Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-full aspect-[3/4] max-w-lg mx-auto lg:mx-0 lg:max-w-none bg-white p-4 sm:p-6 pb-12 sm:pb-16 rounded-sm shadow-2xl z-10"
          >
            <img
              src="/hero-bg.webp"
              alt="RG Orchids Gardenia Elevation"
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="sync"
            />
          </motion.div>

          {/* Right Column - Content */}
          <div className="flex flex-col items-start text-left relative z-20 mt-8 lg:mt-0">
            {/* Eyebrow Text (Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 hidden lg:block"
            >
              <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#735b2b] uppercase">
                RG Orchids Gardenia
              </span>
            </motion.div>

            {/* Display Headline (Desktop) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-7xl text-[#191C1D] leading-[1.2] tracking-tight font-bold mb-6 hidden lg:block"
            >
              Experience the <br className="hidden md:block"/>
              True Essence of{" "}
              <span className="text-[#D4B47C] font-normal">Jumbo Living.</span>
            </motion.h1>

            {/* Display Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-base sm:text-lg text-[#4d463a] mb-10 max-w-lg font-medium leading-relaxed"
            >
              RG Orchids Gardenia is conceived on the principle of ultra-low density, ensuring every residence feels like an expansive private domain.
            </motion.p>


            <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between w-full gap-8 mt-4">
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-start relative z-20 shrink-0"
              >
                <button
                  onClick={() => onScrollToSection('register')}
                  className="flex items-center justify-center gap-2 bg-[#D1A75B] text-black px-8 py-4 font-sans text-sm font-bold tracking-wide uppercase rounded-md hover:bg-[#b88c42] transition-all duration-300 shadow-md cursor-pointer group w-full sm:w-auto active:scale-95 whitespace-nowrap"
                >
                  BOOK A SITE VISIT
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
                <button
                  className="flex items-center justify-center gap-2 bg-transparent border border-[#191C1D] text-[#191C1D] px-8 py-4 font-sans text-sm font-bold tracking-wide uppercase rounded-md hover:bg-[#191C1D]/5 transition-all duration-300 cursor-pointer group w-full sm:w-auto active:scale-95 whitespace-nowrap"
                >
                  <Download size={16} className="group-hover:-translate-y-1 transition-transform shrink-0" />
                  BROCHURE
                </button>
              </motion.div>


            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

