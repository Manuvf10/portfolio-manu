import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* Nav links */}
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
      </div>
    </nav>
  );
}
