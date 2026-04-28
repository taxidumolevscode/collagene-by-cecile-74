import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MenuOverlay({ isOpen, onClose }) {
  const menuItems = ['Portfolio', 'Philosophy', 'Investment', 'Contact'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-[#111] z-50 flex flex-col justify-center items-center text-center"
        >
          <button onClick={onClose} className="absolute top-8 right-8 p-2">
            <X size={32} />
          </button>
          <ul className="space-y-6 md:space-y-10">
            {menuItems.map((item) => (
              <li key={item} className="overflow-hidden">
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="block text-4xl md:text-7xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
