import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PriceCalculator } from "@/components/PriceCalculator";
import { PricingSection } from "@/components/PricingSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Profesjonalne Sprzątanie Biur i Mieszkań | Dom Blasku</title>
        <meta 
          name="description" 
          content="Profesjonalne usługi sprzątania biur, mieszkań i biurowców. Bezpłatna wycena w 24h. Ekologiczne środki, doświadczony zespół. Zadzwoń!" 
        />
        <meta 
          name="keywords" 
          content="sprzątanie biur, sprzątanie mieszkań, sprzątanie biurowców, firma sprzątająca, usługi sprzątania, sprzątanie po remoncie, dom blasku" 
        />
        <link rel="canonical" href="https://www.domblasku.pl" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Profesjonalne Sprzątanie Biur i Mieszkań | Dom Blasku" />
        <meta property="og:description" content="Profesjonalne usługi sprzątania dla firm i osób prywatnych. Bezpłatna wycena w 24h." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dom Blasku - Profesjonalne Usługi Sprzątania",
            "description": "Profesjonalne usługi sprzątania biur, mieszkań i biurowców",
            "url": "https://www.domblasku.pl",
            "telephone": "+48576222699",
            "email": "kontakt@domblasku.pl",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ul. Czysta 15",
              "addressLocality": "Warszawa",
              "postalCode": "00-001",
              "addressCountry": "PL"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 08:00-18:00",
            "sameAs": [],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 52.2297,
                "longitude": 21.0122
              },
              "geoRadius": "50000"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <WhyUsSection />
          <BenefitsSection />
          <ServicesSection />
          <ProcessSection />
          <PriceCalculator />
          <PricingSection />
          <PortfolioSection />
          <TestimonialsSection />
          <BlogSection />
          <FAQSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
