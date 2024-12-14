import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl w-full mb-12">
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
          <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C1FF72] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C1FF72] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C1FF72] transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#C1FF72] text-black font-semibold py-3 rounded-lg hover:bg-[#9FE952] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-900/30 p-8 rounded-2xl border border-gray-800 space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#C1FF72]/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-[#C1FF72]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email Us</h4>
                <p className="text-gray-400">contact@astex.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#C1FF72]/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-[#C1FF72]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Call Us</h4>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#C1FF72]/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-[#C1FF72]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                <p className="text-gray-400">123 Tech Street<br />Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
