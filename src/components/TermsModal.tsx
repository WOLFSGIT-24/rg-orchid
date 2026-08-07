import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1a1c1c]/90 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#e3e2e1] bg-[#faf9f8]">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#735b2b] uppercase block mb-1">
                  Legal
                </span>
                <h2 className="font-serif text-2xl text-[#191C1D]">Terms & Conditions</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#e3e2e1] transition-colors text-[#4d463a]"
                aria-label="Close Terms & Conditions"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-10 overflow-y-auto font-sans text-sm text-[#4d463a] leading-relaxed space-y-8">
              <div>
                <p>
                  By accessing and using this website, you agree to be bound by these Terms and Conditions. This website is operated by the RG Orchids Sales Team, an authorised marketing partner for RG Orchids Group.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">1. Website Purpose</h3>
                <p>
                  This website has been created for the sole purpose of providing information and generating enquiries for RG Orchids Gardenia, a luxury real estate project located near Manyata Tech Park, Bangalore. This is an authorised marketing website and operates in accordance with developer guidelines.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">2. Disclaimer</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>This website is managed by an authorised sales/marketing partner.</li>
                  <li>All images, renders, floor plans, and layouts shown are artistic impressions and may not represent the final product exactly.</li>
                  <li>Prices, specifications, amenities, and availability are subject to change without prior notice.</li>
                  <li>The developer reserves the right to make changes to the project as they deem fit in the interest of the development.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">3. Information Accuracy</h3>
                <p>
                  While we strive to keep the information on this website accurate and up to date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of any information presented. Any reliance you place on such information is strictly at your own risk.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">4. Enquiry & Communication</h3>
                <p>
                  By submitting your contact details through any form on this website, you consent to being contacted by our team and/or the authorised RG Orchids Gardenia sales team via phone, email, SMS, or WhatsApp regarding the project.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">5. Intellectual Property</h3>
                <p>
                  All content on this website including text, images, logos, and design is either owned by or licensed to RG Orchids Group and their respective marketing partners. Unauthorised reproduction, distribution, or modification of any material on this site is strictly prohibited.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">6. RERA Compliance</h3>
                <p>
                  The project is registered under the Real Estate (Regulation and Development) Act, 2016 (RERA) applicable for projects in Karnataka.
                </p>
                <p>
                  <strong>Karnataka RERA Registration No:</strong> Applicable as per Karnataka RERA regulations.
                </p>
                <p>
                  Details are available on the official website: rera.karnataka.gov.in
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">7. Limitation of Liability</h3>
                <p>
                  In no event shall RG Orchids Group or their authorised marketing partners be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on any information provided herein.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">8. Governing Law</h3>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in relation to this website shall be subject to the exclusive jurisdiction of the competent courts in Bangalore, Karnataka.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">9. Contact</h3>
                <p>For any queries regarding these terms, please contact the authorised sales team:</p>
                <div className="bg-[#faf9f8] p-4 rounded-md border border-[#e3e2e1] space-y-2">
                  <p><strong>Project:</strong> RG Orchids Gardenia | RG Orchids Group</p>
                  <p><strong>Phone:</strong> +91 8880 748 748</p>
                  <p><strong>Email:</strong> sales@rgorchids.com</p>
                  <p><strong>Location:</strong> Near Manyata Tech Park, Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-[#e3e2e1] bg-[#faf9f8] flex justify-end">
              <button
                onClick={onClose}
                className="bg-[#D4B47C] hover:bg-[#b3935b] text-[#191c1d] hover:text-white px-6 py-2 rounded-sm font-sans text-xs font-bold tracking-widest transition-colors"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
