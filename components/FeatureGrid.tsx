'use client';

import React, { useRef, useState, useEffect } from 'react';

const features = [
    { title: "SEALS IN 0.5 SECONDS", desc: "Reacts instantly to air exposure, creating a permanent, flexible plug." },
    { title: "RUNS 20% COOLER", desc: "Reduces heat build-up on long rides extending tyre life significantly." },
    { title: "5 YEARS SHELF LIFE", desc: "Our formula stays fresh until you need it, guaranteed." }
];

export default function FeatureGrid() {
    return (
        <section className="py-32 px-6 md:px-12 text-center border-t border-white/5 bg-[#050505] relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[#39FF14]/5 blur-[150px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <h3 className="text-4xl md:text-6xl font-bold font-sans mb-6 text-white tracking-tight">
                    WHY CHOOSE <span className="text-unicore-green drop-shadow-[0_0_20px_rgba(57,255,20,0.4)]">UNICORE</span>?
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-16 font-light">
                    Our cutting-edge nano-gel formula brings industrial-grade puncture repair straight to your tires.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 group/grid">
                    {features.map((feature, i) => (
                        <GlowCard key={i} index={i} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function GlowCard({ feature, index }: { feature: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full bg-[#111] rounded-3xl overflow-hidden cursor-pointer"
        >
            {/* The animated spotlight glow border effect */}
            <div 
                className="absolute inset-0 z-0 transition-opacity duration-500 will-change-[background]"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(57,255,20,0.15), transparent 40%)`
                }}
            />
            
            {/* The inner card area (creates the 1px border) */}
            <div className="absolute inset-[1px] z-10 bg-[#0a0a0a] rounded-[23px] transition-colors duration-500 overflow-hidden">
                {/* Secondary inner glow on hover */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(57,255,20,0.05), transparent 40%)`
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-20 p-10 h-full flex flex-col justify-start text-left items-start transform transition-transform duration-500 group-hover:-translate-y-2">
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-[#39FF14] font-bold text-xl">{index + 1}</span>
                </div>
                
                <h4 className="text-2xl font-bold font-sans text-white mb-4 group-hover:text-[#39FF14] transition-colors duration-300">
                    {feature.title}
                </h4>
                <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                </p>
                
                {/* Decorative line */}
                <div className="w-0 h-[2px] bg-[#39FF14] mt-8 group-hover:w-full transition-all duration-700 ease-out" />
            </div>
        </div>
    );
}
