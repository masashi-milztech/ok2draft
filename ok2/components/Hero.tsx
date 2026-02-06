import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative h-screen w-full flex flex-col justify-center items-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
         {/* Abstract background pattern */}
         <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full border border-black opacity-20 animate-[spin_60s_linear_infinite]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full border border-black opacity-20 animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        {/* Logo - Updated to font-logo (Montserrat) for round O */}
        <h1 className="text-6xl md:text-8xl font-bold font-logo tracking-tighter text-ok-black mb-6 leading-tight">
          OK<span className="text-3xl md:text-5xl font-bold font-logo ml-1 relative -top-6 md:-top-10">2</span><span className="ml-2 text-5xl md:text-7xl font-bold font-logo">inc.</span>
        </h1>
        {/* Subtitle - Light and clean */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-xl font-normal tracking-widest text-gray-600 uppercase mt-4">
          <span>Consulting</span>
          <span className="hidden md:inline text-gray-300">/</span>
          <span>Planning</span>
          <span className="hidden md:inline text-gray-300">/</span>
          <span>Connecting</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <a href="#philosophy" aria-label="Scroll down">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};
