"use client";

import { useState } from 'react';

export default function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
      name: "David Kim",
      role: "Development Lead",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
    }
  ];

  return (
    <section id="team" className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold text-white text-center mb-4">Our Team</h2>
        <p className="text-xl md:text-2xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Meet the experts behind our success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4 group">
                <div className="absolute inset-0 bg-[#C1FF72] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
