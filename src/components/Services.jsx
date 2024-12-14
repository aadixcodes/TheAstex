import React from 'react';
import { Code2, Palette, Globe2, Smartphone, Database, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies for optimal performance and scalability."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces that deliver exceptional user experiences."
    },
    {
      icon: Globe2,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies to help your business thrive in the digital landscape."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that engage users on any device."
    },
    {
      icon: Database,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and solutions for modern business needs."
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Results-driven digital marketing strategies to boost your online presence."
    }
  ];

  return (
    <section id="services" className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold text-white text-center mb-4">Our Services</h2>
        <p className="text-gray-400 text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto">
          Comprehensive digital solutions tailored to your unique business needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-black border border-gray-800 rounded-xl p-6 hover:border-[#C1FF72] transition-colors group">
              <service.icon className="w-12 h-12 text-[#C1FF72] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
