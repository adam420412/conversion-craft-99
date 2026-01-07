import { Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  uslugi: [
    { label: "Sprzątanie biur", href: "/uslugi/sprzatanie-biur" },
    { label: "Sprzątanie mieszkań", href: "/uslugi/sprzatanie-mieszkan" },
    { label: "Sprzątanie biurowców", href: "/uslugi/sprzatanie-biurowcow" },
    { label: "Sprzątanie po remoncie", href: "/uslugi/sprzatanie-po-remoncie" },
    { label: "Sprzątanie hoteli", href: "/uslugi/sprzatanie-hoteli" },
    { label: "Sprzątanie hal", href: "/uslugi/sprzatanie-hal" },
  ],
  firma: [
    { label: "O nas", href: "#" },
    { label: "Realizacje", href: "/#realizacje" },
    { label: "Opinie klientów", href: "/#opinie" },
    { label: "Blog", href: "#" },
    { label: "Kariera", href: "#" },
  ],
  pomoc: [
    { label: "FAQ", href: "/#faq" },
    { label: "Cennik", href: "/#cennik" },
    { label: "Kalkulator cen", href: "/#kalkulator" },
    { label: "Kontakt", href: "/#kontakt" },
    { label: "Polityka prywatności", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground/80">
      <div className="container-narrow mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-secondary-foreground">CleanPro</span>
            </Link>
            <p className="text-secondary-foreground/60 mb-6 max-w-sm">
              Profesjonalne usługi sprzątania dla firm i osób prywatnych. 
              Zaufaj ekspertom od czystości.
            </p>
            <div className="space-y-3">
              <a href="tel:+48123456789" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +48 123 456 789
              </a>
              <a href="mailto:kontakt@cleanpro.pl" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                kontakt@cleanpro.pl
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                ul. Czysta 15, 00-001 Warszawa
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-secondary-foreground font-semibold mb-4">Usługi sprzątania</h4>
            <ul className="space-y-2">
              {footerLinks.uslugi.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-secondary-foreground font-semibold mb-4">Firma</h4>
            <ul className="space-y-2">
              {footerLinks.firma.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-secondary-foreground font-semibold mb-4">Pomoc</h4>
            <ul className="space-y-2">
              {footerLinks.pomoc.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © 2024 CleanPro. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
