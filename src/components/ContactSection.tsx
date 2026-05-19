import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";

export const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service_type: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      labelKey: "contact.phone",
      value: "+48 576 222 699",
      href: "tel:+48576222699",
    },
    {
      icon: Mail,
      labelKey: "contact.email",
      value: "kontakt@domblasku.pl",
      href: "mailto:kontakt@domblasku.pl",
    },
    {
      icon: MapPin,
      labelKey: "contact.address",
      value: "Mikołaja Reja 20, 80-404 Gdańsk",
      href: "#",
    },
    {
      icon: Clock,
      labelKey: "contact.hours",
      value: "Pon-Pt: 8:00-18:00",
      href: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name,
        email: formData.email || "brak@email.pl",
        phone: formData.phone || null,
        service_type: formData.service_type || null,
        message: formData.message || "Zapytanie z formularza kontaktowego",
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: t("contact.form.success"),
        description: t("contact.form.successDescription"),
      });
      setFormData({ name: "", phone: "", email: "", service_type: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            {t("contact.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              {t("contact.contactData", "Dane kontaktowe")}
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {t(item.labelKey)}
                    </div>
                    <div className="font-medium text-foreground">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Google Maps */}
            <div className="h-64 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://maps.google.com/maps?q=Miko%C5%82aja+Reja+20%2C+80-404+Gda%C5%84sk&output=embed&hl=pl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("contact.mapTitle", "Lokalizacja na mapie")}
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t("contact.form.success")}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t("contact.form.successDescription")}
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    {t("contact.form.sendAnother")}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("contact.form.name")} *
                      </label>
                      <Input
                        type="text"
                        placeholder={t("contact.form.namePlaceholder")}
                        required
                        className="h-12"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t("contact.form.phone")} *
                      </label>
                      <Input
                        type="tel"
                        placeholder={t("contact.form.phonePlaceholder")}
                        required
                        className="h-12"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.email")}
                    </label>
                    <Input
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="h-12"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.service")}
                    </label>
                    <select 
                      className="w-full h-12 rounded-lg border border-input bg-background px-3 text-foreground"
                      value={formData.service_type}
                      onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                    >
                      <option value="">{t("contact.form.servicePlaceholder")}</option>
                      <option value="biuro">{t("contact.services.office")}</option>
                      <option value="mieszkanie">{t("contact.services.apartment")}</option>
                      <option value="biurowiec">{t("contact.services.building")}</option>
                      <option value="remont">{t("contact.services.renovation")}</option>
                      <option value="hotel">{t("contact.services.hotel")}</option>
                      <option value="hala">{t("contact.services.industrial")}</option>
                      <option value="inne">{t("contact.services.other")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" required className="mt-1" id="consent" />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      {t("contact.form.consent")} *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t("contact.form.sending")
                    ) : (
                      <>
                        {t("contact.form.submit")}
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};