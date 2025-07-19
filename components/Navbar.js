import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 shadow backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-gray-900">
          ManuVera<span className="text-lime-500">.</span>
        </a>

        {/* Desktop menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#services" className="text-gray-700 hover:text-lime-500 transition">
            Servicios
          </a>
          <a href="#projects" className="text-gray-700 hover:text-lime-500 transition">
            Proyectos
          </a>
          <a href="#contact" className="text-gray-700 hover:text-lime-500 transition">
            Contacto
          </a>
        </div>

        {/* Mobile toggle button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm px-6 pt-4 pb-6 space-y-4 text-center shadow-md">
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 text-lg font-medium hover:text-lime-500"
          >
            Servicios
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 text-lg font-medium hover:text-lime-500"
          >
            Proyectos
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-800 text-lg font-medium hover:text-lime-500"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
