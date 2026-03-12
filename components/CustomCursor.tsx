'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // A very damped spring for the large trailing flood blob
  const floodSpringConfig = { damping: 40, stiffness: 120, mass: 1 };
  const floodX = useSpring(cursorX, floodSpringConfig);
  const floodY = useSpring(cursorY, floodSpringConfig);

  // A fast spring for the leading dot
  const dotSpringConfig = { damping: 25, stiffness: 300, mass: 0.2 };
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  useEffect(() => {
    // Show cursor when mounted and mouse moves
    const showCursor = () => setIsVisible(true);
    
    // Fallback: forcefully keep visible since random disappearing was reported
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX); 
      cursorY.set(e.clientY); 
      setIsVisible(true);

      // Detect hover over clickable elements
      const target = e.target as HTMLElement;
      if (target && target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer, .group')) {
          setIsHovering(true);
      } else {
          setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', showCursor);
    
    // DO NOT hide when leaving window to prevent bugs
    // (Removed buggy mouseout listener that was hiding cursor incorrectly)

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', showCursor);
    };
  }, [cursorX, cursorY]);

  if (typeof document !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
     return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999]" style={{ display: isVisible ? 'block' : 'none' }}>
         <>
             {/* THE FLOOD TRAIL (Large glowing blob that follows with delay) */}
             <motion.div 
               className="fixed top-0 left-0 rounded-full mix-blend-screen pointer-events-none"
               style={{
                 x: floodX,
                 y: floodY,
                 translateX: '-50%',
                 translateY: '-50%',
                 width: isHovering ? '250px' : '150px',
                 height: isHovering ? '250px' : '150px',
                 backgroundColor: 'var(--product-color, #39FF14)',
                 filter: 'blur(40px)',
                 opacity: isHovering ? 0.3 : 0.15,
               }}
             />

             {/* THE DOT / RING */}
             <motion.div 
               className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
               style={{
                 x: dotX,
                 y: dotY,
                 translateX: '-50%',
                 translateY: '-50%',
               }}
             >
                <motion.div 
                   className="rounded-full shadow-[0_0_15px_var(--product-color)]"
                   style={{
                      width: isHovering ? '50px' : '10px',
                      height: isHovering ? '50px' : '10px',
                      backgroundColor: isHovering ? 'transparent' : 'white',
                      border: isHovering ? '2px solid var(--product-color, #39FF14)' : 'none',
                   }}
                   transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
             </motion.div>
         </>
    </div>
  );
}
