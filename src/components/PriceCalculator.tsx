import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, ArrowRight, Home, Building2, Warehouse, Sparkles, RotateCcw } from "lucide-react";
import { useTranslation } from "react-i18next";

export const PriceCalculator = () => {
  const { t } = useTranslation();

  const serviceTypes = [
    { id: "mieszkanie", labelKey: "calculator.services.apartment", icon: Home, basePrice: 8, minArea: 30, maxArea: 200 },
    { id: "biuro", labelKey: "calculator.services.office", icon: Building2, basePrice: 6, minArea: 50, maxArea: 500 },
    { id: "biurowiec", labelKey: "calculator.services.building", icon: Warehouse, basePrice: 4.5, minArea: 200, maxArea: 2000 },
    { id: "remont", labelKey: "calculator.services.renovation", icon: Sparkles, basePrice: 15, minArea: 30, maxArea: 300 },
  ];

  const frequencyOptions = [
    { id: "jednorazowo", labelKey: "calculator.frequencies.once", discount: 0 },
    { id: "tygodniowo", labelKey: "calculator.frequencies.weekly", discount: 20 },
    { id: "dwutygodniowo", labelKey: "calculator.frequencies.biweekly", discount: 15 },
    { id: "miesiecznie", labelKey: "calculator.frequencies.monthly", discount: 10 },
  ];

  const [selectedService, setSelectedService] = useState(serviceTypes[0]);
  const [area, setArea] = useState([selectedService.minArea + 20]);
  const [frequency, setFrequency] = useState(frequencyOptions[0]);

  const calculatePrice = () => {
    const baseTotal = area[0] * selectedService.basePrice;
    const discountAmount = (baseTotal * frequency.discount) / 100;
    return Math.round(baseTotal - discountAmount);
  };

  const handleServiceChange = (service: typeof serviceTypes[0]) => {
    setSelectedService(service);
    setArea([Math.min(Math.max(area[0], service.minArea), service.maxArea)]);
  };

  const resetCalculator = () => {
    setSelectedService(serviceTypes[0]);
    setArea([serviceTypes[0].minArea + 20]);
    setFrequency(frequencyOptions[0]);
  };

  return (
    <section id="kalkulator" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("calculator.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("calculator.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("calculator.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Calculator form */}
              <div className="lg:col-span-3 p-8 space-y-8">
                {/* Service type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    1. {t("calculator.serviceType")}
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {serviceTypes.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceChange(service)}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                          selectedService.id === service.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          selectedService.id === service.id
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          <service.icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-foreground text-sm">
                          {t(service.labelKey, service.id)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area slider */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    2. {t("calculator.area")}: <span className="text-primary">{area[0]} m²</span>
                  </label>
                  <div className="px-2">
                    <Slider
                      value={area}
                      onValueChange={setArea}
                      min={selectedService.minArea}
                      max={selectedService.maxArea}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>{selectedService.minArea} m²</span>
                      <span>{selectedService.maxArea} m²</span>
                    </div>
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    3. {t("calculator.frequency")}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {frequencyOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setFrequency(option)}
                        className={`p-3 rounded-lg border-2 transition-all text-center ${
                          frequency.id === option.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="block text-sm font-medium text-foreground">
                          {t(option.labelKey, option.id)}
                        </span>
                        {option.discount > 0 && (
                          <span className="block text-xs text-primary mt-1">
                            -{option.discount}%
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset button */}
                <button
                  onClick={resetCalculator}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  {t("calculator.reset")}
                </button>
              </div>

              {/* Price display */}
              <div className="lg:col-span-2 bg-secondary p-8 flex flex-col justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-primary" />
                </div>
                
                <p className="text-secondary-foreground/80 text-sm mb-2">
                  {t("calculator.estimatedPrice")}
                </p>
                
                <div className="mb-2">
                  <span className="text-5xl font-bold text-secondary-foreground">
                    {calculatePrice()}
                  </span>
                  <span className="text-2xl text-secondary-foreground/80 ml-1">zł</span>
                </div>
                
                <p className="text-secondary-foreground/60 text-sm mb-6">
                  {frequency.id === "jednorazowo" 
                    ? t("calculator.perService", "za jednorazową usługę") 
                    : t("calculator.perVisit")}
                </p>

                {frequency.discount > 0 && (
                  <div className="bg-primary/20 rounded-lg px-4 py-2 mb-6 inline-block mx-auto">
                    <span className="text-sm font-medium text-primary">
                      {t("calculator.savings", { discount: frequency.discount })}
                    </span>
                  </div>
                )}

                <Button variant="cta" size="xl" className="w-full" asChild>
                  <a href="#kontakt">
                    {t("calculator.orderQuote")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <p className="text-xs text-secondary-foreground/50 mt-4">
                  {t("calculator.note", "* Dokładna cena może się różnić w zależności od zakresu prac")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};