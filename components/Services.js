import { motion } from "framer-motion";
import { Globe, SearchCheck, Rocket, MessageSquareQuote } from "lucide-react";

const services = [
  {
    icon: <Globe size={24} />,
    title: "Web corporativa premium",
    desc: "Diseño estratégico para transmitir autoridad, elevar percepción de marca y convertir visitas en reuniones.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Landing pages para campañas",
    desc: "Páginas enfocadas en resultados para anuncios de Meta y Google con estructura de conversión y carga ultrarrápida.",
  },
  {
    icon: <SearchCheck size={24} />,
    title: "SEO técnico + velocidad",
    desc: "Optimización integral para mejorar posicionamiento, Core Web Vitals y experiencia móvil desde el primer clic.",
  },
  {
    icon: <MessageSquareQuote size={24} />,
    title: "Copywriting de alto impacto",
    desc: "Textos orientados a negocio para que tu propuesta sea irresistible y conecte con clientes listos para comprar.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#060912] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">Servicios</p>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Tu herramienta de crecimiento.</h2>
          <p className="mt-5 text-lg text-slate-300">Cada proyecto combina diseño, desarrollo y marketing para ayudarte a vender mejor y diferenciarte de tu competencia.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-lg transition hover:-translate-y-1 hover:border-lime-300/60"
            >
              <div className="mb-5 inline-flex rounded-xl bg-lime-300/10 p-3 text-lime-300">{s.icon}</div>
              <h3 className="text-xl font-semibold group-hover:text-lime-300">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-300">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
