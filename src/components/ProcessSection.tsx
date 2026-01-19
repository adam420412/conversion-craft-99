import { Phone, FileText, Calendar, Sparkles, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Phone,
      number: "01",
      titleKey: "process.steps.contact.title",
      descKey: "process.steps.contact.description",
      fallbackTitle: "Kontakt",
      fallbackDesc: "Zadzwoń lub wypełnij formularz. Odpowiemy w ciągu 24 godzin.",
    },
    {
      icon: FileText,
      number: "02",
      titleKey: "process.steps.quote.title",
      descKey: "process.steps.quote.description",
      fallbackTitle: "Bezpłatna wycena",
      fallbackDesc: "Przyjedziemy i ocenimy zakres prac. Przedstawimy szczegółową ofertę.",
    },
    {
      icon: Calendar,
      number: "03",
      titleKey: "process.steps.schedule.title",
      descKey: "process.steps.schedule.description",
      fallbackTitle: "Ustalenie terminu",
      fallbackDesc: "Wspólnie wybierzemy dogodny termin realizacji usługi.",
    },
    {
      icon: Sparkles,
      number: "04",
      titleKey: "process.steps.execution.title",
      descKey: "process.steps.execution.description",
      fallbackTitle: "Realizacja",
      fallbackDesc: "Nasz zespół wykonuje usługę zgodnie z ustaleniami.",
    },
    {
      icon: CheckCircle,
      number: "05",
      titleKey: "process.steps.completion.title",
      descKey: "process.steps.completion.description",
      fallbackTitle: "Odbiór i rozliczenie",
      fallbackDesc: "Sprawdzasz efekty, a my wystawiamy fakturę. Gotowe!",
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("process.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("process.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("process.description")}
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-card rounded-xl border border-border p-6 text-center relative z-10 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {t(step.titleKey, step.fallbackTitle)}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {t(step.descKey, step.fallbackDesc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};