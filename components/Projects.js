import { useState } from "react";
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
    name: "InnovaFit",
    subtitle: "Web corporativa",
    description:
      "Web adaptable y multiidioma para centro fitness. Diseño claro y velocidad de carga optimizada. Tecnologías: Next.js, i18n, Vercel, Tailwind.",
    link: "#",
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

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Proyectos destacados</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 h-48 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-center items-center text-white text-center relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(17,24,39,0.9), rgba(30,41,59,0.9))',
              }}
            >
              <h3 className="text-xl font-semibold mb-1">{proj.name}</h3>
              <p className="text-sm text-gray-300">{proj.subtitle}</p>
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-left text-sm text-gray-200 p-4 rounded-xl overflow-auto z-10">
                <h4 className="text-lime-400 font-bold mb-1">{proj.name}</h4>
                <p>{proj.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}