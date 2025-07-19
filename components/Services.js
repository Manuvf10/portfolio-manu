import { useState } from "react";
import { FaLaptopCode, FaStore, FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Landing Pages",
    icon: <FaRocket className="text-5xl text-lime-400 mb-4" />,
    summary: "Convierte visitas en clientes con una web enfocada a resultados.",
    description:
      "Diseñadas para lanzar campañas, validar ideas o captar leads. Son rápidas, directas, responsive y optimizadas para marketing digital.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Vercel"],
    includes: [
      "Diseño responsive y visual",
      "SEO técnico básico",
      "Formulario funcional integrado",
      "Animaciones profesionales",
    ],
    ideal: "Emprendedores, lanzamientos, campañas publicitarias",
    price: "Desde 300€",
  },
  {
    title: "Tiendas Online",
    icon: <FaStore className="text-5xl text-lime-400 mb-4" />,
    summary: "Ecommerce profesional listo para vender desde el día 1.",
    description:
      "Creamos tu tienda online con pasarela de pago, catálogo, sistema de gestión y diseño que representa tu marca. Ideal para crecer online.",
    tech: ["Shopify", "WooCommerce", "WordPress", "Liquid"],
    includes: [
      "Diseño adaptado a tu branding",
      "Checkout, carrito e inventario",
      "Integración con métodos de pago",
      "Optimización para móvil y SEO",
    ],
    ideal: "Negocios digitales, marcas de ropa, ecommerce en expansión",
    price: "Desde 700€",
  },
  {
    title: "Desarrollo a Medida",
    icon: <FaLaptopCode className="text-5xl text-lime-400 mb-4" />,
    summary: "Webs corporativas, apps o dashboards hechos a medida.",
    description:
      "Soluciones web completas y escalables: desde una web de empresa hasta apps SaaS, CMS, APIs o paneles con base de datos. Totalmente personalizable.",
    tech: ["React", "Next.js", "Supabase", "Node.js", "Zustand"],
    includes: [
      "Frontend y backend integrados",
      "CMS editable y paneles de control",
      "SEO + rendimiento optimizado",
      "Escalabilidad profesional",
    ],
    ideal: "Startups, empresas tecnológicas, B2B, SaaS",
    price: "Desde 1500€",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

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
                    className="text-sm text-left text-gray-200 mt-4 space-y-4 overflow-hidden"
                  >
                    <p>{service.description}</p>

                    <div>
                      <p className="font-semibold text-white">Tecnologías:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
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
                      <p className="font-semibold text-white mt-2">Incluye:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {service.includes.map((el, j) => (
                          <li key={j}>{el}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-sm italic text-gray-300">
                      Ideal para: {service.ideal}
                    </div>

                    <div className="mt-2 font-bold text-lime-400">{service.price}</div>
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
