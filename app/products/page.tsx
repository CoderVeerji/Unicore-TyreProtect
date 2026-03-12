'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { products } from '@/data/products';

export default function Products() {
  return (
    <main className="w-full min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-[#39FF14]/30 relative overflow-hidden">
        
        {/* Dynamic Glow Background */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#39FF14]/10 rounded-full blur-[200px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
            >
                <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest border border-white/20 mb-6 text-[#39FF14]">
                    OUR FORMULAS
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-sans">
                    ADVANCED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-white">PROTECTION</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
                    Every chemical signature is explicitly engineered to handle extreme stress, multiple punctures, and temperature variations without compromising driving performance.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-16 md:gap-32">
                {products.map((prod, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        key={prod.id}
                        className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 group`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative flex justify-center h-[400px] md:h-[600px]">
                            {/* Hover Interactive Glow */}
                            <div className="absolute w-full h-full rounded-full opacity-20 blur-3xl scale-75 group-hover:scale-100 transition-all duration-700" style={{ background: prod.color }} />
                            
                            <motion.img 
                                src={prod.image}
                                alt={prod.name}
                                whileHover={{ scale: 1.05, y: -20, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="w-3/4 object-contain relative z-10 will-change-transform"
                                style={{ filter: `drop-shadow(0 20px 40px ${prod.color}60)` }}
                            />
                        </div>
                        
                        {/* Content Side */}
                        <div className="w-full md:w-1/2 flex flex-col items-start space-y-8">
                            <span className="text-sm font-bold tracking-[0.3em] uppercase border-b pb-2" style={{ color: prod.color, borderColor: prod.color }}>
                                {prod.tagline}
                            </span>
                            
                            <h2 className="text-4xl md:text-6xl font-bold font-sans tracking-tight leading-none text-white">
                                {prod.name}
                            </h2>
                            
                            <p className="text-xl text-gray-400 font-light leading-relaxed">
                                {prod.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                {prod.features.map((f, i) => (
                                    <div key={i} className="flex gap-3 items-center bg-white/5 border border-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: prod.color, boxShadow: `0 0 10px ${prod.color}` }} />
                                        <span className="text-sm font-medium text-gray-300">{f}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-8 px-10 py-5 rounded-full text-black font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-2xl group flex items-center gap-4" style={{ backgroundColor: prod.color, boxShadow: `0 10px 30px ${prod.color}40` }}>
                                Explore {prod.volume}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    </main>
  );
}
