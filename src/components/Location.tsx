import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Briefcase, HeartPulse, Train, Maximize2 } from 'lucide-react';

interface LocationProps {
  onOpenImage: (src: string, alt: string) => void;
}

export default function Location({ onOpenImage }: LocationProps) {
  const [selectedCat, setSelectedCat] = useState<'work' | 'healthcare' | 'connectivity'>('work');

  const mapImg = '/location-map.webp';
  const mapAlt =
    'Stylized location map of RG Orchids Gardenia indicating walkability and distances to major hubs';

  const items = {
    work: {
      title: 'Commercial Hubs',
      desc: 'Be at the epicenter of North Bangalore’s massive tech revolution. Say goodbye to gridlocks.',
      places: [
        { name: 'Manyata Tech Park', dist: 'Directly Opposite (30 Sec Walk)' },
        { name: 'Awfis Co-working', dist: '1-min Walk' },
        { name: 'Karle Town Center', dist: '3-min Drive (1.2 km)' },
        { name: 'Kirloskar Business Park', dist: '8-min Drive (3.5 km)' }
      ],
      icon: <Briefcase size={16} />
    },
    healthcare: {
      title: 'Top Tier Healthcare',
      desc: 'Rest easy knowing world-class medical facilities and super-specialty hospitals are minutes away.',
      places: [
        { name: 'Aster CMI Hospital', dist: '6-min Drive (2.8 km)' },
        { name: 'Manipal Hospital Hebbal', dist: '8-min Drive (3.6 km)' },
        { name: 'Columbia Asia Hospital', dist: '7-min Drive (3.1 km)' }
      ],
      icon: <HeartPulse size={16} />
    },
    connectivity: {
      title: 'Rapid Connectivity',
      desc: 'Seamless transit via multi-modal express routes, arterial ring roads, and upcoming metro line.',
      places: [
        { name: 'Upcoming Nagavara Metro Station', dist: '4-min Walk (350 m)' },
        { name: 'Outer Ring Road (ORR)', dist: 'Immediate Access (200 m)' },
        { name: 'Kempegowda Int’l Airport', dist: '25-min Express Drive (26 km)' },
        { name: 'Hebbal Flyover Junction', dist: '5-min Drive (2.4 km)' }
      ],
      icon: <Train size={16} />
    }
  };

  return (
    <section id="location" className="py-24 md:py-32 w-full bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Coordinates / Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col"
          >
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#735b2b] uppercase mb-4">
              Unmatched Connectivity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#191C1D] mb-6 leading-tight uppercase tracking-wider">
              Walk To <br />
              <span className="text-[#D4B47C] font-serif italic font-normal tracking-wide lowercase">everything</span>
            </h2>
            <p className="font-sans text-base text-[#4d463a] mb-8 leading-relaxed font-medium">
              The whole point of conceiving your home at RG Orchids Gardenia is to ensure that you are
              closer to all the conveniences you visit in a day. Hop, skip and jump to your favorite
              choices.
            </p>

            {/* Premium Category Tabs */}
            <div className="flex border-b border-[#e3e2e1] gap-6 mb-8">
              {(['work', 'healthcare', 'connectivity'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`font-sans text-xs tracking-widest font-bold pb-3 border-b-2 uppercase transition-all cursor-pointer focus:outline-none ${
                    selectedCat === cat
                      ? 'border-[#735b2b] text-[#735b2b]'
                      : 'border-transparent text-[#4d463a]/60 hover:text-[#735b2b]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Dynamic Content Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#191C1D] flex items-center gap-2">
                    <span className="text-[#D4B47C]">{items[selectedCat].icon}</span>
                    {items[selectedCat].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4d463a]/80 mt-1 leading-relaxed">
                    {items[selectedCat].desc}
                  </p>
                </div>

                <div className="space-y-3">
                  {items[selectedCat].places.map((place, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-l-2 border-[#D4B47C] pl-4 py-1.5 hover:bg-[#faf9f8] rounded-r-sm transition-all"
                    >
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#191C1D]">
                        {place.name}
                      </span>
                      <span className="font-sans text-[11px] font-bold text-[#735b2b] tracking-wide uppercase bg-[#735b2b]/5 px-2.5 py-1 rounded-full">
                        {place.dist}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Beautifully Framed Stylized Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#fdfcfb] p-4 sm:p-6 rounded-sm shadow-lg border border-[#e3e2e1] group relative cursor-pointer"
            onClick={() => onOpenImage(mapImg, mapAlt)}
          >
            {/* Dynamic visual indicator over map */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-[#735b2b] rounded-full animate-ping pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-[#735b2b] rounded-full border-2 border-white pointer-events-none" />

            <img
              src={mapImg}
              alt={mapAlt}
              className="w-full h-auto object-contain rounded-sm transition-transform duration-700 group-hover:scale-[1.005]"
              referrerPolicy="no-referrer"
            />

            {/* Dark glass hover overlay */}
            <div className="absolute inset-0 bg-[#191c1d]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center rounded-sm text-white">
              <div className="h-12 w-12 rounded-full bg-[#735b2b]/95 flex items-center justify-center text-white border border-white/20 mb-2 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 size={18} />
              </div>
              <span className="font-sans text-[10px] font-bold tracking-widest uppercase">
                Click to Zoom Map Details
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
