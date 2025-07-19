import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Fondo oscuro con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        {/* Imagen personal */}
        <div className="mb-6">
          <img
            src="/tu-foto.jpg"
            alt="Manu Vera"
            className="mx-auto rounded-full w-28 h-28 sm:w-32 sm:h-32 border-4 border-lime-400 shadow-lg"
          />
        </div>

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          <span className="text-lime-400">Manu Vera</span> 
        </h1>

        {/* Subtítulo + propuesta de valor */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Desarrollo <span className="text-white font-semibold">tiendas online, webs y apps</span> que hacen crecer tu negocio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#services"
            className="bg-lime-400 hover:bg-lime-300 text-gray-900 font-semibold px-8 py-3 rounded-full transition"
          >
            Ver servicios
          </a>
          <a
            href="#contact"
            className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full transition"
          >
            Contactar
          </a>
        </div>

        {/* KPIs / estadísticas */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white text-center">
          <div>
            <span className="text-3xl font-bold text-lime-400">3+</span>
            <div className="text-sm">tiendas online</div>
          </div>
          <div>
            <span className="text-3xl font-bold text-lime-400">10+</span>
            <div className="text-sm">proyectos web</div>
          </div>
          <div>
            <span className="text-3xl font-bold text-lime-400">2</span>
            <div className="text-sm">apps desarrolladas</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
