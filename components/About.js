import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#05070d] py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <motion.img
          src="/tu-foto.jpg"
          alt="Manu Vera"
          className="w-full max-w-sm rounded-3xl border border-white/10 object-cover shadow-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">Sobre mí</p>
          <h2 className="text-4xl font-bold sm:text-5xl">Desarrollo web con mentalidad de negocio.</h2>
          <p className="mt-5 leading-relaxed text-slate-300">
            No me limito a “hacer páginas bonitas”. Mi enfoque mezcla diseño, tecnología y marketing para que cada web tenga un objetivo claro:
            generar confianza, captar leads y aumentar ventas.
          </p>
          <p className="mt-4 leading-relaxed text-slate-300">
            Trabajo contigo de forma cercana, hablo claro y cuido cada detalle. Si buscas un profesional que entienda tu marca y piense en resultados,
            estás en el sitio correcto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
