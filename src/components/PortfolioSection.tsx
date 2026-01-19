import { Button } from "@/components/ui/button";
import { ArrowRight, ImagePlus } from "lucide-react";
import { useTranslation } from "react-i18next";

// Placeholder slots for future photos from clients
const portfolioSlots = [
  {
    id: 1,
    categoryKey: "building",
    titlePlaceholder: "Biurowiec / Office Building",
    hasImage: false,
  },
  {
    id: 2,
    categoryKey: "apartment",
    titlePlaceholder: "Apartament / Apartment",
    hasImage: false,
  },
  {
    id: 3,
    categoryKey: "hotel",
    titlePlaceholder: "Hotel",
    hasImage: false,
  },
  {
    id: 4,
    categoryKey: "office",
    titlePlaceholder: "Biuro / Office",
    hasImage: false,
  },
  {
    id: 5,
    categoryKey: "industrial",
    titlePlaceholder: "Hala / Warehouse",
    hasImage: false,
  },
  {
    id: 6,
    categoryKey: "renovation",
    titlePlaceholder: "Po remoncie / Post-renovation",
    hasImage: false,
  },
];

export const PortfolioSection = () => {
  const { t } = useTranslation();

  return (
    <section id="realizacje" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("portfolio.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Portfolio grid with placeholder slots */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioSlots.map((slot) => (
            <article
              key={slot.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border"
            >
              {/* Placeholder Image Area */}
              <div className="h-56 bg-muted/80 flex flex-col items-center justify-center gap-4 border-b border-border">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <ImagePlus className="w-8 h-8 text-primary/60" />
                </div>
                <div className="text-center px-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    {t("portfolio.comingSoon")}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    {slot.titlePlaceholder}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {t(`contact.services.${slot.categoryKey}`)}
                </span>
                <p className="text-sm text-muted-foreground">
                  {t("portfolio.placeholder")}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <a href="#kontakt">
              {t("portfolio.becomeClient")}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};