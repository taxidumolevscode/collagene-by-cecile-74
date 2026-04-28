import { motion } from "framer-motion";
import FadeIn from "../animations/FadeIn";
import AnimatedText from "../animations/AnimatedText";

export default function HeroSection() {
  return (
    <header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden px-4">
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
          alt="Wedding Atmosphere"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="z-10 text-center flex flex-col items-center">
        <div className="w-full text-left  px-3 xl:px-6">
          <FadeIn delay={0.2}>
            <h2 className="text-xs md:text-sm minW1600:!text-[1.6vw] tracking-[0.2em] md:tracking-[0.4em] uppercase mb-4">
              Fine Art Wedding Photography
            </h2>
          </FadeIn>
        </div>

        <div className="relative">
          <AnimatedText
            text="COLLAGÈNE"
            className="text-[13vw] md:text-[12vw] leading-none font-black px-2 pt-[0.5cm] tracking-tighter uppercase mix-blend-overlay mb-2"
          />
          <AnimatedText
            text="BY CÉCILE"
            className="text-[13vw] md:text-[12vw] leading-none font-black px-2 pt-[0.5cm] tracking-tighter uppercase text-transparent stroke-white border-white"
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 right-10 flex items-center gap-4 z-10 hidden md:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs uppercase tracking-widest writing-vertical-lr">
          Scroll Down
        </span>
      </motion.div>
    </header>
  );
}
