import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Droplets, Shield, Clock, Award, Mail, Phone, MapPin, ChevronRight, ChevronDown, Star, TrendingUp, Users, ChevronLeft, Zap, BarChart3, Play } from 'lucide-react';
import { AnimatedCounter } from './components/AnimatedCounter';
import CookieBanner from './components/CookieBanner';
import LanguageSwitcher from './components/LanguageSwitcher';
import DroneBenefits from './components/DroneBenefits';
import CertificationsSection from './components/CertificationsSection';
import { useLanguage } from './contexts/LanguageContext';
import { Hover3DCard } from './components/Hover3DCard';
import { ScrollReveal } from './components/ScrollReveal';
import { AnimatedButton } from './components/AnimatedButton';
import { VideoModal } from './components/VideoModal';
import Header from './components/Header';

function App() {
  const { t } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<{[key: number]: boolean}>({});
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
    },
    {
      text: "Solution innovante et écologique. Le rapport qualité-prix est excellent. Nous avons économisé près de 40% par rapport à un prestataire traditionnel.",
      name: "Pierre Lefebvre",
      role: "Gérant, Centre Commercial Horizon",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Parfait pour notre bâtiment historique. Le nettoyage a été réalisé avec délicatesse. La pierre n'a subi aucun dommage. Très satisfaits du résultat.",
      name: "Marie Chevalier",
      role: "Responsable patrimoine, Mairie de Versailles",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Intervention rapide et efficace. Notre façade vitrée est impeccable. Le gain de temps est considérable comparé aux méthodes classiques.",
      name: "Thomas Rousseau",
      role: "Directeur technique, Tour Moderne Business",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      text: "Prestation de qualité à un tarif compétitif. L'équipe est à l'écoute et s'adapte à nos contraintes. Nous avons signé un contrat annuel.",
      name: "Anne Laurent",
      role: "Facility Manager, Groupe TechPro",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
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
        {/* BANNIÈRE : HAUTEUR RÉDUITE SUR MOBILE (60vh au lieu de min-screen) */}
        <section id="accueil" className="h-[65vh] md:min-h-screen pt-32 pb-16 relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/25 via-blue-50/20 to-white/25 z-10"></div>
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentHeroImage ? 'opacity-75' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="w-full relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="space-y-7 w-full text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                  {t('hero.title1')} {t('hero.title2')}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed space-y-7">
                  <span className="block text-black font-bold">
                    {t('hero.subtitle')}
                  </span>
                  <span className="flex flex-wrap justify-center gap-2 font-bold">
                    <span
                      onClick={() => scrollToSection('benefit-safety')}
                      className="inline-flex items-center bg-gray-100/50 px-3 py-1 rounded-lg hover:bg-gray-200/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <Shield className="w-5 h-5 md:w-8 md:h-8 mr-1.5" style={{ color: '#334786' }} />
                      <span className="text-sm md:text-2xl" style={{ color: '#334786' }}>{t('benefits.safety.title')}</span>
                    </span> 
                    <span
                      onClick={() => scrollToSection('benefit-speed')}
                      className="inline-flex items-center bg-gray-100/50 px-3 py-1 rounded-lg hover:bg-gray-200/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <Zap className="w-5 h-5 md:w-8 md:h-8 mr-1.5" style={{ color: '#334786' }} />
                      <span className="text-sm md:text-2xl" style={{ color: '#334786' }}>{t('benefits.speed.title')}</span>
                    </span>
                    <span
                      onClick={() => scrollToSection('benefit-cost')}
                      className="inline-flex items-center bg-gray-100/50 px-3 py-1 rounded-lg hover:bg-gray-200/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <BarChart3 className="w-5 h-5 md:w-8 md:h-8 mr-1.5" style={{ color: '#334786' }} />
                      <span className="text-sm md:text-2xl" style={{ color: '#334786' }}>{t('benefits.cost.title')}</span>
                    </span>
                  </span> 
                  <span className="block text-base sm:text-lg md:text-xl lg:text-2xl text-black font-bold mt-4">
                    {t('hero.intervention')}
                  </span>
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex items-center space-x-3 group cursor-pointer text-left">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-200 transition-all duration-300">
                      <TrendingUp className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-xl md:text-3xl font-bold text-gray-800">
                        <AnimatedCounter end={120000} suffix={t('hero.stat1Value')} />
                      </div>
                      <div className="text-xs text-black">{t('hero.stat1Label')}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer text-left">
                    <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-200 transition-all duration-300">
                      <Users className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-xl md:text-3xl font-bold text-gray-800">
                        <AnimatedCounter end={62} suffix={t('hero.stat2Value')} />
                      </div>
                      <div className="text-xs text-black">{t('hero.stat2Label')}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/devis"
                    className="bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all shadow-lg flex items-center justify-center group"
                  >
                    {t('hero.cta')}
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="border-2 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                    style={{ borderColor: '#334786', color: '#334786' }}
                  >
                    <Play className="w-5 h-5" />
                    Voir la démo
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-12">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroImage(index)}
                  className={`transition-all duration-300 ${index === currentHeroImage ? 'w-8 h-2 bg-sky-600' : 'w-2 h-2 bg-gray-400'} rounded-full`}
                />
              ))}
            </div>
          </div>
        </section>

        <CertificationsSection />
        
        {/* COMPOSANT DÉPLOYABLE (MODIFIÉ DANS LE FICHIER PRÉCÉDENT) */}
        <DroneBenefits />

        {/* PRESTATIONS PRINCIPALES : GRILLE 2X2 SUR MOBILE */}
        <section className="pt-8 pb-16 px-4 bg-gradient-to-br from-sky-50 to-blue-50 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                {t('mainServices.title')}
              </h2>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-black leading-relaxed px-4 text-justify md:text-center max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: t('mainServices.subtitle') }}
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-2 md:px-8">
              {/* Carte 01 */}
              <ScrollReveal delay={0.1}>
                <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-sky-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-inner mb-4">
                      <span className="text-gray-400 font-bold text-lg md:text-2xl">01</span>
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4" style={{ color: '#334786' }}>{t('mainServices.facade.title')}</h3>
                    <p className="hidden md:block text-gray-600 leading-relaxed text-lg text-justify">{t('mainServices.facade.description')}</p>
                  </div>
                  <Link to="/prestations/nettoyage-facade" className="mt-4 md:mt-8 pt-4 border-t border-gray-100 text-sky-600 font-semibold text-xs md:text-base inline-flex items-center group">
                    Voir <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Hover3DCard>
              </ScrollReveal>

              {/* Carte 02 */}
              <ScrollReveal delay={0.2}>
                <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-green-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-inner mb-4">
                      <span className="text-gray-400 font-bold text-lg md:text-2xl">02</span>
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4" style={{ color: '#334786' }}>{t('mainServices.demoussage.title')}</h3>
                    <p className="hidden md:block text-gray-600 leading-relaxed text-lg text-justify">{t('mainServices.demoussage.description')}</p>
                  </div>
                  <Link to="/prestations/demoussage" className="mt-4 md:mt-8 pt-4 border-t border-gray-100 text-green-600 font-semibold text-xs md:text-base inline-flex items-center group">
                    Voir <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Hover3DCard>
              </ScrollReveal>

              {/* Carte 03 */}
              <ScrollReveal delay={0.3}>
                <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-red-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-inner mb-4">
                      <span className="text-gray-400 font-bold text-lg md:text-2xl">03</span>
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4" style={{ color: '#334786' }}>{t('mainServices.hornets.title')}</h3>
                    <p className="hidden md:block text-gray-600 leading-relaxed text-lg text-justify">{t('mainServices.hornets.description')}</p>
                  </div>
                  <Link to="/prestations/elimination-frelons" className="mt-4 md:mt-8 pt-4 border-t border-gray-100 text-red-600 font-semibold text-xs md:text-base inline-flex items-center group">
                    Voir <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Hover3DCard>
              </ScrollReveal>

              {/* Carte 04 */}
              <ScrollReveal delay={0.4}>
                <Hover3DCard className="bg-white rounded-2xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-amber-500 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-inner mb-4">
                      <span className="text-gray-400 font-bold text-lg md:text-2xl">04</span>
                    </div>
                    <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-4" style={{ color: '#334786' }}>{t('servicesSection.industrial2.title')}</h3>
                    <p className="hidden md:block text-gray-600 leading-relaxed text-lg text-justify">{t('servicesSection.industrial2.description')}</p>
                  </div>
                  <Link to="/prestations" className="mt-4 md:mt-8 pt-4 border-t border-gray-100 text-amber-600 font-semibold text-xs md:text-base inline-flex items-center group">
                    Voir <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Hover3DCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECTION AVIS ORIGINALE */}
        <section id="avis" className="py-10 px-4 bg-white relative overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                {t('testimonials.title')}
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 text-center border border-sky-100 w-full lg:w-1/4">
                <div className="text-5xl font-bold text-gray-800 mb-2">4.9/5</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-0.5" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">98% satisfaction client</p>
              </div>

              <div className="flex-1 w-full relative">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center">
                    <img src={testimonials[currentTestimonial].image} className="w-14 h-14 rounded-full object-cover mr-4" />
                    <div>
                      <div className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <button onClick={prevTestimonial} className="bg-white p-3 rounded-full shadow-lg text-sky-600 hover:scale-110 transition-all"><ChevronLeft className="w-6 h-6" /></button>
                  <button onClick={nextTestimonial} className="bg-white p-3 rounded-full shadow-lg text-sky-600 hover:scale-110 transition-all"><ChevronRight className="w-6 h-6" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CONFIANCE : TITRE SUR UNE LIGNE SANS DÉBORDEMENT */}
        <section className="py-12 bg-gray-50 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-10 text-center whitespace-nowrap overflow-hidden text-ellipsis">
              Ils nous font confiance
            </h2>
            {/* Ici se trouve ton bloc de logos originaux */}
          </div>
        </section>

        {/* SECTION CONTACT ORIGINALE */}
        <section id="contact" className="py-12 bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10 px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-orange-500 to-red-600 text-white rounded-full text-sm font-semibold mb-4">
                {t('contact.title')}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#334786' }}>
                {t('quote.title')}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#233B72] text-white flex-shrink-0"><Phone className="w-6 h-6" /></div>
                  <div><h3 className="font-bold text-gray-800">{t('contact.phone')}</h3><p className="text-gray-600">04 67 20 97 09</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#233B72] text-white flex-shrink-0"><Mail className="w-6 h-6" /></div>
                  <div><h3 className="font-bold text-gray-800">{t('contact.email')}</h3><p className="text-gray-600">contact@ellipsys-group.com</p></div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#233B72] text-white flex-shrink-0"><MapPin className="w-6 h-6" /></div>
                  <div><h3 className="font-bold text-gray-800">{t('contact.address')}</h3><p className="text-gray-600">{t('footer.description')}</p></div>
                </div>
              </div>
              
              <form id="hs-contact-form" className="bg-gradient-to-br from-white to-sky-50/30 rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-sky-100 space-y-6">
                <input type="text" placeholder={t('contact.form.name')} className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none focus:border-sky-500" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" placeholder={t('contact.form.email')} className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none" />
                  <input type="tel" placeholder={t('contact.form.phone')} className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none" />
                </div>
                <textarea rows={5} placeholder={t('quote.form.message')} className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl outline-none resize-none"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-brand-orange-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
                  {t('quote.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoSrc="/videodemo.mp4" />

      <footer className="bg-gray-900 text-white py-12 px-4 text-center">
        <img src="/bonlogo_de_cote.png" className="h-12 mx-auto mb-6 invert brightness-0" alt="Ellipsys" />
        <p className="text-gray-400 mb-4">&copy; 2026 Ellipsys Solutions. {t('footer.rights')}</p>
        <Link to="/politique-confidentialite" className="text-gray-500 hover:text-white underline text-sm">{t('footer.privacy')}</Link>
      </footer>
    </div>
  );
}

export default App;
