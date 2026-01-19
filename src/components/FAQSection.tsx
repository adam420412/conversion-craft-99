import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export const FAQSection = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      questionKey: "faq.items.order.question",
      answerKey: "faq.items.order.answer",
      fallbackQ: "Jak zamówić usługę sprzątania?",
      fallbackA: "Wystarczy zadzwonić pod numer +48 123 456 789 lub wypełnić formularz kontaktowy na naszej stronie. Odpowiemy w ciągu 24 godzin i umówimy się na bezpłatną wycenę.",
    },
    {
      questionKey: "faq.items.quote.question",
      answerKey: "faq.items.quote.answer",
      fallbackQ: "Czy wycena jest bezpłatna?",
      fallbackA: "Tak, wycena jest całkowicie bezpłatna i niezobowiązująca. Przyjedziemy, ocenimy zakres prac i przedstawimy szczegółową ofertę cenową.",
    },
    {
      questionKey: "faq.items.products.question",
      answerKey: "faq.items.products.answer",
      fallbackQ: "Jakie środki czystości stosujecie?",
      fallbackA: "Używamy wyłącznie certyfikowanych, ekologicznych środków czystości, które są bezpieczne dla ludzi, zwierząt i środowiska.",
    },
    {
      questionKey: "faq.items.equipment.question",
      answerKey: "faq.items.equipment.answer",
      fallbackQ: "Czy macie własny sprzęt?",
      fallbackA: "Tak, przyjeżdżamy z pełnym wyposażeniem - profesjonalne odkurzacze, mopy, środki czystości i wszystkie niezbędne akcesoria.",
    },
    {
      questionKey: "faq.items.hours.question",
      answerKey: "faq.items.hours.answer",
      fallbackQ: "Czy możecie sprzątać wieczorami lub w weekendy?",
      fallbackA: "Oczywiście! Dostosowujemy się do potrzeb klienta. Sprzątamy w godzinach porannych, wieczornych, a także w weekendy i święta.",
    },
    {
      questionKey: "faq.items.satisfaction.question",
      answerKey: "faq.items.satisfaction.answer",
      fallbackQ: "Co jeśli nie będę zadowolony z usługi?",
      fallbackA: "Oferujemy gwarancję satysfakcji. Jeśli efekt Cię nie zadowoli, wrócimy i poprawimy bez dodatkowych kosztów w ciągu 24 godzin od zgłoszenia.",
    },
    {
      questionKey: "faq.items.invoice.question",
      answerKey: "faq.items.invoice.answer",
      fallbackQ: "Czy wystawiacie faktury VAT?",
      fallbackA: "Tak, jesteśmy zarejestrowanym płatnikiem VAT i wystawiamy faktury dla firm oraz rachunki dla osób prywatnych.",
    },
    {
      questionKey: "faq.items.insurance.question",
      answerKey: "faq.items.insurance.answer",
      fallbackQ: "Czy macie ubezpieczenie?",
      fallbackA: "Tak, posiadamy pełne ubezpieczenie OC, które chroni zarówno nas, jak i naszych klientów na wypadek ewentualnych szkód.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Header */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {t("faq.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("faq.title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("faq.description")}
            </p>
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                {t("faq.otherQuestion", "Masz inne pytanie?")}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t("faq.contactUs", "Skontaktuj się z nami telefonicznie lub mailowo. Chętnie odpowiemy na wszystkie Twoje pytania.")}
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
                    {t(faq.questionKey, faq.fallbackQ)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {t(faq.answerKey, faq.fallbackA)}
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