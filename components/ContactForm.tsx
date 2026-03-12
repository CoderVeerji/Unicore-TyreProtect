'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="w-full bg-[#050505] text-white py-24 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight"
          >
            GET IN TOUCH
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to experience the future of tyre protection? Contact our team for distribution, partnerships, or personal use.
          </p>
        </div>

        <motion.form 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#111] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400 ml-2 border-l-2 border-unicore-green pl-2">First Name</label>
              <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-unicore-green transition-colors text-white" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-400 ml-2 border-l-2 border-blue-400 pl-2">Email Address</label>
              <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-blue-400 transition-colors text-white" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-400 ml-2 border-l-2 border-purple-400 pl-2">Subject</label>
            <select className="w-full bg-black/50 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-purple-400 transition-colors text-white appearance-none">
              <option>General Inquiry</option>
              <option>Partnership</option>
              <option>Bulk Order</option>
              <option>Support</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-400 ml-2 border-l-2 border-pink-400 pl-2">Message</label>
            <textarea className="w-full bg-black/50 border border-white/10 rounded-xl p-4 h-32 focus:outline-none focus:border-pink-400 transition-colors text-white resize-none" placeholder="How can we help you?"></textarea>
          </div>

          <button type="button" className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            SEND MESSAGE
          </button>
        </motion.form>
      </div>
    </section>
  );
}
