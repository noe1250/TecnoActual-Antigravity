import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="inline-flex items-baseline">
              <span className="font-bold text-2xl text-primary">tecno</span>
              <span className="font-extrabold text-2xl text-secondary">actual</span>
              <span className="font-extrabold text-secondary text-xs ml-0.5">.com</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Más de 20 años ayudando a empresas con soluciones de software por suscripción.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/marcas" className="text-background/80 hover:text-background transition-colors">
                  Marcas
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-background/80 hover:text-background transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/legal#privacidad" className="text-background/80 hover:text-background transition-colors">
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/legal#terminos" className="text-background/80 hover:text-background transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/legal#etica" className="text-background/80 hover:text-background transition-colors">
                  Código de Ética
                </Link>
              </li>
              <li>
                <Link to="/legal#devoluciones" className="text-background/80 hover:text-background transition-colors">
                  Devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Only email, phone, location */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:eduardoe@tecnoactual.com" className="text-background/80 hover:text-background transition-colors">
                  eduardoe@tecnoactual.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:+528181880009" className="text-background/80 hover:text-background transition-colors">
                  81-8188-0009
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span className="text-background/80">
                  Alianza Sur 303 int 316 Parque de Investigación e Innovación Tecnológica (PIIT) Apodaca, Nuevo Leon.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} TecnoActual.com. Todos los derechos reservados.
          </p>
          <p className="text-background/40 text-xs">
            Tu software en la versión más actual
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
