const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-xl font-bold text-background mb-3">
              Paola Paredes
            </h3>
            <p className="font-body text-sm leading-relaxed">
              Terapeuta complementaria. Acompaño tu proceso de transformación conectando cuerpo, mente y espíritu.
            </p>
          </div>

          <div>
            <h4 className="font-body font-bold text-background text-sm mb-4">Terapias</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>BioReprogramación</li>
              <li>Terapia de Respuesta Espiritual</li>
              <li>5 Leyes Biológicas</li>
              <li>Reestructuración Espiritual</li>
              <li>Psicogenealogía</li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-background text-sm mb-4">Contacto</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="mailto:p.paredes.mendez@gmail.com" className="hover:text-background transition-colors">
                  p.paredes.mendez@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/56977929416" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  +56 9 7792 9416
                </a>
              </li>
              <li>Presencial y Online</li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-bold text-background text-sm mb-4">Redes Sociales</h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="https://instagram.com/paola.cyc" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/18M4oaggvG/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@pao.terapeuta" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@paola.terapeuta.cyc" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center font-body text-xs">
          <p>© {new Date().getFullYear()} Paola Paredes — Terapeuta Complementaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
