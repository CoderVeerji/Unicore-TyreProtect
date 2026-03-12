import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#0a0a0a] pt-16 pb-6 text-white text-sm font-sans mt-24">
      {/* Wavy Terrain / Sealant Top Border */}
      <svg className="absolute top-0 left-0 w-full h-20 md:h-32 -translate-y-[99%] text-[#0a0a0a] fill-current" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
         <path d="M0,160L40,170.7C80,181,160,203,240,192C320,181,400,139,480,128C560,117,640,139,720,154.7C800,171,880,181,960,170.7C1040,160,1120,128,1200,106.7C1280,85,1360,75,1400,69.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-16 md:gap-8 pb-16">
        
        {/* Left Column - Navigation */}
        <div className="flex flex-col gap-3 w-full md:w-1/4">
          <Link href="/about" className="text-gray-300 font-bold hover:text-unicore-green transition-colors">About Us</Link>
          <Link href="/products" className="text-gray-300 font-bold hover:text-unicore-green transition-colors">Products</Link>
          <Link href="#contact" className="text-gray-300 font-bold hover:text-unicore-green transition-colors">Contact</Link>
          <Link href="/faq" className="text-gray-300 font-bold hover:text-unicore-green transition-colors">FAQ</Link>
          <Link href="/dealers" className="text-gray-300 font-bold hover:text-unicore-green transition-colors">Become a Dealer</Link>
          
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-unicore-green hover:text-unicore-green transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.832 9.832 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63A9.936 9.936 0 0024 4.557z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-unicore-green hover:text-unicore-green transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        {/* Vertical Divider (Desktop only) */}
        <div className="hidden md:block w-px bg-white/10" />

        {/* Middle Column - Newsletter */}
        <div className="w-full md:w-2/4 flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-sans text-white mb-2">Get Updates</h3>
          <p className="text-gray-400 italic mb-8">Subscribe to our newsletter to receive updates and special announcements.</p>
          
          <form className="w-full max-w-sm flex flex-col gap-3">
             <input type="email" placeholder="*Email" className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none focus:border-unicore-green transition-colors" />
             <div className="flex gap-3">
               <input type="text" placeholder="*First Name" className="bg-transparent border border-gray-600 rounded px-4 py-2 w-full text-white focus:outline-none focus:border-unicore-green transition-colors" />
               <button className="bg-white text-black font-bold uppercase tracking-wider px-6 py-2 rounded hover:bg-gray-200 transition-colors whitespace-nowrap">
                  Sign Up
               </button>
             </div>
          </form>
        </div>

        {/* Vertical Divider (Desktop only) */}
        <div className="hidden md:block w-px bg-white/10" />

        {/* Right Column - Contact Info */}
        <div className="w-full md:w-1/4 flex flex-col items-end text-right">
           <Link href="#contact" className="hover:text-unicore-green transition-colors flex items-center gap-2 group mb-6">
              <span className="font-bold">Send Us A Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
           </Link>

           <p className="text-gray-300 font-medium">+1 (845)-356-1234</p>
           <p className="text-gray-400 mt-4 leading-relaxed max-w-[200px]">
              285 Hungry Hallow Road<br/>
              Chestnut Ridge, NY 10977
           </p>

           <div className="mt-8 font-bold text-xl tracking-tighter text-white">
              UNICORE <span className="text-unicore-green text-sm">PRO</span>
           </div>
        </div>

      </div>

      {/* Bottom Legal Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-6 mt-4">
        <p>© 2026 UNICORE TYREPROTECT. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <span className="opacity-50">Website By Unicore Technologies</span>
        </div>
      </div>
    </footer>
  );
}
