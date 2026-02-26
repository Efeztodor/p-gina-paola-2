import { MessageCircle, Search, Sparkles, Sun } from "lucide-react";
import paolaWorkingImg from "@/assets/paola-working.jpg";
import pendulumImg from "@/assets/pendulum.jpg";
import paolaReadingImg from "@/assets/paola-reading.jpg";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Conversamos",
    desc: "Me cuentas tu situación por WhatsApp o en una breve llamada. Juntos definimos qué terapia es la mejor para tu proceso.",
  },
  {
    icon: Search,
    step: "02",
    title: "Investigamos el origen",
    desc: "En sesión, conectamos con el origen emocional, transgeneracional o espiritual de tu conflicto usando la terapia más adecuada.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Reprogramamos",
    desc: "Liberamos bloqueos, limpiamos memorias y creencias limitantes. Tu inconsciente comienza a trabajar a favor de tu bienestar.",
  },
  {
    icon: Sun,
    step: "04",
    title: "Transformación",
    desc: "Empiezas a notar cambios reales: más claridad, salud, relaciones sanas y una nueva forma de vivir alineada contigo.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
            ¿Cómo Funciona?
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal text-foreground mb-4">
            Tu camino de transformación en 4 pasos
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Un proceso claro, amoroso y guiado para que te sientas acompañado en cada etapa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-cta text-primary-foreground mb-5 shadow-glow overflow-hidden">
                {i === 0 ? (
                  <img src={paolaWorkingImg} alt="" className="absolute inset-0 w-full h-full object-cover blur-[1px] opacity-75" />
                ) : i === 1 ? (
                  <img src={pendulumImg} alt="" className="absolute inset-0 w-full h-full object-cover blur-[1px] opacity-75" />
                ) : i === 2 ? (
                  <img src={paolaReadingImg} alt="" className="absolute inset-0 w-full h-full object-cover blur-[1px] opacity-75" />
                ) : (
                  <s.icon className="w-8 h-8" />
                )}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border-2 border-primary text-primary font-display text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/56977929416?text=Hola%20Paola,%20quiero%20saber%20m%C3%A1s%20sobre%20el%20proceso%20de%20terapia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-gradient-cta text-primary-foreground font-body font-bold text-base px-8 py-4 rounded-full shadow-glow hover:opacity-90 hover:scale-105 transition-all"
          >
            Comienza tu Proceso Hoy →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
