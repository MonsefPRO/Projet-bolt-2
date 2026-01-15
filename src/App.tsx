import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Shield, ChevronRight, Phone, Mail, Star, Zap, 
  BarChart3, Play, ChevronLeft, FileText 
} from 'lucide-react';

// Import des composants
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

// IMPORT DE VOTRE PAGE EXPERT
import Risques from './pages/Risques';

// --- UTILITAIRE : REMONTER EN HAUT DE PAGE ---
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// --- COMPOSANT : PAGE D'ACCUEIL ---
function HomePage() {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
      text: language === 'fr' 
        ? "Service exceptionnel ! Le nettoyage de notre entrepôt a été réalisé en un temps record. Aucune interruption de notre activité."
        : "Exceptional service! Our warehouse cleaning was completed in record time with zero business interruption.",
      name: "Jean Martin",
      role: "Directeur logistique",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      text: language === 'fr'
        ? "Technologie impressionnante et résultats impeccables. L'équipe est professionnelle et ponctuelle."
        : "Impressive technology and spotless results. The team is professional and punctual.",
      name: "Sophie Dubois",
      role: "Syndic de copropriété",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
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
      {/* SECTION HERO */}
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
          <h1 className="text-2xl md:text-6xl font-bold leading-tight drop-shadow-2xl mb-6 uppercase tracking-tighter italic">
            {t('hero.title1')} {t('hero.title2')}
          </h1>
          
          <div className="space-y-6">
            <p className="text-sm md:text-xl font-bold drop-shadow-md">{t('hero.subtitle')}</p>
            <div className="flex flex-wrap justify-center gap-2 font-bold">
              <span onClick={() => scrollToSection('benefit-safety')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/40 transition-all">
                <Shield className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /> <span className="text-[11px] md:text-xl uppercase">{t('benefits.safety.title')}</span>
              </span>
              <span onClick={() => scrollToSection('benefit-speed')} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/30 cursor-pointer hover:bg-white/40 transition-all">
                <Zap className="w-4 h-4 md:w-8 md:h-8 mr-1.5" /> <span className="text-[11px] md:text-xl uppercase">{t('benefits.speed.title')}</span>
              </span>
            </div>
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

      {/* SECTION SERVICES */}
      <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-12 text-[#233B72]">{t('mainServices.title')}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {['facade', 'demoussage', 'hornets', 'industrial2'].map((key, i) => (
              <ScrollReveal delay={0.1 * (i + 1)} key={key}>
                <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg border-t-4 border-sky-500 h-full flex flex-col items-center">
                  <h3 className="text-sm md:text-2xl font-bold mb-4 text-[#233B72] uppercase">{t(`mainServices.${key}.title`)}</h3>
                  <Link to="/prestations" className="mt-auto text-sky-600 font-bold flex items-center hover:text-blue-800">
                    {language === 'fr' ? 'Découvrir' : 'Discover'} <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Hover3DCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section id="avis" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#233B72]">{t('testimonials.title')}</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
            <div className="text-center w-full lg:w-1/4">
              <div className="text-5xl font-bold text-gray-800 mb-2">4.9/5</div>
              <div className="flex justify-center mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 text-sm">98% satisfaction</p>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="text-gray-700 md:text-xl italic mb-6">"{testimonials[currentTestimonial].text}"</p>
              <div className="flex items-center justify-center lg:justify-start">
                <img src={testimonials[currentTestimonial].image} className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white shadow-sm" alt="client" />
                <div className="text-left">
                  <div className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start gap-4 mt-8">
                <button onClick={prevTestimonial} className="p-3 rounded-full bg-white shadow-md hover:bg-sky-50 transition-colors"><ChevronLeft className="text-sky-600" /></button>
                <button onClick={nextTestimonial} className="p-3 rounded-full bg-white shadow-md hover:bg-sky-50 transition-colors"><ChevronRight className="text-sky-600" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoSrc="/videodemo.mp4" />
    </main>
  );
}

// --- COMPOSANT PRINCIPAL : APP ---
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans antialiased">
        <CookieBanner />
        <Header />
        
        <Routes>
          {/* ACCUEIL */}
          <Route path="/" element={<HomePage />} />
          
          {/* VOTRE NOUVELLE PAGE RISQUES */}
          <Route path="/risques-et-responsabilites" element={<Risques />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
