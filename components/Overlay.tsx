'use client';

import React from 'react';
import { motion } from 'framer-motion';

// A reusable Section component
const Section = ({
    children,
    align = 'center', // left, right, center
}: {
    children: React.ReactNode,
    align?: 'left' | 'right' | 'center'
}) => {
    // Tailwind classes for alignment
    // We use 'flex' to position the content box
    let justifyClass = 'justify-center';
    if (align === 'left') justifyClass = 'justify-start';
    if (align === 'right') justifyClass = 'justify-end';

    return (
        <section className={`h-screen w-full flex items-center ${justifyClass} px-6 md:px-20 pointer-events-none`}>
            {/* The Content Box requires pointer-events-auto to interact with buttons */}
            <div className={`max-w-xl w-full ${align === 'right' ? 'text-right' : align === 'left' ? 'text-left' : 'text-center'} pointer-events-auto`}>
                {children}
            </div>
        </section>
    );
};

export default function Overlay() {
    return (
        <div className="w-full">

            {/* --- SECTION 1: HERO --- */}
            <Section align="left">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-2">
                        UNICORE
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#39FF14] mb-6 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                        TYREPROTECT
                    </h2>
                    <p className="text-xl text-gray-400 max-w-md">
                        The world's most advanced puncture prevention system.
                        Engineered for speed, durability, and safety.
                    </p>
                </motion.div>
            </Section>

            {/* --- SECTION 2: FEATURES (Text Left, Bottle moves Right) --- */}
            <Section align="left">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-1 bg-[#39FF14]" />
                        <span className="text-[#39FF14] uppercase tracking-widest font-bold">Insta-Seal</span>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        SEALS IN <br /> 0.5 SECONDS.
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                        Our nano-gel formula reacts instantly to air exposure, creating a permanent, flexible plug.
                        Ride through nails, glass, and thorns without stopping.
                    </p>
                </motion.div>
            </Section>

            {/* --- SECTION 3: TECH (Text Right, Bottle moves Left) --- */}
            <Section align="right">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-end gap-4 mb-4">
                        <span className="text-blue-400 uppercase tracking-widest font-bold">Coolant Tech</span>
                        <div className="w-12 h-1 bg-blue-400" />
                    </div>
                    <h3 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        RUNS <br /> COOLER.
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-md ml-auto">
                        Reduces tyre temperature by up to 20% on long rides.
                        Prevents blowouts and extends tyre life by maintaining optimal pressure.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <span className="block text-2xl font-bold text-white">-20%</span>
                            <span className="text-xs text-gray-400 uppercase">Heat Build-up</span>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                            <span className="block text-2xl font-bold text-white">5 Yrs</span>
                            <span className="text-xs text-gray-400 uppercase">Shelf Life</span>
                        </div>
                    </div>
                </motion.div>
            </Section>

            {/* --- SECTION 4: CTA (Center) --- */}
            <Section align="center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 text-center">
                        RIDE FEARLESS.
                    </h2>
                    <button className="group relative px-12 py-6 bg-[#39FF14] text-black font-bold text-2xl rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(57,255,20,0.4)]">
                        <span className="relative z-10">GET UNICORE - ₹850</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    <div className="mt-8 flex gap-8 text-sm text-gray-500 font-mono">
                        <span>FREE SHIPPING</span>
                        <span>•</span>
                        <span>100% GUARANTEE</span>
                        <span>•</span>
                        <span>24/7 SUPPORT</span>
                    </div>
                </motion.div>
            </Section>

        </div>
    );
}
