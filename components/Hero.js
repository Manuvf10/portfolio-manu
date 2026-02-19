import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CalendarClock, Sparkles } from "lucide-react";

const metrics = [
  { value: "+25", label: "proyectos lanzados" },
  { value: "< 48h", label: "tiempo de respuesta" },
  { value: "4.9/5", label: "satisfacción media" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070b14] px-6 pb-24 pt-32 text-white sm:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-lime-400/20 blur-[120px]" />
        <div className="absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-[100px]" />
        <div className="absolute -right-16 top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[110px]" />
        <div className="hero-grid absolute inset-0 opacity-20" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-lime-300 backdrop-blur-xl">
            <Sparkles size={16} />
            Diseño web + estrategia comercial
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            Transformo tu web en una <span className="text-lime-300">máquina de confianza</span> que atrae clientes y genera ventas.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Soy Manu Vera, desarrollador web freelance. Creo experiencias digitales premium para negocios ambiciosos:
            páginas rápidas, copy persuasivo, posicionamiento y un diseño con personalidad para que tu marca destaque en serio.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-8 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-lime-200"
            >
              Quiero mi propuesta estratégica
              <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-medium text-white transition hover:border-lime-300 hover:text-lime-300"
            >
              Ver resultados reales
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <p className="text-2xl font-bold text-lime-300">{item.value}</p>
                <p className="text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass-card space-y-5 rounded-3xl p-7"
        >
          <h2 className="text-2xl font-semibold">¿Qué consigues trabajando conmigo?</h2>
          <ul className="space-y-4 text-slate-200">
            <li className="flex items-start gap-3"><BadgeCheck className="mt-1 text-lime-300" size={18} /> Diagnóstico gratuito de tu web o idea actual.</li>
            <li className="flex items-start gap-3"><BadgeCheck className="mt-1 text-lime-300" size={18} /> Plan claro con tiempos, entregables y enfoque a conversión.</li>
            <li className="flex items-start gap-3"><BadgeCheck className="mt-1 text-lime-300" size={18} /> Diseño premium optimizado para móvil, SEO y anuncios.</li>
            <li className="flex items-start gap-3"><BadgeCheck className="mt-1 text-lime-300" size={18} /> Soporte cercano para escalar cuando empieces a vender más.</li>
          </ul>

          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-lime-300 hover:text-lime-200"
          >
            <CalendarClock size={16} /> Reservar una llamada de 15 minutos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
