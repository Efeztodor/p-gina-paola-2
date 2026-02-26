import { Check } from "lucide-react";

const plans = [
  {
    name: "Sesión Individual",
    price: "$50.000",
    currency: "CLP",
    desc: "Ideal para tu primera experiencia o sesiones puntuales.",
    features: [
      "1 sesión de 60-90 minutos",
      "Presencial u online",
      "Informe post-sesión",
      "Seguimiento por WhatsApp",
    ],
    popular: false,
    cta: "Agendar Sesión",
  },
  {
    name: "Pack 3 Sesiones",
    price: "$90.000",
    currency: "CLP",
    desc: "El más elegido. Profundiza tu proceso de transformación.",
    features: [
      "3 sesiones de 60-90 minutos",
      "Ahorra $15.000",
      "Presencial u online",
      "Informe detallado por sesión",
      "Seguimiento personalizado",
      "Prioridad en agenda",
    ],
    popular: true,
    cta: "Elegir Pack →",
  },
  {
    name: "Pack 5 Sesiones",
    price: "$140.000",
    currency: "CLP",
    desc: "Para un proceso integral y profundo de transformación.",
    features: [
      "5 sesiones de 60-90 minutos",
      "Ahorra $50.000",
      "Presencial u online",
      "Plan terapéutico personalizado",
      "Seguimiento entre sesiones",
      "Acceso a material complementario",
    ],
    popular: false,
    cta: "Elegir Pack",
  },
];

const PricingSection = () => {
  return (
    <section id="valores" className="section-padding bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Valores
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Invierte en tu bienestar
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Elige la opción que mejor se adapte a tu proceso. Todos los planes incluyen atención personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative bg-card rounded-2xl p-6 sm:p-8 border transition-all duration-500 ${
                p.popular
                  ? "border-primary shadow-glow scale-[1.02] lg:scale-105"
                  : "border-border shadow-card hover:shadow-glow"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-cta text-primary-foreground font-body text-xs font-bold px-4 py-1 rounded-full">
                  Más Popular
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground mb-1">{p.name}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{p.desc}</p>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-foreground">{p.price}</span>
                <span className="font-body text-sm text-muted-foreground ml-1">{p.currency}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 font-body text-sm text-foreground">
                    <Check className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/56977929416?text=Hola,%20quiero%20agendar%20una%20sesi%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-body font-bold text-sm px-6 py-3.5 rounded-full transition-all ${
                  p.popular
                    ? "bg-gradient-cta text-primary-foreground shadow-glow hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-sm text-muted-foreground mt-8">
          💳 Transferencia bancaria · Todos los valores en pesos chilenos
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
