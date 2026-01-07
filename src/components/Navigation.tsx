import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { href: "/#uslugi", label: "Usługi sprzątania" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#kalkulator", label: "Kalkulator" },
  { href: "/#realizacje", label: "Realizacje" },
  { href: "/#opinie", label: "Opinie klientów" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#") && location.pathname !== "/") {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? "text-foreground" : "text-secondary-foreground"}`}>
              CleanPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-muted-foreground" : "text-secondary-foreground/80"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+48123456789"
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-secondary-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              +48 123 456 789
            </a>
            <Button variant="cta" size="default" asChild>
              <a href="#kontakt">Bezpłatna wycena</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-foreground" : "text-secondary-foreground"}`}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="container py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="cta" className="w-full" asChild>
                  <a href="#kontakt">Bezpłatna wycena</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
