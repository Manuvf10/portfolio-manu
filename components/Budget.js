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
    <section id="presupuesto" className="py-24 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Presupuesto rápido</h2>
        <p className="text-gray-600 mb-6">
          Selecciona lo que necesitas y te daremos una estimación.
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="bg-lime-600 hover:bg-lime-700 text-white font-semibold px-8 py-3 rounded-full transition"
        >
          {open ? "Cerrar formulario" : "Solicitar presupuesto"}
        </button>

        <AnimatePresence>
          {open && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 text-left space-y-8 overflow-hidden"
            >
              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Tipo de proyecto</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {OPTIONS.tipo.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => setSelectedType(opt)}
                      className={`px-4 py-2 rounded-full border text-sm ${
                        selectedType?.name === opt.name
                          ? "bg-lime-600 text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      {opt.name} ({opt.range})
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-gray-800">Extras</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {OPTIONS.extras.map((ext) => (
                    <button
                      key={ext.name}
                      type="button"
                      onClick={() => toggleExtra(ext)}
                      className={`px-4 py-2 rounded-full border text-sm ${
                        extras.includes(ext)
                          ? "bg-lime-100 border-lime-600 text-lime-700"
                          : "bg-white text-gray-700"
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
                  className="bg-lime-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-lime-700 transition"
                >
                  {sending ? "Enviando..." : "Enviar presupuesto"}
                </button>
              </div>

              {sent && (
                <p className="text-green-600 text-center">
                  ✅ Tu solicitud fue enviada correctamente.
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}