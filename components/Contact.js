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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Hablemos </h2>
        <p className="text-gray-600 mb-12">
          ¿Tienes un proyecto en mente? Rellena este formulario y me pondré en contacto contigo lo antes posible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tu mensaje"
            required
            className="w-full border border-gray-300 p-3 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-4">✅ Tu mensaje fue enviado correctamente.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-4">❌ Ocurrió un error al enviar. Intenta de nuevo.</p>
          )}
        </form>
      </div>
    </section>
  );
}
