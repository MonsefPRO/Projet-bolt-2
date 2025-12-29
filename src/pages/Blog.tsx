import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';

export default function Blog() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t('blog.categories.all'));

  const articles = [
    {
      id: 'entretien-facade-pourquoi',
      title: t('blog.articles.article1.title'),
      excerpt: t('blog.articles.article1.excerpt'),
      category: t('blog.categories.tips'),
      date: t('blog.articles.article1.date'),
      author: t('blog.articles.article1.author'),
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'drone-vs-traditionnel',
      title: t('blog.articles.article2.title'),
      excerpt: t('blog.articles.article2.excerpt'),
      category: t('blog.categories.technology'),
      date: t('blog.articles.article2.date'),
      author: t('blog.articles.article2.author'),
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'reglementation-drone',
      title: t('blog.articles.article3.title'),
      excerpt: t('blog.articles.article3.excerpt'),
      category: t('blog.categories.regulations'),
      date: t('blog.articles.article3.date'),
      author: t('blog.articles.article3.author'),
      image: 'https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'mousse-toiture-dangers',
      title: t('blog.articles.article4.title'),
      excerpt: t('blog.articles.article4.excerpt'),
      category: t('blog.categories.tips'),
      date: t('blog.articles.article4.date'),
      author: t('blog.articles.article4.author'),
      image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'choisir-prestataire',
      title: t('blog.articles.article5.title'),
      excerpt: t('blog.articles.article5.excerpt'),
      category: t('blog.categories.guides'),
      date: t('blog.articles.article5.date'),
      author: t('blog.articles.article5.author'),
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'innovation-drone-2025',
      title: t('blog.articles.article6.title'),
      excerpt: t('blog.articles.article6.excerpt'),
      category: t('blog.categories.technology'),
      date: t('blog.articles.article6.date'),
      author: t('blog.articles.article6.author'),
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'perte-energie-panneaux-sales',
      title: t('blog.articles.article7.title'),
      excerpt: t('blog.articles.article7.excerpt'),
      category: t('blog.categories.tips'),
      date: t('blog.articles.article7.date'),
      author: t('blog.articles.article7.author'),
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'cout-panneaux-non-entretenus',
      title: t('blog.articles.article8.title'),
      excerpt: t('blog.articles.article8.excerpt'),
      category: t('blog.categories.guides'),
      date: t('blog.articles.article8.date'),
      author: t('blog.articles.article8.author'),
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = [t('blog.categories.all'), t('blog.categories.tips'), t('blog.categories.technology'), t('blog.categories.regulations'), t('blog.categories.guides')];

  const filteredArticles = selectedCategory === t('blog.categories.all')
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div
        className="relative bg-gradient-to-br from-gray-800 to-gray-900 py-32 pt-40 overflow-hidden"
        style={{
          backgroundImage: 'url(/design_sans_titre.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/60"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">{t('blog.title')}</h1>
          <p className="text-2xl text-gray-100">{t('blog.subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                cat === selectedCategory
                  ? 'bg-sky-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-sky-100 hover:text-sky-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center text-sky-600 font-medium group-hover:gap-2 transition-all">
                  {t('blog.readMore')}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
