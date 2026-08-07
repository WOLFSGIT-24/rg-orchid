import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Info, RefreshCw, Smartphone, Mail, User } from 'lucide-react';
import { Enquiry } from '../types';

interface EnquiryFormProps {
  selectedSize: string;
  selectedPrice: string;
  onSuccess: () => void;
}

export default function EnquiryForm({ selectedSize, selectedPrice, onSuccess }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sizePreference, setSizePreference] = useState('Any');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [refId, setRefId] = useState('');

  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  useEffect(() => {
    if (selectedSize) {
      if (selectedSize.includes('2000')) setSizePreference('2000');
      else if (selectedSize.includes('2400')) setSizePreference('2400');
      else if (selectedSize.includes('2800')) setSizePreference('2800');
    }
  }, [selectedSize]);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = 'Please provide your full name.';
    
    const phoneClean = phone.replace(/\D/g, '');
    if (!phoneClean) {
      newErrors.phone = 'Please provide a contact number.';
    } else if (phoneClean.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = 'RG-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(randomRef);

      const newEnquiry: Enquiry = {
        id: randomRef,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim().toLowerCase(),
        preferredSize: sizePreference,
        createdAt: new Date().toISOString(),
        status: 'New'
      };

      const existing: Enquiry[] = JSON.parse(localStorage.getItem('rg_enquiries') || '[]');
      localStorage.setItem('rg_enquiries', JSON.stringify([newEnquiry, ...existing]));

      setIsSubmitting(false);
      setSuccess(true);
      onSuccess();
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSizePreference('Any');
    setSuccess(false);
    setErrors({});
  };

  return (
    <div className="relative w-full bg-[#1a1c1c]/80 backdrop-blur-2xl p-6 sm:p-10 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Subtle glass reflection highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Decorative vertical abstract ribbon */}
      <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#735b2b] to-[#D4B47C] shadow-[0_0_15px_rgba(212,180,124,0.5)]" />

      <AnimatePresence mode="wait">
        {!success ? (
          <motion.form
            key="enquiry-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {selectedSize && selectedPrice && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#735b2b]/10 border border-[#735b2b]/30 p-4 rounded-xl flex items-start gap-3 backdrop-blur-sm"
              >
                <Info size={16} className="text-[#D4B47C] mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs font-bold font-sans tracking-wide text-[#D4B47C] uppercase block">
                    Pre-filled configuration
                  </span>
                  <p className="text-xs sm:text-sm text-white/80 mt-0.5 font-medium">
                    You have selected the <strong className="text-white">{selectedSize}</strong> configuration estimated at <strong className="text-[#D4B47C]">{selectedPrice}</strong>.
                  </p>
                </div>
              </motion.div>
            )}

            <div>
              <h3 className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
                REGISTER YOUR INTEREST
              </h3>
              <p className="text-xs text-white/60 font-sans tracking-wide uppercase font-semibold mt-1">
                Enquire now for early-bird priority booking & private preview sessions.
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-5">
              {/* Name */}
              <div className="relative">
                <label className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#D4B47C] uppercase block mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="Enter your full name"
                    className={`w-full bg-black/20 border pl-10 pr-4 py-3.5 rounded-xl font-sans text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all ${
                      errors.name
                        ? 'border-red-500/50 focus:ring-red-500 focus:border-red-500'
                        : 'border-white/10 focus:ring-[#D4B47C] focus:border-[#D4B47C]'
                    }`}
                  />
                </div>
                {errors.name && (
                  <span className="text-[10px] font-sans font-bold text-red-400 mt-1.5 block">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#D4B47C] uppercase block mb-1.5">
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">
                    <Smartphone size={16} />
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full bg-black/20 border pl-10 pr-4 py-3.5 rounded-xl font-sans text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all ${
                      errors.phone
                        ? 'border-red-500/50 focus:ring-red-500 focus:border-red-500'
                        : 'border-white/10 focus:ring-[#D4B47C] focus:border-[#D4B47C]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <span className="text-[10px] font-sans font-bold text-red-400 mt-1.5 block">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <label className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#D4B47C] uppercase block mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="e.g. name@example.com"
                    className={`w-full bg-black/20 border pl-10 pr-4 py-3.5 rounded-xl font-sans text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 transition-all ${
                      errors.email
                        ? 'border-red-500/50 focus:ring-red-500 focus:border-red-500'
                        : 'border-white/10 focus:ring-[#D4B47C] focus:border-[#D4B47C]'
                    }`}
                  />
                </div>
                {errors.email && (
                  <span className="text-[10px] font-sans font-bold text-red-400 mt-1.5 block">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Size Preference */}
              <div>
                <label className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#D4B47C] uppercase block mb-1.5">
                  Preferred Unit Size
                </label>
                <select
                  value={sizePreference}
                  onChange={(e) => setSizePreference(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 px-4 py-3.5 rounded-xl font-sans text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#D4B47C] focus:border-[#D4B47C] transition-all appearance-none"
                >
                  <option value="Any" className="text-black">Any SFT / Layout</option>
                  <option value="2000" className="text-black">2000 SFT (3 BHK Villome)</option>
                  <option value="2400" className="text-black">2400 SFT (3 BHK Premium Villome)</option>
                  <option value="2800" className="text-black">2800 SFT (3 BHK Grand Pent-Villome)</option>
                </select>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] font-sans text-white/40 leading-relaxed">
              *By clicking submit, you authorize RG Orchids Gardenia sales executives to call/message you regarding project site visits, booking offers, and official brochure dispatches. Your personal data is stored securely.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full bg-gradient-to-r from-[#D4B47C] to-[#b3935b] hover:from-[#b3935b] hover:to-[#9a7e4b] text-[#191c1d] hover:text-white py-4 px-6 rounded-xl font-sans text-xs tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(212,180,124,0.4)] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw size={15} className="animate-spin" /> SUBMITTING SECURELY...
                </>
              ) : (
                <>
                  <Send size={15} /> SUBMIT PRIVATE ENQUIRY
                </>
              )}
            </button>
          </motion.form>
        ) : (
          /* SUCCESS LIGHTBOX PANEL */
          <motion.div
            key="success-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center text-center py-8 space-y-6"
          >
            <div className="h-20 w-20 rounded-full bg-[#D4B47C]/10 text-[#D4B47C] border border-[#D4B47C]/30 flex items-center justify-center shadow-[0_0_30px_rgba(212,180,124,0.2)]">
              <CheckCircle size={40} />
            </div>

            <div className="space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-[#D4B47C] uppercase block">
                REGISTRATION SUCCESSFUL
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Welcome to RG Orchids
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/70 max-w-sm mx-auto">
                Thank you for your interest, <strong className="text-white">{name}</strong>. Your luxury tour has been registered under private ID:
              </p>
              <div className="inline-block bg-white/5 border border-white/20 px-6 py-3 rounded-xl font-sans font-bold text-[#D4B47C] text-lg tracking-widest mt-4 shadow-inner">
                {refId}
              </div>
            </div>

            {/* Next Steps List */}
            <div className="w-full max-w-sm bg-black/20 p-5 rounded-xl border border-white/10 text-left space-y-4 mt-6">
              <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-white/50 uppercase block border-b border-white/10 pb-2">
                Immediate Next Steps
              </span>
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 text-xs text-white/70">
                  <span className="h-5 w-5 bg-[#D4B47C]/20 text-[#D4B47C] rounded-full flex items-center justify-center shrink-0 font-bold text-[9px] border border-[#D4B47C]/30">1</span>
                  <span className="leading-relaxed">A dedicated relationship officer will connect with you via <strong className="text-white">{phone}</strong> within 15 minutes.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-white/70">
                  <span className="h-5 w-5 bg-[#D4B47C]/20 text-[#D4B47C] rounded-full flex items-center justify-center shrink-0 font-bold text-[9px] border border-[#D4B47C]/30">2</span>
                  <span className="leading-relaxed">Interactive 3D brochure and virtual model link dispatched to <strong className="text-white">{email}</strong>.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-white/70">
                  <span className="h-5 w-5 bg-[#D4B47C]/20 text-[#D4B47C] rounded-full flex items-center justify-center shrink-0 font-bold text-[9px] border border-[#D4B47C]/30">3</span>
                  <span className="leading-relaxed">Early-bird booking pricing slot reserved for preferred <strong className="text-white">{sizePreference} SFT</strong> layout.</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-sans font-bold tracking-widest text-white/50 hover:text-[#D4B47C] uppercase transition-colors pt-4"
            >
              Submit another request
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
