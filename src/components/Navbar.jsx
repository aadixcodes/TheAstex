// 'use client';

// import { Code2, Menu, X } from 'lucide-react';
// import { useState } from 'react';

// export default function Navbar({ onPageChange, currentPage }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleNavClick = (page) => {
//     onPageChange(page);
//     setIsMenuOpen(false);
//   };

//   const NavLink = ({ active, onClick, children }) => {
//     return (
//       <button
//         onClick={onClick}
//         className={`
//           text-sm md:text-base font-medium transition-colors
//           ${active 
//             ? 'text-[#C1FF72]' 
//             : 'text-gray-300 hover:text-[#C1FF72]'
//           }
//         `}
//       >
//         {children}
//       </button>
//     );
//   };

//   return (
//     <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 px-4 sm:px-6 py-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div 
//           className="flex items-center gap-2 cursor-pointer" 
//           onClick={() => handleNavClick('home')}
//         >
//           <img src='/assets/AstexLogo.svg' className="w-9 h-9 text-[#C1FF72]" alt="Astex Logo" />
//           <span className="text-white text-3xl font-bold">Astex</span>
//         </div>
        
//         <button 
//           className="lg:hidden text-white"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         <div className="hidden lg:flex items-center">
//           <div className="flex items-center gap-8 px-8 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
//             <NavLink 
//               active={currentPage === 'about'}
//               onClick={() => handleNavClick('about')}
//             >
//               About Us
//             </NavLink>
//             <NavLink 
//               active={currentPage === 'services'}
//               onClick={() => handleNavClick('services')}
//             >
//               Services
//             </NavLink>
//             <NavLink 
//               active={currentPage === 'pricing'}
//               onClick={() => handleNavClick('pricing')}
//             >
//               Pricing
//             </NavLink>
//             <NavLink 
//               active={currentPage === 'portfolio'}
//               onClick={() => handleNavClick('portfolio')}
//             >
//               Portfolio
//             </NavLink>
//           </div>
//         </div>

//         <button 
//           onClick={() => handleNavClick('contact')}
//           className="hidden lg:block px-4 py-2 bg-[#C1FF72] text-black font-semibold rounded-lg hover:bg-[#9FE952] transition-colors"
//         >
//           Contact Us
//         </button>

//         {isMenuOpen && (
//           <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg lg:hidden p-4 border-t border-white/10">
//             <div className="flex flex-col space-y-4">
//               <NavLink 
//                 active={currentPage === 'about'}
//                 onClick={() => handleNavClick('about')}
//               >
//                 About Us
//               </NavLink>
//               <NavLink 
//                 active={currentPage === 'services'}
//                 onClick={() => handleNavClick('services')}
//               >
//                 Services
//               </NavLink>
//               <NavLink 
//                 active={currentPage === 'pricing'}
//                 onClick={() => handleNavClick('pricing')}
//               >
//                 Pricing
//               </NavLink>
//               <NavLink 
//                 active={currentPage === 'portfolio'}
//                 onClick={() => handleNavClick('portfolio')}
//               >
//                 Portfolio
//               </NavLink>
//               <button 
//                 onClick={() => handleNavClick('contact')}
//                 className="px-4 py-2 bg-[#C1FF72] text-black font-semibold rounded-lg hover:bg-[#9FE952] transition-colors w-full"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }



// 'use client';
// import { Code2, Menu, X } from 'lucide-react';
// import { useState } from 'react';

// export default function Navbar({ currentPage, setCurrentPage }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleNavClick = (page) => {
//     setCurrentPage(page);  // Update the current page in the parent component
//     setIsMenuOpen(false);   // Close the mobile menu
//   };

//   const NavLink = ({ active, onClick, children, href }) => {
//     return (
//       <a
//         href={href}
//         onClick={(e) => {
//           e.preventDefault(); // Prevent the default anchor behavior
//           onClick();
//         }}
//         className={`text-sm md:text-base font-medium transition-colors
//           ${active ? 'text-[#C1FF72]' : 'text-gray-300 hover:text-[#C1FF72]'}
//         `}
//       >
//         {children}
//       </a>
//     );
//   };

