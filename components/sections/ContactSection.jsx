import FadeIn from '../animations/FadeIn';

const footerLinks = {
  socials: ['Instagram', 'Pinterest', 'Vimeo'],
  contact: ['hello@lukaszmilwosz.com', '+1 (555) 000-1234'],
  locations: ['London', 'Paris', 'Destination']
};

export default function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white flex flex-col justify-between pt-24 pb-10 px-4 md:px-10 relative">
      <div className="max-w-3xl relative z-10">
        <span className="block text-xs font-bold tracking-widest text-gray-500 mb-6">
          ( 06 ) START THE CONVERSATION
        </span>
        <FadeIn>
          <h2 className="text-5xl md:text-6xl lg::text-8xl font-black uppercase tracking-tighter leading-none mb-10 text-[#D8A7A0]">
            Your Story <br/> Starts Here.
          </h2>
          <p className="text-xl text-gray-400 max-w-md mb-10">
            I take on a limited number of weddings per year to ensure every couple gets my undivided attention.
          </p>
          <a 
            href="mailto:lukasz@example.com" 
            className="inline-block bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Inquire Availability
          </a>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-gray-900 pt-10 relative z-10">
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Socials</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.socials.map((social, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.contact.map((contact, index) => (
              <li key={index}>{contact}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-500 uppercase mb-4">Locations</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.locations.map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-end justify-end">
          <button onClick={scrollToTop} className="group flex items-center gap-2">
            <span className="text-xs uppercase font-bold">Back to Top</span>
            <div className="p-2 border border-white rounded-full group-hover:bg-white group-hover:text-black transition-colors">
              <div className="w-3 h-3 border-t-2 border-l-2 border-current transform rotate-45 translate-y-0.5"></div>
            </div>
          </button>
        </div>
      </div>

      <div className="mt-20 md:mt-0">
        <h1 className="text-[13vw] font-black uppercase leading-none tracking-tighter text-center text-[#D8A7A0] opacity-20 select-none">
          Collagène By Cécile
        </h1>
      </div>
    </section>
  );
}
