import therapistImg from "@/assets/therapist-portrait.jpg";
import logoPaola from "@/assets/logo-paola.png";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card relative">
              <img
                src={therapistImg}
                alt="Paola Paredes, terapeuta complementaria"
                className="w-full h-auto object-cover aspect-[3/4]"
                loading="lazy"
              />
              <img
                src={logoPaola}
                alt="Paola Paredes"
                className="absolute bottom-4 right-4 w-56 sm:w-60 h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
              Sobre Mí
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-normal text-foreground mb-6">
              Hola, soy Paola Paredes
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Soy Ingeniera de profesión y <strong className="text-foreground">terapeuta por vocación</strong>, Pinialista, 
                con formación en Terapia de Respuesta Espiritual (TRE), Reestructuración Espiritual, 
                Psicogenealogía y BioReprogramación.
              </p>
              <p>
                Cuento además con conocimiento en <strong className="text-foreground">5 Leyes Biológicas</strong>, 
                una maravillosa forma de comprender el cuerpo y sus mensajes.
              </p>
              <p>
                Estoy para acompañarte en tu proceso de cambio y mejora en tu vida y la de tu entorno, 
                a través de las distintas terapias según lo que requieras.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["TRE", "BioReprogramación", "Psicogenealogía", "5 Leyes Biológicas", "Reestructuración Espiritual"].map((tag) => (
                <span
                  key={tag}
                  className="bg-lavender-light text-primary font-body text-xs font-semibold px-4 py-2 rounded-full"
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
