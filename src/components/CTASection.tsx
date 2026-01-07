import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-8 h-8 text-card" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card mb-6">
            Gotowy na profesjonalne sprzątanie?
          </h2>
          <p className="text-xl text-card/80 mb-10 max-w-2xl mx-auto">
            Zamów bezpłatną wycenę już dziś i przekonaj się, jak możemy pomóc 
            w utrzymaniu czystości Twojego biura lub mieszkania.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="#kontakt">
                Zamów bezpłatną wycenę
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+48123456789">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń teraz
              </a>
            </Button>
          </div>

          {/* Trust badge */}
          <p className="mt-8 text-sm text-card/60">
            Ponad 500 zadowolonych klientów • Gwarancja jakości • Bezpłatna wycena
          </p>
        </div>
      </div>
    </section>
  );
};
