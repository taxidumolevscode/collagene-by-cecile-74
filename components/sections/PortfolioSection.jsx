import FadeIn from "../animations/FadeIn";

const portfolioItems = [
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop",
    couple: "Anna & Tom",
    location: "Tuscany, Italy",
    delay: 0,
    offset: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2070&auto=format&fit=crop",
    couple: "Elena & Marc",
    location: "Paris, France",
    delay: 0.1,
    offset: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    couple: "Sarah & James",
    location: "London, UK",
    delay: 0.2,
    offset: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
    couple: "Clara & Ben",
    location: "Bali, Indonesia",
    delay: 0,
    offset: false,
    hideOnLarge: true,
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white text-black">
      <div className="px-4 md:px-10 mb-20 lg:flex justify-between items-end">
        <div>
          <span className="block text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">
            ( 02 )
          </span>
          <h2 className="text-5xl md:text-6xl xl:text-8xl font-black uppercase tracking-tighter">
            Selected Works
          </h2>
        </div>
        <div className="hidden lg:block">
          <div className="inline-block lg:mt-0 mt-4">
            <p className="text-sm uppercase tracking-widest font-bold border-b border-black pb-1">
              View Full Archive
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {portfolioItems.map((item, index) => (
            <FadeIn
              key={index}
              delay={item.delay}
              className={`group relative overflow-hidden cursor-pointer ${
                item.offset ? "md:mt-20" : ""
              } ${item.hideOnLarge ? "lg:hidden" : ""}`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={`Wedding ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm font-bold uppercase tracking-widest">
                  {item.couple}
                </span>
                <span className="text-xs text-gray-500">{item.location}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

              <div className="lg:hidden text-center">
          <div className="inline-block  mt-7">
            <p className="text-sm uppercase tracking-widest font-bold border-b border-black pb-1">
              View Full Archive
            </p>
          </div>
        </div>
    </section>
  );
}
