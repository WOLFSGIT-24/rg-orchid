import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
                <h2 className="font-serif text-2xl text-[#191C1D]">Privacy Policy</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#e3e2e1] transition-colors text-[#4d463a]"
                aria-label="Close Privacy Policy"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 md:p-10 overflow-y-auto font-sans text-sm text-[#4d463a] leading-relaxed space-y-8">
              <div>
                <p>
                  This website is operated by RG Orchids Sales Team, the authorised marketing channel for RG Orchids Gardenia | RG Orchids Group, a luxury residential development near Manyata Tech Park, Bangalore. We are committed to protecting the privacy of every visitor to this website and handling your personal information with care, transparency, and respect.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">1. Information We Collect</h3>
                <p>When you submit an enquiry form on this website, we collect the following personal information:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>City / Location (if provided)</li>
                  <li>Any message or query you submit</li>
                </ul>
                <p>
                  We may also automatically collect non-personal technical data such as browser type, IP address, device type, and pages visited, solely for analytics and performance optimisation purposes.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">2. How We Use Your Information</h3>
                <p>Your personal information is used solely for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Responding to your enquiry about RG Orchids Gardenia residences</li>
                  <li>Sharing digital brochures, floor plans, and project details</li>
                  <li>Connecting you with the authorised RG Orchids Gardenia sales team</li>
                  <li>Sending relevant updates about the project, pricing, and launch events</li>
                  <li>Personalising your experience on this website</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">3. Data Sharing</h3>
                <p>
                  We may share your information with RG Orchids Group and their authorised sales representatives for the sole purpose of fulfilling your enquiry and following up on your interest in this project.
                </p>
                <p>
                  We do not sell, rent, or trade your personal data to any third parties for marketing purposes unrelated to RG Orchids Gardenia or RG Orchids Group projects.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">4. Cookies & Tracking Technologies</h3>
                <p>
                  This website uses cookies and tracking technologies — including Meta Pixel, Google Analytics, and Google Ads — for the purpose of:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Measuring advertising performance across platforms</li>
                  <li>Understanding visitor behaviour and engagement on the website</li>
                  <li>Optimising our marketing campaigns</li>
                  <li>Providing relevant remarketing to interested audiences</li>
                </ul>
                <p>
                  You may disable cookies through your browser settings; however, some features of this website may not function optimally as a result.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">5. Data Retention</h3>
                <p>
                  We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, or as required under applicable Indian law. Once the data is no longer needed, it is securely deleted or anonymised.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">6. Data Security</h3>
                <p>
                  We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">7. Your Rights</h3>
                <p>Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Request access to the personal data we hold about you</li>
                  <li>Request correction of any inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Withdraw consent to marketing communications at any time</li>
                  <li>Opt out of remarketing or targeted advertising</li>
                </ul>
                <p>To exercise any of these rights, please contact us using the details provided below.</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">8. Children's Privacy</h3>
                <p>
                  This website is not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a child has submitted personal information via this website, please contact us immediately so we may take appropriate action.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">9. Changes to This Policy</h3>
                <p>
                  We reserve the right to update this Privacy Policy at any time to reflect changes in our practices or applicable law. Updated versions will be posted on this page with a revised effective date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-[#191C1D]">10. Contact Us</h3>
                <p>For any privacy-related queries, please reach out to the RG Orchids Gardenia sales team:</p>
                <div className="bg-[#faf9f8] p-4 rounded-md border border-[#e3e2e1] space-y-2">
                  <p><strong>Project:</strong> RG Orchids Gardenia | RG Orchids Group</p>
                  <p><strong>Phone:</strong> +91 8880 748 748</p>
                  <p><strong>Email:</strong> sales@rgorchids.com</p>
                  <p><strong>Location:</strong> Near Manyata Tech Park, Bengaluru, Karnataka, India</p>
                  <p><strong>RERA Reg. No.:</strong> Applicable as per Karnataka RERA regulations. Please verify on the official RERA Karnataka website.</p>
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
