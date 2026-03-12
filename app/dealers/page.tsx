'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Dealers() {
  return (
    <main className="w-full min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-[#39FF14]/30 relative overflow-hidden">
        
        {/* Dynamic Glow Background */}
        <div className="absolute top-1/4 -right-1/4 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-[#39FF14]/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-1/4 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-[#00C2FF]/5 rounded-full blur-[200px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20 md:mb-32"
            >
                <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest border border-white/20 mb-6 text-gray-400">
                    B2B PARTNERSHIPS
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-sans">
                    DRIVING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-white">PROFIT</span>
                </h1>
                <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
                    Join the Elite Network of Unicore Pro Dealers. Provide your customers with unparalleled safety while maximizing your business growth.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <h2 className="text-3xl font-bold font-sans text-white mb-6">Why Partner With Us?</h2>
                        <ul className="space-y-6 text-gray-400 font-light leading-relaxed">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0 bg-[#39FF14] shadow-[0_0_10px_#39FF14]" />
                                <div>
                                    <strong className="text-white font-medium block mb-1">High Margins, High Demand</strong>
                                    Our products sell themselves. We provide excellent wholesale pricing guaranteeing healthy recurring revenue.
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0 bg-[#39FF14] shadow-[0_0_10px_#39FF14]" />
                                <div>
                                    <strong className="text-white font-medium block mb-1">Exclusive Territories</strong>
                                    We protect our elite partners. Depending on tier, you could secure exclusive rights to sell Unicore in your designated area.
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0 bg-[#39FF14] shadow-[0_0_10px_#39FF14]" />
                                <div>
                                    <strong className="text-white font-medium block mb-1">Marketing Support</strong>
                                    From POS displays to digital marketing assets, our team provides everything you need to dominate the local market.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="border border-white/10 rounded-2xl p-8 bg-black">
                        <h3 className="text-xl font-bold italic mb-2 text-white">Join over 250+ certified service centers.</h3>
                        <p className="text-sm font-light text-gray-500">Transform every oil change or tire rotation into a highly profitable up-sale.</p>
                    </div>
                </motion.div>

                {/* Form Side */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl group hover:border-[#39FF14]/50 transition-colors">
                        <h3 className="text-2xl font-bold font-sans text-white mb-8 border-b border-white/10 pb-4">Apply for Dealership</h3>
                        
                        <form className="space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Business Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-lg focus:outline-none focus:border-[#39FF14] transition-colors placeholder:text-gray-700" placeholder="e.g. Apex Autos" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Contact Person</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-lg focus:outline-none focus:border-[#39FF14] transition-colors placeholder:text-gray-700" placeholder="John Doe" />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Phone Number</label>
                                    <input type="tel" className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-lg focus:outline-none focus:border-[#39FF14] transition-colors placeholder:text-gray-700" placeholder="(555) 123-4567" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                                    <input type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-lg focus:outline-none focus:border-[#39FF14] transition-colors placeholder:text-gray-700" placeholder="owner@domain.com" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Business Address / City</label>
                                <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-lg focus:outline-none focus:border-[#39FF14] transition-colors placeholder:text-gray-700" placeholder="Enter primary location" />
                            </div>

                            <button className="mt-12 w-full py-5 bg-white text-black text-sm uppercase font-bold tracking-[0.2em] hover:bg-[#39FF14] transition-all rounded-full border border-transparent hover:shadow-[0_0_25px_rgba(57,255,20,0.5)]">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>

        </div>
    </main>
  );
}
