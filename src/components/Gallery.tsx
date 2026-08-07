import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

interface GalleryProps {
  onOpenImage: (src: string, alt: string) => void;
}

export default function Gallery({ onOpenImage }: GalleryProps) {
  const images = [
    {
      src: '/new-gallery-1.jpg',
      alt: 'RG Orchids Gardenia Exterior Elevation 1',
    },
    {
      src: '/new-gallery-2.jpg',
      alt: 'RG Orchids Gardenia Exterior Elevation 2',
    },
    {
      src: '/new-gallery-3.jpg',
      alt: 'RG Orchids Gardenia Exterior Elevation 3',
    },
    {
      src: '/new-gallery-4.jpg',
      alt: 'RG Orchids Gardenia Exterior Elevation 4',
    },
    {
      src: '/new-gallery-5.jpg',
      alt: 'RG Orchids Gardenia Exterior Elevation 5',
    }
  ];

  // We duplicate the array to allow for a seamless infinite scroll effect
  const doubledImages = [...images, ...images];

  return (
    <section id="gallery" className="py-24 md:py-32 w-full bg-[#fdfcfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
        <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#735b2b] uppercase mb-4 block">
          SOUL SPRING LIFE
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#191C1D] mb-4 font-bold">
          Project Gallery
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#4d463a]/80 leading-relaxed max-w-3xl mx-auto">
          Immerse yourself in the opulent architecture, lush green surroundings, and the exceptional lifestyle that awaits you.
        </p>
      </div>

      {/* CONTINUOUS MARQUEE CAROUSEL */}
      <div className="relative w-full flex overflow-hidden group">
        <motion.div
          className="flex gap-4 sm:gap-6 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {doubledImages.map((img, idx) => (
            <div
              key={idx}
              className="relative w-[280px] sm:w-[350px] md:w-[400px] shrink-0 aspect-[4/3] rounded-2xl sm:rounded-[2rem] overflow-hidden cursor-pointer group/card shadow-sm"
              onClick={() => onOpenImage(img.src, img.alt)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
              />
              
              {/* Optional dark hover overlay for the zoom icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="h-12 w-12 rounded-full bg-white/20 text-white flex items-center justify-center backdrop-blur-md border border-white/30 transform scale-75 group-hover/card:scale-100 transition-transform duration-300">
                  <Maximize2 size={20} />
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
