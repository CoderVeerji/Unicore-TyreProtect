import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="w-full min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-8">
                PRIVACY POLICY
            </h1>
            <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>Last updated: March 13, 2026</p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
                <p>Our website primarily collects personal data when you interact with us via our contact forms. This may include your name, email address, phone number, and inquiry details.</p>
                
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Information</h2>
                <p>We use the information we collect to communicate with you about your inquiries, orders, and to provide customer support.</p>

                <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
                <p>We prioritize your privacy and take all necessary technical precautions to protect the personal information submitted through our website.</p>
            </div>
        </div>
    </main>
  );
}
