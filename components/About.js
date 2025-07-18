import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen tuya */}
        <motion.img
          src="/tu-foto.jpg"
          alt="Manu Vera"
          className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Soy <strong>Manu Vera</strong>, desarrollador web full-stack con enfoque en resultados reales.
            Combino diseño visual atractivo con código optimizado para crear sitios que no solo se ven bien, sino que funcionan y transmiten.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            He trabajado con tiendas, startups y negocios locales, aplicando tecnologías como React, Next.js, Tailwind, Shopify y WordPress. Me enfoco en soluciones claras, rápidas y adaptadas a cada cliente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
