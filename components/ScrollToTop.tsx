'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group outline-none"
                    aria-label="Scroll to top"
                >
                    {/* Outer Glow */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-md group-hover:opacity-60 transition duration-500" />

                    {/* Animated Border Wrapper */}
                    <div className="relative p-[2px] rounded-full bg-black shadow-2xl overflow-hidden">
                        
                        {/* Spinning Conic Gradient for the border */}
                        <div 
                           className="absolute inset-[0] animate-[spin_3s_linear_infinite]" 
                           style={{
                               background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.1) 20%, #E5E7EB 50%, #F59E0B 60%, #EC4899 70%, #3B82F6 80%, transparent 100%)'
                           }}
                        />

                        {/* Button Inner Surface */}
                        <div className="relative bg-[#1a1a1a] bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border border-black/50 overflow-hidden transition-transform duration-300 group-hover:scale-[0.98]">
                            {/* Inner Top Highlight for 3D metallic feel */}
                            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-full" />
                            
                            {/* Inner Bevel */}
                            <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />

                            {/* Arrow Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                            </svg>
                        </div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
