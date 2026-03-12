'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Environment, Sparkles } from '@react-three/drei';
import TheBottle from '@/components/TheBottle';
import Overlay from '@/components/Overlay';

export default function Scene() {
    return (
        <div className="w-full h-full absolute inset-0 bg-black">
            <Canvas
                shadows
                camera={{ position: [0, 0, 8], fov: 35 }}
                dpr={[1, 1.5]} // Limit pixel ratio for performance
                gl={{ antialias: true, alpha: false }} // alpha: false is slightly faster if bg is opaque
            >
                {/* --- LIGHTING --- */}
                <color attach="background" args={['#050505']} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} color="#39FF14" />
                <spotLight position={[-10, 5, 10]} angle={0.15} penumbra={1} intensity={5} color="#00C2FF" />
                <Environment preset="city" />

                {/* --- SCROLL CONTROLS --- */}
                {/* Pages = 4 because we have 4 sections in Overlay */}
                <ScrollControls pages={4} damping={0.2}>

                    {/* The 3D Content (Affected by Scroll via hooks inside TheBottle) */}
                    <TheBottle />

                    <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color="#39FF14" />

                    {/* The HTML Content (Scrollable Layer) */}
                    <Scroll html style={{ width: '100vw', height: '100vh' }}>
                        <Overlay />
                    </Scroll>

                </ScrollControls>
            </Canvas>
        </div>
    );
}
