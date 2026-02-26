const therapies = [
  {
    abbr: "BR",
    name: "BioReprogramación",
    desc: "Transforma creencias limitantes y patrones emocionales profundos para reprogramar tu biología y activar tu capacidad natural de sanación.",
    color: "bg-lavender-light text-primary",
  },
  {
    abbr: "TRE",
    name: "Terapia de Respuesta Espiritual",
    desc: "Sistema de investigación espiritual que conecta con tu Yo Superior para identificar y limpiar energías discordantes y bloqueos que afectan tu bienestar.",
    color: "bg-rose-light text-secondary-foreground",
  },
  {
    abbr: "5LB",
    name: "5 Leyes Biológicas",
    desc: "Comprende cómo tu cuerpo responde a los conflictos emocionales, descubriendo el sentido de cada síntoma y su proceso de sanación natural.",
    color: "bg-gold-light text-accent-foreground",
  },
  {
    abbr: "RE",
    name: "Reestructuración Espiritual",
    desc: "Proceso profundo de alineación y restauración de tu estructura energética y espiritual, liberando cargas y memorias que limitan tu evolución.",
    color: "bg-lavender-light text-primary",
  },
  {
    abbr: "PG",
    name: "Psicogenealogía",
    desc: "Explora tu árbol genealógico para identificar y liberar patrones heredados, lealtades invisibles y conflictos transgeneracionales.",
    color: "bg-rose-light text-secondary-foreground",
  },
];

const TherapiesSection = () => {
  return (
    <section id="terapias" className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Mis Terapias
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Caminos hacia tu sanación
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada terapia es un camino único. Juntos encontraremos la que mejor se ajuste a tu proceso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {therapies.map((t, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl p-6 sm:p-8 border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-500"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg mb-5 ${t.color}`}
              >
                {t.abbr}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {t.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-cta rounded-xl p-6 sm:p-8 flex flex-col justify-center items-center text-center text-primary-foreground">
            <h3 className="font-display text-xl font-bold mb-3">
              ¿No sabes cuál elegir?
            </h3>
            <p className="font-body text-sm opacity-90 mb-6">
              Conversemos y juntos encontraremos la terapia ideal para ti.
            </p>
            <a
              href="https://wa.me/56977929416?text=Hola,%20quiero%20saber%20qu%C3%A9%20terapia%20es%20la%20mejor%20para%20m%C3%AD"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card text-foreground font-body font-bold text-sm px-6 py-3 rounded-full hover:bg-card/90 transition-colors"
            >
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapiesSection;
