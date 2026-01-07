import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Jak zamówić usługę sprzątania?",
    answer: "Wystarczy zadzwonić pod numer +48 123 456 789 lub wypełnić formularz kontaktowy na naszej stronie. Odpowiemy w ciągu 24 godzin i umówimy się na bezpłatną wycenę.",
  },
  {
    question: "Czy wycena jest bezpłatna?",
    answer: "Tak, wycena jest całkowicie bezpłatna i niezobowiązująca. Przyjedziemy, ocenimy zakres prac i przedstawimy szczegółową ofertę cenową.",
  },
  {
    question: "Jakie środki czystości stosujecie?",
    answer: "Używamy wyłącznie certyfikowanych, ekologicznych środków czystości, które są bezpieczne dla ludzi, zwierząt i środowiska. Na życzenie możemy również używać środków dostarczonych przez klienta.",
  },
  {
    question: "Czy macie własny sprzęt?",
    answer: "Tak, przyjeżdżamy z pełnym wyposażeniem - profesjonalne odkurzacze, mopy, środki czystości i wszystkie niezbędne akcesoria. Klient nie musi niczego zapewniać.",
  },
  {
    question: "Czy możecie sprzątać wieczorami lub w weekendy?",
    answer: "Oczywiście! Dostosowujemy się do potrzeb klienta. Sprzątamy w godzinach porannych, wieczornych, a także w weekendy i święta (bez dodatkowych opłat).",
  },
  {
    question: "Co jeśli nie będę zadowolony z usługi?",
    answer: "Oferujemy gwarancję satysfakcji. Jeśli efekt Cię nie zadowoli, wrócimy i poprawimy bez dodatkowych kosztów w ciągu 24 godzin od zgłoszenia.",
  },
  {
    question: "Czy wystawiacie faktury VAT?",
    answer: "Tak, jesteśmy zarejestrowanym płatnikiem VAT i wystawiamy faktury dla firm oraz rachunki dla osób prywatnych.",
  },
  {
    question: "Czy macie ubezpieczenie?",
    answer: "Tak, posiadamy pełne ubezpieczenie OC, które chroni zarówno nas, jak i naszych klientów na wypadek ewentualnych szkód podczas wykonywania usługi.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Header */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Pytania i odpowiedzi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Najczęściej zadawane pytania o sprzątanie
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Znajdź odpowiedzi na najczęstsze pytania dotyczące naszych usług sprzątania. 
              Jeśli nie znajdziesz odpowiedzi, skontaktuj się z nami.
            </p>
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Masz inne pytanie?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Skontaktuj się z nami telefonicznie lub mailowo. Chętnie odpowiemy na wszystkie Twoje pytania.
              </p>
              <a
                href="tel:+48123456789"
                className="text-primary font-semibold hover:underline"
              >
                +48 123 456 789
              </a>
            </div>
          </div>

          {/* Right column - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
