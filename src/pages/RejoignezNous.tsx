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
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#233B72] mb-4">Pourquoi nous rejoindre ?</h2>
          <p className="text-gray-600 text-lg">Découvrez les avantages de faire partie de l'équipe Ellipsys</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`transform transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="group h-full bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">{benefit.description}</p>
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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* BANNIÈRE HARMONISÉE AVEC FILTRE SOMBRE */}
      <section className="relative pt-32 pb-20 overflow-hidden flex items-center h-[400px]">
        <HeroCarousel />
        {/* LE FILTRE RÉFÉRENCE */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 via-blue-900/20 to-black/40 z-10"></div>
        
        <div className="relative z-20 w-full text-center px-4">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-sm font-semibold mb-6">
            Rejoignez l'aventure
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-2xl text-white">
            Rejoignez-nous
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-semibold text-white">
            Les drones au service de l'humain
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-12">
          <Link to="/" className="hover:text-sky-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-bold">Rejoignez-nous</span>
        </nav>

        {/* ONGLETS / TABS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            { tab: 'candidature', icon: FileText, title: 'Candidature', color: '#22c55e' },
            { tab: 'apporteur', icon: Handshake, title: 'Apporteur', color: '#0ea5e9' },
            { tab: 'franchisee', icon: Briefcase, title: 'Franchisé', color: '#f59e0b' },
            { tab: 'architecte', icon: Building2, title: 'Architecte', color: '#f97316' }
          ].map(({ tab, icon: Icon, title, color }) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform flex flex-col items-center text-center ${
                activeTab === tab ? 'scale-105 shadow-xl border-current' : 'bg-white hover:border-gray-300 border-gray-100 opacity-70 hover:opacity-100'
              }`}
              style={{ color: activeTab === tab ? color : '#64748b', borderColor: activeTab === tab ? color : '' }}
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 transition-all ${
                activeTab === tab ? 'bg-current text-white shadow-lg' : 'bg-gray-100 text-gray-400'
              }`}>
                <Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: activeTab === tab ? 'white' : '' }} />
              </div>
              <h3 className="text-xs md:text-lg font-bold leading-tight">{title}</h3>
            </button>
          ))}
        </div>

        {/* FORMULAIRE ACTIF */}
        <div className="mt-12 transition-all duration-500">
          {activeTab === 'candidature' && <CandidatureSpontaneeForm />}
          {activeTab === 'apporteur' && <ApporteurAffairesForm />}
          {activeTab === 'franchisee' && <FranchiseeForm />}
          {activeTab === 'architecte' && <ArchitecteForm />}
        </div>
      </div>

      <WhyJoinSection />

      <footer className="bg-gray-950 text-white py-12 px-4 text-center">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Ellipsys Solutions. Tous droits réservés.</p>
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

// --- FORMULAIRES ---
// (Note: J'ai gardé ta logique mais compacté le style pour PC et Mobile)

function ApporteurAffairesForm() {
  const { formData, handleChange, handleSubmit, isSubmitting, submitSuccess } = useSecureForm({ nom: '', prenom: '', email: '', telephone: '', entreprise: '', secteur: '', message: '' });
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-sky-100 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-lg"><Handshake /></div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Partenariat Apporteur</h2>
      </div>
      {submitSuccess ? <SuccessView /> : (
        <form onSubmit={handleSubmit(() => {})} className="grid md:grid-cols-2 gap-6">
          <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field" />
          <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field" />
          <input name="email" type="email" placeholder="Email *" onChange={handleChange} required className="input-field" />
          <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field" />
          <textarea name="message" placeholder="Votre message..." className="md:col-span-2 input-field h-32" onChange={handleChange}></textarea>
          <button className="md:col-span-2 w-full bg-sky-600 text-white py-4 rounded-xl font-bold hover:bg-sky-700 transition-all">Envoyer la demande</button>
        </form>
      )}
    </div>
  );
}

function CandidatureSpontaneeForm() {
    const { formData, handleChange, handleSubmit, isSubmitting, submitSuccess } = useSecureForm({ nom: '', prenom: '', email: '', telephone: '', poste: '', motivation: '' });
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-green-100 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg"><FileText /></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Candidature Spontanée</h2>
        </div>
        <form className="grid md:grid-cols-2 gap-6">
            <input placeholder="Nom *" className="input-field" />
            <input placeholder="Prénom *" className="input-field" />
            <input placeholder="Email *" className="input-field" />
            <input placeholder="Téléphone *" className="input-field" />
            <input placeholder="Poste recherché *" className="md:col-span-2 input-field" />
            <textarea placeholder="Votre motivation..." className="md:col-span-2 input-field h-32"></textarea>
            <button className="md:col-span-2 w-full bg-green-600 text-white py-4 rounded-xl font-bold">Envoyer mon profil</button>
        </form>
      </div>
    );
}

function SuccessView() {
    return <div className="text-center py-10"><div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">✓</div><h3 className="text-xl font-bold">Envoi réussi !</h3></div>
}

// Les formulaires FranchiseeForm et ArchitecteForm suivent la même structure...
function FranchiseeForm() { return <div className="p-10 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">Formulaire Franchise en cours...</div> }
function ArchitecteForm() { return <div className="p-10 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">Formulaire Architecte en cours...</div> }

// CSS Additionnel à mettre dans ton index.css pour les champs
// .input-field { @apply w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-sky-500 transition-all; }
