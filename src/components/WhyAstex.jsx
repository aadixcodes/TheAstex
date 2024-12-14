import React from 'react';
import { CheckCircle2, Code2, Palette, Globe2, Smartphone, Database, Megaphone } from 'lucide-react';

const WhyAstex = () => {

  const features = [
    {
      title: "Expert Team",
      description: "Our team consists of industry veterans with decades of combined experience."
    },
    {
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies to deliver modern solutions."
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered 100+ projects for clients worldwide."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your business runs smoothly."
    }
  ];

  return (
    <>
      <section id="why-us" className="bg-black py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">Why Choose Astex?</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with creative innovation to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gray-900/50">
                <CheckCircle2 className="w-6 h-6 text-[#C1FF72] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyAstex;
