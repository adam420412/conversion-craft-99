import { Shield, Clock, Leaf, Award, Users, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Gwarancja jakości",
    description: "Jeśli efekt Cię nie zadowoli, wrócimy i poprawimy bez dodatkowych kosztów.",
  },
  {
    icon: Clock,
    title: "Punktualność",
    description: "Szanujemy Twój czas. Zawsze przyjeżdżamy o ustalonej godzinie.",
  },
  {
    icon: Leaf,
    title: "Ekologiczne środki",
    description: "Używamy certyfikowanych środków bezpiecznych dla ludzi i środowiska.",
  },
  {
    icon: Award,
    title: "Doświadczony zespół",
    description: "Nasi pracownicy są przeszkoleni i posiadają wieloletnie doświadczenie.",
  },
  {
    icon: Users,
    title: "Indywidualne podejście",
    description: "Dostosowujemy usługi do Twoich potrzeb i preferencji.",
  },
  {
    icon: Headphones,
    title: "Wsparcie 24/7",
    description: "Jesteśmy dostępni, gdy nas potrzebujesz. Zadzwoń o każdej porze.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Dlaczego my
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zaufaj profesjonalistom od sprzątania
          </h2>
          <p className="text-muted-foreground text-lg">
            Od ponad 8 lat dbamy o czystość biur, mieszkań i lokali użytkowych. 
            Poznaj powody, dla których klienci nam ufają.
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
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
