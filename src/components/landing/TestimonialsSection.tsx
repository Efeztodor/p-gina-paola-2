const testimonials = [
  {
    name: "Carolina M.",
    location: "Santiago, Chile",
    text: "Después de años cargando con angustia y repitiendo patrones, las sesiones con Paola me ayudaron a entender y soltar. Hoy me siento liviana y en paz.",
    therapy: "BioReprogramación",
  },
  {
    name: "Fernanda R.",
    location: "Concepción, Chile",
    text: "Al realizar el árbol genealógico con Paola descubrí que muchas de mis emociones estaban ligadas a experiencias familiares, lo que me permitió comprenderlas y comenzar a liberarme de esas cargas heredadas. Increíble experiencia.",
    therapy: "Psicogenealogía",
  },
  {
    name: "Andrea L.",
    location: "Online - México",
    text: "Tomé sesión online y fue igual de poderosa. Paola tiene un don para guiar el proceso con mucha empatía y profesionalismo.",
    therapy: "TRE",
  },
  {
    name: "Valentina S.",
    location: "Viña del Mar, Chile",
    text: "Llegué con dolores crónicos que nadie podía explicar. Con las 5 leyes biológicas entendí lo que mi cuerpo me decía. Fue transformador.",
    therapy: "5 Leyes Biológicas",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Testimonios
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal text-foreground mb-4">
            Lo que dicen quienes ya vivieron su transformación
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-soft"
            >
              <div className="flex items-center gap-1 text-gold mb-4">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j} className="text-lg">{s}</span>
                ))}
              </div>
              <blockquote className="font-body text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                  <p className="font-body text-muted-foreground text-xs">{t.location}</p>
                </div>
                <span className="bg-lavender-light text-primary font-body text-xs font-semibold px-3 py-1 rounded-full">
                  {t.therapy}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
