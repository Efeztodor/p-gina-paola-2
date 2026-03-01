import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Espacio de transformación y terapias complementarias"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        <h1 className="sr-only">Paola Paredes</h1>
        <h2 className="sr-only">Terapias Complementarias</h2>

        <span className="inline-block font-body text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-primary mb-6 animate-fade-in">
          Terapias Complementarias
        </span>

        <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 animate-fade-up text-foreground">
          Evolucionar en conciencia{" "}
          <em className="text-gradient not-italic">de lo que somos</em>
        </p>

        <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Libera bloqueos emocionales, patrones heredados y energías que te limitan. 
          Sesiones presenciales y online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://wa.me/56977929416?text=Hola,%20quiero%20agendar%20una%20sesi%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-cta text-primary-foreground font-body font-bold text-base px-8 py-4 rounded-full shadow-glow hover:opacity-90 hover:scale-105 transition-all"
          >
            Agenda tu Sesión Ahora →
          </a>
          <a
            href="#terapias"
            className="bg-card/80 backdrop-blur-sm text-foreground font-body font-bold text-base px-8 py-4 rounded-full border border-border hover:bg-card transition-all"
          >
            Conocer Terapias
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-muted-foreground font-body text-sm animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2">
            <span className="text-gold text-lg">★★★★★</span>
            <span>+3000 sesiones realizadas</span>
          </div>
          <span className="hidden sm:inline text-border">|</span>
          <span>Presencial y Online</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Chile y el mundo</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
