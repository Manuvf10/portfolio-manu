import { useState } from "react";
import { Mail, User, MessageCircle, ShieldCheck } from "lucide-react";

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
    <section id="contact" className="bg-[#060912] py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-lime-300">Contacto</p>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">¿Listo para elevar tu marca y vender mejor online?</h2>
          <p className="mt-5 max-w-xl text-lg text-slate-300">Cuéntame tu objetivo y te respondo con una hoja de ruta clara: propuesta, tiempos y presupuesto. Sin humo.</p>

          <div className="mt-8 rounded-2xl border border-lime-300/20 bg-lime-300/10 p-5">
            <p className="flex items-center gap-2 font-semibold text-lime-200"><ShieldCheck size={18} /> Respuesta en menos de 24h</p>
            <p className="mt-1 text-sm text-lime-100/80">Tus datos se usan solo para responderte. No spam, no automatizaciones raras.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl shadow-2xl">
          <Field label="Nombre" icon={<User className="h-5 w-5 text-lime-300" />}>
            <input type="text" name="name" id="name" required className="w-full bg-transparent p-3 text-white placeholder:text-slate-400 focus:outline-none" placeholder="Tu nombre" />
          </Field>

          <Field label="Correo electrónico" icon={<Mail className="h-5 w-5 text-lime-300" />}>
            <input type="email" name="email" id="email" required className="w-full bg-transparent p-3 text-white placeholder:text-slate-400 focus:outline-none" placeholder="hola@tuempresa.com" />
          </Field>

          <Field label="Cuéntame tu proyecto" icon={<MessageCircle className="mt-3 h-5 w-5 text-lime-300" />}>
            <textarea name="message" id="message" rows="5" required className="w-full resize-none bg-transparent p-3 text-white placeholder:text-slate-400 focus:outline-none" placeholder="¿Qué vendes, a quién te diriges y qué necesitas lanzar?" />
          </Field>

          <button type="submit" className="w-full rounded-xl bg-lime-300 px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-lime-200">
            {status === "loading" ? "Enviando..." : "Solicitar propuesta"}
          </button>

          {status === "success" && <p className="text-center text-sm text-emerald-400">✅ Mensaje enviado. Te responderé muy pronto.</p>}
          {status === "error" && <p className="text-center text-sm text-red-400">❌ Hubo un problema. Inténtalo de nuevo.</p>}

          <p className="text-center text-sm text-slate-400">
            ¿Prefieres WhatsApp?{" "}
            <a href="https://wa.me/34666732525" target="_blank" rel="noopener noreferrer" className="font-semibold text-lime-300 hover:text-lime-200">
              Escríbeme aquí
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, icon, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-lime-200">{label}</span>
      <div className="flex items-start gap-2 rounded-xl border border-white/20 bg-white/5 px-3">{icon}{children}</div>
    </label>
  );
}
