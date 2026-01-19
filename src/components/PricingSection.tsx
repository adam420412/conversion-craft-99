import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Sprzątanie jednorazowe",
    description: "Idealne na specjalne okazje lub jako próba naszych usług",
    price: "od 150 zł",
    unit: "za usługę",
    features: [
      "Sprzątanie wszystkich pomieszczeń",
      "Mycie łazienek i kuchni",
      "Odkurzanie i mycie podłóg",
      "Usuwanie kurzu",
      "Opróżnianie koszy",
    ],
    popular: false,
  },
  {
    name: "Sprzątanie regularne",
    description: "Najlepsza opcja dla utrzymania stałej czystości",
    price: "od 120 zł",
    unit: "za wizytę",
    features: [
      "Wszystko z pakietu jednorazowego",
      "Stała ekipa sprzątająca",
      "Elastyczne terminy",
      "10% zniżki na wszystkie usługi",
      "Priorytetowe terminy",
      "Dedykowany opiekun klienta",
    ],
    popular: true,
  },
  {
    name: "Sprzątanie biur",
    description: "Kompleksowa obsługa przestrzeni biurowych",
    price: "Wycena indywidualna",
    unit: "za miesiąc",
    features: [
      "Codzienne sprzątanie",
      "Serwis dzienny",
      "Dezynfekcja powierzchni",
      "Elastyczne godziny pracy",
      "Stała ekipa sprzątająca",
      "Dedykowany opiekun klienta",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="cennik" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Cennik usług sprzątania
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparentne ceny, brak ukrytych kosztów
          </h2>
          <p className="text-muted-foreground text-lg">
            Wybierz pakiet dopasowany do Twoich potrzeb. Każda wycena jest indywidualna 
            i zależy od powierzchni oraz zakresu prac.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
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
                  Najpopularniejszy
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{plan.unit}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
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
                  Zamów wycenę
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          * Podane ceny są orientacyjne. Dokładna wycena zależy od powierzchni, 
          zakresu prac i lokalizacji. Skontaktuj się z nami po bezpłatną wycenę.
        </p>
      </div>
    </section>
  );
};
