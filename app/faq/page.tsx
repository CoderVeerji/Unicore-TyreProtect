'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does Unicore TyreProtect work?",
    answer: "Our advanced Nano-Gel formula coats the inside of your tire dynamically. The moment a puncture occurs, the gel rushes to the site, guided by escaping air pressure, and chemically bonds with oxygen to create a flexible, permanent plug in just 0.5 seconds."
  },
  {
    question: "Will it ruin my tires or rims?",
    answer: "Absolutely not. Unicore TyreProtect is 100% non-toxic, eco-friendly, and non-corrosive. It does not contain harsh chemicals or adhesives that degrade rubber, and it is entirely safe for alloy, steel, or carbon fiber rims."
  },
  {
    question: "How long does a single application last?",
    answer: "Once installed, a single application provides active protection for up to two years or the typical legal lifespan of your tread—whichever comes first. It does not dry out or separate under regular use."
  },
  {
    question: "Can it be washed out?",
    answer: "Yes, our sealant is water-soluble inside the tire. If you need to replace the tire or perform internal patching (which is rarely needed), the gel easily wipes away with a wet cloth or hose, leaving zero sticky residue."
  },
  {
    question: "Does it work with Tube and Tubeless tires?",
    answer: "We have specifically developed formulas for both. Our NextGen Tubeless formula is designed for high-performance tubeless setups, while our 2-In-1 variant effectively protects standard tubed applications."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="w-full min-h-screen bg-[#030303] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-[#39FF14]/30 relative overflow-hidden">
        
        {/* Dynamic Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] bg-[#39FF14]/5 rounded-full blur-[200px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest border border-white/20 mb-6 text-[#39FF14]">
                    SUPPORT & KNOWLEDGE
                </div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-sans">
                    COMMON <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-white">QUESTIONS</span>
                </h1>
                <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl font-light">
                    Everything you need to know about implementing the world's leading dynamic tyre protection.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
            >
                {faqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    
                    return (
                        <div 
                            key={idx} 
                            onClick={() => setOpenIndex(isOpen ? null : idx)}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/10 transition-colors"
                        >
                            <div className="p-6 md:p-8 flex justify-between items-center gap-6">
                                <h3 className={`font-bold text-lg md:text-xl transition-colors ${isOpen ? 'text-[#39FF14]' : 'text-white'}`}>
                                    {faq.question}
                                </h3>
                                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 border-[#39FF14] text-[#39FF14]' : 'text-white'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                                </div>
                            </div>
                            
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0 text-gray-400 font-light leading-relaxed border-t border-white/5 mt-2">
                                            <div className="pt-6">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-16 text-center"
            >
                <p className="text-gray-400 mb-6">Still have questions?</p>
                <a href="/contact" className="inline-block px-10 py-4 rounded-full border border-white/20 hover:bg-[#39FF14] hover:text-black hover:border-transparent transition-all font-bold tracking-widest text-xs uppercase shadow-[0_0_15px_rgba(57,255,20,0)] hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]">
                    Contact Us Directly
                </a>
            </motion.div>

        </div>
    </main>
  );
}
