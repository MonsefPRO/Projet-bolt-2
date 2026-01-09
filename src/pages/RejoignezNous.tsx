import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, Users, Heart, Award, Send, FileText, Building2, Handshake, Target, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { useSecureForm } from '../hooks/useSecureForm';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`transform transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="group h-full bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#233B72] mb-3">{benefit.title}</h3>
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
      
      <section className="relative pt-32 pb-16 overflow-hidden flex items-center h-[350px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-[#233B72]/40 to-black/60 z-10"></div>
        <div className="relative z-20 w-full text-center px-4 text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-2xl">Rejoignez-nous</h1>
          <p className="text-lg md:text-2xl font-semibold opacity-90 tracking-wide">Les drones au service de l'humain</p>
        </div>
      </section>

      {/* SECTION BLOCS ET FORMULAIRES EN PLEINE LARGEUR (max-w-full sur PC) */}
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-[1400px]">
        {/* BLOCS DE SELECTION AVEC DESCRIPTIFS FLUIDES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20">
          {[
            { 
              tab: 'candidature', 
              icon: FileText, 
              title: 'Candidature', 
              color: 'green',
              desc: "Intégrez une équipe d'experts passionnés et donnez un nouvel élan à votre carrière."
            },
            { 
              tab: 'apporteur', 
              icon: Handshake, 
              title: 'Apporteur', 
              color: 'sky',
              desc: "Valorisez votre réseau professionnel et générez des revenus complémentaires significatifs."
            },
            { 
              tab: 'franchisee', 
              icon: Briefcase, 
              title: 'Franchisé', 
              color: 'amber',
              desc: "Développez votre propre agence Ellipsys et devenez un acteur clé de votre région."
            },
            { 
              tab: 'architecte', 
              icon: Building2, 
              title: 'Architecte', 
              color: 'orange',
              desc: "Sublimez vos projets grâce à nos relevés techniques et modélisations 3D haute précision."
            }
          ].map(({ tab, icon: Icon, title, color, desc }) => {
            const isActive = activeTab === tab;
            const colorClasses: any = {
                green: 'border-green-500 bg-green-50/50',
                sky: 'border-sky-500 bg-sky-50/50',
                amber: 'border-amber-500 bg-amber-50/50',
                orange: 'border-orange-500 bg-orange-50/50'
            };

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`group relative p-6 md:p-10 rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col items-center text-center ${
                  isActive ? `${colorClasses[color]} shadow-2xl scale-105 z-10` : 'bg-white border-gray-100 hover:border-gray-200 opacity-80 hover:opacity-100'
                }`}
              >
                <div className={`w-14 h-14 md:w-20 md:h-20 rounded-[1.5rem] flex items-center justify-center mb-6 transition-all duration-500 shadow-md ${
                  isActive ? 'bg-white' : 'bg-gray-50'
                }`}>
                  <Icon className="w-7 h-7 md:w-10 md:h-10 text-[#233B72]" />
                </div>
                <h3 className={`text-xs md:text-xl font-black uppercase tracking-widest transition-colors mb-3 ${isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                  {title}
                </h3>
                {/* TEXTE D'IMPACT FLUIDE */}
                <p className={`hidden md:block text-sm leading-relaxed ${isActive ? 'text-gray-700' : 'text-gray-400 opacity-0'}`}>
                   {desc}
                </p>
                {isActive && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 bg-inherit border-r-2 border-b-2 border-inherit"></div>}
              </button>
            );
          })}
        </div>

        {/* FORMULAIRES EN PLEINE LARGEUR AVEC CHAMPS AGRANDIS */}
        <div className="transition-all duration-700 w-full mx-auto">
          {activeTab === 'candidature' && <CandidatureSpontaneeForm />}
          {activeTab === 'apporteur' && <ApporteurAffairesForm />}
          {activeTab === 'franchisee' && <FranchiseeForm />}
          {activeTab === 'architecte' && <ArchitecteForm />}
        </div>
      </div>

      <WhyJoinSection />
      <Footer />
    </div>
  );
}

// --- FORMULAIRES CHAMPS AGRANDIS ET DESIGN PLEINE LARGEUR ---

function CandidatureSpontaneeForm() {
  const { formData, handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', poste: '', motivation: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-green-50 rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-20 border border-green-100 animate-fadeIn">
      <div className="flex items-center mb-12">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-8 shadow-xl text-white"><FileText className="w-8 h-8 md:w-10 md:h-10" /></div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight">Candidature spontanée</h2>
      </div>
      {submitSuccess ? <SuccessView color="green" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field-premium" />
            <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field-premium" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input name="email" type="email" placeholder="Email *" onChange={handleChange} required className="input-field-premium" />
            <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field-premium" />
          </div>
          <input name="poste" placeholder="Poste recherché *" onChange={handleChange} required className="input-field-premium" />
          <textarea name="motivation" placeholder="Décrivez votre parcours et vos motivations..." rows={7} onChange={handleChange} required className="input-field-premium"></textarea>
          <button className="w-full bg-green-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-green-700 transition-all shadow-2xl active:scale-[0.98] uppercase tracking-widest">Envoyer mon profil</button>
        </form>
      )}
    </div>
  );
}

