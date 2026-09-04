import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Sparkles, Flame, Eye, Dumbbell, Award } from 'lucide-react';

interface AmenitiesProps {
  onOpenImage: (src: string, alt: string) => void;
}

export default function Amenities({ onOpenImage }: AmenitiesProps) {
  const [selectedAmenityIndex, setSelectedAmenityIndex] = useState<number | null>(null);

  const list = [
    {
      id: 'ground',
      title: 'Ground Floor Oasis',
      subtitle: 'Swimming Pool, Party Hall & Cafe with Pool View',
      image: '/clubhouse-img.webp',
      details: 'Designed for ultimate relaxation and grand social affairs. Features a temperature-controlled swimming pool, a separate safe toddler splash area, a designer poolside cafe, and a double-height party hall with integrated dining decks that can comfortably host up to 150 guests.',
      features: ['Olympic-size Pool & Toddler Pool', 'Double-height Party Hall', 'Cafeteria with Pool Deck', 'Landscaped Pool Gazebos'],
      icon: <Sparkles size={16} />
    },
    {
      id: 'second',
      title: 'Second Floor Rec Lounge',
      subtitle: 'Billiards, Table Tennis & Guest Suites',
      image: '/lounge-img.webp',
      details: 'Your private gentlemen’s club and indoor gaming arena. Houses custom tournament-grade snooker tables, multiple table tennis tables, board games parlor, and fully serviced luxury guest suites for visiting family and friends.',
      features: ['Tournament Billiards Table', 'Indoor Table Tennis Area', '4 Fully Serviced Guest Suites', 'Card & Board Games Den'],
      icon: <Award size={16} />
    },
    {
      id: 'first',
      title: 'First Floor Wellness Club',
      subtitle: 'Gym, Reading Room & Media Center',
      image: '/wellness-img.webp',
      details: 'Dedicated to body and mind optimization. Houses a high-tech gym with imported cardio and strength equipment, a silent wood-paneled reading room with library, and a soundproof Dolby Atmos media screening room.',
      features: ['Imported Cardio & Free Weight Setup', 'Yoga & Meditation Studio', 'Wood-paneled library', '15-Seat Private Cinema Room'],
      icon: <Dumbbell size={16} />
    }
  ];


  return (
    <section id="amenities" className="py-24 md:py-32 w-full bg-[#f4f1ed]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#735b2b] uppercase mb-4 block">
              Elevated Lifestyle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C1D] mb-6">
              11,000+ sq. ft. of Curated Indulgence
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#4d463a]/90 leading-relaxed">
              A multi-level clubhouse designed for leisure, wellness, and social gatherings, finished with
              the finest materials. Click any club level to explore full descriptions and floor plans.
            </p>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Featured Amenity - Ground Floor (8 Columns on desktop) */}
          <div
            onClick={() => setSelectedAmenityIndex(0)}
            className="lg:col-span-8 group relative overflow-hidden rounded-sm h-[400px] md:h-[500px] shadow-sm border border-[#e3e2e1]/50 cursor-pointer"
          >
            {/* Hover visual feedback gradient overlay */}
            <div className="absolute inset-0 bg-[#191c1d]/30 group-hover:bg-[#1a1c1c]/10 transition-colors z-10 duration-500" />

            <img
              src={list[0].image}
              alt={list[0].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Float zoom action */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenImage(list[0].image, list[0].title);
                }}
                className="h-9 w-9 rounded-full bg-[#191c1d]/60 text-white flex items-center justify-center border border-white/15 backdrop-blur-md hover:bg-[#735b2b] transition-all"
                title="Full Screen View"
              >
                <Maximize2 size={15} />
              </button>
            </div>

            {/* Bottom Gradient text holder */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full bg-gradient-to-t from-[#191c1d]/90 via-[#191c1d]/60 to-transparent">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#D4B47C] uppercase mb-2 inline-flex items-center gap-1.5 bg-[#735b2b]/30 px-3 py-1 rounded-full border border-[#D4B47C]/15 backdrop-blur-sm">
                <Sparkles size={11} /> Ground Floor
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2">
                {list[0].title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/90 font-medium">
                {list[0].subtitle}
              </p>
            </div>
          </div>

          {/* Secondary Amenities - Right Stack (4 Columns on desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-8 h-[500px] lg:h-auto justify-between">
            {/* Second Floor Card */}
            <div
              onClick={() => setSelectedAmenityIndex(1)}
              className="relative flex-1 group overflow-hidden rounded-sm border border-[#e3e2e1]/50 shadow-sm cursor-pointer min-h-[220px]"
            >
              <div className="absolute inset-0 bg-[#191c1d]/30 group-hover:bg-[#1a1c1c]/10 transition-colors z-10 duration-500" />
              <img
                src={list[1].image}
                alt={list[1].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenImage(list[1].image, list[1].title);
                  }}
                  className="h-8 w-8 rounded-full bg-[#191c1d]/60 text-white flex items-center justify-center border border-white/15 backdrop-blur-md hover:bg-[#735b2b] transition-all"
                >
                  <Maximize2 size={13} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-[#191c1d]/90 to-transparent">
                <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-[#D4B47C] uppercase mb-1.5 inline-flex items-center gap-1 bg-[#735b2b]/30 px-2 py-0.5 rounded-full border border-[#D4B47C]/15">
                  Second Floor
                </span>
                <h3 className="font-serif text-lg text-white mb-1">
                  {list[1].title}
                </h3>
                <p className="font-sans text-xs text-white/80 font-medium">
                  {list[1].subtitle}
                </p>
              </div>
            </div>

            {/* First Floor Card */}
            <div
              onClick={() => setSelectedAmenityIndex(2)}
              className="relative flex-1 group overflow-hidden rounded-sm border border-[#e3e2e1]/50 shadow-sm cursor-pointer min-h-[220px]"
            >
              <div className="absolute inset-0 bg-[#191c1d]/30 group-hover:bg-[#1a1c1c]/10 transition-colors z-10 duration-500" />
              <img
                src={list[2].image}
                alt={list[2].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenImage(list[2].image, list[2].title);
                  }}
                  className="h-8 w-8 rounded-full bg-[#191c1d]/60 text-white flex items-center justify-center border border-white/15 backdrop-blur-md hover:bg-[#735b2b] transition-all"
                >
                  <Maximize2 size={13} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-gradient-to-t from-[#191c1d]/90 to-transparent">
                <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-[#D4B47C] uppercase mb-1.5 inline-flex items-center gap-1 bg-[#735b2b]/30 px-2 py-0.5 rounded-full border border-[#D4B47C]/15">
                  First Floor
                </span>
                <h3 className="font-serif text-lg text-white mb-1">
                  {list[2].title}
                </h3>
                <p className="font-sans text-xs text-white/80 font-medium">
                  {list[2].subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVE AMENITY DETAILS POPUP / ACCORDION */}
        <AnimatePresence>
          {selectedAmenityIndex !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-12 bg-white rounded-sm border border-[#e3e2e1] p-6 sm:p-8 shadow-sm overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-[#735b2b]/10 text-[#735b2b] flex items-center justify-center">
                    {list[selectedAmenityIndex].icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[#191C1D]">
                      {list[selectedAmenityIndex].title}
                    </h4>
                    <span className="text-xs text-[#735b2b] font-sans tracking-wide uppercase font-semibold">
                      Clubhouse Level Details
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAmenityIndex(null)}
                  className="text-xs text-[#735b2b] font-bold hover:underline cursor-pointer"
                >
                  Collapse Details
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <p className="font-sans text-sm md:text-base text-[#4d463a] leading-relaxed mb-6">
                    {list[selectedAmenityIndex].details}
                  </p>
                  <button
                    onClick={() => onOpenImage(list[selectedAmenityIndex].image, list[selectedAmenityIndex].title)}
                    className="inline-flex items-center gap-2 text-[#735b2b] font-sans text-xs tracking-wider font-bold hover:text-[#d4b47c] transition-all"
                  >
                    <Eye size={14} /> VIEW HD FLOODLIT IMAGE
                  </button>
                </div>
                <div className="md:col-span-4 bg-[#faf9f8] p-5 rounded-sm border border-[#e3e2e1]/60">
                  <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-[#191C1D] uppercase block mb-3 border-b border-[#e3e2e1] pb-2">
                    Key Features Include
                  </span>
                  <ul className="space-y-2.5">
                    {list[selectedAmenityIndex].features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 font-sans text-xs sm:text-sm text-[#4d463a]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D4B47C]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </section>
  );
}
