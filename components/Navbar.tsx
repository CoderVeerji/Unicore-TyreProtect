'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'} px-6 flex justify-between items-center text-white`}>
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 group cursor-none">
          UNICORE <span className="text-[#39FF14] text-xl font-sans group-hover:drop-shadow-[0_0_10px_#39FF14] transition-all">TYREPROTECT</span>
        </Link>
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] text-gray-300">
          <Link href="/" className="hover:text-[#39FF14] transition-colors cursor-none">HOME</Link>
          <Link href="/about" className="hover:text-[#39FF14] transition-colors cursor-none">ABOUT US</Link>
          <Link href="#contact" className="hover:text-[#39FF14] transition-colors cursor-none">CONTACT</Link>
        </div>
        
        {/* DESKTOP CTA */}
        <div className="hidden md:block">
           <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-[#39FF14] hover:text-black hover:border-transparent transition-all duration-300 text-xs font-bold tracking-[0.2em] cursor-none shadow-[0_0_15px_rgba(57,255,20,0)] hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]">
             ORDER NOW
           </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
           className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[110] outline-none cursor-none"
           onClick={() => setIsOpen(!isOpen)}
        >
            <span className={`bg-white block transition-all duration-300 ease-out h-[2px] w-full rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
            <span className={`bg-white block transition-all duration-300 ease-out h-[2px] w-full rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`bg-white block transition-all duration-300 ease-out h-[2px] w-full rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU (Overlay) */}
      <AnimatePresence>
         {isOpen && (
            <motion.div 
               initial={{ opacity: 0, y: '-100%' }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: '-100%' }}
               transition={{ duration: 0.5, ease: "easeInOut" }}
               className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center pointer-events-auto cursor-default"
            >
               <div className="flex flex-col gap-10 text-center text-3xl font-black tracking-widest text-white">
                  <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#39FF14] transition-colors">HOME</Link>
                  <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#39FF14] transition-colors">ABOUT US</Link>
                  <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-[#39FF14] transition-colors">CONTACT</Link>
               </div>
               
               <button 
                  onClick={() => setIsOpen(false)}
                  className="mt-16 px-10 py-4 rounded-full bg-[#39FF14] text-black transition-all text-sm font-bold tracking-[0.2em] shadow-[0_0_30px_rgba(57,255,20,0.4)]"
               >
                  ORDER NOW
               </button>
            </motion.div>
         )}
      </AnimatePresence>
    </>
  );
}
