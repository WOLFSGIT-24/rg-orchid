import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface FloatingButtonsProps {
  onScrollToSection: (id: string) => void;
}

export default function FloatingButtons({ onScrollToSection }: FloatingButtonsProps) {
  return (
    <>
      {/* WhatsApp Floating Button (Visible on all screens, shifted up on mobile to avoid the bottom bar) */}
      <div className="fixed z-40 right-4 bottom-20 md:bottom-6 flex flex-col gap-4">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-3.5 sm:p-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center border border-white/20"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={28} className="fill-current" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e3e2e1] shadow-[0_-4px_15px_rgba(0,0,0,0.05)] flex">
        <a
          href="tel:+919876543210"
          className="flex-1 flex flex-col items-center justify-center py-2.5 bg-white text-[#191c1d] hover:bg-[#faf9f8] active:bg-[#f4f1ed] transition-colors"
        >
          <Phone size={18} className="mb-0.5 text-[#D4B47C]" />
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase">Call Us</span>
        </a>
        <div className="w-[1px] bg-[#e3e2e1] my-2" />
        <button
          onClick={() => window.dispatchEvent(new Event('open-popup'))}
          className="flex-1 flex flex-col items-center justify-center py-2.5 bg-[#D4B47C] text-[#191c1d] hover:bg-[#b3935b] hover:text-white active:bg-[#9a7e4b] transition-colors"
        >
          <Calendar size={18} className="mb-0.5" />
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase">Enquire</span>
        </button>
      </div>
    </>
  );
}
