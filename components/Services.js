import { motion } from "framer-motion";
import { MonitorSmartphone, FileText, Smartphone } from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Webs que venden",
    desc: "Creamos sitios rápidos, visuales y pensados para captar clientes desde Google, redes o campañas. Cada proyecto se adapta a tu negocio.",
  },
  {
    icon: <FileText size={28} />,
    title: "Cartas QR digitales",
    desc: "Digitaliza tu carta en segundos. Escaneable desde móvil, sin impresión, editable en cualquier momento. Perfecto para restaurantes, bares o cafeterías.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Diseño responsive total",
    desc: "Tu web se verá perfecta en móviles, tablets y ordenadores. Carga rápida, experiencia fluida y diseño limpio desde cualquier pantalla.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-section relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 leading-tight"
        >
          Servicios digitales para negocios reales
        </motion.h2>

        {/* Tarjetas */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-lime-400 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-lime-500/10 text-lime-400 rounded-full mb-4 group-hover:scale-110 transition">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-lime-400 transition">
                {s.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
