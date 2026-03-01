import therapistImg from "@/assets/therapist-portrait.jpg";
import logoPaola from "@/assets/logo-paola.png";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-lavender-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src={therapistImg}
                alt="Paola Paredes, terapeuta complementaria"
                className="rounded-2xl shadow-xl w-full aspect-[3/4] object-cover object-center"
                loading="lazy"
              />
              <img
                src={logoPaola}
                alt="Paola Paredes"
                loading="lazy"
                className="absolute bottom-4 right-4 w-56 sm:w-60 h-auto"
              />
            </div>
          </div>

          <div>
            <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
              Sobre Mí
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal mb-6 leading-tight text-foreground">
              Hola, soy{" "}
              <span className="text-primary font-medium italic">
                Paola Paredes
              </span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Soy Ingeniera de profesión y <strong className="text-foreground">terapeuta por vocación</strong>, Pinialista,
              con formación en Terapia de Respuesta Espiritual (TRE), Reestructuración Espiritual,
              Psicogenealogía y BioReprogramación. Cuento además con conocimiento en{" "}
              <strong className="text-foreground">5 Leyes Biológicas</strong>, una maravillosa forma de comprender el cuerpo y sus mensajes.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Estoy para acompañarte en tu proceso de cambio y mejora en tu vida y la de tu entorno,
              a través de las distintas terapias según lo que requieras.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Las terapias pueden ser de manera presencial u online.
            </p>

            <div className="flex flex-wrap gap-3">
              {["TRE", "BioReprogramación", "Psicogenealogía", "5 Leyes Biológicas", "Reestructuración Espiritual"].map((tag) => (
                <span
                  key={tag}
                  className="bg-lavender-light text-primary font-body text-xs font-semibold px-4 py-2 rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
