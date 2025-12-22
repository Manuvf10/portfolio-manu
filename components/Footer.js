import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400 py-16 mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Info principal */}
        <div>
          <h3 className="text-white text-xl font-bold">mvf.dev</h3>
          <p className="text-sm">Desarrollador web & soluciones digitales</p>
          <p className="text-xs text-gray-500 mt-3">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Navegación interna */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-base tracking-wide">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-lime-400 transition">Servicios</a></li>
            <li><a href="#projects" className="hover:text-lime-400 transition">Proyectos</a></li>
            <li><a href="#presupuesto" className="hover:text-lime-400 transition">Presupuesto</a></li>
            <li><a href="#contact" className="hover:text-lime-400 transition">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-white font-semibold mb-3 text-base tracking-wide">Conecta conmigo</h4>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="https://github.com/Manuvf10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-lime-400 transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manuel-vera-fidalgo-94a073232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-lime-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/mvf.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-lime-400 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
