import { useState, useEffect } from "react";
import logoPaola from "@/assets/logo-paola.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Terapias", href: "#terapias" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Valores", href: "#valores" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/90 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        <a href="#inicio">
          <img src={logoPaola} alt="Paola Paredes" className="h-16 sm:h-[4.5rem] w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/56977929416?text=Hola,%20quiero%20agendar%20una%20sesi%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-cta text-primary-foreground font-body font-bold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Agendar Sesión
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-body text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/56977929416?text=Hola,%20quiero%20agendar%20una%20sesi%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-cta text-primary-foreground font-body font-bold text-sm px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity"
            >
              Agendar Sesión
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
