'use client';

import React, { useState } from 'react';
import CarouselHero from '@/components/3DCarousel';
import ProductDetailsScroller from '@/components/ProductDetailsScroller';
import ProductVideo from '@/components/ProductVideo';
import FeatureGrid from '@/components/FeatureGrid';
import ContactForm from '@/components/ContactForm';

export default function Home() {
    const [selectedProduct, setSelectedProduct] = useState(0);

    return (
        <main className="w-full bg-black min-h-screen">
            {/* STICKY HERO (Stays in background while scrolling down) */}
            <div className="sticky top-0 h-screen w-full z-0 pointer-events-auto">
                <CarouselHero selected={selectedProduct} setSelected={setSelectedProduct} />
            </div>
            
            {/* CONTENT THAT SLIDES OVER THE HERO */}
            <div className="relative z-10 bg-[#050505] rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden border-t border-white/10 shadow-[0_-30px_100px_rgba(0,0,0,0.8)] pointer-events-auto">
                <ProductDetailsScroller selected={selectedProduct} />

                <ProductVideo selected={selectedProduct} />

                <FeatureGrid />
                
                <div id="contact">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
