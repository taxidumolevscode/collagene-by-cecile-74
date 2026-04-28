import { Check } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const packages = [
  {
    name: "Essence",
    price: "€2.500",
    description: "Perfect for intimate elopements and micro-weddings. Coverage of key moments with a curated gallery.",
    features: [
      "6 Hours Coverage",
      "300+ Edited Images",
      "Online Private Gallery"
    ],
    featured: false,
    delay: 0
  },
  {
    name: "Narrative",
    price: "€3.800",
    description: "The complete story. From getting ready until the party ends. This is the most popular choice for full day weddings.",
    features: [
      "10 Hours Coverage",
      "600+ Edited Images",
      "Fine Art Album (30x30)",
      "Drone Photography"
    ],
    featured: true,
    delay: 0.1
  },
  {
    name: "Legacy",
    price: "€5.500",
    description: "For destination weddings or multi-day celebrations. A comprehensive documentation of your weekend.",
    features: [
      "Full Weekend Coverage",
      "Rehearsal Dinner",
      "1000+ Edited Images",
      "2 Parent Albums"
    ],
    featured: false,
    delay: 0.2
  }
];

export default function PricingSection() {
  return (
    <section id="investment" className="py-32 px-4 md:px-10 bg-white text-black">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        <div className="xl:col-span-3">
          <span className="block text-xs font-bold tracking-widest uppercase mb-4 text-gray-400">
            ( 04 ) INVESTMENT
          </span>
          <h3 className="text-5xl font-black uppercase tracking-tighter">
            Nos<br className='xl:block hidden'/>Tarifs
          </h3>
        </div>
        
        <div className="xl:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <FadeIn 
                key={index}
                delay={pkg.delay}
                className={
                  pkg.featured 
                    ? "border-t border-black pt-6 bg-black text-white p-6 -mx-4 md:mx-0 shadow-2xl transform md:-translate-y-4"
                    : "border-t border-black pt-6 group hover:bg-neutral-50 transition-colors duration-500 p-4 -mx-4 md:mx-0"
                }
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className={`text-xl font-bold uppercase ${pkg.name === 'Narrative' ? 'text-[#D8A7A0]' : ''}`}>
                    {pkg.name}
                  </h4>
                  <span className="text-sm font-mono">{pkg.price}</span>
                </div>
                
                <p className={`text-sm mb-8 leading-relaxed ${
                  pkg.featured ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {pkg.description}
                </p>
                
                <ul className={`space-y-3 text-sm mb-8 ${
                  pkg.featured ? 'text-gray-300' : 'text-gray-800'
                }`}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check size={14}/> {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={
                  pkg.featured
                    ? "w-full py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all"
                    : "w-full py-3 bg-[#D8A7A0] text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                }>
                  {pkg.featured ? 'Most Popular' : 'Select'}
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
