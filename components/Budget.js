import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OPTIONS = {
  tipo: [
    { name: "Landing Page", range: "200€ - 500€" },
    { name: "Web Corporativa", range: "500€ - 900€" },
    { name: "Tienda Online", range: "800€ - 1500€" },
    { name: "App Web / SaaS", range: "1200€ - 3000€" },
  ],
  extras: [
    { name: "Blog", cost: 100 },
    { name: "Chat WhatsApp", cost: 80 },
    { name: "Multiidioma", cost: 150 },
    { name: "Formularios avanzados", cost: 120 },
    { name: "Integraciones externas", cost: 200 },
  ],
};

export default function Budget() {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [extras, setExtras] = useState([]);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleExtra = (extra) => {
    setExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData();
    formData.append("tipo", selectedType?.name || "Sin seleccionar");
    formData.append("extras", extras.map((e) => e.name).join(", "));

    await fetch("https://formspree.io/f/xvgqgboo", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setSending(false);
    setSent(true);
    setSelectedType(null);
    setExtras([]);
  };

  return (
<section id="presupuesto" className="py-28 bg-[#111827] text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Calcula tu presupuesto</h2>
        <p className="text-gray-300 mb-8 text-center">
          Elige el tipo de proyecto y los extras que te interesen. Te enviaremos una estimación aproximada por email.
        </p>

        <div className="text-center">
          <button
            onClick={() => setOpen(!open)}
            className="bg-lime-500 hover:bg-lime-400 text-gray-900 font-semibold px-8 py-3 rounded-full transition"
          >
            {open ? "Cerrar formulario" : "Solicitar presupuesto"}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 text-left space-y-10 overflow-hidden bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
            >
              <div>
                <h3 className="text-lime-400 font-semibold mb-3">1. Tipo de proyecto</h3>
                <div className="flex flex-wrap gap-3">
                  {OPTIONS.tipo.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => setSelectedType(opt)}
                      className={`px-4 py-2 rounded-full border text-sm transition ${
                        selectedType?.name === opt.name
                          ? "bg-lime-500 text-gray-900 border-lime-500"
                          : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                      }`}
                    >
                      {opt.name} ({opt.range})
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lime-400 font-semibold mb-3">2. Funcionalidades extra</h3>
                <div className="flex flex-wrap gap-3">
                  {OPTIONS.extras.map((ext) => (
                    <button
                      key={ext.name}
                      type="button"
                      onClick={() => toggleExtra(ext)}
                      className={`px-4 py-2 rounded-full border text-sm transition ${
                        extras.includes(ext)
                          ? "bg-lime-100 text-lime-700 border-lime-400"
                          : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                      }`}
                    >
                      {ext.name} (+{ext.cost}€)
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={!selectedType || sending}
                  className="bg-lime-500 hover:bg-lime-400 text-gray-900 font-bold px-8 py-3 rounded-full transition"
                >
                  {sending ? "Enviando..." : "Enviar solicitud"}
                </button>

                {sent && (
                  <p className="text-green-400 text-center mt-4">
                    ✅ Tu solicitud fue enviada correctamente. Te responderé en breve.
                  </p>
                )}
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
