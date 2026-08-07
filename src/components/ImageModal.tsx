import { AnimatePresence, motion } from 'motion/react';
import { X, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { useState, MouseEvent } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, src, alt, onClose }: ImageModalProps) {
  const [scale, setScale] = useState(1);

  const handleZoomIn = (e: MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e: MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.25, 1));
  };

  const handleReset = () => {
    setScale(1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#191c1d]/90 p-4 backdrop-blur-md cursor-zoom-out"
        >
          <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
            {/* Control buttons */}
            <button
              onClick={handleZoomIn}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#191c1d]/60 text-white border border-white/10 backdrop-blur-md hover:bg-[#d4b47c] hover:text-[#191c1d] transition-all cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={handleZoomOut}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#191c1d]/60 text-white border border-white/10 backdrop-blur-md hover:bg-[#d4b47c] hover:text-[#191c1d] transition-all cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            <a
              href={src}
              download={alt}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#191c1d]/60 text-white border border-white/10 backdrop-blur-md hover:bg-[#d4b47c] hover:text-[#191c1d] transition-all"
              title="Open Original"
            >
              <Download size={18} />
            </a>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#191c1d]/60 text-white border border-white/10 backdrop-blur-md hover:bg-red-500 transition-all cursor-pointer"
              title="Close"
            >
              <X size={18} />
            </button>
          </div>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden"
          >
            <motion.img
              animate={{ scale }}
              transition={{ type: 'tween', duration: 0.2 }}
              src={src}
              alt={alt}
              className="mx-auto max-h-[85vh] max-w-[90vw] rounded-sm object-contain shadow-2xl cursor-grab active:cursor-grabbing"
              referrerPolicy="no-referrer"
            />
            {scale > 1 && (
              <button
                onClick={handleReset}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#1a1c1c]/80 border border-white/10 text-[#faf9f8] px-4 py-2 text-xs font-semibold rounded-full hover:bg-[#d4b47c] hover:text-[#191c1d] transition-all"
              >
                Reset Zoom
              </button>
            )}
          </motion.div>

          <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
            <span className="bg-[#191c1d]/75 text-xs text-white/80 px-4 py-2 rounded-sm border border-white/5 backdrop-blur-sm tracking-wide">
              {alt}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
