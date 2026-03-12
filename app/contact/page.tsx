'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-[#39FF14]/30 relative overflow-hidden">
        
        {/* Dynamic Glow Background */}
        <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#39FF14]/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest border border-white/20 mb-6 text-[#39FF14]">
                    GET IN TOUCH
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-sans">
                    WE HEAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-white">YOU</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-light mb-12">
                    Have questions about specific tire compatibilities, bulk pricing, or technical details? Fill in the form and our specialist will respond shortly.
                </p>

                <div className="space-y-8 border-t border-white/10 pt-12">
                    <div className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#39FF14] group-hover:text-[#39FF14] transition-all shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-1">Call Us</h3>
                            <p className="text-gray-400 text-sm italic">+1 (845)-356-1234</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#39FF14] group-hover:text-[#39FF14] transition-all shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-1">Email</h3>
                            <p className="text-gray-400 text-sm italic">info@unicorepro.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#39FF14] group-hover:text-[#39FF14] transition-all shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-1">Headquarters</h3>
                            <p className="text-gray-400 text-sm italic leading-relaxed">285 Hungry Hallow Road<br/>Chestnut Ridge, NY 10977</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-1 shadow-2xl overflow-hidden backdrop-blur-xl">
                    <div className="bg-[#030303] rounded-[calc(2rem-4px)] w-full h-full relative z-10 p-2 sm:p-4">
                        <ContactForm />
                    </div>
                </div>
            </motion.div>

        </div>
    </main>
  );
}
