import { Building2, Home, Sparkles, Warehouse, Hotel, Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Building2,
      titleKey: "services.office.title",
      descKey: "services.office.description",
      featuresKeys: ["services.office.features.daily", "services.office.features.windows", "services.office.features.disinfection"],
      fallbackFeatures: ["Codzienne sprzątanie", "Mycie okien", "Dezynfekcja powierzchni"],
      href: "/uslugi/sprzatanie-biur",
    },
    {
      icon: Home,
      titleKey: "services.apartment.title",
      descKey: "services.apartment.description",
      featuresKeys: ["services.apartment.features.general", "services.apartment.features.renovation", "services.apartment.features.windows"],
      fallbackFeatures: ["Sprzątanie generalne", "Sprzątanie po remoncie", "Mycie okien"],
      href: "/uslugi/sprzatanie-mieszkan",
    },
    {
      icon: Warehouse,
      titleKey: "services.building.title",
      descKey: "services.building.description",
      featuresKeys: ["services.building.features.24h", "services.building.features.day", "services.building.features.common"],
      fallbackFeatures: ["Obsługa całodobowa", "Serwis dzienny", "Sprzątanie części wspólnych"],
      href: "/uslugi/sprzatanie-biurowcow",
    },
    {
      icon: Sparkles,
      titleKey: "services.renovation.title",
      descKey: "services.renovation.description",
      featuresKeys: ["services.renovation.features.windows", "services.renovation.features.floors", "services.renovation.features.glue"],
      fallbackFeatures: ["Mycie okien", "Czyszczenie podłóg", "Usuwanie kleju i farby"],
      href: "/uslugi/sprzatanie-po-remoncie",
    },
    {
      icon: Hotel,
      titleKey: "services.hotel.title",
      descKey: "services.hotel.description",
      featuresKeys: ["services.hotel.features.rooms", "services.hotel.features.bedding", "services.hotel.features.laundry"],
      fallbackFeatures: ["Sprzątanie pokoi", "Wymiana pościeli", "Pranie i prasowanie"],
      href: "/uslugi/sprzatanie-hoteli",
    },
    {
      icon: Factory,
      titleKey: "services.industrial.title",
      descKey: "services.industrial.description",
      featuresKeys: ["services.industrial.features.floors", "services.industrial.features.machines", "services.industrial.features.waste"],
      fallbackFeatures: ["Czyszczenie posadzek", "Mycie maszyn", "Utylizacja odpadów"],
      href: "/uslugi/sprzatanie-hal",
    },
  ];

  return (
    <section id="uslugi" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("services.description")}
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
                {t(service.titleKey)}
              </h3>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {t(service.descKey)}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.fallbackFeatures.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t(service.featuresKeys[fIndex], feature)}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary" asChild>
                <Link to={service.href}>
                  {t("services.viewDetails")}
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