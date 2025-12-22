import { useState } from "react";
import { Mail, User, MessageCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xvgqgboo", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-section">
      <div className="max-w-xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          ¿Trabajamos juntos?
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Rellena el formulario y cuéntame qué necesitas. Te responderé en menos de 24h.
        </p>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md text-left shadow-xl"
        >
          {/* Campo: Nombre */}
          <div>
            <label htmlFor="name" className="text-sm text-lime-400 font-medium block mb-1">
              Nombre
            </label>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3">
              <User className="text-lime-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                placeholder="Tu nombre"
              />
            </div>
          </div>

          {/* Campo: Email */}
          <div>
            <label htmlFor="email" className="text-sm text-lime-400 font-medium block mb-1">
              Correo electrónico
            </label>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3">
              <Mail className="text-lime-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
          </div>

          {/* Campo: Mensaje */}
          <div>
            <label htmlFor="message" className="text-sm text-lime-400 font-medium block mb-1">
              Mensaje
            </label>
            <div className="flex gap-2 bg-white/10 border border-white/20 rounded-lg px-3">
              <MessageCircle className="text-lime-400 w-5 h-5 mt-3" />
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none"
                placeholder="Cuéntame sobre tu idea, web o carta digital..."
              ></textarea>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Estado */}
          {status === "success" && (
            <p className="text-green-400 text-center text-sm mt-4">
              ✅ Tu mensaje fue enviado correctamente.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center text-sm mt-4">
              ❌ Ocurrió un error. Inténtalo de nuevo.
            </p>
          )}
        </form>

        {/* WhatsApp CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-2">¿Prefieres hablar directo?</p>
          <a
            href="https://wa.me/34666732525"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 hover:bg-white/20 border border-white/10 text-white px-5 py-2 rounded-full text-sm transition"
          >
            📲 Escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
