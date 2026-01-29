import { useState, useEffect } from 'react';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';

interface Article {
  id: number;
  categoryKey: string; // Utilisation d'une clé pour la traduction
  title: { fr: string; en: string };
  date: string;
  image: string;
  excerpt: { fr: string; en: string };
  content: { fr: string; en: string };
}

export default function Blog() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const articles: Article[] = [
    {
      id: 1,
      categoryKey: "tips",
      title: {
        fr: "Rendement photovoltaïque : Pourquoi 30% de votre énergie s'évapore ?",
        en: "Solar Yield: Why is 30% of your energy vanishing?"
      },
      date: "15 Jan 2026",
      image: "rendement.png",
      excerpt: {
        fr: "L'accumulation de poussières fines crée un voile statique que la pluie ne peut rincer.",
        en: "Fine dust accumulation creates a static veil that rain cannot rinse away."
      },
      content: {
        fr: `<div class="space-y-6"><p>La pluie ne suffit pas à nettoyer vos panneaux...</p></div>`,
        en: `<div class="space-y-6"><p>Rain is not enough to clean your panels...</p></div>`
      }
    },
    {
        id: 2,
        categoryKey: "regulations",
        title: {
          fr: "Réglementation 2026 : Ce qui change pour le survol urbain",
          en: "2026 Regulations: What changes for urban flights"
        },
        date: "05 Jan 2026",
        image: "regle.png",
        excerpt: {
          fr: "Le passage définitif aux scénarios européens STS-01 est acté.",
          en: "The final transition to European STS-01 scenarios is now official."
        },
        content: {
          fr: `<p>La réglementation drone évolue...</p>`,
          en: `<p>Drone regulations are evolving...</p>`
        }
    }
  ];

  const categories = [
    { id: 'all', label: t('blog.categories.all') },
    { id: 'tips', label: t('blog.categories.tips') },
    { id: 'technology', label: t('blog.categories.technology') },
    { id: 'regulations', label: t('blog.categories.regulations') },
    { id: 'social', label: language === 'fr' ? 'Nos Réseaux' : 'Social Media' }
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.categoryKey === selectedCategory);

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-8 pt-32 max-w-5xl">
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-[#233B72] hover:text-[#f97316] font-black mb-8 transition-colors group uppercase tracking-widest text-sm"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {language === 'fr' ? 'Retour aux articles' : 'Back to articles'}
          </button>

          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img src={selectedArticle.image} alt={selectedArticle.title[language as 'fr' | 'en']} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-12">
              <h1 className="text-2xl md:text-5xl font-black text-[#233B72] mb-8 leading-tight uppercase tracking-tighter">
                {selectedArticle.title[language as 'fr' | 'en']}
              </h1>
              <div
                className="prose prose-lg max-w-none text-gray-700 font-medium"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content[language as 'fr' | 'en'] }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-black mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            {t('blog.title')}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg max-w-3xl mx-auto font-bold text-white italic">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm md:text-base font-black transition-all transform active:scale-95 shadow-sm uppercase tracking-wider ${
                cat.id === selectedCategory
                  ? 'bg-[#233B72] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#f97316] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {selectedCategory === 'social' ? (
          <div className="bg-white p-4 md:p-10 rounded-[3rem] shadow-2xl border border-gray-100 min-h-[600px]">
             <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-[#233B72] uppercase tracking-tighter">
                    {language === 'fr' ? 'Suivez nos interventions' : 'Follow our work'}
                </h2>
             </div>
             <div className="elfsight-app-36c77099-6ba2-4501-bf85-3cbb1a1869b7" data-elfsight-app-lazy></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-100 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={article.image} alt={article.title[language as 'fr' | 'en']} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-[#233B72] mb-4 group-hover:text-[#f97316] transition-colors leading-tight uppercase tracking-tight">
                    {article.title[language as 'fr' | 'en']}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 font-bold">{article.excerpt[language as 'fr' | 'en']}</p>
                  <div className="mt-auto flex items-center text-[#f97316] font-black text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    {t('blog.readMore')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
