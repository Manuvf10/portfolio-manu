import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "YouWish",
    subtitle: "Ecommerce de moda",
    description:
      "Tienda online con Shopify. Visual minimalista, responsive, optimizada para UX y SEO. Tecnologías: Shopify, Liquid, UX Design, SEO técnico.",
    link: "https://www.youwish.cat",
  },
  {
    name: "Diadica",
    subtitle: "Software en Desarrollo",
    description:
      "App en desarrollo con React y Supabase. Registro de usuarios, base de datos en tiempo real y sistema de progreso. Tecnologías: React, Supabase, Tailwind, Auth.",
    link: "https://www.diadica.com",
  },
  {
    name: "WeRun",
    subtitle: "App para runners",
    description:
      "Aplicación social con rutas, entrenamientos y comunidad. Responsive total. Tecnologías: Next.js, Supabase, Mapbox, Tailwind.",
    link: "#",
  },
  {
    name: "Aholú",
    subtitle: "Landing Page",
    description:
      "Web para contacto de ahorro de energia. Diseño claro y velocidad de carga optimizada. Tecnologías: Next.js, i18n, Vercel, Tailwind.",
    link: "https://aholulanding.vercel.app",
  },
  {
    name: "Boxtar",
    subtitle: "SaaS logístico",
    description:
      "Dashboard para control logístico con visualización de datos en tiempo real. Tecnologías: React, Supabase, Zustand, Chart.js.",
    link: "#",
  },
  {
    name: "CulturaPop",
    subtitle: "Blog cultural",
    description:
      "Blog de noticias y cultura pop con CMS visual. Diseño editorial y SEO. Tecnologías: WordPress, Elementor, Yoast SEO.",
    link: "#",
  },
];

const cardColors = [
  "from-slate-100 to-slate-200",
  "from-rose-100 to-pink-200",
  "from-sky-100 to-blue-200",
  "from-amber-100 to-orange-200",
  "from-purple-100 to-indigo-200",
  "from-teal-100 to-emerald-200",
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleCardClick = (i) => {
    if (!isMobile) return;
    setActiveCardIndex(activeCardIndex === i ? null : i);
  };

  return (
    <section id="projects" className="py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Proyectos destacados</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-xl overflow-hidden shadow-md transition-all hover:-translate-y-1 bg-gradient-to-br ${cardColors[i % cardColors.length]} h-40`}
              onClick={() => handleCardClick(i)}
            >
              {/* Vista base: título + subtítulo */}
              <div className="flex flex-col justify-center items-center h-full z-10 relative px-4 transition-opacity duration-300 text-gray-800">
                <h3 className="text-xl font-bold">{proj.name}</h3>
                <p className="text-sm">{proj.subtitle}</p>
              </div>

              {/* Descripción en hover (desktop) */}
              {!isMobile && (
                <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 text-left text-sm z-20 text-gray-900">
                  <h4 className="text-teal-600 font-semibold mb-2">{proj.name}</h4>
                  <p>{proj.description}</p>
                </div>
              )}

              {/* Descripción al hacer clic en móvil */}
              {isMobile && activeCardIndex === i && (
                <div className="absolute inset-0 bg-white/90 p-5 flex flex-col justify-end text-sm z-20 text-gray-900">
                  <h4 className="text-teal-600 font-semibold">{proj.name}</h4>
                  <p>{proj.description}</p>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
