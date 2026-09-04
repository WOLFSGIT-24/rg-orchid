import { motion } from 'motion/react';

export default function Highlights() {
  const highlights = [
    {
      eyebrow: "FLOORING",
      title: "Premium Italian Marble",
      description: "Imported high-grade Bottochino/Dyna marble in living, dining, and foyer areas."
    },
    {
      eyebrow: "FITTINGS",
      title: "Grohe & Equivalent",
      description: "Top-tier sanitary fittings, concealed flush tanks, and thermostatic bath controllers."
    },
    {
      eyebrow: "CLIMATE",
      title: "Centralised AC",
      description: "Variable Refrigerant Flow (VRF) air conditioning with zone-wise controls."
    },
    {
      eyebrow: "TECH",
      title: "In-built Home Automation",
      description: "Smart lighting, motorized curtain controllers, biometric main door lock, and gas-leak detectors."
    }
  ];

  return (
    <section className="py-12 md:py-16 w-full bg-[#faf9f8] relative z-20 -mt-10 md:-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 border border-[#e3e2e1] rounded-sm hover:shadow-xl transition-shadow duration-300"
            >
              <span className="font-sans text-[10px] font-bold tracking-[0.15em] text-[#D4B47C] uppercase block mb-3">
                {item.eyebrow}
              </span>
              <h3 className="font-serif text-[19px] text-[#191C1D] mb-4 font-medium leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-[13px] text-[#4d463a]/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
