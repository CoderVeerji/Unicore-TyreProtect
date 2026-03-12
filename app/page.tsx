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
        <main className="w-full bg-[#030303] min-h-screen selection:bg-[#39FF14]/30">
            <CarouselHero selected={selectedProduct} setSelected={setSelectedProduct} />
            
            <ProductDetailsScroller selected={selectedProduct} />

            <ProductVideo selected={selectedProduct} />

            <FeatureGrid />
            
            <div id="contact">
                <ContactForm />
            </div>
        </main>
    );
}
