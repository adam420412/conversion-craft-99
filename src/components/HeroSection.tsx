import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const benefits = [
  "Bezpłatna wycena w 24h",
  "Ekologiczne środki czystości",
  "Wykwalifikowany personel",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-card/20 rounded-full animate-float stagger-2" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent/60 rounded-full animate-float stagger-3" />

      <div className="container-narrow relative z-10 mx-auto px-4 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-full px-4 py-2 mb-6 fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-card">
              Profesjonalne usługi sprzątające
            </span>
          </div>

          {/* H1 - Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6 fade-in stagger-1">
            Profesjonalne sprzątanie biur i mieszkań{" "}
            <span className="text-accent">w Twojej okolicy</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-card/80 mb-8 max-w-2xl fade-in stagger-2">
            Zaufaj ekspertom od czystości. Kompleksowe usługi sprzątania dla firm i klientów indywidualnych. 
            Gwarantujemy perfekcyjne efekty i elastyczne terminy.
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap gap-4 mb-10 fade-in stagger-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-card/90"
              >
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#kontakt">
                Zamów bezpłatną wycenę
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#uslugi">Zobacz nasze usługi</a>
            </Button>
          </div>

          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-card/20 fade-in stagger-4">
            <div className="flex flex-wrap items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-card">500+</div>
                <div className="text-sm text-card/70">Zadowolonych klientów</div>
              </div>
              <div className="w-px h-12 bg-card/20" />
              <div>
                <div className="text-3xl font-bold text-card">8 lat</div>
                <div className="text-sm text-card/70">Doświadczenia</div>
              </div>
              <div className="w-px h-12 bg-card/20 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-3xl font-bold text-card">100%</div>
                <div className="text-sm text-card/70">Gwarancja jakości</div>
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
