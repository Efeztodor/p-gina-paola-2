import painMedicineImg from "@/assets/pain-medicine.jpg";

const areas = [
  {
    title: "Salud",
    subtitle: "Reconecta con tu salud mental, emocional y física",
    desc: "Descubre el origen emocional, mental o espiritual de los síntomas que hoy te afectan. Tu cuerpo tiene un mensaje para ti — aprende a escucharlo y activa tu proceso de transformación natural.",
    items: ["Dolores crónicos", "Enfermedades recurrentes", "Ansiedad y estrés", "Otros"],
  },
  {
    title: "Abundancia",
    subtitle: "Libera tus bloqueos al merecimiento",
    desc: "Los patrones de escasez se heredan y se repiten. Identifica las creencias limitantes que te impiden prosperar y reprograma tu relación con el dinero.",
    items: ["Deudas recurrentes", "Miedo al éxito", "Auto-sabotaje financiero", "Creencias de escasez"],
  },
  {
    title: "Relaciones",
    subtitle: "Transforma tus vínculos",
    desc: "Las relaciones son un espejo de tu mundo interior. Sana las heridas que se repiten en tus vínculos y construye relaciones desde el amor y no desde la carencia.",
    items: ["Relaciones tóxicas", "Dependencia emocional", "Patrones repetitivos", "Conflictos familiares"],
  },
];

const TransformationAreas = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Áreas de Transformación
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sana las 3 áreas esenciales de tu vida
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Las diferentes terapias buscan abordar de raíz los conflictos en salud, abundancia y relaciones
            para una transformación integral.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          {/* Shared background image across all three cards */}
          <img
            src={painMedicineImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-card/60" />

          <div className="relative z-10 grid md:grid-cols-3 gap-6 lg:gap-8 p-6 lg:p-8">
            {areas.map((a, i) => (
              <div
                key={i}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:shadow-glow transition-all duration-500 overflow-hidden"
              >
                {/* Decorative gradient top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-cta opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {a.title}
                </h3>
                <p className="font-body text-sm font-semibold text-primary mb-3">
                  {a.subtitle}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {a.desc}
                </p>

                <ul className="space-y-2">
                  {a.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 font-body text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationAreas;
