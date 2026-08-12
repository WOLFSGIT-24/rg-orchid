import { MapPin, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenPrivacyPolicy: () => void;
  onOpenTerms: () => void;
}

export default function Footer({ onScrollToSection, onOpenPrivacyPolicy, onOpenTerms }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191c1d] text-white/90 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Abstract thin geometric grid line */}
      <div className="absolute top-0 left-1/4 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none" />
      <div className="absolute top-0 left-2/4 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none" />
      <div className="absolute top-0 left-3/4 bottom-0 w-[1px] bg-white/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Logo & Intro column */}
          <div className="md:col-span-4 space-y-5">
            <button
              onClick={() => onScrollToSection('hero')}
              className="flex flex-col items-start text-left focus:outline-none cursor-pointer"
            >
              <img src="/logo-new.png" alt="RG Unique Structures" className="h-24 md:h-32 w-auto object-contain origin-left" />
            </button>
            <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
              Crafting ultra-luxury residential sanctuaries that prioritize generous spatial designs, organic cross-ventilation, and elite privacy opposite Bangalore’s premiere business node.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <MapPin size={14} className="text-[#D4B47C] shrink-0" />
                <span>ORR Junction, Nagavara, Bangalore - 560045</span>
              </div>
              <a
                href="tel:+919019000132"
                className="flex items-center gap-2 text-xs text-white/70 hover:text-[#D4B47C] transition-colors"
              >
                <Phone size={14} className="text-[#D4B47C] shrink-0" />
                <span>+91 90190 00132</span>
              </a>
              <a
                href="mailto:concierge@rgorchids.com"
                className="flex items-center gap-2 text-xs text-white/70 hover:text-[#D4B47C] transition-colors"
              >
                <Mail size={14} className="text-[#D4B47C] shrink-0" />
                <span>concierge@rgorchids.com</span>
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="md:col-span-3 space-y-4 md:pl-6">
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-[#D4B47C] uppercase">
              The Project
            </h4>
            <ul className="space-y-2.5">
              {['hero', 'vision', 'master-plan', 'amenities', 'location', 'gallery'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onScrollToSection(id)}
                    className="font-sans text-xs text-white/60 hover:text-white hover:underline transition-all cursor-pointer capitalize"
                  >
                    {id.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Key specs column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-[#D4B47C] uppercase">
              The Layouts
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/60">
              <li className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-[#D4B47C] rounded-full" /> 3 BHK (2000 SFT)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-[#D4B47C] rounded-full" /> 3 BHK (2400 SFT)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-[#D4B47C] rounded-full" /> 3 BHK (2800 SFT)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-[#D4B47C] rounded-full" /> Private Penthouses
              </li>
            </ul>
          </div>

          {/* Legalia / RERA Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-[#D4B47C] uppercase">
              Official Legalia
            </h4>
            <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-2">
              <div className="flex items-center gap-2">
                <Award size={15} className="text-[#D4B47C]" />
                <span className="font-sans text-[10px] font-bold tracking-wider text-[#D4B47C] uppercase">RERA APPROVED</span>
              </div>
              <p className="font-mono text-[10px] text-white/60 leading-normal break-all">
                PRM/KA/RERA/1251/309/PR/201026/003612
              </p>
              <div className="flex items-center gap-1.5 text-[9px] text-green-400 font-sans font-bold uppercase tracking-wider">
                <CheckCircle2 size={11} /> All Approvals Obtained
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer / Real estate requirement */}
        <div className="pt-10 space-y-6">
          <p className="font-sans text-[10px] text-white/40 leading-relaxed text-justify">
            DISCLAIMER: All information, renders, specifications, floor plans, sizes, layout details, amenities, and connectivity references mentioned on this landing page are representative and indicative architectural concepts only. The company reserves the absolute right to alter, modify, or cancel plans without prior legal notice. Official registered RERA brochures, payment plans, and sale agreements signed between parties take sole overriding legal priority. Maps are not to exact scale and commutes are approximations subject to traffic conditions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/55 font-sans border-t border-white/5 pt-6 gap-4">
            <span>© {currentYear} RG Orchids Gardenia. All Rights Reserved. Built with Lumina architecture.</span>
            <div className="flex gap-6">
              <button onClick={(e) => { e.preventDefault(); onOpenPrivacyPolicy(); }} className="hover:underline hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
              <button onClick={(e) => { e.preventDefault(); onOpenTerms(); }} className="hover:underline hover:text-white transition-colors cursor-pointer">Terms of Booking</button>
              <a href="#" className="hover:underline hover:text-white transition-colors">RERA Disclosures</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
