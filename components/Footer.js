import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070d] py-14 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold text-white">mvf.studio</h3>
          <p className="mt-2 text-sm text-slate-400">Diseño web, desarrollo y estrategia digital para negocios que quieren crecer en serio.</p>
          <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} Manu Vera. Todos los derechos reservados.</p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-lime-300">Servicios</a></li>
            <li><a href="#projects" className="hover:text-lime-300">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-lime-300">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Conecta conmigo</h4>
          <div className="flex gap-4">
            <a href="https://github.com/Manuvf10" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-lime-300"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/manuel-vera-fidalgo-94a073232/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-lime-300"><FaLinkedin size={20} /></a>
            <a href="https://www.instagram.com/mvf.dev" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-lime-300"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
