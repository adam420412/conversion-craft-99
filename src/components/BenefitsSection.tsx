import { Check, TrendingUp, Heart, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export const BenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: TrendingUp,
      titleKey: "benefits.items.productivity.title",
      descKey: "benefits.items.productivity.description",
      fallbackTitle: "Zwiększona produktywność",
      fallbackDesc: "Czyste biuro to efektywni pracownicy. Badania pokazują, że czystość wpływa na koncentrację i motywację.",
    },
    {
      icon: Heart,
      titleKey: "benefits.items.health.title",
      descKey: "benefits.items.health.description",
      fallbackTitle: "Zdrowe środowisko",
      fallbackDesc: "Regularne sprzątanie eliminuje alergeny, kurz i bakterie, dbając o zdrowie Twoje i Twoich bliskich.",
    },
    {
      icon: Zap,
      titleKey: "benefits.items.time.title",
      descKey: "benefits.items.time.description",
      fallbackTitle: "Oszczędność czasu",
      fallbackDesc: "Skup się na tym, co ważne. My zajmiemy się sprzątaniem, a Ty zyskasz cenny czas dla siebie.",
    },
  ];

  const features = [
    t("benefits.features.flexible", "Elastyczne terminy sprzątania"),
    t("benefits.features.equipment", "Własny sprzęt i środki czystości"),
    t("benefits.features.insurance", "Ubezpieczenie od szkód"),
    t("benefits.features.team", "Stała ekipa sprzątająca"),
    t("benefits.features.invoice", "Faktura VAT"),
    t("benefits.features.nohidden", "Brak ukrytych kosztów"),
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Benefits cards */}
          <div className="space-y-6">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider">
              {t("benefits.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("benefits.title")}
            </h2>
            
            <div className="space-y-4 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {t(benefit.titleKey, benefit.fallbackTitle)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(benefit.descKey, benefit.fallbackDesc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Checklist */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t("benefits.included", "W cenie każdej usługi:")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-foreground">
                <strong className="text-primary">{t("benefits.guarantee.title", "Gwarancja satysfakcji:")}</strong> {t("benefits.guarantee.description", "Jeśli nie będziesz zadowolony z naszych usług, wrócimy i poprawimy bez dodatkowych opłat.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};