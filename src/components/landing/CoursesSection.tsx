import { Calendar, Clock } from "lucide-react";

const courses = [
  {
    title: "Confección de tu Árbol Genealógico",
    badge: "Curso Gratuito",
    description:
      "Aprende a construir y analizar tu árbol genealógico como herramienta terapéutica para identificar patrones familiares, lealtades invisibles y dinámicas transgeneracionales.",
    youtubeLink: "https://www.youtube.com/watch?v=hDpU686Wiwg",
    duration: "4 horas",
    modality: "Online y Presencial",
  },
  {
    title: "Confección de Árbol de Méritos",
    badge: "Curso Gratuito",
    description:
      "Reconoce los méritos familiares que se toman por derecho al pertenecer a una familia, integrando y honrando los logros y fortalezas de tu linaje.",
    youtubeLink: "https://www.youtube.com/watch?v=n7246I_vW2M",
    duration: "2 horas",
    modality: "Online",
  },
  {
    title: "Taller de Psicogenealogía",
    description:
      "Formación completa en psicogenealogía dividida en 4 módulos de 12 horas cada uno, donde explorarás las dinámicas familiares y transgeneracionales que influyen en tu vida.",
    duration: "4 módulos · 12h c/u",
    modality: "Online",
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            Formación
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal text-foreground mb-4">
            Cursos y <span className="italic font-medium text-primary">talleres</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="group rounded-2xl bg-card border border-border/50 p-8 flex flex-col hover:shadow-glow transition-shadow duration-500"
            >
              {"badge" in course && course.badge && (
                <span className="inline-block font-body text-xs font-bold uppercase tracking-wider text-primary bg-[hsl(48,80%,90%)] rounded-full px-3 py-1 mb-2">
                  {course.badge}
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-body text-muted-foreground mb-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-[hsl(48,80%,90%)] px-3 py-1">
                  <Clock size={12} /> {course.duration}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[hsl(48,80%,90%)] px-3 py-1">
                  <Calendar size={12} /> {course.modality}
                </span>
              </div>
              <a
                href={"youtubeLink" in course && course.youtubeLink ? course.youtubeLink : "https://wa.me/56977929416?text=Hola%20Paola,%20quiero%20saber%20m%C3%A1s%20sobre%20el%20curso%20de%20"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center rounded-full border border-primary/30 py-2.5 text-sm font-body font-medium text-primary hover:bg-accent transition-colors"
              >
                {"youtubeLink" in course && course.youtubeLink ? "Link del curso" : "Más Información"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
