import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import cleanOffice from "@/assets/clean-office.jpg";
import cleanApartment from "@/assets/clean-apartment.jpg";
import cleaningSupplies from "@/assets/cleaning-supplies.jpg";
import cleanLobby from "@/assets/clean-lobby.jpg";
import cleanHotel from "@/assets/clean-hotel.jpg";

const allPosts = [
  {
    id: 1,
    slug: "jak-utrzymac-czyste-biuro",
    title: "Jak utrzymać czyste biuro przez cały tydzień?",
    excerpt: "Poznaj sprawdzone metody, które pozwolą Ci zachować porządek w biurze bez codziennego sprzątania. Praktyczne wskazówki dla każdego managera i właściciela firmy.",
    content: "Utrzymanie czystości w biurze to wyzwanie, z którym mierzy się wiele firm...",
    image: cleanOffice,
    category: "Porady",
    author: "Anna Kowalska",
    date: "2024-01-15",
    readTime: "5 min",
  },
  {
    id: 2,
    slug: "ekologiczne-sprzatanie-domu",
    title: "Ekologiczne sprzątanie domu – naturalne środki czystości",
    excerpt: "Odkryj moc naturalnych środków czystości. Ocet, soda i cytryna mogą zdziałać cuda! Sprawdź nasze przepisy na domowe detergenty przyjazne środowisku.",
    content: "Coraz więcej osób decyduje się na ekologiczne sprzątanie...",
    image: cleaningSupplies,
    category: "Eko",
    author: "Marcin Nowak",
    date: "2024-01-10",
    readTime: "7 min",
  },
  {
    id: 3,
    slug: "sprzatanie-mieszkania-przed-swietami",
    title: "Sprzątanie mieszkania przed świętami – kompletny przewodnik",
    excerpt: "Święta tuż tuż! Przygotowaliśmy dla Ciebie kompletny przewodnik jak posprzątać mieszkanie przed przyjazdem gości i cieszyć się porządkiem.",
    content: "Święta to czas, kiedy chcemy, aby nasz dom wyglądał nienagannie...",
    image: cleanApartment,
    category: "Poradnik",
    author: "Katarzyna Wiśniewska",
    date: "2024-01-05",
    readTime: "10 min",
  },
  {
    id: 4,
    slug: "jak-wybrac-firme-sprzatajaca",
    title: "Jak wybrać firmę sprzątającą? 10 pytań, które musisz zadać",
    excerpt: "Wybór firmy sprzątającej to ważna decyzja. Przedstawiamy 10 kluczowych pytań, które pomogą Ci wybrać najlepszego partnera do współpracy.",
    content: "Wybór odpowiedniej firmy sprzątającej może być trudny...",
    image: cleanLobby,
    category: "Porady",
    author: "Piotr Zieliński",
    date: "2024-01-02",
    readTime: "8 min",
  },
  {
    id: 5,
    slug: "sprzatanie-hoteli-standardy",
    title: "Standardy sprzątania w hotelach – co musisz wiedzieć",
    excerpt: "Branża hotelarska wymaga najwyższych standardów czystości. Poznaj procedury i metody stosowane w najlepszych hotelach na świecie.",
    content: "Sprzątanie w hotelach to sztuka, która wymaga precyzji...",
    image: cleanHotel,
    category: "Branża",
    author: "Anna Kowalska",
    date: "2023-12-28",
    readTime: "6 min",
  },
  {
    id: 6,
    slug: "dezynfekcja-biura-covid",
    title: "Dezynfekcja biura – najlepsze praktyki post-COVID",
    excerpt: "Pandemia zmieniła nasze podejście do higieny. Dowiedz się, jak skutecznie dezynfekować przestrzeń biurową i chronić pracowników.",
    content: "Po pandemii COVID-19 dezynfekcja stała się priorytetem...",
    image: cleanOffice,
    category: "Zdrowie",
    author: "Marcin Nowak",
    date: "2023-12-20",
    readTime: "9 min",
  },
];

const categories = ["Wszystkie", "Porady", "Eko", "Poradnik", "Branża", "Zdrowie"];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog o Sprzątaniu | Porady i Poradniki | Dom Blasku</title>
        <meta
          name="description"
          content="Blog o profesjonalnym sprzątaniu. Porady ekspertów, poradniki, trendy w branży. Dowiedz się jak utrzymać czystość w domu i biurze."
        />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />

        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 bg-secondary">
            <div className="container-narrow mx-auto px-4">
              <div className="max-w-2xl">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Blog i poradnik
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
                  Porady ekspertów od sprzątania
                </h1>
                <p className="text-xl text-secondary-foreground/70 mb-8">
                  Dzielimy się wiedzą i doświadczeniem. Znajdziesz tu praktyczne porady,
                  triki i inspiracje dotyczące utrzymania czystości.
                </p>

                {/* Search */}
                <div className="relative max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Szukaj artykułów..."
                    className="pl-12 h-12 bg-card"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-8 bg-background border-b border-border">
            <div className="container-narrow mx-auto px-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === "Wszystkie"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Posts grid */}
          <section className="section-padding bg-background">
            <div className="container-narrow mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPosts.map((post) => (
                  <article key={post.id} className="card-elevated overflow-hidden group">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString("pl-PL")}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{post.author}</span>
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-primary font-medium text-sm hover:underline flex items-center gap-1"
                        >
                          Czytaj
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load more */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Załaduj więcej artykułów
                </Button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-secondary">
            <div className="container-narrow mx-auto text-center">
              <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
                Potrzebujesz profesjonalnego sprzątania?
              </h2>
              <p className="text-secondary-foreground/70 mb-8 max-w-2xl mx-auto">
                Skontaktuj się z nami i otrzymaj bezpłatną wycenę. Nasi eksperci są gotowi pomóc!
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/#kontakt">
                  Zamów bezpłatną wycenę
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
