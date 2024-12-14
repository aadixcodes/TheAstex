import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-black py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto relative">
        {/* 3D Wireframe Mesh Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 810" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wireframe-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path 
                  d="M0 0 L40 0 L40 40 L0 40 Z" 
                  fill="none" 
                  stroke="#C1FF72" 
                  strokeWidth="1" 
                  strokeOpacity="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wireframe-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 md:mb-0 leading-tight">
              Crafting Digital Excellence
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              At Astex, we blend creativity with technical expertise to deliver cutting-edge solutions 
              that drive business growth. Our team of passionate developers and designers work 
              tirelessly to transform your vision into reality, ensuring every project exceeds 
              expectations and sets new standards in digital excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-8 mt-16">
          {/* Left vertical images */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <Image
              src="/assets/1.avif"
              alt="Team collaboration"
              className="rounded-2xl object-cover h-[300px] md:h-[400px] w-full"
              width={600}
              height={900}
            />
            <Image
              src="/assets/2.avif"
              alt="Team meeting"
              className="rounded-2xl object-cover h-[300px] md:h-[400px] w-full"
              width={600}
              height={900}
            />
          </div>

          {/* Center landscape image */}
          <div className="lg:col-span-6 flex items-center">
            <Image
              src="/assets/3.avif"
              alt="Modern office space"
              className="rounded-2xl object-cover h-[600px] w-full"
              width={1200}
              height={600}
            />
          </div>

          {/* Right vertical images */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <Image
              src="/assets/4.avif"
              alt="Design process"
              className="rounded-2xl object-cover h-[300px] md:h-[400px] w-full"
              width={600}
              height={900}
            />
            <Image
              src="/assets/5.avif"
              alt="Creative workspace"
              className="rounded-2xl object-cover h-[300px] md:h-[400px] w-full"
              width={600}
              height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
