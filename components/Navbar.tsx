import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5 text-white">
      <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
        UNICORE <span className="text-[#39FF14] text-lg mt-1 font-sans">TYREPROTECT</span>
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-white transition-colors">ABOUT US</Link>
        <Link href="#contact" className="hover:text-white transition-colors">CONTACT</Link>
      </div>
      
      <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-bold tracking-widest">
        ORDER NOW
      </button>
    </nav>
  );
}
