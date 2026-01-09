import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, Users, Heart, Award, Send, FileText, Building2, Handshake, Target, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useSecureForm } from '../hooks/useSecureForm';
import { HeroCarousel } from '../components/HeroCarousel';

// --- SECTIONS DE SOUTIEN ---

function WhyJoinSection() {
  const { ref, isInView } = useInView();

  const benefits = [
    { icon: Heart, title: 'Équipe passionnée', description: 'Rejoignez une équipe engagée et bienveillante où chaque membre compte', color: 'from-pink-500 to-red-500' },
    { icon: Award, title: 'Innovation technologique', description: 'Travaillez avec des technologies de pointe dans le secteur des drones', color: 'from-sky-500 to-blue-600' },
    { icon: TrendingUp, title: 'Opportunités de croissance', description: 'Développez vos compétences et évoluez dans un marché en pleine expansion', color: 'from-green-500 to-emerald-600' },
    { icon: Target, title: 'Impact positif', description: 'Contribuez à des solutions écologiques et innovantes pour l\'environnement', color: 'from-orange-500 to-red-600' },
    { icon: Users, title: 'Culture collaborative', description: 'Participez à un environnement de travail stimulant et collaboratif', color: 'from-purple-500 to-pink-600' },
    { icon: Sparkles, title: 'Formation continue', description: 'Accédez à des formations régulières et développez votre expertise', color: 'from-yellow-500 to-orange-600' }
  ];

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-[#233B72] mb-4">Pourquoi nous rejoindre ?</h2>
          <p className="text-gray-600 text-sm md:text-lg">Découvrez les avantages de faire partie de l'équipe Ellipsys</p>
        </div>
        {/* Grille : 1 colonne sur mobile, 2 sur tablette, 3 sur PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`transform transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="group h-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PAGE PRINCIPALE ---

export default function RejoignezNous() {
  const [activeTab, setActiveTab] = useState<'candidature' | 'apporteur' | 'franchisee' | 'architecte'>('candidature');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <section className="relative pt-32 pb-16 overflow-hidden flex items-center h-[350px] md:h-[400px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
        
        <div className="relative z-20 w-full text-center px-4">
          <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-[10px] md:text-sm font-semibold mb-4">
            Rejoignez l'aventure
          </div>
          <h1 className="text-3xl md:text-7xl font-bold mb-4 drop-shadow-2xl text-white">
            Rejoignez-nous
          </h1>
          <p className="text-base md:text-2xl drop-shadow-lg font-semibold text-white">
            Les drones au service de l'humain
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <nav className="flex items-center space-x-2 text-xs md:text-sm text-gray-600 mb-8 md:mb-12">
          <Link to="/" className="hover:text-sky-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-800 font-bold">Rejoignez-nous</span>
        </nav>

        {/* ONGLETS : 2 colonnes sur mobile, 4 sur PC */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-12">
          {[
            { tab: 'candidature', icon: FileText, title: 'Candidature', color: '#22c55e' },
            { tab: 'apporteur', icon: Handshake, title: 'Apporteur', color: '#0ea5e9' },
            { tab: 'franchisee', icon: Briefcase, title: 'Franchisé', color: '#f59e0b' },
            { tab: 'architecte', icon: Building2, title: 'Architecte', color: '#f97316' }
          ].map(({ tab, icon: Icon, title, color }) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`p-4 md:p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center text-center ${
                activeTab === tab ? 'shadow-xl scale-105' : 'bg-white border-gray-100 opacity-80'
              }`}
              style={{ 
                color: activeTab === tab ? color : '#64748b', 
                borderColor: activeTab === tab ? color : 'transparent',
                backgroundColor: activeTab === tab ? `${color}08` : '#ffffff' 
              }}
            >
              <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-3 transition-all ${
                activeTab === tab ? 'bg-current text-white shadow-lg' : 'bg-gray-100 text-gray-400'
              }`}>
                <Icon className="w-5 h-5 md:w-8 md:h-8" style={{ color: activeTab === tab ? 'white' : '' }} />
              </div>
              <h3 className="text-[10px] md:text-lg font-bold leading-tight uppercase tracking-tighter md:tracking-normal">{title}</h3>
            </button>
          ))}
        </div>

        {/* FORMULAIRES : max-w-4xl pour éviter l'étalement sur PC, padding réduit sur mobile */}
        <div className="mt-8 transition-all duration-500 max-w-4xl mx-auto">
          {activeTab === 'candidature' && <CandidatureSpontaneeForm />}
          {activeTab === 'apporteur' && <ApporteurAffairesForm />}
          {activeTab === 'franchisee' && <FranchiseeForm />}
          {activeTab === 'architecte' && <ArchitecteForm />}
        </div>
      </div>

      <WhyJoinSection />

      <footer className="bg-gray-950 text-white py-10 px-4 text-center">
        <p className="text-gray-500 text-[10px] md:text-sm">&copy; {new Date().getFullYear()} Ellipsys Solutions. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

// --- HOOKS & UTILS ---

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);
  return { ref, isInView };
}

// --- STRUCTURES DE FORMULAIRES OPTIMISÉES ---

function ApporteurAffairesForm() {
  const { formData, handleChange, handleSubmit, isSubmitting, submitSuccess } = useSecureForm({ nom: '', prenom: '', email: '', telephone: '', entreprise: '', secteur: '', message: '' });
  return (
    <div className="bg-white rounded-3xl shadow-xl p-5 md:p-12 border border-sky-100">
      <div className="flex items-center gap-4 mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-lg flex-shrink-0"><Handshake className="w-5 h-5 md:w-7 md:h-7" /></div>
        <h2 className="text-xl md:text-3xl font-bold text-gray-800">Devenir apporteur</h2>
      </div>
      {submitSuccess ? <SuccessView /> : (
        <form onSubmit={handleSubmit(() => {})} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <input name="nom" placeholder="Nom *" onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-sky-500 transition-all text-sm md:text-base" />
          <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-sky-500 transition-all text-sm md:text-base" />
          <input name="email" type="email" placeholder="Email *" onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-sky-500 transition-all text-sm md:text-base" />
          <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-sky-500 transition-all text-sm md:text-base" />
          <textarea name="message" placeholder="Votre message..." className="md:col-span-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-sky-500 transition-all h-32 text-sm md:text-base" onChange={handleChange}></textarea>
          <button className="md:col-span-2 w-full bg-sky-600 text-white py-4 rounded-xl font-bold hover:bg-sky-700 active:scale-95 transition-all text-sm md:text-base shadow-lg">Envoyer la demande</button>
        </form>
      )}
    </div>
  );
}

function CandidatureSpontaneeForm() {
    const { formData, handleChange, handleSubmit, isSubmitting, submitSuccess } = useSecureForm({ nom: '', prenom: '', email: '', telephone: '', poste: '', motivation: '' });
    return (
      <div className="bg-white rounded-3xl shadow-xl p-5 md:p-12 border border-green-100">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg flex-shrink-0"><FileText className="w-5 h-5 md:w-7 md:h-7" /></div>
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">Candidature Spontanée</h2>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input placeholder="Nom *" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-500 transition-all text-sm md:text-base" />
            <input placeholder="Prénom *" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-500 transition-all text-sm md:text-base" />
            <input placeholder="Email *" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-500 transition-all text-sm md:text-base" />
            <input placeholder="Téléphone *" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-500 transition-all text-sm md:text-base" />
            <input placeholder="Poste recherché *" className="md:col-span-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-500 transition-all text-sm md:text-base" />
            <textarea placeholder="Votre motivation..." className="md:col-span-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-green-500 transition-all h-32 text-sm md:text-base"></textarea>
            <button className="md:col-span-2 w-full bg-green-600 text-white py-4 rounded-xl font-bold active:scale-95 transition-all text-sm md:text-base shadow-lg">Envoyer mon profil</button>
        </form>
      </div>
    );
}

function SuccessView() {
    return <div className="text-center py-10 px-4"><div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">✓</div><h3 className="text-lg md:text-xl font-bold">Envoi réussi !</h3></div>
}

// Les autres formulaires suivront la même structure responsive que CandidatureSpontaneeForm
function FranchiseeForm() { return <div className="p-8 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-sm md:text-base">Chargement du formulaire franchise...</div> }
function ArchitecteForm() { return <div className="p-8 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 text-sm md:text-base">Chargement du formulaire architecte...</div> }
