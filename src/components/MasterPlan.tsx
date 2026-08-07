import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Layout, Sun, Compass, ChevronLeft, ChevronRight } from 'lucide-react';

interface MasterPlanProps {
  onOpenImage: (src: string, alt: string) => void;
}

export default function MasterPlan({ onOpenImage }: MasterPlanProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const masterPlanImages = [
    { src: '/layout-img.png', alt: 'RG Orchids Gardenia master plan layout', label: 'Master Plan Layout' },
    { src: '/floor-plan-a.jpg', alt: 'Floor Plan Tower A', label: 'Floor Plan Tower A' },
    { src: '/floor-plan-b.jpg', alt: 'Floor Plan Tower B', label: 'Floor Plan Tower B' },
    { src: '/floor-plan-c.jpg', alt: 'Floor Plan Tower C', label: 'Floor Plan Tower C' }
  ];

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === masterPlanImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? masterPlanImages.length - 1 : prev - 1));
  };

  return (
    <section id="master-plan" className="py-24 md:py-32 w-full bg-[#faf9f8] relative overflow-hidden border-t border-b border-[#e3e2e1]">
      {/* Soft Gold Background Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4B47C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#735b2b] uppercase mb-4 block">
            Architectural Layout
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#191C1D] mb-6">
            Masterfully Crafted for Privacy
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#4d463a]/90 leading-relaxed font-normal">
            Designed with only 4 units per floor, ensuring 3 sides are open for unprecedented natural light
            and 180° open skyline views.
          </p>
        </div>

        {/* Master Plan Map Container with zoom feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#ffffff] p-6 sm:p-10 rounded-sm shadow-md border border-[#e3e2e1] group"
        >
          <div className="relative w-full overflow-hidden rounded-sm bg-[#faf9f8] border border-[#e3e2e1] flex items-center justify-center p-2 sm:p-4 cursor-pointer min-h-[300px] sm:min-h-[500px]"
               onClick={() => onOpenImage(masterPlanImages[currentSlide].src, masterPlanImages[currentSlide].alt)}>
            
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={masterPlanImages[currentSlide].src}
                alt={masterPlanImages[currentSlide].alt}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Image Label Overlay */}
            <div className="absolute top-4 left-4 z-20 bg-[#191c1d]/80 text-[#D4B47C] px-4 py-2 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-md shadow-sm border border-[#D4B47C]/30 pointer-events-none">
              {masterPlanImages[currentSlide].label}
            </div>

            {/* Dark glass overlay with instruction */}
            <div className="absolute inset-0 bg-[#191c1d]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white pointer-events-none">
              <div className="h-14 w-14 rounded-full bg-[#735b2b]/90 flex items-center justify-center text-white border border-white/20 mb-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 size={22} />
              </div>
              <span className="font-sans text-xs font-bold tracking-widest uppercase">Click to Zoom Master Plan</span>
            </div>

            {/* Slider Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={prevSlide}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 text-[#191c1d] flex items-center justify-center shadow-md border border-[#e3e2e1] pointer-events-auto hover:bg-[#735b2b] hover:text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 text-[#191c1d] flex items-center justify-center shadow-md border border-[#e3e2e1] pointer-events-auto hover:bg-[#735b2b] hover:text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-auto">
              {masterPlanImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-[#735b2b] w-6' : 'bg-gray-400 hover:bg-gray-600'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Highlights Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#e3e2e1]">
            <div className="flex items-start gap-4 group/item p-3 hover:bg-[#faf9f8] rounded-sm transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-[#735b2b]/5 border border-[#735b2b]/15 flex items-center justify-center text-[#735b2b] shrink-0 group-hover/item:bg-[#735b2b] group-hover/item:text-white transition-all duration-300">
                <Layout size={20} />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold tracking-wide text-[#191C1D] mb-2 uppercase">
                  4 Units Per Floor
                </h4>
                <p className="font-sans text-xs md:text-sm text-[#4d463a] leading-relaxed">
                  Maximum privacy with minimal shared walls, reducing noise and increasing luxury.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item p-3 hover:bg-[#faf9f8] rounded-sm transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-[#735b2b]/5 border border-[#735b2b]/15 flex items-center justify-center text-[#735b2b] shrink-0 group-hover/item:bg-[#735b2b] group-hover/item:text-white transition-all duration-300">
                <Sun size={20} />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold tracking-wide text-[#191C1D] mb-2 uppercase">
                  3 Sides Open
                </h4>
                <p className="font-sans text-xs md:text-sm text-[#4d463a] leading-relaxed">
                  Exceptional cross-ventilation and daylight in every room to maintain premium wellness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group/item p-3 hover:bg-[#faf9f8] rounded-sm transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-[#735b2b]/5 border border-[#735b2b]/15 flex items-center justify-center text-[#735b2b] shrink-0 group-hover/item:bg-[#735b2b] group-hover/item:text-white transition-all duration-300">
                <Compass size={20} />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold tracking-wide text-[#191C1D] mb-2 uppercase">
                  Expansive Vistas
                </h4>
                <p className="font-sans text-xs md:text-sm text-[#4d463a] leading-relaxed">
                  Unobstructed skyline and lush landscape views from oversized floating private balconies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
