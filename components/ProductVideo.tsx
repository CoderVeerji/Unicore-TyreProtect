'use client';

import React from 'react';
import { products } from '../data/products';

export default function ProductVideo({ selected }: { selected: number }) {
  const product = products[selected] || products[0];

  return (
    <section className="relative w-full py-24 bg-black flex flex-col items-center justify-center border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[150px] opacity-10 pointer-events-none"
         style={{ backgroundColor: product.color }}
      />
      
      <div className="z-10 w-full max-w-5xl px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-sans text-white mb-6 uppercase tracking-tight">
          See <span style={{ color: product.color }}>{product.name}</span> in Action
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Watch how our advanced formula instantly seals punctures and protects your journey. 
        </p>

        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
          <div className="absolute inset-0 bg-[#111] flex items-center justify-center">
             <video 
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
               autoPlay 
               loop 
               muted 
               playsInline
               poster={product.image}
             >
                <source src="/placeholder-video.mp4" type="video/mp4" />
             </video>
             
             {/* Play Button Overlay */}
             <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer">
                <div 
                   className="w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-md border shadow-lg transform transition-transform group-hover:scale-110"
                   style={{ borderColor: product.color, backgroundColor: `${product.color}20`, boxShadow: `0 0 20px ${product.color}40` }}
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={product.color} className="w-10 h-10 ml-1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                   </svg>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
