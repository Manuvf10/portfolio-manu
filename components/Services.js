import { useState } from "react";
import { FaLaptopCode, FaStore, FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Landing Pages",
    icon: <FaRocket className="text-5xl text-white mb-4" />,
    summary: "Páginas enfocadas en campañas y conversiones.",
    description:
      "Diseñadas para captar leads o ventas con velocidad, claridad de mensaje y diseño impactante. Ideales para campañas de marketing o producto.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    includes: [
      "Diseño responsive",
      "SEO básico",
      "Formulario funcional",
      "Animaciones suaves",
    ],
    ideal: "Emprendedores, lanzamientos, campañas publicitarias",
  },
  {
    title: "Tiendas Online (Shopify & WordPress)",
    icon: <FaStore className="text-5xl text-white mb-4" />,
    summary: "Comercios digitales listos para vender.",
    description:
      "Tiendas potentes con catálogo, sistema de pagos, gestión interna y diseño profesional adaptado a marca.",
    tech: ["Shopify", "WordPress", "WooCommerce", "Liquid"],
    includes: [
      "Catálogo con filtros",
      "Carrito y checkout",
      "Integración de pagos",
      "Diseño de marca",
    ],
    ideal: "Marcas de ropa, ecommerce, negocios digitales",
  },
  {
    title: "Webs corporativas & Desarrollo a medida",
    icon: <FaLaptopCode className="text-5xl text-white mb-4" />,
    summary: "Sitios web serios con soluciones personalizadas.",
    description:
      "Desarrollo de soluciones a medida: páginas corporativas, intranets, apps SaaS, dashboards, CMS o APIs.",
    tech: ["React", "Next.js", "Supabase", "Node.js"],
    includes: [
      "Backend personalizado",
      "CMS editable",
      "Optimización avanzada",
      "Escalabilidad profesional",
    ],
    ideal: "Startups, empresas tecnológicas, B2B",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="services" className="py-28 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-white"
        >
          Servicios profesionales
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              onClick={() => toggle(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition border border-white/10 cursor-pointer transform hover:-translate-y-1 text-white"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-1 mt-2">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{service.summary}</p>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-sm text-left text-gray-200 mt-4 space-y-3 overflow-hidden"
                  >
                    <p>{service.description}</p>

                    <div>
                      <p className="font-medium text-white mb-1">Tecnologías:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((t, j) => (
                          <span
                            key={j}
                            className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-white mb-1">Incluye:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {service.includes.map((el, j) => (
                          <li key={j}>{el}</li>
                        ))}
                      </ul>
                    </div>

                    <p className="italic text-gray-300">Ideal para: {service.ideal}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}