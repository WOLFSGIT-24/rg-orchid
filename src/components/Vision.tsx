import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

interface VisionProps {
  onOpenImage: (src: string, alt: string) => void;
}

export default function Vision({ onOpenImage }: VisionProps) {
  const imageUrl = '/philosophy-img.jpg';
  const imageAlt =
    'Sun-drenched, spacious living room in a modern luxury Villome at RG Orchids Gardenia';

  return (
    <section id="vision" className="py-24 md:py-32 w-full bg-[#fdfcfb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Vision details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#735b2b] uppercase mb-4">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C1D] mb-8 leading-tight">
              Homes as Large as Villas. <br />
              We Call Them <span className="italic text-[#D4B47C] font-serif font-normal">Villomes.</span>
            </h2>
            <p className="font-sans text-lg text-[#4d463a] mb-6 leading-relaxed font-medium">
              Experience the true essence of 'Jumbo Living'. RG Orchids Gardenia is conceived on the
              principle of ultra-low density, ensuring every residence feels like an expansive private
              domain.
            </p>
            <p className="font-sans text-sm md:text-base text-[#4d463a]/80 mb-12 leading-relaxed">
              With only 132 homes spread across 2.7 acres, we prioritize space, light, and air over mere
              square footage. It's not just an apartment; it's a sanctuary where architectural significance
              meets everyday comfort.
            </p>

            {/* Premium Stat Boxes */}
            <div className="grid grid-cols-2 gap-8 border-t border-[#e3e2e1] pt-8">
              <div className="group">
                <span className="block font-serif text-4xl text-[#D4B47C] group-hover:scale-105 transition-transform duration-300 origin-left">
                  132
                </span>
                <span className="font-sans text-[11px] font-bold tracking-[0.1em] text-[#4d463a] uppercase block mt-1">
                  Exclusive Homes
                </span>
                <span className="text-xs text-[#4d463a]/60 mt-1 block">Ultra-low density block planning</span>
              </div>
              <div className="group">
                <span className="block font-serif text-4xl text-[#D4B47C] group-hover:scale-105 transition-transform duration-300 origin-left">
                  2.7
                </span>
                <span className="font-sans text-[11px] font-bold tracking-[0.1em] text-[#4d463a] uppercase block mt-1">
                  Acres of Serenity
                </span>
                <span className="text-xs text-[#4d463a]/60 mt-1 block">70% landscaped open green area</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Image with Click-to-Zoom Lightbox Option */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] sm:h-[550px] lg:h-[600px] w-full rounded-sm overflow-hidden group shadow-md"
          >
            {/* Subtle Overlay on hover */}
            <div className="absolute inset-0 bg-[#D4B47C]/5 group-hover:bg-[#D4B47C]/0 transition-colors duration-700 z-10 pointer-events-none" />

            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Floating zoom indicator */}
            <button
              onClick={() => onOpenImage(imageUrl, imageAlt)}
              className="absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#191c1d]/70 text-white border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#735b2b] hover:scale-105 cursor-pointer"
              title="Click to view full screen"
            >
              <Maximize2 size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
