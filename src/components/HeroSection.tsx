import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-cleaning-team.jpg";

export const HeroSection = () => {
  const { t } = useTranslation();

  const benefits = [
    t("hero.benefits.freeQuote", "Bezpłatna wycena w 24h"),
    t("hero.benefits.eco", "Ekologiczne środki czystości"),
    t("hero.benefits.qualified", "Wykwalifikowany personel"),
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={t("hero.imageAlt", "Profesjonalny zespół sprzątający")} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/30 rounded-full animate-float stagger-2" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary/60 rounded-full animate-float stagger-3" />

      <div className="container-narrow relative z-10 mx-auto px-4 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("hero.badge")}
            </span>
          </div>

          {/* H1 - Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 fade-in stagger-1">
            {t("hero.title")}{" "}
            <span className="text-primary">{t("hero.titleHighlight")}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-secondary-foreground/70 mb-8 max-w-2xl fade-in stagger-2">
            {t("hero.description")}
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap gap-4 mb-10 fade-in stagger-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-secondary-foreground/80"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-4">
            <Button variant="cta" size="xl" asChild>
              <a href="#kontakt">
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
              <a href="#uslugi">{t("hero.ctaSecondary")}</a>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-secondary-foreground/10 fade-in stagger-4">
            <div className="flex flex-wrap items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-secondary-foreground">500+</div>
                <div className="text-sm text-secondary-foreground/60">{t("hero.stats.clients")}</div>
              </div>
              <div className="w-px h-12 bg-secondary-foreground/20" />
              <div>
                <div className="text-3xl font-bold text-secondary-foreground">8 {t("hero.stats.experience", "lat")}</div>
                <div className="text-sm text-secondary-foreground/60">{t("hero.stats.experienceLabel", "Doświadczenia")}</div>
              </div>
              <div className="w-px h-12 bg-secondary-foreground/20 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-3xl font-bold text-secondary-foreground">100%</div>
                <div className="text-sm text-secondary-foreground/60">{t("hero.stats.quality", "Gwarancja jakości")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};