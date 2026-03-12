'use client';

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function TheBottle() {
    // Use a Group to move the whole bottle together
    const groupRef = useRef<THREE.Group>(null);
    const scroll = useScroll(); // Get scroll info from ScrollControls
    const { viewport } = useThree();

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // --- 1. CONTINUOUS ROTATION ---
        // Make it spin slowly even when not scrolling
        groupRef.current.rotation.y += delta * 0.5;

        // --- 2. SCROLL-BASED ROTATION ---
        // Spin faster based on scroll speed or position
        // scroll.offset is 0 at top, 1 at bottom
        const r1 = scroll.range(0, 1);
        groupRef.current.rotation.y += r1 * 0.1;


        // --- 3. SCROLL-BASED MOVEMENT (The "Scrollytelling" effect) ---
        // We want the bottle to move Left/Right to make room for text.
        // At scroll 0 (Hero): Center
        // at scroll 1/3 (Features): Move Right (Text is Left)
        // at scroll 2/3 (Tech): Move Left (Text is Right)
        // at scroll 1 (CTA): Center

        // Helper: translate scroll range to position
        // library 'drei' useScroll().curve(start, length) gives a bell curve 0->1->0

        // Position Logic:
        // P1 (Start -> 0.3): Go from 0 to 1.5 (Right)
        // P2 (0.3 -> 0.6): Go from 1.5 to -1.5 (Left)
        // P3 (0.6 -> 1.0): Go from -1.5 to 0 (Center)

        const currentScroll = scroll.offset;
        let targetX = 0;

        if (currentScroll < 0.3) {
            // 0 -> 0.3: Move 0 -> 2
            // Normalizing 0-0.3 to 0-1
            const t = currentScroll / 0.3;
            targetX = THREE.MathUtils.lerp(0, 2, t);
        } else if (currentScroll < 0.6) {
            // 0.3 -> 0.6: Move 2 -> -2
            // Normalizing 0.3-0.6 to 0-1
            const t = (currentScroll - 0.3) / 0.3;
            targetX = THREE.MathUtils.lerp(2, -2, t);
        } else {
            // 0.6 -> 1.0: Move -2 -> 0
            // Normalizing 0.6-1.0 to 0-1
            const t = (currentScroll - 0.6) / 0.4;
            targetX = THREE.MathUtils.lerp(-2, 0, t);
        }

        // Smoothly interpolate current position to target
        // dampen/lerp for smooth movement
        groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.1);

        // Also move slightly up/down?
        // Let's keep Y steady at 0 or slightly oscillate
    });

    return (
        <group ref={groupRef} dispose={null}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* --- BOTTLE MESH --- */}
                {/* Main Body */}
                <mesh position={[0, -0.5, 0]}>
                    <cylinderGeometry args={[0.8, 0.8, 2.5, 32]} />
                    <meshPhysicalMaterial
                        color="#111"
                        roughness={0.2}
                        metalness={0.8}
                        clearcoat={1}
                    />
                </mesh>

                {/* Shoulder */}
                <mesh position={[0, 0.85, 0]}>
                    <cylinderGeometry args={[0.3, 0.8, 0.5, 32]} />
                    <meshPhysicalMaterial color="#111" roughness={0.2} metalness={0.8} />
                </mesh>

                {/* Neck */}
                <mesh position={[0, 1.2, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
                    <meshPhysicalMaterial color="#222" roughness={0.5} />
                </mesh>

                {/* Cap */}
                <mesh position={[0, 1.5, 0]}>
                    <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} />
                    <meshPhysicalMaterial color="#333" roughness={0.8} />
                </mesh>

                {/* --- BRANDING --- */}
                {/* Neon Ring */}
                <mesh position={[0, -0.2, 0]}>
                    <torusGeometry args={[0.82, 0.02, 16, 100]} />
                    <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={2} toneMapped={false} />
                </mesh>

                {/* Label Area (Dark Grey Matte) */}
                <mesh position={[0, -0.8, 0]}>
                    <cylinderGeometry args={[0.81, 0.81, 0.8, 32, 1, true]} />
                    <meshStandardMaterial color="#222" side={THREE.DoubleSide} />
                </mesh>

                {/* Vertical Strip (Visual Interest) */}
                <mesh position={[0, -0.5, 0.82]}>
                    <planeGeometry args={[0.1, 1.5]} />
                    <meshBasicMaterial color="#39FF14" side={THREE.DoubleSide} />
                </mesh>
            </Float>
        </group>
    );
}
