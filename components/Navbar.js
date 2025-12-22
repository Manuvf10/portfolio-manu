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
        scrolled ? "bg-white/70 shadow backdrop-blur-md border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className={`text-2xl font-mono font-bold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          mvf<span className="text-lime-500">.dev</span>
        </a>



        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#services" text="Servicios" />
          <NavLink href="#projects" text="Proyectos" />
          <NavLink href="#contact" text="Contacto" />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 hover:text-lime-500 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/90 backdrop-blur flex flex-col items-center justify-center space-y-8 z-40 transition-all">
          <NavLinkMobile href="#services" text="Servicios" onClick={toggleMenu} />
          <NavLinkMobile href="#projects" text="Proyectos" onClick={toggleMenu} />
          <NavLinkMobile href="#contact" text="Contacto" onClick={toggleMenu} />
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, text }) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-lime-500 text-sm font-medium transition"
    >
      {text}
    </a>
  );
}

function NavLinkMobile({ href, text, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-900 text-xl font-semibold hover:text-lime-500 transition"
    >
      {text}
    </a>
  );
}
