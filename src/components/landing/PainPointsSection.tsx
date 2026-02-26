const painPoints = [
  {
    emoji: "😔",
    title: "¿Sientes que cargas con emociones que no son tuyas?",
    desc: "Muchas veces heredamos patrones y conflictos familiares sin saberlo.",
  },
  {
    emoji: "🔄",
    title: "¿Repites los mismos ciclos una y otra vez?",
    desc: "Relaciones, problemas de salud o situaciones que se repiten sin explicación.",
  },
  {
    emoji: "😶",
    title: "¿Sientes un vacío o bloqueo que no logras entender?",
    desc: "Tu cuerpo habla a través de síntomas. Hay un mensaje esperando ser escuchado.",
  },
  {
    emoji: "💭",
    title: "¿La medicina tradicional no te ha dado respuestas?",
    desc: "Las terapias complementarias abordan la causa emocional y espiritual del malestar.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-gradient-hero">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
          ¿Te identificas con algo de esto?
        </h2>
        <p className="font-body text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Si llegaste hasta aquí, probablemente algo en ti está pidiendo un cambio profundo.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 sm:p-8 shadow-card border border-border hover:shadow-glow transition-shadow duration-500"
            >
              <span className="text-3xl mb-4 block">{p.emoji}</span>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-display text-xl sm:text-2xl font-semibold text-primary italic">
            "No estás roto. Solo necesitas reconectar contigo mismo."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