function ApporteurAffairesForm() {
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', message: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-sky-50 rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-20 border border-sky-100 animate-fadeIn">
      <div className="flex items-center mb-12">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mr-8 shadow-xl text-white"><Handshake className="w-8 h-8 md:w-10 md:h-10" /></div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight">Devenir apporteur d'affaires</h2>
      </div>
      {submitSuccess ? <SuccessView color="sky" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field-premium" />
            <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field-premium" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input name="email" type="email" placeholder="Email *" onChange={handleChange} required className="input-field-premium" />
            <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field-premium" />
          </div>
          <textarea name="message" placeholder="Parlez-nous de votre réseau et de vos opportunités..." rows={7} onChange={handleChange} className="input-field-premium"></textarea>
          <button className="w-full bg-sky-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-sky-700 transition-all shadow-2xl active:scale-[0.98] uppercase tracking-widest">Envoyer la demande</button>
        </form>
      )}
    </div>
  );
}

function FranchiseeForm() {
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', ville: '', apport: '', motivation: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-amber-50 rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-20 border border-amber-100 animate-fadeIn">
      <div className="flex items-center mb-12">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mr-8 shadow-xl text-white"><Briefcase className="w-8 h-8 md:w-10 md:h-10" /></div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight">Devenir franchisé</h2>
      </div>
      {submitSuccess ? <SuccessView color="amber" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field-premium" />
            <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field-premium" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input name="email" type="email" placeholder="Email *" onChange={handleChange} required className="input-field-premium" />
            <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field-premium" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input name="ville" placeholder="Ville souhaitée *" onChange={handleChange} required className="input-field-premium" />
            <input name="apport" placeholder="Apport disponible" onChange={handleChange} className="input-field-premium" />
          </div>
          <textarea name="motivation" placeholder="Parlez-nous de votre projet entrepreneurial..." rows={7} onChange={handleChange} className="input-field-premium"></textarea>
          <button className="w-full bg-amber-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-amber-700 shadow-lg active:scale-[0.98] uppercase tracking-widest">Demander documentation</button>
        </form>
      )}
    </div>
  );
}

function ArchitecteForm() {
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', cabinet: '', message: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-orange-50 rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-20 border border-orange-100 animate-fadeIn">
      <div className="flex items-center mb-12">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mr-8 shadow-xl text-white"><Building2 className="w-8 h-8 md:w-10 md:h-10" /></div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight">Groupe d'architectes</h2>
      </div>
      {submitSuccess ? <SuccessView color="orange" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input name="nom" placeholder="Nom *" onChange={handleChange} required className="input-field-premium" />
            <input name="prenom" placeholder="Prénom *" onChange={handleChange} required className="input-field-premium" />
          </div>
          <input name="cabinet" placeholder="Nom du cabinet *" onChange={handleChange} required className="input-field-premium" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <input name="email" type="email" placeholder="Email professionnel *" onChange={handleChange} required className="input-field-premium" />
            <input name="telephone" type="tel" placeholder="Téléphone *" onChange={handleChange} required className="input-field-premium" />
          </div>
          <textarea name="message" placeholder="Vos besoins spécifiques par drone (modélisation, inspection...)" rows={7} onChange={handleChange} className="input-field-premium"></textarea>
          <button className="w-full bg-orange-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-orange-700 shadow-lg active:scale-[0.98] uppercase tracking-widest">Rejoindre le réseau</button>
        </form>
      )}
    </div>
  );
}

// --- UTILS ---

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

function SuccessView({ color }: { color: string }) {
    const bg = color === 'green' ? 'bg-green-500' : color === 'sky' ? 'bg-sky-500' : color === 'amber' ? 'bg-amber-500' : 'bg-orange-500';
    return (
        <div className="text-center py-10">
            <div className={`w-28 h-28 ${bg} rounded-full flex items-center justify-center mx-auto mb-8 text-white text-5xl shadow-2xl animate-bounce`}>✓</div>
            <h3 className="text-4xl font-black text-gray-800">Demande envoyée !</h3>
            <p className="text-gray-500 text-xl mt-4">Nous reviendrons vers vous sous 48h.</p>
        </div>
    );
}

/**
 * AJOUTEZ CE STYLE CSS DANS VOTRE FICHIER index.css POUR LES CHAMPS AGRANDIS
 * .input-field-premium { 
 * @apply w-full px-8 py-6 bg-white/90 border-2 border-gray-100 rounded-2xl outline-none 
 * focus:border-[#233B72] focus:bg-white transition-all text-xl shadow-sm placeholder-gray-400; 
 * }
 */
