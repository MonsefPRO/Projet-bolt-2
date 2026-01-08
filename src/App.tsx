import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Droplets, Shield, Clock, Award, Mail, Phone, MapPin, ChevronRight, ChevronDown, Star, TrendingUp, Users, ChevronLeft, Zap, BarChart3, Play } from 'lucide-react';
import { AnimatedCounter } from './components/AnimatedCounter';
import CookieBanner from './components/CookieBanner';
import DroneBenefits from './components/DroneBenefits';
import CertificationsSection from './components/CertificationsSection';
import { useLanguage } from './contexts/LanguageContext';
import { Hover3DCard } from './components/Hover3DCard';
import { ScrollReveal } from './components/ScrollReveal';
import { VideoModal } from './components/VideoModal';
import Header from './components/Header';

function App() {
  const { t } = useLanguage();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<{[key: number]: boolean}>({});

  const heroImages = [
    { src: '/rony.jpg', alt: 'Expert drone Ellipsys' },
    { src: '/ares.png', alt: 'Drone ARES' },
    { src: '/abateur_de_frelons.png', alt: 'Abatteur de frelons' },
    { src: '/rony2.jpg', alt: 'Expert drone en action' },
    { src: '/chronos.jpg', alt: 'Drone Chronos' },
    { src: '/rony4.jpg', alt: 'Expert drone Ellipsys' },
    { src: '/chronos2.jpg', alt: 'Drone Chronos 2' },
    { src: '/rony5.jpg', alt: 'Expert drone Ellipsys' }
  ];

  const testimonials = [
    {
      text: "Service exceptionnel ! Le nettoyage de notre entrepôt a été réalisé en un temps record. Aucune interruption de notre activité.",
      name: "Jean Martin",
      role: "Directeur logistique, Société Industrie+",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Technologie impressionnante et résultats impeccables. Notre façade n'a jamais été aussi propre. L'équipe est pro.",
      name: "Sophie Dubois",
      role: "Syndic, Résidence Le Parc",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Solution innovante et écologique. Nous avons économisé près de 40% par rapport à un prestataire traditionnel.",
      name: "Pierre Lefebvre",
      role: "Gérant, Centre Commercial Horizon",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-[#EFF8FF] overflow-x-hidden">
      <CookieBanner />
      <Header />

      <main>
        {/* SECTION HERO : HAUTEUR RÉDUITE SUR MOBILE (h-[60vh]) */}
        <section id="accueil" className="h-[60vh] md:min-h-screen pt-20 md:pt-32 pb-12 relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 via-blue-900/10 to-black/30 z-10"></div>
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentHeroImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h1 className="text-2xl sm:text-4xl md:text-7xl font-extrabold text-white mb-4 leading-tight drop-shadow-2xl">
                  {t('hero.title1')} <br className="md:hidden" /> {t('hero.title2')}
                </h1>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
                  <Link to="/devis" className="w-full sm:w-auto bg-brand-orange-500 text-white px-6 py-3 rounded-xl font-bold text-sm md:text-lg shadow-xl active:scale-95 flex items-center justify-center gap-2">
                    {t('hero.cta')}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <button onClick={() => setIsVideoModalOpen(true)} className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/50 text-white px-6 py-3 rounded-xl font-bold text-sm md:text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    <Play className="w-4 h-4 fill-current" /> Démo
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CertificationsSection />
        
        {/* MODIFICATION : COMPOSANT DroneBenefits AVEC ACCORDÉONS DANS LE FICHIER COMPOSANT */}
        <DroneBenefits />

        {/* SECTION SERVICES PRINCIPAUX : 2X2 SUR MOBILE */}
        <section className="py-12 md:py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10 md:mb-20">
              <h2 className="text-2xl md:text-5xl font-bold text-[#334786] mb-4">
                Nos prestations <br className="md:hidden" /> principales
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
              {[
                { id: '01', title: 'Façade', color: 'border-sky-500', link: '/prestations/nettoyage-facade' },
                { id: '02', title: 'Toiture', color: 'border-green-500', link: '/prestations/demoussage' },
                { id: '03', title: 'Frelons', color: 'border-red-500', link: '/prestations/elimination-frelons' },
                { id: '04', title: 'Solaire', color: 'border-amber-500', link: '/prestations' }
              ].map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Link to={s.link} className="block group h-full">
                    <div className={`bg-gray-50 p-4 md:p-8 rounded-2xl md:rounded-3xl border-t-4 md:border-t-8 ${s.color} shadow-sm hover:shadow-xl transition-all h-full flex flex-col items-center text-center`}>
                      <span className="text-xl md:text-4xl font-black text-gray-200 mb-2 md:mb-4">{s.id}</span>
                      <h3 className="text-xs md:text-xl font-bold text-[#334786]">{s.title}</h3>
                      <div className="hidden md:flex mt-4 items-center text-sky-600 font-bold text-sm">
                        Voir <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGES ORIGINAUX */}
        <section id="avis" className="py-12 bg-sky-50 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-5xl font-bold text-[#334786] mb-2">{t('testimonials.title')}</h2>
              <div className="flex items-center justify-center gap-1 text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>

            <div className="relative bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-white">
              <div className="min-h-[150px] flex flex-col justify-center items-center text-center">
                 <p className="text-sm md:text-2xl italic text-gray-700 leading-relaxed mb-6">
                   "{testimonials[currentTestimonial].text}"
                 </p>
                 <div className="flex items-center gap-3">
                   <img src={testimonials[currentTestimonial].image} className="w-10 h-10 md:w-16 md:h-16 rounded-full" alt="" />
                   <div className="text-left">
                     <div className="font-bold text-[#334786] text-xs md:text-base">{testimonials[currentTestimonial].name}</div>
                     <div className="text-[10px] text-gray-500">{testimonials[currentTestimonial].role}</div>
                   </div>
                 </div>
              </div>
              <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-2 right-2 md:-left-6 md:-right-6">
                <button onClick={prevTestimonial} className="bg-white p-2 rounded-full shadow-md text-sky-600"><ChevronLeft className="w-4 h-4" /></button>
                <button onClick={nextTestimonial} className="bg-white p-2 rounded-full shadow-md text-sky-600"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CONFIANCE : TITRE SUR UNE LIGNE */}
        <section className="py-12 bg-white px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-xl md:text-4xl font-bold text-gray-800 whitespace-nowrap mb-10 overflow-hidden text-ellipsis">
              Ils nous font confiance
            </h2>
            {/* Ici on appelle ton composant original des logos clients */}
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
               {/* Insère tes logos ici */}
            </div>
          </div>
        </section>

        {/* CONTACT ORIGINAL */}
        <section id="contact" className="py-16 bg-[#233B72] text-white px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-4">{t('quote.title')}</h2>
            <Link to="/devis" className="inline-flex items-center gap-2 bg-brand-orange-500 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-brand-orange-600 transition-all active:scale-95 shadow-2xl">
              DEMANDER MON DEVIS <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoSrc="/videodemo.mp4" />

      <footer className="bg-gray-950 text-white py-10 px-4 text-center">
          <img src="/bonlogo_de_cote.png" className="h-10 mx-auto mb-6 invert brightness-0" alt="Ellipsys" />
          <div className="text-gray-500 text-[10px] md:text-sm">
            &copy; 2026 Ellipsys Solutions. {t('footer.rights')}
          </div>
      </footer>
    </div>
  );
}

export default App;
