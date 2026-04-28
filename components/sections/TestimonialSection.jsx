import FadeIn from '../animations/FadeIn';

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-neutral-100 text-black">
      <div className="lg:max-w-4xl mx-auto px-4 md:px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">
          ( 05 ) Kind Words
        </span>
        
        <FadeIn>
          <p className="text-2xl md:text-4xl font-serif italic leading-relaxed mb-10">
            &quot;Lukasz didn&apos;t just take photos; he captured the way it felt. Looking at our album 
            is like reliving the best day of our lives, frame by emotional frame.&quot;
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-bold uppercase tracking-widest">
              Sophia & Alexander
            </span>
            <span className="text-xs text-gray-500">Married in Kyoto, 2023</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
