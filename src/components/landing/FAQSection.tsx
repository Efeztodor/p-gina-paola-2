import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo sé qué terapia necesito?",
    a: "No te preocupes por eso. En nuestra primera conversación evaluamos juntos tu situación y te recomiendo la terapia más adecuada. Cada persona es diferente y el camino terapéutico también.",
  },
  {
    q: "¿Las sesiones online son igual de efectivas?",
    a: "¡Absolutamente! La energía no conoce distancias. He trabajado con personas de muchos países con resultados increíbles. Solo necesitas un espacio tranquilo y conexión a internet.",
  },
  {
    q: "¿Cuántas sesiones necesito?",
    a: "Depende de cada caso. Algunas personas experimentan cambios profundos desde la primera sesión. Generalmente recomiendo un mínimo de 3 sesiones para un proceso más completo.",
  },
  {
    q: "¿Reemplaza el tratamiento médico?",
    a: "No. Las terapias complementarias acompañan y potencian tu bienestar integral, pero no reemplazan tratamientos médicos. Trabajamos de forma complementaria.",
  },
  {
    q: "¿Cómo es una sesión típica?",
    a: "Dura 90 minutos. Comenzamos conversando sobre tu situación actual, luego aplicamos la técnica terapéutica correspondiente. Al final, te entrego un resumen y recomendaciones.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Transferencia bancaria y efectivo (en sesiones presenciales), o a través de PayPal si estás fuera de Chile. Los pagos se realizan previo a la sesión.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Preguntas Frecuentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Resuelve tus dudas
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-body font-bold text-foreground text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
