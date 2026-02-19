import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", text: "Servicios" },
  { href: "#projects", text: "Proyectos" },
  { href: "#contact", text: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#070b14]/85 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight text-white">
          mvf<span className="text-lime-300">.studio</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <a href="#contact" className="rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-lime-200">
            Empezar proyecto
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white md:hidden" aria-label="Toggle menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#070b14]/95 text-white backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <NavLinkMobile key={link.href} {...link} onClick={() => setMenuOpen(false)} />
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-full bg-lime-300 px-7 py-3 font-semibold text-slate-900">
            Empezar proyecto
          </a>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, text }) {
  return (
    <a href={href} className="text-sm font-medium text-slate-200 transition hover:text-lime-300">
      {text}
    </a>
  );
}

function NavLinkMobile({ href, text, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-2xl font-semibold hover:text-lime-300">
      {text}
    </a>
  );
}
