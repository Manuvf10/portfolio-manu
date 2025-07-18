import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Fondo sencillo sombreado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl px-6"
      >
        {/* Foto tuya */}
        <img
          src="/tu-foto.jpg" 
          alt="Manu Vera"
          className="mx-auto rounded-full w-32 h-32 border-4 border-lime-400 mb-6"
        />

        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Soy <span className="text-lime-400">Manu Vera</span>, desarrollador full‑stack.
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-6 leading-relaxed">
          Ayudo a marcas, negocios y startups a crecer online con tiendas, landings y apps que convierten.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="#services" className="bg-lime-400 hover:bg-lime-300 text-gray-900 font-semibold px-8 py-3 rounded-full transition">Ver servicios</a>
          <a href="#contact" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition">Contactar</a>
        </div>

        {/* Indicadores */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-white">
          <div><span className="font-bold text-2xl">3</span><div>tiendas online</div></div>
          <div><span className="font-bold text-2xl">10</span><div>proyectos web</div></div>
          <div><span className="font-bold text-2xl">2</span><div>apps</div></div>
        </div>
      </motion.div>
    </section>
  );
}
