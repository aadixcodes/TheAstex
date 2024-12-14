import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Working with Astex has been transformative for our business. Their expertise and dedication are unmatched.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Marketing Director, InnovateCo",
      content: "The team at Astex delivered beyond our expectations. Their attention to detail and creativity is impressive.",
      rating: 5
    },
    {
      name: "Mark Johnson",
      role: "Founder, StartupX",
      content: "Exceptional service and outstanding results. Astex helped us achieve our digital transformation goals.",
      rating: 5
    }
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold text-white text-center mb-4">
          Client Testimonials
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          What our clients say about working with us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C1FF72] fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
