import React from 'react';

export default function About() {
  return (
    <main className="w-full min-h-screen bg-[#050505] text-white pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-8">
                ABOUT <span className="text-unicore-green">UNICORE</span>
            </h1>
            <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-light">
                <p>
                    Unicore TyreProtect was founded with a single mission: to completely eliminate the fear of flat tires across all terrains. We observed that conventional tyre sealants were either too thick to maintain balance at high speeds or too thin to seal multi-layer punctures efficiently.
                </p>
                <p>
                    After years of rigorous testing in extreme off-road and track conditions, our engineers developed a breakthrough Nano-Gel Formula—designed to react instantly to oxygen and create permanent, flexible plugs inside your tire casing in merely 0.5 seconds.
                </p>
                
                <h2 className="text-3xl font-bold text-white mt-12 mb-6">Our Commitment to Quality</h2>
                <p>
                    Every bottle of Unicore TyreProtect, whether it is our <strong>NextGen Tubeless</strong>, our classic <strong>Dazzler</strong> or the robust <strong>2-in-1 Premium Sealant</strong>, undergoes intensive quality assurance. Our sealants not only repair tires but also regulate internal temperatures on long journeys, substantially improving tire longevity.
                </p>
                
                <div className="mt-16 bg-black border border-white/10 p-8 rounded-2xl shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4 italic">"We don't just fix flats. We prevent them from stopping you."</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">— The Unicore Team</p>
                </div>
            </div>
        </div>
    </main>
  );
}
