import { Sparkles, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    uslugi: [
      { labelKey: "contact.services.office", href: "/uslugi/sprzatanie-biur" },
      { labelKey: "contact.services.apartment", href: "/uslugi/sprzatanie-mieszkan" },
      { labelKey: "contact.services.building", href: "/uslugi/sprzatanie-biurowcow" },
      { labelKey: "contact.services.renovation", href: "/uslugi/sprzatanie-po-remoncie" },
      { labelKey: "contact.services.hotel", href: "/uslugi/sprzatanie-hoteli" },
      { labelKey: "contact.services.industrial", href: "/uslugi/sprzatanie-hal" },
    ],
    firma: [
      { labelKey: "footer.aboutUs", href: "#" },
      { labelKey: "nav.portfolio", href: "/#realizacje" },
      { labelKey: "nav.testimonials", href: "/#opinie" },
      { labelKey: "blog.badge", href: "#" },
      { labelKey: "footer.career", href: "#" },
    ],
    pomoc: [
      { labelKey: "nav.faq", href: "/#faq" },
      { labelKey: "nav.pricing", href: "/#cennik" },
      { labelKey: "nav.calculator", href: "/#kalkulator" },
      { labelKey: "nav.contact", href: "/#kontakt" },
      { labelKey: "footer.privacyPolicy", href: "#" },
    ],
  };

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
              <span className="text-xl font-bold text-secondary-foreground">Dom Blasku</span>
            </Link>
            <p className="text-secondary-foreground/60 mb-6 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="space-y-3">
              <a href="tel:+48576222699" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +48 576 222 699
              </a>
              <a href="mailto:kontakt@domblasku.pl" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                kontakt@domblasku.pl
              </a>
              <a href="https://www.domblasku.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" />
                www.domblasku.pl
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-secondary-foreground font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {footerLinks.uslugi.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="hover:text-primary transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-secondary-foreground font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2">
              {footerLinks.firma.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-secondary-foreground font-semibold mb-4">{t("footer.help", "Pomoc")}</h4>
            <ul className="space-y-2">
              {footerLinks.pomoc.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary transition-colors">
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} Dom Blasku. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
              {t("footer.privacyPolicy")}
            </a>
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};