import { Building2, Home, Sparkles, Warehouse, Hotel, Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Sprzątanie biur",
    description: "Kompleksowe utrzymanie czystości w biurach i przestrzeniach coworkingowych.",
    features: ["Codzienne sprzątanie", "Mycie okien", "Dezynfekcja powierzchni"],
    href: "/uslugi/sprzatanie-biur",
  },
  {
    icon: Home,
    title: "Sprzątanie mieszkań",
    description: "Regularne i jednorazowe sprzątanie mieszkań oraz domów jednorodzinnych.",
    features: ["Sprzątanie generalne", "Sprzątanie po remoncie", "Mycie okien"],
    href: "/uslugi/sprzatanie-mieszkan",
  },
  {
    icon: Warehouse,
    title: "Sprzątanie biurowców",
    description: "Profesjonalna obsługa dużych obiektów biurowych i kompleksów biznesowych.",
    features: ["Obsługa całodobowa", "Serwis dzienny", "Sprzątanie części wspólnych"],
    href: "/uslugi/sprzatanie-biurowcow",
  },
  {
    icon: Sparkles,
    title: "Sprzątanie po remoncie",
    description: "Dokładne usunięcie pyłu, brudu i resztek materiałów budowlanych.",
    features: ["Mycie okien", "Czyszczenie podłóg", "Usuwanie kleju i farby"],
    href: "/uslugi/sprzatanie-po-remoncie",
  },
  {
    icon: Hotel,
    title: "Sprzątanie hoteli",
    description: "Kompleksowa obsługa obiektów hotelowych i apartamentów na wynajem.",
    features: ["Sprzątanie pokoi", "Wymiana pościeli", "Pranie i prasowanie"],
    href: "/uslugi/sprzatanie-hoteli",
  },
  {
    icon: Factory,
    title: "Sprzątanie hal i magazynów",
    description: "Utrzymanie czystości w halach produkcyjnych i magazynowych.",
    features: ["Czyszczenie posadzek", "Mycie maszyn", "Utylizacja odpadów"],
    href: "/uslugi/sprzatanie-hal",
  },
];

export const ServicesSection = () => {
  return (
    <section id="uslugi" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nasze usługi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profesjonalne usługi sprzątania dla firm i osób prywatnych
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferujemy szeroki zakres usług sprzątających dostosowanych do Twoich potrzeb. 
            Każdą usługę wykonujemy z najwyższą starannością.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={index}
              className="card-elevated p-6 flex flex-col h-full group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary" asChild>
                <Link to={service.href}>
                  Zobacz szczegóły
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