//   return (
//     <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 px-4 sm:px-6 py-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div 
//           className="flex items-center gap-2 cursor-pointer" 
//           onClick={() => handleNavClick('home')}
//         >
//           <img src='/assets/AstexLogo.svg' className="w-9 h-9 text-[#C1FF72]" alt="Astex Logo" />
//           <span className="text-white text-3xl font-bold">Astex</span>
//         </div>
        
//         <button 
//           className="lg:hidden text-white"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         <div className="hidden lg:flex items-center">
//           <div className="flex items-center gap-8 px-8 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
//             <NavLink 
//               active={currentPage === 'about'}
//               onClick={() => handleNavClick('about')}
//               href="#about"
//             >
//               About Us
//             </NavLink>
//             <NavLink 
//               active={currentPage === 'services'}
//               onClick={() => handleNavClick('services')}
//               href="#services"
//             >
//               Services
//             </NavLink>
//             <NavLink 
//               active={currentPage === 'pricing'}
//               onClick={() => handleNavClick('pricing')}
//               href="/pricing"
//             >
//               Pricing
//             </NavLink>
//             <NavLink 
//               active={currentPage === 'portfolio'}
//               onClick={() => handleNavClick('portfolio')}
//               href="#portfolio"
//             >
//               Portfolio
//             </NavLink>
//           </div>
//         </div>

//         <button 
//           onClick={() => handleNavClick('contact')}
//           className="hidden lg:block px-4 py-2 bg-[#C1FF72] text-black font-semibold rounded-lg hover:bg-[#9FE952] transition-colors"
//         >
//           Contact Us
//         </button>

//         {isMenuOpen && (
//           <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg lg:hidden p-4 border-t border-white/10">
//             <div className="flex flex-col space-y-4">
//               <NavLink 
//                 active={currentPage === 'about'}
//                 onClick={() => handleNavClick('about')}
//                 href="#about"
//               >
//                 About Us
//               </NavLink>
//               <NavLink 
//                 active={currentPage === 'services'}
//                 onClick={() => handleNavClick('services')}
//                 href="#services"
//               >
//                 Services
//               </NavLink>
//               <NavLink 
//                 active={currentPage === 'pricing'}
//                 onClick={() => handleNavClick('pricing')}
//                 href="/pricing"
//               >
//                 Pricing
//               </NavLink>
//               <NavLink 
//                 active={currentPage === 'portfolio'}
//                 onClick={() => handleNavClick('portfolio')}
//                 href="#portfolio"
//               >
//                 Portfolio
//               </NavLink>
//               <button 
//                 onClick={() => handleNavClick('contact')}
//                 className="px-4 py-2 bg-[#C1FF72] text-black font-semibold rounded-lg hover:bg-[#9FE952] transition-colors w-full"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }


'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, children }) => {
    const isActive = pathname === href;

    return (
      <Link 
        href={href} 
        className={`
          text-sm md:text-base font-medium transition-colors
          ${isActive 
            ? 'text-[#C1FF72]' 
            : 'text-gray-300 hover:text-[#C1FF72]'
          }
        `}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src='/assets/AstexLogo.svg' className="w-9 h-9 text-[#C1FF72]" alt="Astex Logo" />
          <span className="text-white text-3xl font-bold">Astex</span>
        </Link>
        
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-8 px-8 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <NavLink href="/aboutus">About Us</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/portfolios">Portfolio</NavLink>
          </div>
        </div>

        <Link 
          href="/contact"
          className="hidden lg:block px-4 py-2 bg-[#C1FF72] text-black font-semibold rounded-lg hover:bg-[#9FE952] transition-colors"
        >
          Contact Us
        </Link>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg lg:hidden p-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <NavLink href="/aboutus">About Us</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/portfolios">Portfolio</NavLink>
              
              <Link 
                href="/contact"
                className="px-4 py-2 bg-[#C1FF72] text-black font-semibold rounded-lg hover:bg-[#9FE952] transition-colors w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}