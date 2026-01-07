import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Właścicielka mieszkania",
    content: "Korzystam z usług CleanPro od roku. Fantastyczna jakość i punktualność. Polecam każdemu!",
    rating: 5,
  },
  {
    name: "Marek Nowak",
    role: "Dyrektor operacyjny, TechCorp",
    content: "Współpracujemy z CleanPro przy obsłudze naszego biurowca. Profesjonalizm na najwyższym poziomie.",
    rating: 5,
  },
  {
    name: "Katarzyna Wiśniewska",
    role: "Manager hotelu",
    content: "Niezawodni i elastyczni. Reagują na każdą potrzebę. Goście chwalą czystość pokoi.",
    rating: 5,
  },
  {
    name: "Piotr Zieliński",
    role: "Właściciel firmy",
    content: "Po kilku próbach z innymi firmami, w końcu znalazłem CleanPro. Jakość i cena idealne.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="opinie" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Opinie klientów
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Co mówią o nas klienci
          </h2>
          <p className="text-muted-foreground text-lg">
            Zaufało nam ponad 500 klientów. Poznaj ich opinie i przekonaj się, 
            dlaczego warto wybrać nasze usługi sprzątania.
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
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
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
              Dołącz do 500+ zadowolonych klientów
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
