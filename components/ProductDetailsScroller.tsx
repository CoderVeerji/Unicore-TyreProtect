'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { products } from '../data/products';

export default function ProductDetailsScroller({ selected }: { selected: number }) {
  const product = products[selected] || products[0];
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024); // tab and mobile threshold
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 15, restDelta: 0.001 });

  // Breakpoints
  // Block 1: 0.1 -> 0.25 (out at 0.3)
  // Block 2: 0.4 -> 0.55 (out at 0.6)
  // Block 3: 0.7 -> 0.85 (out at 0.9)

  // Bottle X: Desktop shifts left/right. Mobile stays center.
  const xTransform = useTransform(smoothProgress, 
    [0, 0.1, 0.3, 0.4, 0.6, 0.7, 0.9, 1], 
    ["0%", "-25%", "-25%", "25%", "25%", "-25%", "-25%", "0%"]
  );
  
  const bottleX = useTransform(() => isMobile ? "0%" : xTransform.get());
  
  // Bottle Y: Desktop stays centerish. Mobile moves UP to make room for text at bottom.
  const yTransform = useTransform(smoothProgress,
    [0, 0.1, 0.9, 1],
    ["0%", "-15%", "-15%", "0%"]
  );
  const bottleY = useTransform(() => isMobile ? yTransform.get() : "0%");

  // Scale: Desktop stays large. Mobile shrinks slightly so it doesn't overlap text.
  const scaleMobTransform = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [1, 0.65, 0.65, 1]);
  const scaleDeskTransform = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [1, 0.9, 0.9, 1]);
  const bottleScale = useTransform(() => isMobile ? scaleMobTransform.get() : scaleDeskTransform.get());

  // Rotation for wow factor (spins smoothly and cleanly, DOES NOT go upside down)
  const bottleRotateY = useTransform(smoothProgress, [0, 1], [0, 360]); // 1 clean spin around Y axis
  const bottleRotateZ = useTransform(smoothProgress, [0, 0.5, 1], [0, 5, 0]); // Very slight tilt, no flipping

  // TEXT BLOCK 1
  const t1O = useTransform(smoothProgress, [0, 0.1, 0.25, 0.3], [0, 1, 1, 0]);
  const t1Y = useTransform(smoothProgress, [0, 0.1, 0.25, 0.3], [100, 0, 0, -100]);
  const t1Scale = useTransform(smoothProgress, [0, 0.1, 0.25, 0.3], [0.8, 1, 1, 1.2]); 

  // TEXT BLOCK 2
  const t2O = useTransform(smoothProgress, [0.3, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
  const t2Y = useTransform(smoothProgress, [0.3, 0.4, 0.55, 0.6], [100, 0, 0, -100]);
  const t2Scale = useTransform(smoothProgress, [0.3, 0.4, 0.55, 0.6], [0.8, 1, 1, 1.2]);

  // TEXT BLOCK 3
  const t3O = useTransform(smoothProgress, [0.6, 0.7, 0.85, 0.9], [0, 1, 1, 0]);
  const t3Y = useTransform(smoothProgress, [0.6, 0.7, 0.85, 0.9], [100, 0, 0, -100]);
  const t3Scale = useTransform(smoothProgress, [0.6, 0.7, 0.85, 0.9], [0.8, 1, 1, 1.2]);


  return (
    <div ref={ref} className="relative w-full h-[600vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-[1000px] px-6">
        
        {/* Dynamic Glowing Background */}
        <motion.div 
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] md:w-[60vw] h-[120vw] md:h-[60vw] rounded-full blur-[140px] opacity-20 pointer-events-none"
           style={{ backgroundColor: product.color }}
           animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.4, 0.1] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* --- TEXT BLOCK 1 --- */}
        <motion.div 
          className="absolute z-20 w-full lg:w-[40%] right-0 lg:right-[5%] bottom-10 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 pointer-events-auto"
          style={{ opacity: t1O, y: t1Y, scale: t1Scale }}
        >
          <motion.div 
             whileHover={{ scale: 1.02, rotateY: -3, rotateX: 3 }}
             className="group bg-black/40 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] inline-block w-full max-w-[500px] mx-auto lg:ml-auto block transition-colors hover:bg-black/60 cursor-pointer overflow-hidden"
          >
            {/* Animated hover gradient border effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" style={{ background: `radial-gradient(circle at top right, ${product.color}30, transparent 60%)` }} />
            
            <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4 relative z-10" style={{ color: product.color }}>
              Ultimate Protection
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 font-light relative z-10">
               Experience industrial-grade reliability with our next-gen solution. Engineered to thrive in the harshest conditions, ensuring you never have to worry about sudden punctures again.
            </p>
            <div className="space-y-4 text-left relative z-10">
              {product.features.slice(0, 3).map((f, i) => (
                 <div key={i} className="flex gap-4 items-center bg-white/5 group-hover:bg-white/10 border border-white/5 p-4 rounded-2xl transition-colors">
                   <div className="w-3 h-3 rounded-full flex-shrink-0 shadow-lg" style={{ backgroundColor: product.color, boxShadow: `0 0 15px ${product.color}` }} />
                   <p className="text-white font-medium text-base">{f}</p>
                 </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- TEXT BLOCK 2 --- */}
        <motion.div 
          className="absolute z-20 w-full lg:w-[40%] left-0 lg:left-[5%] bottom-10 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 pointer-events-auto"
          style={{ opacity: t2O, y: t2Y, scale: t2Scale }}
        >
          <motion.div 
             whileHover={{ scale: 1.02, rotateY: 3, rotateX: 3 }}
             className="group bg-black/40 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] inline-block w-full max-w-[500px] mx-auto block lg:mr-auto block transition-colors hover:bg-black/60 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" style={{ background: `radial-gradient(circle at top left, ${product.color}30, transparent 60%)` }} />
            
            <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6 text-white relative z-10 group-hover:translate-x-2 transition-transform duration-300" style={{ textShadow: `0 0 30px ${product.color}80` }}>
              Advanced Formula
            </h2>
            <div className="space-y-6 relative z-10">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                  {product.description}
                </p>
                <div className="w-16 h-[2px] rounded-full group-hover:w-full transition-all duration-700" style={{ backgroundColor: product.color }} />
                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors">
                  Crafted for extreme performance. Once injected, it proactively coats the inside of your tires, maintaining dynamic balancing and instantly sealing deep punctures on the go without you even noticing.
                </p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- TEXT BLOCK 3 --- */}
        <motion.div 
          className="absolute z-20 w-full lg:w-[40%] right-0 lg:right-[5%] bottom-10 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 pointer-events-auto"
          style={{ opacity: t3O, y: t3Y, scale: t3Scale }}
        >
           <motion.div 
              whileHover={{ scale: 1.02, rotateY: -3, rotateX: 3 }}
              className="group bg-black/40 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] inline-block w-full max-w-[500px] mx-auto block lg:ml-auto block transition-colors hover:bg-black/60 cursor-pointer overflow-hidden"
           >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" style={{ background: `radial-gradient(circle at bottom right, ${product.color}30, transparent 60%)` }} />
            
            <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6 text-white relative z-10">
              Why It's <span style={{ color: product.color }} className="drop-shadow-lg">Different</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-light relative z-10">
              Unlike generic sealants, our non-toxic, eco-friendly gel does not degrade or cause rim corrosion over time. It cleans easily with water and extends the lifespan of your tyres indefinitely.
            </p>

            <div className="flex flex-col gap-5 bg-white/5 group-hover:bg-white/10 p-6 rounded-2xl border border-white/5 transition-colors relative z-10">
              <div className="flex items-center justify-between">
                  <span className="text-gray-400 uppercase tracking-widest text-xs font-bold group-hover:text-white transition-colors">Volume Delivered</span>
                  <span className="font-bold text-lg py-1 px-4 rounded-full shadow-xl transition-transform group-hover:scale-110" style={{ backgroundColor: product.color, color: '#000', boxShadow: `0 5px 20px ${product.color}50` }}>
                      {product.volume}
                  </span>
              </div>
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors" />
              <div className="flex items-center justify-between">
                  <span className="text-gray-400 uppercase tracking-widest text-xs font-bold group-hover:text-white transition-colors">Category Class</span>
                  <span className="text-white font-bold opacity-90 text-sm">{product.tagline}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>


        {/* Floating Bottle (Stays behind the text nicely. Moving and spinning safely vertically) */}
        <motion.div 
          className="relative z-10 w-[80vw] md:w-[35vw] h-[60vh] md:h-[70vh] flex items-center justify-center transform-style-3d pointer-events-none"
          style={{ 
            scale: bottleScale, 
            x: bottleX, 
            y: bottleY, 
            rotateY: bottleRotateY, 
            rotateZ: bottleRotateZ 
          }}
        >
            <motion.div 
              className="w-full h-full relative"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain filter drop-shadow-[0_40px_50px_rgba(0,0,0,0.8)]"
                style={{ filter: `drop-shadow(0 30px 40px ${product.color}50)` }}
              />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
