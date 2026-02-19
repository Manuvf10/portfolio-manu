import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "YouWish",
    subtitle: "Ecommerce de moda",
    description: "Rediseño orientado a conversión que mejoró la claridad de catálogo y el flujo de compra en móvil.",
    image: "/proyectos/youwish.png",
    link: "https://www.youwish.cat",
    impact: "+32% tiempo en página",
  },
  {
    name: "Quattro Islands",
    subtitle: "Inmobiliaria de alto valor",
    description: "Landing premium para captar leads cualificados con storytelling visual y llamadas a la acción estratégicas.",
    image: "/proyectos/quattroislands.png",
    link: "https://quattro-islands.vercel.app",
    impact: "+41% formularios completados",
  },
  {
    name: "Diadica",
    subtitle: "Plataforma educativa",
    description: "Interfaz intuitiva con enfoque en usabilidad y escalabilidad para acompañar crecimiento de usuarios.",
    image: "/proyectos/diadica.png",
    link: "https://www.diadica.com",
    impact: "UX renovada en 4 semanas",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#070b14] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">Casos de éxito</p>
            <h2 className="text-4xl font-bold sm:text-5xl">Proyectos diseñados para generar negocio.</h2>
            <p className="mt-4 text-lg text-slate-300">Resultados reales en sectores distintos: ecommerce, inmobiliaria y educación digital.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-lime-300 hover:text-lime-200">
            Quiero resultados así <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.a
              key={proj.name}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-lime-300/60"
            >
              <div className="h-52 bg-cover bg-center transition duration-300 group-hover:scale-105" style={{ backgroundImage: `url(${proj.image})` }} />
              <div className="space-y-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-lime-300">{proj.impact}</p>
                <h3 className="text-2xl font-semibold group-hover:text-lime-300">{proj.name}</h3>
                <p className="text-sm text-slate-300">{proj.subtitle}</p>
                <p className="text-sm leading-relaxed text-slate-400">{proj.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
