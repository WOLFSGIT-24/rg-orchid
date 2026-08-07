import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, DollarSign, Percent, ArrowRight } from 'lucide-react';

interface InteractiveCalculatorProps {
  onSelectConfig: (size: string, price: string) => void;
}

export default function InteractiveCalculator({ onSelectConfig }: InteractiveCalculatorProps) {
  const [size, setSize] = useState<'2000' | '2400' | '2800'>('2000');
  const [finish, setFinish] = useState<'bare' | 'classic' | 'royal'>('classic');
  const [floorGroup, setFloorGroup] = useState<'lower' | 'mid' | 'penthouse'>('mid');

  // Pricing Logic (Starting from 2.79 Cr for 2000 sft)
  const baseRates = {
    '2000': 27900000, // 2.79 Cr
    '2400': 33500000, // 3.35 Cr
    '2800': 39100000, // 3.91 Cr
  };

  const finishRates = {
    bare: 0,
    classic: 1500000, // +15 L
    royal: 3500000,  // +35 L
  };

  const floorPremiums = {
    lower: 0,
    mid: 800000,      // +8 L
    penthouse: 2500000, // +25 L
  };

  const calculateTotalPrice = () => {
    return baseRates[size] + finishRates[finish] + floorPremiums[floorGroup];
  };

  const totalPrice = calculateTotalPrice();
  const formatCr = (val: number) => {
    const cr = val / 10000000;
    return `₹${cr.toFixed(2)} Cr`;
  };

  // 50:50 Payment details
  const fiftyPercent = totalPrice / 2;

  // Estimated EMI (assumed 8.4% interest rate, 20 years, 80% LTV)
  const calculateEMI = () => {
    const principal = totalPrice * 0.8;
    const r = 8.4 / 12 / 100;
    const n = 20 * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full bg-[#fdfcfb] p-6 sm:p-10 rounded-sm border border-[#e3e2e1] shadow-md">
      <div className="flex items-center gap-3 mb-8 border-b border-[#e3e2e1] pb-4">
        <div className="h-10 w-10 rounded-full bg-[#735b2b]/10 text-[#735b2b] flex items-center justify-center shrink-0">
          <Calculator size={20} />
        </div>
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#191C1D]">
            Interactive Villome Cost Planner
          </h3>
          <p className="text-xs text-[#4d463a]/70 font-sans tracking-wide uppercase font-semibold">
            Tailor Your Custom 3 BHK Layout & Estimate Payment Splits
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Customizers */}
        <div className="lg:col-span-7 space-y-6">
          {/* Size Choice */}
          <div>
            <label className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#191C1D] uppercase block mb-3">
              1. Select Area Size
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['2000', '2400', '2800'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-3 px-2 text-center rounded-sm border transition-all cursor-pointer focus:outline-none ${
                    size === s
                      ? 'border-[#735b2b] bg-[#735b2b]/5 text-[#735b2b] font-bold shadow-sm'
                      : 'border-[#d0c5b6] hover:border-[#735b2b] text-[#4d463a]'
                  }`}
                >
                  <span className="block font-serif text-base sm:text-lg">{s} SFT</span>
                  <span className="text-[10px] font-sans tracking-wide uppercase block mt-1 text-[#4d463a]/60">
                    3 BHK Villome
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Interiors possession specifications */}
          <div>
            <label className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#191C1D] uppercase block mb-3">
              2. Choose Fit-Out Finish
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setFinish('bare')}
                className={`p-3 text-left rounded-sm border transition-all cursor-pointer text-xs sm:text-sm focus:outline-none ${
                  finish === 'bare'
                    ? 'border-[#735b2b] bg-[#735b2b]/5 text-[#735b2b] font-bold'
                    : 'border-[#d0c5b6] hover:border-[#735b2b] text-[#4d463a]'
                }`}
              >
                <span className="block font-semibold">Bare Shell</span>
                <span className="text-[10px] text-[#4d463a]/60 block mt-0.5">Customize everything yourself</span>
              </button>
              <button
                onClick={() => setFinish('classic')}
                className={`p-3 text-left rounded-sm border transition-all cursor-pointer text-xs sm:text-sm focus:outline-none ${
                  finish === 'classic'
                    ? 'border-[#735b2b] bg-[#735b2b]/5 text-[#735b2b] font-bold'
                    : 'border-[#d0c5b6] hover:border-[#735b2b] text-[#4d463a]'
                }`}
              >
                <span className="block font-semibold">Classic Italian (+15 L)</span>
                <span className="text-[10px] text-[#4d463a]/60 block mt-0.5">Bottochino floors, Grohe brassware</span>
              </button>
              <button
                onClick={() => setFinish('royal')}
                className={`p-3 text-left rounded-sm border transition-all cursor-pointer text-xs sm:text-sm focus:outline-none ${
                  finish === 'royal'
                    ? 'border-[#735b2b] bg-[#735b2b]/5 text-[#735b2b] font-bold'
                    : 'border-[#d0c5b6] hover:border-[#735b2b] text-[#4d463a]'
                }`}
              >
                <span className="block font-semibold">Royal Bespoke (+35 L)</span>
                <span className="text-[10px] text-[#4d463a]/60 block mt-0.5">Fully automated VRF, gold accents</span>
              </button>
            </div>
          </div>

          {/* Floor Group */}
          <div>
            <label className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#191C1D] uppercase block mb-3">
              3. Floor Level Choice
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setFloorGroup('lower')}
                className={`py-2.5 px-1 text-center rounded-sm border text-xs sm:text-sm transition-all cursor-pointer focus:outline-none ${
                  floorGroup === 'lower'
                    ? 'border-[#735b2b] bg-[#735b2b]/5 text-[#735b2b] font-bold'
                    : 'border-[#d0c5b6] text-[#4d463a]'
                }`}
              >
                Lower Floor
              </button>
              <button
                onClick={() => setFloorGroup('mid')}
                className={`py-2.5 px-1 text-center rounded-sm border text-xs sm:text-sm transition-all cursor-pointer focus:outline-none ${
                  floorGroup === 'mid'
                    ? 'border-[#735b2b] bg-[#735b2b]/5 text-[#735b2b] font-bold'
                    : 'border-[#d0c5b6] text-[#4d463a]'
                }`}
              >
                Mid Floor (+8 L)
              </button>
              <button
                onClick={() => setFloorGroup('penthouse')}
                className={`py-2.5 px-1 text-center rounded-sm border text-xs sm:text-sm transition-all cursor-pointer focus:outline-none ${
                  floorGroup === 'penthouse'
                    ? 'border-[#735b2b] bg-[#735b2b]/5 text-[#735b2b] font-bold'
                    : 'border-[#d0c5b6] text-[#4d463a]'
                }`}
              >
                Sky Penthouse (+25 L)
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Estimated Outputs */}
        <div className="lg:col-span-5 bg-[#faf9f8] p-6 rounded-sm border border-[#e3e2e1] flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-[#735b2b] uppercase block mb-1">
                ESTIMATED ALL-INCLUSIVE PRICE
              </span>
              <span className="font-serif text-3xl sm:text-4xl text-[#191C1D] font-bold block">
                {formatCr(totalPrice)}
              </span>
              <span className="text-xs text-[#4d463a]/60 font-sans block mt-1">
                *Excluding Registration & stamp duty charges
              </span>
            </div>

            {/* Split Schedule detail */}
            <div className="border-t border-[#e3e2e1] pt-4 space-y-3">
              <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-[#191C1D] uppercase block">
                50:50 payment schedule
              </span>
              <div className="flex justify-between items-center text-xs sm:text-sm text-[#4d463a]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Percent size={14} className="text-[#D4B47C]" /> Pay 50% Now (Booking)
                </span>
                <span className="font-bold text-[#191C1D]">{formatCr(fiftyPercent)}</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm text-[#4d463a]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={14} className="text-[#D4B47C]" /> Pay 50% on OC Possession
                </span>
                <span className="font-bold text-[#191C1D]">{formatCr(fiftyPercent)}</span>
              </div>
            </div>

            {/* Estimated EMI */}
            <div className="border-t border-[#e3e2e1] pt-4">
              <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-[#735b2b] uppercase block mb-1">
                FINANCIAL ASSISTANCE ESTIMATE
              </span>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-[#4d463a] font-medium">Est. Monthly EMI</span>
                <span className="font-sans text-lg font-bold text-[#191C1D]">{formatINR(emi)} / mo</span>
              </div>
              <span className="text-[10px] text-[#4d463a]/60 block mt-1">
                Calculated at 8.4% interest rate over 20 years with 20% down payment
              </span>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => onSelectConfig(`${size} SFT, Finish: ${finish === 'bare' ? 'Bare Shell' : finish === 'classic' ? 'Classic Italian' : 'Royal Bespoke'}`, formatCr(totalPrice))}
              className="w-full bg-[#735b2b] text-white py-3.5 px-4 font-sans text-xs tracking-widest font-bold hover:bg-[#d4b47c] hover:text-[#191c1d] transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-sm"
            >
              APPLY TO ENQUIRY FORM
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
