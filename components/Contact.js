import { useState } from "react";

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
    <section id="contact" className="py-28 bg-[#111827] text-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">¿Trabajamos juntos?</h2>
        <p className="text-gray-300 mb-10">
          Rellena el formulario y cuéntame qué necesitas. Te responderé lo antes posible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-lime-400">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-lime-400">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1 text-lime-400">Mensaje</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Cuéntame sobre tu proyecto o idea..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center mt-4">✅ Tu mensaje fue enviado correctamente.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-4">❌ Ocurrió un error al enviar. Intenta de nuevo.</p>
          )}
        </form>
      </div>
    </section>
  );
}
