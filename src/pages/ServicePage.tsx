import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
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

const servicesData: Record<string, {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  icon: typeof Building2;
  heroDescription: string;
  benefits: string[];
  features: { title: string; description: string }[];
  process: string[];
  pricing: string;
  keywords: string[];
}> = {
  "sprzatanie-biur": {
    id: "biuro",
    title: "Sprzątanie Biur",
    metaTitle: "Profesjonalne Sprzątanie Biur Warszawa | CleanPro",
    metaDescription: "Kompleksowe usługi sprzątania biur w Warszawie. Codzienne sprzątanie, dezynfekcja, mycie okien. Bezpłatna wycena. Zadzwoń!",
    icon: Building2,
    heroDescription: "Zapewniamy profesjonalne i regularne sprzątanie biur, które gwarantuje czyste i higieniczne środowisko pracy dla Twoich pracowników.",
    benefits: [
      "Zwiększona produktywność pracowników",
      "Pozytywne pierwsze wrażenie dla klientów",
      "Mniej dni chorobowych w zespole",
      "Dłuższa żywotność mebli i wyposażenia",
      "Elastyczne godziny sprzątania",
      "Stała, zaufana ekipa sprzątająca"
    ],
    features: [
      { title: "Codzienne sprzątanie", description: "Odkurzanie, mycie podłóg, opróżnianie koszy, wycieranie biurek i powierzchni." },
      { title: "Dezynfekcja powierzchni", description: "Regularna dezynfekcja klamek, włączników, telefonów i wspólnych powierzchni." },
      { title: "Sprzątanie kuchni biurowej", description: "Mycie naczyń, czyszczenie lodówek, ekspresów do kawy i mikrofalówek." },
      { title: "Mycie okien", description: "Regularne mycie okien wewnątrz i na zewnątrz budynku." },
      { title: "Serwis dzienny", description: "Uzupełnianie mydła, papieru toaletowego i ręczników w ciągu dnia." },
      { title: "Pranie wykładzin", description: "Okresowe głębokie czyszczenie wykładzin i tapicerek." }
    ],
    process: [
      "Bezpłatna wizyta i ocena potrzeb",
      "Przygotowanie indywidualnej oferty",
      "Ustalenie harmonogramu sprzątania",
      "Przydzielenie stałej ekipy",
      "Regularne kontrole jakości"
    ],
    pricing: "od 6 zł/m²",
    keywords: ["sprzątanie biur", "sprzątanie biura Warszawa", "firma sprzątająca biura", "usługi sprzątania biur"]
  },
  "sprzatanie-mieszkan": {
    id: "mieszkanie",
    title: "Sprzątanie Mieszkań",
    metaTitle: "Profesjonalne Sprzątanie Mieszkań Warszawa | CleanPro",
    metaDescription: "Sprzątanie mieszkań i domów w Warszawie. Jednorazowe i regularne usługi. Ekologiczne środki, elastyczne terminy. Zamów teraz!",
    icon: Home,
    heroDescription: "Oddaj nam sprzątanie, a Ty ciesz się czasem z rodziną. Zapewniamy kompleksowe sprzątanie mieszkań z dbałością o każdy detal.",
    benefits: [
      "Więcej czasu dla siebie i rodziny",
      "Czyste i higieniczne mieszkanie",
      "Ekologiczne środki bezpieczne dla dzieci i zwierząt",
      "Elastyczne terminy dopasowane do Ciebie",
      "Stała, zaufana osoba sprzątająca",
      "Gwarancja satysfakcji"
    ],
    features: [
      { title: "Kompleksowe sprzątanie", description: "Odkurzanie, mycie podłóg, wycieranie kurzu ze wszystkich powierzchni." },
      { title: "Łazienka i kuchnia", description: "Dokładne czyszczenie i dezynfekcja łazienki, mycie kuchni i sprzętów." },
      { title: "Mycie okien", description: "Mycie okien, parapetów i ram okiennych." },
      { title: "Prasowanie", description: "Na życzenie prasowanie ubrań i pościeli." },
      { title: "Zmiana pościeli", description: "Zmiana pościeli i ścielenie łóżek." },
      { title: "Sprzątanie po imprezie", description: "Ekspresowe sprzątanie po przyjęciach i imprezach." }
    ],
    process: [
      "Kontakt telefoniczny lub przez formularz",
      "Ustalenie zakresu prac i terminu",
      "Sprzątanie w umówionym czasie",
      "Kontrola jakości przed wyjściem",
      "Rozliczenie i faktura"
    ],
    pricing: "od 8 zł/m²",
    keywords: ["sprzątanie mieszkań", "sprzątanie domu Warszawa", "sprzątaczka Warszawa", "usługi sprzątania mieszkań"]
  },
  "sprzatanie-biurowcow": {
    id: "biurowiec",
    title: "Sprzątanie Biurowców",
    metaTitle: "Sprzątanie Biurowców i Kompleksów Biurowych | CleanPro Warszawa",
    metaDescription: "Profesjonalna obsługa dużych obiektów biurowych. Serwis 24/7, stałe ekipy, kompleksowe sprzątanie. Bezpłatna wycena!",
    icon: Warehouse,
    heroDescription: "Specjalizujemy się w kompleksowej obsłudze dużych obiektów biurowych i kompleksów biznesowych. Zapewniamy serwis na najwyższym poziomie.",
    benefits: [
      "Obsługa całodobowa 24/7",
      "Dedykowany manager obiektu",
      "Stałe, przeszkolone ekipy",
      "Raportowanie i kontrola jakości",
      "Szybka reakcja na zgłoszenia",
      "Kompleksowa obsługa facility"
    ],
    features: [
      { title: "Serwis dzienny", description: "Ciągła obsługa w godzinach pracy biurowca - uzupełnianie, sprzątanie, reagowanie." },
      { title: "Sprzątanie nocne", description: "Kompleksowe sprzątanie po godzinach pracy bez zakłócania funkcjonowania." },
      { title: "Części wspólne", description: "Utrzymanie czystości recepcji, korytarzy, wind i klatek schodowych." },
      { title: "Mycie fasad i okien", description: "Profesjonalne mycie okien i fasad z wykorzystaniem specjalistycznego sprzętu." },
      { title: "Pielęgnacja terenów zielonych", description: "Podlewanie roślin, pielęgnacja zieleni wewnątrz budynku." },
      { title: "Obsługa eventów", description: "Sprzątanie przed i po wydarzeniach firmowych w budynku." }
    ],
    process: [
      "Audyt obiektu i analiza potrzeb",
      "Przygotowanie kompleksowej oferty",
      "Negocjacja i podpisanie umowy",
      "Wdrożenie zespołu i procedur",
      "Regularne audyty jakości"
    ],
    pricing: "wycena indywidualna",
    keywords: ["sprzątanie biurowców", "obsługa biurowców", "facility management", "sprzątanie kompleksów biurowych"]
  },
  "sprzatanie-po-remoncie": {
    id: "remont",
    title: "Sprzątanie po Remoncie",
    metaTitle: "Sprzątanie po Remoncie i Budowie | CleanPro Warszawa",
    metaDescription: "Profesjonalne sprzątanie po remoncie, budowie i wykończeniach. Usuwanie pyłu, kleju, farby. Szybko i dokładnie. Zadzwoń!",
    icon: Sparkles,
    heroDescription: "Remont to dopiero połowa sukcesu. Pozwól nam dokończyć dzieło - usuniemy pył, brud i pozostałości po pracach budowlanych.",
    benefits: [
      "Dokładne usunięcie pyłu budowlanego",
      "Usuwanie resztek kleju i farby",
      "Mycie okien po remoncie",
      "Profesjonalny sprzęt i środki",
      "Szybka realizacja",
      "Gotowe do zamieszkania"
    ],
    features: [
      { title: "Usuwanie pyłu", description: "Dokładne odpylanie wszystkich powierzchni, szczelin i trudno dostępnych miejsc." },
      { title: "Mycie okien", description: "Usuwanie folii ochronnych, mycie szyb, ram i parapetów." },
      { title: "Czyszczenie podłóg", description: "Mycie i polerowanie podłóg, usuwanie resztek zaprawy i kleju." },
      { title: "Dezynfekcja łazienki", description: "Dokładne czyszczenie i dezynfekcja nowej łazienki." },
      { title: "Usuwanie zabrudzeń", description: "Usuwanie plam farby, kleju, silikonu z różnych powierzchni." },
      { title: "Wywóz odpadów", description: "Usuwanie resztek materiałów budowlanych i opakowań." }
    ],
    process: [
      "Ocena zakresu prac po remoncie",
      "Wycena na podstawie powierzchni i stanu",
      "Ustalenie terminu realizacji",
      "Kompleksowe sprzątanie",
      "Odbiór i kontrola jakości"
    ],
    pricing: "od 15 zł/m²",
    keywords: ["sprzątanie po remoncie", "sprzątanie po budowie", "sprzątanie poremontowe", "usuwanie pyłu budowlanego"]
  },
  "sprzatanie-hoteli": {
    id: "hotel",
    title: "Sprzątanie Hoteli",
    metaTitle: "Profesjonalne Sprzątanie Hoteli i Apartamentów | CleanPro",
    metaDescription: "Kompleksowa obsługa hoteli i apartamentów na wynajem. Sprzątanie pokoi, wymiana pościeli, pranie. Zadzwoń po ofertę!",
    icon: Hotel,
    heroDescription: "Zapewniamy kompleksową obsługę obiektów hotelowych i apartamentów na wynajem krótkookresowy. Twoi goście zasługują na perfekcyjną czystość.",
    benefits: [
      "Doświadczenie w branży hotelowej",
      "Elastyczne godziny pracy",
      "Szybkie turnover pokoi",
      "Wysokie standardy higieny",
      "Pranie i prasowanie w cenie",
      "Dedykowany koordynator"
    ],
    features: [
      { title: "Sprzątanie pokoi", description: "Kompleksowe sprzątanie pokoi hotelowych zgodnie z procedurami." },
      { title: "Wymiana pościeli", description: "Profesjonalna wymiana i ścielenie pościeli hotelowej." },
      { title: "Pranie i prasowanie", description: "Pranie pościeli, ręczników i prasowanie w naszej pralni." },
      { title: "Uzupełnianie amenities", description: "Uzupełnianie kosmetyków, herbat, kawy i materiałów informacyjnych." },
      { title: "Części wspólne", description: "Utrzymanie czystości recepcji, korytarzy i restauracji." },
      { title: "Sprzątanie ekspresowe", description: "Szybki turnover pokoju między gośćmi." }
    ],
    process: [
      "Analiza potrzeb hotelu",
      "Dostosowanie procedur do standardów",
      "Szkolenie dedykowanej ekipy",
      "Wdrożenie systemu jakości",
      "Regularne audyty i raporty"
    ],
    pricing: "wycena indywidualna",
    keywords: ["sprzątanie hoteli", "obsługa hoteli", "housekeeping", "sprzątanie apartamentów"]
  },
  "sprzatanie-hal": {
    id: "hala",
    title: "Sprzątanie Hal i Magazynów",
    metaTitle: "Sprzątanie Hal Produkcyjnych i Magazynów | CleanPro",
    metaDescription: "Profesjonalne sprzątanie hal produkcyjnych, magazynów i zakładów. Czyszczenie posadzek, mycie maszyn. Bezpłatna wycena!",
    icon: Factory,
    heroDescription: "Specjalizujemy się w utrzymaniu czystości w halach produkcyjnych, magazynach i zakładach przemysłowych. Bezpieczeństwo i czystość to nasz priorytet.",
    benefits: [
      "Doświadczenie w przemyśle",
      "Praca w systemie zmianowym",
      "Profesjonalny sprzęt przemysłowy",
      "Zgodność z przepisami BHP",
      "Utylizacja odpadów",
      "Elastyczne terminy"
    ],
    features: [
      { title: "Czyszczenie posadzek", description: "Mechaniczne mycie i polerowanie posadzek przemysłowych." },
      { title: "Mycie maszyn", description: "Czyszczenie maszyn i urządzeń produkcyjnych." },
      { title: "Sprzątanie regałów", description: "Odpylanie i czyszczenie regałów magazynowych." },
      { title: "Utylizacja odpadów", description: "Segregacja i utylizacja odpadów przemysłowych." },
      { title: "Mycie okien i świetlików", description: "Czyszczenie przeszkleń na wysokościach." },
      { title: "Dezynfekcja", description: "Dezynfekcja pomieszczeń socjalnych i sanitarnych." }
    ],
    process: [
      "Wizja lokalna i ocena ryzyka",
      "Przygotowanie planu sprzątania",
      "Szkolenie BHP ekipy",
      "Realizacja zgodnie z procedurami",
      "Raportowanie i kontrola"
    ],
    pricing: "od 4.5 zł/m²",
    keywords: ["sprzątanie hal", "sprzątanie magazynów", "sprzątanie przemysłowe", "czyszczenie hal produkcyjnych"]
  }
};

export const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Usługa nie znaleziona</h1>
          <Button asChild>
            <Link to="/">Wróć do strony głównej</Link>
          </Button>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords.join(", ")} />
        <link rel="canonical" href={`https://cleanpro.pl/uslugi/${slug}`} />
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
                  ← Wróć do wszystkich usług
                </Link>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <ServiceIcon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Usługi sprzątania
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  {service.title}
                </h1>
                
                <p className="text-xl text-secondary-foreground/80 mb-8">
                  {service.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button variant="cta" size="xl" asChild>
                    <a href="#kontakt">
                      Zamów bezpłatną wycenę
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <div className="flex items-center gap-2 bg-secondary-foreground/10 px-6 py-3 rounded-lg">
                    <span className="text-2xl font-bold text-primary">{service.pricing}</span>
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
                    Korzyści dla Ciebie
                  </h2>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, label: "Gwarancja jakości" },
                    { icon: Clock, label: "Punktualność" },
                    { icon: Leaf, label: "Eko środki" },
                    { icon: Users, label: "Doświadczony zespół" }
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
                  Co obejmuje usługa?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feature, index) => (
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
                  Jak wygląda współpraca?
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto">
                {service.process.map((step, index) => (
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
