import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight, Phone, Mail, MapPin, Star, TrendingUp, Users, Zap, BarChart3, Play } from 'lucide-react';
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

function App() {
  const { t } = useLanguage();
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
      text: "Service exceptionnel ! Le nettoyage de notre entrepôt a été réalisé en un temps record. Aucune interruption de notre activité. Je recommande vivement.",
      name: "Jean Martin",
      role: "Directeur logistique, Société Industrie+",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Technologie impressionnante et résultats impeccables. Notre façade n'a jamais été aussi propre. L'équipe est professionnelle et ponctuelle.",
      name: "Sophie Dubois",
      role: "Syndic de copropriété, Résidence Le Parc",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        {/* BANNIÈRE HERO */}
        <section id="accueil" className="min-h-[70vh] md:min-h-screen pt-28 pb-12 relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
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

          <div className="w-full relative z-20">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-2xl text-white mb-6">
                {t('hero.title1')} <br className="md:hidden" /> {t('hero.title2')}
              </h1>
              
              <div className="text-white space-y-6">
                <p className="text-sm sm:text-lg md:text-xl font-bold drop-shadow-md">{t('hero.subtitle')}</p>
                <div className="flex flex-wrap justify-center gap-2 font-bold px-2">
                    {['benefit-safety', 'benefit-speed', 'benefit-cost'].map((id, i) => (
                        <span key={id} onClick={() => scrollToSection(id)} className="inline-flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl hover:bg-white/30 transition-all cursor-pointer border border-white/30">
                            {i === 0 && <Shield className="w-4 h-4 md:w-8 md:h-8 mr-1.5 text-white" />}
                            {i === 1 && <Zap className="w-4 h-4 md:w-8 md:h-8 mr-1.5 text-white" />}
                            {i === 2 && <BarChart3 className="w-4 h-4 md:w-8 md:h-8 mr-1.5 text-white" />}
                            <span className="text-[11px] sm:text-sm md:text-xl uppercase">{t(`benefits.${id.split('-')[1]}.title`)}</span>
                        </span>
                    ))}
                </div>
                <p className="text-sm sm:text-lg md:text-xl font-bold drop-shadow-md">{t('hero.intervention')}</p>
              </div>

              <div className="flex justify-center gap-4 md:gap-8 mt-8">
                <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-left min-w-[120px]">
                  <div className="text-xl md:text-3xl font-bold text-white"><AnimatedCounter end={120000} suffix="m²" /></div>
                  <div className="text-[10px] md:text-xs text-sky-200 font-bold uppercase tracking-widest mt-1">Traités</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm p-3 rounded-2xl border border-white/10 text-left min-w-[120px]">
                  <div className="text-xl md:text-3xl font-bold text-white"><AnimatedCounter end={98} suffix="%" /></div>
                  <div className="text-[10px] md:text-xs text-sky-200 font-bold uppercase tracking-widest mt-1">Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 px-6">
                <Link to="/devis" className="bg-brand-orange-500 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
                  {t('hero.cta')}
                </Link>
                <button onClick={() => setIsVideoModalOpen(true)} className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5 fill-current" /> Voir la démo
                </button>
              </div>
            </div>
          </div>
        </section>

        <CertificationsSection />
        <DroneBenefits />

        {/* PRESTATIONS PRINCIPALES */}
        <section className="pt-8 pb-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-5xl font-bold mb-6 text-[#334786]">{t('mainServices.title')}</h2>
              <p className="text-base sm:text-lg md:text-xl text-black max-w-4xl mx-auto md:text-center text-justify" dangerouslySetInnerHTML={{ __html: t('mainServices.subtitle') }} />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-2 md:px-8">
              {['facade', 'demoussage', 'hornets', 'industrial2'].map((key, i) => (
                <ScrollReveal delay={0.1 * (i+1)} key={key}>
                  <Hover3DCard className={`bg-white rounded-2xl p-5 md:p-8 shadow-lg transition-all border-t-4 h-full flex flex-col ${i===0?'border-sky-500':i===1?'border-green-500':i===2?'border-red-500':'border-amber-500'}`}>
                    <div className="flex-grow">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-gray-400 font-bold text-lg">0{i+1}</span>
                      </div>
                      <h3 className="text-sm md:text-2xl font-bold mb-2 text-[#334786]">{t(`mainServices.${key}.title`)}</h3>
                    </div>
                    <Link to="/prestations" className="mt-4 pt-4 border-t border-gray-100 text-sky-600 font-semibold text-xs md:text-base inline-flex items-center">
                      Voir <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Hover3DCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION AVIS */}
        <section id="avis" className="py-10 px-4 bg-white relative">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#334786]">{t('testimonials.title')}</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto mt-8">
              <div className="bg-sky-50 rounded-xl p-8 border border-sky-100 w-full lg:w-1/4">
                <div className="text-5xl font-bold text-gray-800 mb-2">4.9/5</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-0.5" />)}
                </div>
                <p className="text-gray-600 text-sm">98% satisfaction client</p>
              </div>
              <div className="flex-1 w-full relative bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
                <p className="text-gray-700 md:text-lg italic mb-6">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex items-center justify-center">
                  <img src={testimonials[currentTestimonial].image} className="w-14 h-14 rounded-full object-cover mr-4" />
                  <div className="text-left">
                    <div className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <button onClick={prevTestimonial} className="bg-white p-3 rounded-full shadow-lg text-sky-600 hover:scale-110"><ChevronLeft className="w-6 h-6" /></button>
                  <button onClick={nextTestimonial} className="bg-white p-3 rounded-full shadow-lg text-sky-600 hover:scale-110"><ChevronRight className="w-6 h-6" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CONTACT */}
        <section id="contact" className="py-12 bg-white px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#334786]">{t('quote.title')}</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#233B72] text-white flex items-center justify-center flex-shrink-0"><Phone className="w-6 h-6" /></div>
                  <div><h3 className="font-bold">Téléphone</h3><p className="text-gray-600">04 67 20 97 09</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#233B72] text-white flex items-center justify-center flex-shrink-0"><Mail className="w-6 h-6" /></div>
                  <div><h3 className="font-bold">Email</h3><p className="text-gray-600">contact@ellipsys-group.com</p></div>
                </div>
              </div>
              <form className="bg-sky-50 rounded-3xl p-6 md:p-10 shadow-xl border border-sky-100 space-y-6">
                <input type="text" placeholder={t('contact.form.name')} className="w-full px-5 py-3.5 border border-gray-200 rounded-xl outline-none" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="email" placeholder={t('contact.form.email')} className="w-full px-5 py-3.5 border border-gray-200 rounded-xl" />
                  <input type="tel" placeholder={t('contact.form.phone')} className="w-full px-5 py-3.5 border border-gray-200 rounded-xl" />
                </div>
                <textarea rows={4} placeholder={t('quote.form.message')} className="w-full px-5 py-3.5 border border-gray-200 rounded-xl resize-none"></textarea>
                <button className="w-full bg-[#233B72] text-white py-4 rounded-xl font-bold hover:bg-sky-900 transition-all shadow-lg">
                  {t('quote.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoSrc="/videodemo.mp4" />

      {/* TON NOUVEAU COMPOSANT FOOTER UNIFORMISÉ EST ICI */}
      <Footer />
    </div>
  );
}

export default App;
