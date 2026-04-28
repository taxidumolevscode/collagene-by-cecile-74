import FadeIn from '../animations/FadeIn';

export default function IntroSection() {
  return (
    <section id="philosophy" className="py-24 md:py-40 px-6 md:px-20 bg-black relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3 text-gray-500 font-mono text-sm">
          ( 01 )
        </div>
        <div className="md:col-span-9">
          <FadeIn>
            <h3 className="text-4xl md:text-5xl xl:text-7xl font-bold leading-tight uppercase tracking-tight mb-12">
              Not everyone wants <br/>
              <span className="text-gray-500">perfect poses.</span> <br/>
              You want real moments.
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <p className="text-lg text-gray-300 leading-relaxed">
                The wedding industry sells you a performance. I capture the silence between the vows, 
                the nervous laughter, and the unscripted joy that happens when no one is directing you.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My approach is minimalist and observational. I step back so your memories can step forward. 
                This is photography for couples who value authenticity over tradition.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
