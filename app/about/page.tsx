'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="w-full min-h-screen bg-[#030303] text-white pt-32 pb-24 overflow-hidden relative selection:bg-[#39FF14]/30">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#39FF14] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#00C2FF] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest border border-white/20 mb-6 text-gray-400">
            OUR STORY
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-sans tracking-tight mb-8">
            BEYOND <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#00C2FF]">LIMITS</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
            Unicore TyreProtect was founded with a single mission: to completely eliminate the fear of flat tires across all terrains.
          </p>
        </motion.div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg text-gray-400 leading-relaxed font-light"
            >
              <h2 className="text-3xl font-bold text-white mb-6">The Nano-Gel Revolution</h2>
              <p>
                  We observed that conventional tyre sealants were either too thick to maintain balance at high speeds or too thin to seal multi-layer punctures efficiently.
              </p>
              <p>
                  After years of rigorous testing in extreme off-road and track conditions, our engineers developed a breakthrough Nano-Gel Formula—designed to react instantly to oxygen and create permanent, flexible plugs inside your tire casing in merely 0.5 seconds.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] p-[2px] overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14] to-[#00C2FF] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-black h-full rounded-[calc(2rem-2px)] p-12 flex items-center justify-center min-h-[400px]">
                    <h3 className="text-3xl font-bold text-center text-white italic relative z-10 leading-snug">
                        "We don't just fix flats.<br/>We prevent them from<br/> <span className="text-[#39FF14]">stopping you.</span>"
                    </h3>
                </div>
            </motion.div>
        </div>

        {/* Stats / Value Prop */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
            {[
                { title: '0.5s', subtitle: 'Reaction Time', desc: 'Instant sealing upon oxygen exposure.' },
                { title: '100%', subtitle: 'Eco-Friendly', desc: 'No harmful chemicals. Safe for standard rims.' },
                { title: '2 Years', subtitle: 'Longevity', desc: 'Continuous protection for long life.' }
            ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#39FF14]/50 transition-colors">
                    <div className="text-4xl md:text-5xl font-bold text-[#39FF14] mb-2">{stat.title}</div>
                    <div className="text-xl text-white font-bold mb-4">{stat.subtitle}</div>
                    <div className="text-gray-400 text-sm font-light">{stat.desc}</div>
                </div>
            ))}
        </motion.div>
        
      </div>
    </main>
  );
}
