import { motion } from "framer-motion";

const projects = [
  {
    name: "YouWish",
    subtitle: "Ecommerce de moda",
    description: "Tienda online visual, minimalista y optimizada para vender. Shopify + UX + SEO.",
    image: "/proyectos/youwish.png",
    link: "https://www.youwish.cat",
  },
  {
    name: "Quattro Islands",
    subtitle: "Landing de Inmobiliaria",
    description: "Web de marca con fuerte presencia visual y diseño personalizado.",
    image: "/proyectos/quattroislands.png",
    link: "https://quattro-islands.vercel.app",
  },
  {
    name: "Diadica",
    subtitle: "Plataforma educativa",
    description: "App web con funcionalidades educativas y seguimiento de usuarios.",
    image: "/proyectos/diadica.png",
    link: "https://www.diadica.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-section bg-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16"
        >
          Proyectos destacados
        </motion.h2>

        {/* TARJETAS */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-lime-400 hover:shadow-xl transition-all duration-300"
            >
              {/* Imagen */}
              <div
                className="h-48 w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${proj.image})` }}
              />

              {/* Contenido */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-lime-400 transition">
                  {proj.name}
                </h3>
                <p className="text-sm text-gray-400">{proj.subtitle}</p>
                <p className="text-sm text-gray-500 mt-2">{proj.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
