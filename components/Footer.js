import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Info y legal */}
        <div>
          <h3 className="text-white text-lg font-bold">Manu Vera</h3>
          <p className="text-sm">Desarrollador Full‑Stack</p>
          <p className="text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Navegación interna */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Navegación</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#services" className="hover:text-lime-400">Servicios</a></li>
            <li><a href="#projects" className="hover:text-lime-400">Proyectos</a></li>
            <li><a href="#presupuesto" className="hover:text-lime-400">Presupuesto</a></li>
            <li><a href="#contact" className="hover:text-lime-400">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Redes</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/Manuvf10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manuel-vera-fidalgo-94a073232/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
