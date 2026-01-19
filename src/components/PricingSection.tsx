import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const PricingSection = () => {
  const { t } = useTranslation();

  const plans = [
    {
      nameKey: "pricing.plans.oneTime.name",
      descKey: "pricing.plans.oneTime.description",
      priceKey: "pricing.plans.oneTime.price",
      unitKey: "pricing.plans.oneTime.unit",
      featuresKey: "pricing.plans.oneTime.features",
      popular: false,
    },
    {
      nameKey: "pricing.plans.regular.name",
      descKey: "pricing.plans.regular.description",
      priceKey: "pricing.plans.regular.price",
      unitKey: "pricing.plans.regular.unit",
      featuresKey: "pricing.plans.regular.features",
      popular: true,
    },
    {
      nameKey: "pricing.plans.office.name",
      descKey: "pricing.plans.office.description",
      priceKey: "pricing.plans.office.price",
      unitKey: "pricing.plans.office.unit",
      featuresKey: "pricing.plans.office.features",
      popular: false,
    },
  ];

  return (
    <section id="cennik" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("pricing.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("pricing.description")}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const features = t(plan.featuresKey, { returnObjects: true }) as string[];
            
            return (
              <div
                key={index}
                className={`relative rounded-2xl border p-6 flex flex-col ${
                  plan.popular
                    ? "border-primary bg-card shadow-xl scale-105 z-10"
                    : "border-border bg-card"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    {t("pricing.popular")}
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {t(plan.nameKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t(plan.descKey)}
                  </p>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      {t(plan.priceKey)}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{t(plan.unitKey)}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {Array.isArray(features) && features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a href="#kontakt">
                    {t("pricing.orderQuote")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          {t("pricing.note")}
        </p>
      </div>
    </section>
  );
};