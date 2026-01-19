import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      nameKey: "testimonials.items.anna.name",
      roleKey: "testimonials.items.anna.role",
      contentKey: "testimonials.items.anna.content",
      fallbackName: "Anna Kowalska",
      fallbackRole: "Właścicielka mieszkania",
      fallbackContent: "Korzystam z usług CleanPro od roku. Fantastyczna jakość i punktualność. Polecam każdemu!",
      rating: 5,
    },
    {
      nameKey: "testimonials.items.marek.name",
      roleKey: "testimonials.items.marek.role",
      contentKey: "testimonials.items.marek.content",
      fallbackName: "Marek Nowak",
      fallbackRole: "Dyrektor operacyjny, TechCorp",
      fallbackContent: "Współpracujemy z CleanPro przy obsłudze naszego biurowca. Profesjonalizm na najwyższym poziomie.",
      rating: 5,
    },
    {
      nameKey: "testimonials.items.katarzyna.name",
      roleKey: "testimonials.items.katarzyna.role",
      contentKey: "testimonials.items.katarzyna.content",
      fallbackName: "Katarzyna Wiśniewska",
      fallbackRole: "Manager hotelu",
      fallbackContent: "Niezawodni i elastyczni. Reagują na każdą potrzebę. Goście chwalą czystość pokoi.",
      rating: 5,
    },
    {
      nameKey: "testimonials.items.piotr.name",
      roleKey: "testimonials.items.piotr.role",
      contentKey: "testimonials.items.piotr.content",
      fallbackName: "Piotr Zieliński",
      fallbackRole: "Właściciel firmy",
      fallbackContent: "Po kilku próbach z innymi firmami, w końcu znalazłem CleanPro. Jakość i cena idealne.",
      rating: 5,
    },
  ];

  return (
    <section id="opinie" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground mb-6 relative z-10">
                "{t(testimonial.contentKey, testimonial.fallbackContent)}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {t(testimonial.nameKey, testimonial.fallbackName).charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {t(testimonial.nameKey, testimonial.fallbackName)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(testimonial.roleKey, testimonial.fallbackRole)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-primary">
                    {String.fromCharCode(65 + i)}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-foreground ml-2">
              {t("testimonials.join", "Dołącz do 500+ zadowolonych klientów")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};