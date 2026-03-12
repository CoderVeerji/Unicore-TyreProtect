'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
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
             <motion.div 
               className="fixed top-0 left-0 w-8 h-8 rounded-full border flex items-center justify-center backdrop-blur-sm transition-colors duration-200"
               style={{
                 x: cursorXSpring,
                 y: cursorYSpring,
                 borderColor: isHovering ? '#39FF14' : 'rgba(255,255,255,0.3)',
                 backgroundColor: isHovering ? 'rgba(57,255,20,0.1)' : 'transparent',
                 boxShadow: isHovering ? '0 0 20px rgba(57,255,20,0.4)' : '0 0 10px rgba(255,255,255,0.2)'
               }}
               animate={{
                 scale: isHovering ? 1.5 : 1,
               }}
               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
             >
                <motion.div 
                   className="w-1 h-1 rounded-full pointer-events-none transition-colors duration-200" 
                   style={{
                      backgroundColor: isHovering ? '#39FF14' : 'white',
                      boxShadow: isHovering ? '0 0 10px #39FF14' : '0 0 10px white'
                   }}
                   animate={{
                      scale: isHovering ? 0 : 1,
                      opacity: isHovering ? 0 : 1
                   }}
                />
             </motion.div>
         </>
       )}
    </div>
  );
}
