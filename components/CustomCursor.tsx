'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Create reactive framer-motion values for instant smooth updates without re-renders.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Use springs to give the glow slightly trailing follow effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Show cursor when mounted and mouse moves
    const showCursor = () => setIsVisible(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // offset by half width to center 
      cursorY.set(e.clientY - 16); 
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', showCursor);
    
    // Hide when leaving 
    window.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget) setIsVisible(false);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', showCursor);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
     // Touch devices do not need a custom mouse cursor.
     return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
       {isVisible && (
         <>
             {/* Small center dot */}
             <motion.div 
               className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.2)]"
               style={{
                 x: cursorXSpring,
                 y: cursorYSpring,
               }}
             >
                <div className="w-1 h-1 bg-white rounded-full pointer-events-none shadow-[0_0_10px_white]" />
             </motion.div>
         </>
       )}
    </div>
  );
}
