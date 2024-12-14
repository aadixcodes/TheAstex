const Footer = () => {
    return (
      <footer className="bg-[#0B0F0C] text-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold">flowtrix</h2>
            <p className="text-lg font-medium mt-4">Got a project in mind?</p>
            <p className="text-3xl font-bold mt-1">Book a call with us</p>
            <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-medium flex items-center hover:bg-gray-200">
              Book a call <span className="ml-2">→</span>
            </button>
          </div>
  
          {/* Middle Section */}
          <div className="flex flex-col md:flex-row gap-12">
            <div>
              <h4 className="font-bold mb-4">Important</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Our Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Social Icons */}
          <div className="mt-8 md:mt-0">
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white rounded-full p-2 hover:bg-gray-300 text-black"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-2 hover:bg-gray-300 text-black"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-2 hover:bg-gray-300 text-black"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-12 text-gray-400 text-sm text-center md:text-left">
          Copyright © 2024 - All rights reserved
        </div>
      </footer>
    );
  };
  
  export default Footer;
  