'use client'

import { useEffect, useState } from 'react';
import { CircleUserRound, Code, Cpu, Database, Layout } from 'lucide-react';

export default function Hero() {
  const FloatingIcon = ({ Icon, className = '', delay = 0 }) => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
      const startAnimation = () => {
        let start;
        let animationFrameId;

        function animate(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const movement = Math.sin(progress / 1000) * 20;
          setPosition(movement);
          animationFrameId = requestAnimationFrame(animate);
        }

        setTimeout(() => {
          animationFrameId = requestAnimationFrame(animate);
        }, delay * 1000);

        return () => cancelAnimationFrame(animationFrameId);
      };

      const cleanup = startAnimation();
      return cleanup;
    }, [delay]);

    return (
      <div
        className={`transform transition-transform ${className}`}
        style={{ transform: `translateY(${position}px)` }}
      >
        <Icon className="w-12 h-12 text-[#C1FF72]" />
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* 3D Wireframe Mesh Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 810" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wireframe-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path 
                d="M0 0 L100 0 L100 100 L0 100 Z" 
                fill="none" 
                stroke="#C1FF72" 
                strokeWidth="0.5" 
                strokeOpacity="0.7"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wireframe-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center h-[calc(100vh-80px)] relative z-10">
        {/* Floating icons - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block">
          <FloatingIcon Icon={Code} className="absolute top-32 left-20" delay={0} />
          <FloatingIcon Icon={Layout} className="absolute top-40 right-32" delay={1} />
          <FloatingIcon Icon={Database} className="absolute bottom-40 left-32" delay={2} />
          <FloatingIcon Icon={Cpu} className="absolute bottom-32 right-24" delay={3} />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center max-w-4xl leading-tight mb-6">
          Transforming Ideas into
          <span className="text-[#C1FF72] block mt-4"> Digital Reality</span>
        </h1>
        
        <p className="text-gray-300 text-xl md:text-2xl mt-8 text-center max-w-2xl px-4 leading-relaxed">
          We craft innovative digital solutions that empower businesses to thrive in the modern world.
          Your vision, our expertise – together we create exceptional digital experiences.
        </p>

        <div className="mt-16 relative w-full max-w-[24rem]">
          <div className="w-full h-48 bg-gradient-to-b from-[#C1FF72] to-black rounded-t-full relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl font-medium">Designer | Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
