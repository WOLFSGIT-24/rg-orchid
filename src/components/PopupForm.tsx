import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only trigger once per session/load
    if (!hasTriggered) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasTriggered(true);
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer);
    }
  }, [hasTriggered]);

  // Handle closing when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#191c1d]/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl bg-white"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-[#191c1d] hover:text-[#735b2b] bg-white rounded-full shadow-sm border border-[#e3e2e1] transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            {/* We reuse the EnquiryForm but pass a success handler that closes the modal after a short delay */}
            <EnquiryForm 
              selectedSize="" 
              selectedPrice="" 
              onSuccess={() => {
                setTimeout(() => {
                  setIsOpen(false);
                }, 4000); // Close automatically 4 seconds after success
              }} 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
