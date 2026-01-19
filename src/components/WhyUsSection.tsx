import { Shield, Clock, Leaf, Award, Users, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";

export const WhyUsSection = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Shield,
      titleKey: "whyUs.reasons.guarantee.title",
      descKey: "whyUs.reasons.guarantee.description",
      fallbackTitle: "Gwarancja jakości",
      fallbackDesc: "Jeśli efekt Cię nie zadowoli, wrócimy i poprawimy bez dodatkowych kosztów.",
    },
    {
      icon: Clock,
      titleKey: "whyUs.reasons.punctuality.title",
      descKey: "whyUs.reasons.punctuality.description",
      fallbackTitle: "Punktualność",
      fallbackDesc: "Szanujemy Twój czas. Zawsze przyjeżdżamy o ustalonej godzinie.",
    },
    {
      icon: Leaf,
      titleKey: "whyUs.reasons.eco.title",
      descKey: "whyUs.reasons.eco.description",
      fallbackTitle: "Ekologiczne środki",
      fallbackDesc: "Używamy certyfikowanych środków bezpiecznych dla ludzi i środowiska.",
    },
    {
      icon: Award,
      titleKey: "whyUs.reasons.experience.title",
      descKey: "whyUs.reasons.experience.description",
      fallbackTitle: "Doświadczony zespół",
      fallbackDesc: "Nasi pracownicy są przeszkoleni i posiadają wieloletnie doświadczenie.",
    },
    {
      icon: Users,
      titleKey: "whyUs.reasons.individual.title",
      descKey: "whyUs.reasons.individual.description",
      fallbackTitle: "Indywidualne podejście",
      fallbackDesc: "Dostosowujemy usługi do Twoich potrzeb i preferencji.",
    },
    {
      icon: Headphones,
      titleKey: "whyUs.reasons.support.title",
      descKey: "whyUs.reasons.support.description",
      fallbackTitle: "Wsparcie 24/7",
      fallbackDesc: "Jesteśmy dostępni, gdy nas potrzebujesz. Zadzwoń o każdej porze.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("whyUs.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("whyUs.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("whyUs.description")}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card-elevated p-6 group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t(reason.titleKey, reason.fallbackTitle)}
              </h3>
              <p className="text-muted-foreground">
                {t(reason.descKey, reason.fallbackDesc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};