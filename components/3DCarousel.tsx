'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import Image from 'next/image';

export default function CarouselHero({ 
  selected, 
  setSelected 
}: { 
  selected: number, 
  setSelected: (val: number) => void 
}) {
  const next = () => setSelected((selected + 1) % products.length);
  const prev = () => setSelected((selected - 1 + products.length) % products.length);

  const currentProduct = products[selected];

  return (
    <section className="relative w-full min-h-screen bg-unicore-black text-white flex flex-col items-center justify-center pt-20 px-4 md:px-12 overflow-hidden">
      {/* Background glow syncing with product color (Optimized for performance) */}
      <AnimatePresence mode="popLayout">
          <motion.div 
             key={`bg-${selected}`}
             initial={{ filter: 'blur(80px)', opacity: 0 }}
             animate={{ opacity: 0.6 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[70vw] md:h-[70vw] rounded-full pointer-events-none"
             style={{ background: `radial-gradient(circle, ${currentProduct.color}40 0%, transparent 60%)` }}
          />
      </AnimatePresence>
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="z-10 w-full max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* LEFT: 3D Product Carousel */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center h-[500px] perspective-[1000px]">
          <AnimatePresence initial={false} mode="popLayout">
            {products.map((prod, idx) => {
               // Calculate positions relative to selected
               let offset = idx - selected;
               if (offset > 1) offset -= products.length;
               if (offset < -1) offset += products.length;

               // Render only visible roughly
               if (Math.abs(offset) > 1) return null;

               const isCenter = offset === 0;

               return (
                 <motion.div
                   key={idx}
                   onClick={() => setSelected(idx)}
                   className={`absolute w-64 h-[400px] cursor-pointer origin-center
                    ${isCenter ? 'z-20' : 'z-10 opacity-60 hover:opacity-100'}
                   `}
                   initial={{ opacity: 0, x: offset * 250, scale: 0.8, rotateY: offset * -25 }}
                   animate={{ 
                     opacity: isCenter ? 1 : 0.6,
                     x: offset * 200, 
                     scale: isCenter ? 1.2 : 0.8,
                     rotateY: offset * -25,
                     zIndex: isCenter ? 30 : 10
                   }}
                   exit={{ opacity: 0, scale: 0.5 }}
                   transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                 >
                    {/* Floating product image without any box background */}
                    <div className="w-full h-full relative group flex items-center justify-center">
                        <motion.div 
                           animate={isCenter ? { y: [0, -15, 0] } : { y: 0 }}
                           transition={isCenter ? { repeat: Infinity, duration: 4, ease: "easeInOut" } : {}}
                           className="absolute inset-0 transition-all duration-300 flex items-center justify-center p-2"
                           style={{ filter: isCenter ? `drop-shadow(0 20px 30px ${prod.color}60) drop-shadow(0 0 60px ${prod.color}40)` : 'none' }}>
                            <img 
                               src={prod.image}
                               alt={prod.name}
                               className="object-contain w-full h-full drop-shadow-2xl" 
                               onError={(e) => {
                                 // Fallback if image not found
                                 (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="200" viewBox="0 0 100 200"><rect fill="%23333" width="100" height="200"/><text fill="white" x="50" y="100" font-family="Arial" font-size="14" text-anchor="middle">Missing Image</text></svg>';
                               }}
                            />
                        </motion.div>
                    </div>
                 </motion.div>
               );
            })}
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-6 z-40">
            <button onClick={prev} className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 transition-all text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button onClick={next} className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 transition-all text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>

        {/* RIGHT: Product Details Details */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left h-[400px] justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                   key={selected}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.4 }}
                   className="space-y-6 max-w-md"
                >
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest border" style={{ borderColor: currentProduct.color, color: currentProduct.color }}>
                        {currentProduct.tagline}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight">
                        {currentProduct.name}
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed font-light">
                        {currentProduct.description}
                    </p>
                    
                    <ul className="space-y-2 mt-4 text-left">
                        {currentProduct.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                             <div className="w-2 h-2 rounded-full" style={{ background: currentProduct.color }} />
                             {f}
                          </li>
                        ))}
                    </ul>
                    
                    <button 
                        className="mt-8 px-10 py-4 font-bold rounded-full transition-all hover:scale-105 hover:brightness-125 shadow-lg"
                        style={{ backgroundColor: currentProduct.color, color: '#000', boxShadow: `0 0 20px ${currentProduct.color}50` }}
                    >
                        GET DETAILS / ENQUIRE
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
