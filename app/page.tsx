'use client';

import React, { useState, useEffect } from 'react';
import CarouselHero from '@/components/3DCarousel';
import ProductDetailsScroller from '@/components/ProductDetailsScroller';
import ProductVideo from '@/components/ProductVideo';
import FeatureGrid from '@/components/FeatureGrid';
import ContactForm from '@/components/ContactForm';
import { products } from '@/data/products';

export default function Home() {
    const [selectedProduct, setSelectedProduct] = useState(0);

    useEffect(() => {
        document.documentElement.style.setProperty('--product-color', products[selectedProduct].color);
    }, [selectedProduct]);

    return (
        <main className="w-full bg-[#030303] min-h-screen selection:bg-[var(--product-color)]/30">
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
