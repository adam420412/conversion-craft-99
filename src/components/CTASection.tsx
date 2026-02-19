import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-secondary-foreground/70 mb-10 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="#kontakt">
                {t("cta.button")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
              <a href="tel:+48576222699">
                <Phone className="w-5 h-5 mr-2" />
                {t("cta.phone")}
              </a>
            </Button>
          </div>

          {/* Trust badge */}
          <p className="mt-8 text-sm text-secondary-foreground/50">
            {t("cta.trust", "Ponad 500 zadowolonych klientów • Gwarancja jakości • Bezpłatna wycena")}
          </p>
        </div>
      </div>
    </section>
  );
};