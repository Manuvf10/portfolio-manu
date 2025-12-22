import { motion } from "framer-motion";

const fondoImgs = [
  "/proyectos/youwish.png",
  "/proyectos/diadica.png",
  "/proyectos/quattroislands.png",
  "/proyectos/youwish.png",
  "/proyectos/diadica.png",
  "/proyectos/quattroislands.png",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0d0d0d] overflow-hidden text-white">
      
      {/* Fondo tipo collage difuminado */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="w-[180%] h-[180%] scale-100 sm:scale-110 grid grid-cols-2 sm:grid-cols-3 gap-6 opacity-25 blur-sm rotate-[-2deg]">
          {fondoImgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`bg-${i}`}
              className="w-full h-full object-cover rounded-xl"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[#0d0d0d]/75 backdrop-blur-sm" />
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl w-full"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Webs y cartas digitales para <span className="text-lime-400">negocios locales</span> que quieren destacar
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed font-light">
          Creamos páginas visuales, modernas y rápidas que posicionan tu marca y transforman visitas en clientes. Desde cartas QR hasta landings a medida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="#contact"
            className="bg-lime-400 hover:bg-lime-300 text-gray-900 font-semibold px-8 py-3 rounded-full transition text-lg w-full sm:w-auto shadow"
          >
            Solicitar propuesta
          </a>
          <a
            href="#projects"
            className="border border-white/20 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition text-lg w-full sm:w-auto shadow"
          >
            Ver trabajos
          </a>
        </div>

        {/* Stats 
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 text-white text-center">
          <Stat title="Negocios digitalizados" value="+20" />
          <Stat title="Cartas activas" value="+20" />
          <Stat title="Proyectos actuales" value="5" />
        </div>
*/}
        {/* Firma profesional */}
        <p className="text-sm text-gray-600 mt-10 italic">mvf.dev — Desarrollo web para negocios reales.</p>
      </motion.div>
    </section>
  );
}

function Stat({ title, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-4xl font-bold text-lime-400">{value}</div>
      <div className="text-sm text-gray-400 mt-1">{title}</div>
    </motion.div>
  );
}
