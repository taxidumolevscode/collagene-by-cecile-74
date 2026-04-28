export default function Navigation({ onMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-40 mix-blend-difference text-white">
      <div className="text-sm md:text-base font-bold tracking-widest uppercase">
        Collagène By Cécile
      </div>
      
      <div className="flex items-center gap-8">
        <a 
          href="#contact" 
          className="hidden md:block text-xs font-bold tracking-widest uppercase border-b border-transparent hover:border-white transition-all"
        >
          Menu
        </a>
        <button 
          onClick={onMenuOpen} 
          className="group flex flex-col items-end gap-1.5 cursor-pointer"
        >
          <span className="block w-8 h-[2px] bg-white group-hover:w-6 transition-all duration-300"></span>
          <span className="block w-5 h-[2px] bg-white group-hover:w-8 transition-all duration-300"></span>
        </button>
      </div>
    </nav>
  );
}
