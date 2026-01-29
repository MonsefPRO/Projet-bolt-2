import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  ChevronRight, 
  AlertCircle,
  Phone,
  Target,
  Wind,
  ShieldAlert
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { FloatingDrone } from '../components/FloatingDrone';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function EliminationFrelons() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Dynamique avec FloatingDrone */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FloatingDrone 
            src="/abateur_de_frelons.png" 
            className="w-full h-full object-cover scale-110"
            alt={t('prestations.service4.title')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-rose-800/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
              {t('prestations.service4.title')}
            </h1>
            <p className="text-xl md:text-2xl text-red-100 font-bold italic">
              {language === 'fr' 
                ? 'Intervention sécurisée sans exposition humaine' 
                : 'Safe intervention without human exposure'}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contenu Principal (Gauche) */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Introduction */}
            <ScrollReveal>
              <section>
                <h2 className="text-3xl md:text-4xl font-black text-[#233B72] mb-6 flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-2 h-10 bg-red-600 rounded-full"></div>
                  {language === 'fr' ? 'Neutralisation de précision' : 'Precision Neutralization'}
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4 font-medium">
                  <p dangerouslySetInnerHTML={{ __html: t('prestations.service4.description') }} />
                </div>
              </section>
            </ScrollReveal>

            {/* Alerte Urgence (Bento Style) */}
            <section className="bg-red-50 rounded-[2.5rem] p-8 md:p-10 border border-red-200 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 p-4">
                <ShieldAlert size={120} className="text-red-600" />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <AlertCircle className="w-20 h-20 text-red-600 flex-shrink-0 animate-pulse" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-red-900 mb-3 uppercase tracking-tight">
                    {language === 'fr' ? 'Ne prenez aucun risque !' : 'Take no risks!'}
                  </h3>
                  <p className="text-red-800 font-bold text-lg leading-relaxed">
                    {language === 'fr' 
                      ? "Ne tentez jamais de détruire un nid vous-même. Les frelons asiatiques attaquent en groupe et sont extrêmement agressifs. Une intervention inadaptée peut être fatale." 
                      : "Never attempt to destroy a nest yourself. Asian hornets attack in groups and are extremely aggressive. Improper intervention can be fatal."}
                  </p>
                </div>
              </div>
            </section>

            {/* Technologie de pointe (Grille Bento) */}
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-[#233B72] mb-8 uppercase tracking-tighter">
                {language === 'fr' ? 'Technologie de pointe' : 'Cutting-edge Technology'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Hauteur 50m+", desc: language === 'fr' ? "Accès total sans nacelle ni échelle" : "Full access without lift or ladder", icon: Wind },
                  { title: language === 'fr' ? "Injection Précise" : "Precision Injection", desc: language === 'fr' ? "Cible le cœur du nid directement" : "Targets the heart of the nest directly", icon: Target },
                  { title: "Biocides Éco", desc: language === 'fr' ? "Produits certifiés biodégradables" : "Certified biodegradable products", icon: ShieldCheck },
                  { title: "Thermique HD", desc: language === 'fr' ? "Localisation par signature de chaleur" : "Heat signature localization", icon: Zap }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-rose-50 p-6 md:p-8 rounded-[2rem] border border-rose-100 flex items-start gap-5 h-full transition-colors hover:bg-rose-100/50">
                      <div className="bg-white p-4 rounded-2xl shadow-md">
                        <item.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-black text-[#233B72] text-lg mb-2 uppercase tracking-tight">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  </Hover3DCard>
                ))}
              </div>
            </section>

            {/* Avantages */}
            <ScrollReveal delay={0.2}>
              <section className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-inner">
                <h3 className="text-2xl font-black text-[#233B72] mb-8 text-center uppercase tracking-tighter">
                  {language === 'fr' ? "Les avantages de l'aérien" : "Aerial advantages"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    t('prestations.service4.benefit1'),
                    t('prestations.service4.benefit2'),
                    t('prestations.service4.benefit3'),
                    t('prestations.service4.benefit7')
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-red-200 transition-all">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-sm md:text-base font-bold text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Urgence */}
              <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden text-center">
                <ShieldCheck className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">
                  {language === 'fr' ? 'URGENCE FRELONS' : 'HORNET EMERGENCY'}
                </h3>
                <p className="mb-8 text-red-50 font-medium leading-relaxed">
                  {language === 'fr' 
                    ? 'Intervention rapide garantie. Nos techniciens sont mobilisables immédiatement.' 
                    : 'Fast intervention guaranteed. Our technicians are ready to secure your area.'}
                </p>
                <div className="space-y-4">
                  <Link 
                    to="/devis"
                    className="w-full bg-white text-red-600 py-5 rounded-2xl font-black text-center block hover:bg-brand-orange-500 hover:text-white transition-all shadow-xl uppercase tracking-widest"
                  >
                    {t('nav.quote')}
                  </Link>
                  <a 
                    href="tel:0467209709"
                    className="flex items-center justify-center gap-3 w-full bg-red-900/40 backdrop-blur-md text-white py-5 rounded-2xl font-black text-center hover:bg-red-900 transition-all border border-white/20 uppercase tracking-widest"
                  >
                    <Phone className="w-5 h-5" /> 04 67 20 97 09
                  </a>
                </div>
              </div>

              {/* Atouts Expertise */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg">
                <h4 className="font-black text-[#233B72] mb-6 uppercase text-xs tracking-[0.2em]">
                  {language === 'fr' ? 'Garanties de sécurité' : 'Safety Guarantees'}
                </h4>
                <div className="space-y-5">
                  {[
                    'Certifié DGAC', 
                    language === 'fr' ? 'Assurance RC Pro Spécifique' : 'Specialized Liability Insurance', 
                    language === 'fr' ? 'Agrément Certibiocide' : 'Certibiocide Approval'
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse" />
                      <span className="text-sm font-black text-gray-800 uppercase tracking-tight">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Autres Services */}
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h4 className="font-black mb-6 text-sm uppercase tracking-widest text-center border-b border-white/10 pb-4">
                  {t('footer.services')}
                </h4>
                <div className="space-y-3">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('mainServices.facade.title')}
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-white/10 rounded-xl group transition-all text-blue-100 hover:text-white font-bold text-sm">
                    {t('mainServices.demoussage.title')}
                    <ChevronRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
