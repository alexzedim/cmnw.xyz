'use client';

import { useState } from 'react';
import { Welcome } from "@/components/ui/welcome";
import { CMNW } from "@/components/ui/cmnw";
import { galleries } from "@/data/galleries";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-rose-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-rose-200/20 to-amber-200/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Section */}
        <header className="pt-12 pb-6 px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Welcome />
            <CMNW />
          </div>
        </header>

        {/* Cards Section */}
        <main className="flex-1 px-8 pb-12">
          <div className="max-w-full mx-auto h-[600px]">
            <div className="flex h-full gap-2 group">
                {galleries.map((gallery) => (
                  <div
                    key={gallery.id}
                    className="relative cursor-pointer flex-1 transition-all duration-700 ease-out hover:flex-[8] overflow-hidden rounded-2xl"
                    onMouseEnter={() => setHoveredCard(gallery.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => handleCardClick(gallery.url)}
                  >
                    {/* Image Background */}
                    <div className="absolute inset-0">
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={gallery.image}
                          alt={gallery.title}
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-slate-900/60 transition-all duration-700" />
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center p-6">
                      {/* Collapsed State - Vertical Text */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${hoveredCard === gallery.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <h1 className="text-white font-bold text-lg writing-mode-vertical transform -rotate-90 whitespace-nowrap tracking-wider">
                          {gallery.title}
                        </h1>
                      </div>

                      {/* Expanded State - Horizontal Text */}
                      <div className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-all duration-700 ${hoveredCard === gallery.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 max-w-md">
                          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            {gallery.title}
                          </h1>
                          <div className="w-16 h-1 bg-blue-400 mx-auto rounded-full opacity-80" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 via-rose-500/20 to-blue-500/20 rounded-2xl transition-opacity duration-700 -z-10 blur-xl ${hoveredCard === gallery.id ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                ))}
            </div>
          </div>
        </main>

      </div>

      <style jsx global>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
