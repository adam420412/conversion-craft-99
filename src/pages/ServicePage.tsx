import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PriceCalculator } from "@/components/PriceCalculator";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Home, 
  Warehouse, 
  Sparkles, 
  Hotel, 
  Factory,
  Clock,
  Shield,
  Leaf,
  Users,
  Star
} from "lucide-react";

const serviceIcons: Record<string, typeof Building2> = {
  "sprzatanie-biur": Building2,
  "sprzatanie-mieszkan": Home,
  "sprzatanie-biurowcow": Warehouse,
  "sprzatanie-po-remoncie": Sparkles,
  "sprzatanie-hoteli": Hotel,
  "sprzatanie-hal": Factory,
};

const serviceSlugs = [
  "sprzatanie-biur",
  "sprzatanie-mieszkan",
  "sprzatanie-biurowcow",
  "sprzatanie-po-remoncie",
  "sprzatanie-hoteli",
  "sprzatanie-hal",
];

export const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { t } = useTranslation();
  
  const isValidSlug = slug && serviceSlugs.includes(slug);

  // Scroll to top when navigating to service page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!isValidSlug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t("servicePage.serviceNotFound")}</h1>
          <Button asChild>
            <Link to="/">{t("servicePage.backToHome")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  const ServiceIcon = serviceIcons[slug];
  const serviceKey = `servicePage.services.${slug}`;
  
  const title = t(`${serviceKey}.title`);
  const metaTitle = t(`${serviceKey}.metaTitle`);
  const metaDescription = t(`${serviceKey}.metaDescription`);
  const heroDescription = t(`${serviceKey}.heroDescription`);
  const pricing = t(`${serviceKey}.pricing`);
  const benefits = t(`${serviceKey}.benefits`, { returnObjects: true }) as string[];
  const features = t(`${serviceKey}.features`, { returnObjects: true }) as { title: string; description: string }[];
  const process = t(`${serviceKey}.process`, { returnObjects: true }) as string[];

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://www.domblasku.pl/uslugi/${slug}`} />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="container-narrow mx-auto px-4 relative z-10">
              <div className="max-w-3xl">
                <Link 
                  to="/#uslugi" 
                  className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary mb-6 transition-colors"
                >
                  ← {t("servicePage.backToServices")}
                </Link>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <ServiceIcon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {t("servicePage.cleaningServices")}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  {title}
                </h1>
                
                <p className="text-xl text-secondary-foreground/80 mb-8">
                  {heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button variant="cta" size="xl" asChild>
                    <a href="#kontakt">
                      {t("servicePage.orderFreeQuote")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <div className="flex items-center gap-2 bg-secondary-foreground/10 px-6 py-3 rounded-lg">
                    <span className="text-2xl font-bold text-primary">{pricing}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="section-padding bg-background">
            <div className="container-narrow mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    {t("servicePage.benefitsTitle")}
                  </h2>
                  <div className="space-y-4">
                    {Array.isArray(benefits) && benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, label: t("servicePage.qualityGuarantee") },
                    { icon: Clock, label: t("servicePage.punctuality") },
                    { icon: Leaf, label: t("servicePage.ecoProducts") },
                    { icon: Users, label: t("servicePage.experiencedTeam") }
                  ].map((item, index) => (
                    <div key={index} className="card-elevated p-6 text-center">
                      <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="section-padding bg-muted/50">
            <div className="container-narrow mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t("servicePage.serviceIncludes")}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.isArray(features) && features.map((feature, index) => (
                  <div key={index} className="card-elevated p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="section-padding bg-background">
            <div className="container-narrow mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {t("servicePage.cooperationProcess")}
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto">
                {Array.isArray(process) && process.map((step, index) => (
                  <div key={index} className="flex gap-4 mb-6 last:mb-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="pt-2">
                      <p className="font-medium text-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <PriceCalculator />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicePage;
