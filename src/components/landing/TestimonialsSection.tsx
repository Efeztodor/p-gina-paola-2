const testimonials = [
  {
    name: "Carolina M.",
    location: "Santiago, Chile",
    text: "Quiero recomendar profundamente el trabajo de Paola Paredes. En un momento muy desafiante de mi vida, cuando me sentía emocionalmente dispersa y estaba atravesando ataques de pánico, decidí tomar varias sesiones con ella de terapia TRE y terapia de respuesta espiritual. Desde el primer encuentro me sentí acompañada con respeto, sensibilidad y una presencia muy humana. Paola crea un espacio seguro donde una puede abrirse sin miedo, sintiéndose comprendida y sostenida en todo momento. Las sesiones de TRE me ayudaron a liberar tensiones acumuladas en el cuerpo que ni siquiera sabía que estaban allí, y poco a poco comencé a sentir más calma y estabilidad. La terapia de respuesta espiritual, por su parte, me permitió tomar conciencia de patrones internos y creencias que estaban influyendo en mi ansiedad. Fue un proceso profundo pero a la vez muy amoroso. Gracias a su acompañamiento logré volver a mi centro, recuperar claridad mental y sentirme más enraizada. Su trabajo es serio, profesional y a la vez lleno de empatía y vocación genuina de ayuda. Recomiendo a Paola con total confianza a cualquier persona que esté pasando por momentos de ansiedad, bloqueo emocional o búsqueda personal. Es una terapeuta comprometida y verdaderamente transformadora.",
    therapy: "TRE y Respuesta Espiritual",
  },
  {
    name: "Marcela O.",
    location: "Santiago, Chile",
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
  {
    name: "Javiera P.",
    location: "Santiago, Chile",
    text: "La reestructuración espiritual con Paola me ayudó a reconectar con mi esencia. Sentí un alivio profundo y una claridad que no había experimentado antes.",
    therapy: "Reestructuración Espiritual",
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
