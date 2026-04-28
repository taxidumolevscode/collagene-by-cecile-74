import FadeIn from '../animations/FadeIn';

const approaches = [
  {
    title: "Pourquoi rejoindre ?",
    description: "Je te propose de rejoindre une équipe incroyable, motivée, solidaire et solaire, qui va te montrer comment transformer ton énergie en résultats concrets."
  },
  {
    title: "Ce que tu y gagnes",
    description: "Rejoins mon équipe, rejoins-moi, et découvre comment tes efforts peuvent vraiment porter leurs fruits..."
  },
  {
    title: "Et maintenant ?",
    description: "Si tu as envie d’en savoir plus, viens prendre l’info – ça ne coûte rien !"
  }
];

export default function ApproachSection() {
  return (
    <section className="py-32 px-4 md:px-10 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 text-[30vw] font-black text-[#111] pointer-events-none select-none leading-none">
        ART
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <FadeIn>
            <img 
              src="/images/fitline-team.jpeg" 
              alt="Photographer detail" 
              className="w-full grayscale opacity-80"
            />
          </FadeIn>
        </div>
        <div className="md:col-span-1"></div>
        <div className="md:col-span-6">
          <span className="block text-xs text-gray-500 font-mono mb-6">
            ( 03 ) COMMENT FAIRE ???
          </span>
          <FadeIn delay={0.2}>
            <h3 className="text-3xl lg:text-5xl font-bold uppercase leading-tight mb-8 text-[#D8A7A0]">
              Tu as envie d’un revenu supplémentaire ou complémentaire
            </h3>
            <div className="space-y-8">
              {approaches.map((approach, index) => (
                <div key={index} className="border-l border-gray-800 pl-6">
                  <h4 className="text-lg font-bold uppercase mb-2 text-white">
                    {approach.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
