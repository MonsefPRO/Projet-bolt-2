import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Shield, ChevronRight, Phone, Mail, MapPin, Star, TrendingUp, Users, Zap, BarChart3, Play, ChevronLeft } from 'lucide-react';
import { AnimatedCounter } from './components/AnimatedCounter';
import CookieBanner from './components/CookieBanner';
import DroneBenefits from './components/DroneBenefits';
import CertificationsSection from './components/CertificationsSection';
import { useLanguage } from './contexts/LanguageContext';
import { Hover3DCard } from './components/Hover3DCard';
import { ScrollReveal } from './components/ScrollReveal';
import { VideoModal } from './components/VideoModal';
import Header from './components/Header';
import Footer from './components/Footer';

// IMPORT DE VOTRE NOUVELLE PAGE
import Risques from './pages/Risques';

// COMPOSANT PAGE D'ACCUEIL (Votre code actuel encapsulé)
function HomePage() {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const heroImages = [
    { src: '/rony.jpg', alt: language === 'fr' ? 'Expert drone Ellipsys' : 'Ellipsys drone expert' },
    { src: '/ares.png', alt: 'Drone ARES' },
    { src: '/abateur_de_frelons.png', alt: language === 'fr' ? 'Abatteur de frelons' : 'Hornet removal drone' },
    { src: '/rony2.jpg', alt: language === 'fr' ? 'Expert drone en action' : 'Drone expert in action' },
    { src: '/chronos.jpg', alt: 'Drone Chronos' },
    { src: '/rony4.jpg', alt: language === 'fr' ? 'Expert drone Ellipsys' : 'Ellipsys drone expert' },
    { src: '/chronos2.jpg', alt: 'Drone Chronos 2' },
    { src: '/rony5.jpg', alt: language === 'fr' ? 'Expert drone Ellipsys' : 'Ellipsys drone expert' }
  ];

  const testimonials = [
    {
      text: language === 'fr' ? "Service exceptionnel ! Le nettoyage de notre entrepôt a été réalisé en un temps record. Aucune interruption de notre activité." : "Exceptional service! Our warehouse cleaning was completed in record time.",
      name: "Jean Martin",
      role: language === 'fr' ? "Directeur logistique" : "Logistics Director",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: language === 'fr' ? "Technologie impressionnante et résultats impeccables." : "Impressive technology and spotless results.",
      name: "Sophie Dubois",
      role: language === 'fr' ? "Syndic de copropriété" : "Property Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <main className="flex-grow">
        <section id="accueil" className="min-h-[70vh] md:min-h-screen pt-28 pb-12 relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentHeroImage ? 'opacity-100' : 'opacity-0'}`}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="w-full relative z-20 container mx-auto px-4 text-center text-white">
            <h1 className="text-2xl md:text-6xl font-bold mb-6 drop-shadow-2xl italic uppercase tracking-tighter">
              {t('hero.title1')} {t('hero.title2')}
            </h1>
            <p className="text-sm md:text-xl font-bold mb-8">{t('hero.subtitle')}</p>
            
            <div className="flex flex-wrap justify-center gap-2 font-bold px-2">
               <span onClick={() => scrollToSection('benefit-safety')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/40">
                  <Shield className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /> <span className="text-[11px] md:text-xl uppercase">{t('benefits.safety.title')}</span>
               </span>
               <span onClick={() => scrollToSection('benefit-speed')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/40">
                  <Zap className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /> <span className="text-[11px] md:text-xl uppercase">{t('benefits.speed.title')}</span>
               </span>
               <span onClick={() => scrollToSection('benefit-cost')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/40">
                  <BarChart3 className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /> <span className="text-[11px] md:text-xl uppercase">{t('benefits.cost.title')}</span>
               </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-12">
              <Link to="/devis" className="bg-brand-orange-500 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
                {t('hero.cta')}
              </Link>
              <button onClick={() => setIsVideoModalOpen(true)} className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-3.5 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" /> {language === 'fr' ? 'Voir la démo' : 'Watch Demo'}
              </button>
            </div>
          </div>
        </section>

        <CertificationsSection />
        <DroneBenefits />

        <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="container mx-auto max-w-7xl text-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-12 text-[#334786]">{t('mainServices.title')}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {['facade', 'demoussage', 'hornets', 'industrial2'].map((key, i) => (
                <ScrollReveal delay={0.1 * (i + 1)} key={key}>
                  <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg border-t-4 border-sky-500 h-full flex flex-col items-center">
                    <h3 className="text-sm md:text-2xl font-bold mb-4 text-[#334786]">{t(`mainServices.${key}.title`)}</h3>
                    <Link to="/prestations" className="mt-auto text-sky-600 font-bold flex items-center">
                      {language === 'fr' ? 'Découvrir' : 'Discover'} <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Hover3DCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ... Testimonials and Contact Form remain here ... */}
        <section id="contact" className="py-16 bg-white">
            {/* Gardez votre code de formulaire ici */}
        </section>

        <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoSrc="/videodemo.mp4" />
    </main>
  );
}

// COMPOSANT PRINCIPAL AVEC ROUTAGE
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#EFF8FF] overflow-x-hidden flex flex-col font-sans">
        <CookieBanner />
        <Header />
        
        <Routes>
          {/* LA ROUTE PAR DÉFAUT : ACCUEIL */}
          <Route path="/" element={<HomePage />} />
          
          {/* LA ROUTE VERS VOTRE NOUVELLE PAGE */}
          <Route path="/risques-et-responsabilites" element={<Risques />} />
          
          {/* Ajoutez vos autres pages ici au fur et à mesure */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

// Petit utilitaire pour remonter en haut de page lors du changement de route
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
