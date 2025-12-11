import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        linksRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  // Helper to add links to ref array
  const addToLinksRef = (el: any) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  // Reset refs on re-render to avoid duplicates/stale refs if items change (simple version)
  linksRef.current = [];

  return (
    <div className="bg-glass fixed z-50 w-full min-h-18 lg:min-h-24 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 min-h-inherit flex items-center justify-between">
        {/* LOGO */}
        <p className="text-3xl text-cafe-50 font-satisfy relative z-50">Brunch & Co</p>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-8 text-xl font-medium text-white/90">
          <a href="#" className="hover:text-cafe-400 transition-colors">Home</a>
          <a href="#" className="hover:text-cafe-400 transition-colors">About</a>
          <a href="#" className="hover:text-cafe-400 transition-colors">Menu</a>
          <a href="#" className="hover:text-cafe-400 transition-colors">Contact</a>
        </nav>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none relative z-50 p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div
          ref={menuRef}
          className="fixed inset-0 min-h-dvh bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center translate-x-full md:hidden"
        >
          <nav className="flex flex-col space-y-8 text-center text-3xl font-serif text-cafe-50">
            {["Home", "About", "Menu", "Contact"].map((item, index) => (
              <a
                key={index}
                href="#"
                ref={addToLinksRef} // Using callback ref
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-cafe-400 transition-colors block"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Decorative element for mobile menu */}
          <div className="absolute bottom-10 left-0 w-full text-center text-cafe-100 text-sm font-light">
            &copy; 2025 Urban Brunch
          </div>
        </div>
      </div>
    </div>
  );
}
