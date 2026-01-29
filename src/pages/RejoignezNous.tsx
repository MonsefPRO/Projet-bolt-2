import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, Users, Heart, Award, FileText, Building2, Handshake, Target, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { useSecureForm } from '../hooks/useSecureForm';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';

// --- SECTIONS DE SOUTIEN ---

function WhyJoinSection() {
  const { t } = useLanguage();
  const { ref, isInView } = useInView();
  
  const benefits = [
    { icon: Heart, title: t('rejoignez.benefit1_title'), description: t('rejoignez.benefit1_desc'), color: 'from-pink-500 to-red-500' },
    { icon: Award, title: t('rejoignez.benefit2_title'), description: t('rejoignez.benefit2_desc'), color: 'from-sky-500 to-blue-600' },
    { icon: TrendingUp, title: t('rejoignez.benefit3_title'), description: t('rejoignez.benefit3_desc'), color: 'from-green-500 to-emerald-600' },
    { icon: Target, title: t('rejoignez.benefit4_title'), description: t('rejoignez.benefit4_desc'), color: 'from-orange-500 to-red-600' },
    { icon: Users, title: t('rejoignez.benefit5_title'), description: t('rejoignez.benefit5_desc'), color: 'from-purple-500 to-pink-600' },
    { icon: Sparkles, title: t('rejoignez.benefit6_title'), description: t('rejoignez.benefit6_desc'), color: 'from-yellow-500 to-orange-600' }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#233B72] mb-4 uppercase tracking-tighter">{t('rejoignez.why_title')}</h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">{t('rejoignez.why_subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`transform transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="group h-full bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-[#233B72] mb-3 uppercase tracking-tight">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{benefit.description}</p>
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
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'candidature' | 'apporteur' | 'franchisee' | 'architecte'>('candidature');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-7xl font-black mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            {t('rejoignez.title')}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-bold text-white italic">
            {t('rejoignez.subtitle') || "Les drones au service de l'humain"}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-[1400px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20">
          {[
            { tab: 'candidature', icon: FileText, title: t('rejoignez.tab1_title'), color: 'green', desc: t('rejoignez.tab1_desc') },
            { tab: 'apporteur', icon: Handshake, title: t('rejoignez.tab2_title'), color: 'sky', desc: t('rejoignez.tab2_desc') },
            { tab: 'franchisee', icon: Briefcase, title: t('rejoignez.tab3_title'), color: 'amber', desc: t('rejoignez.tab3_desc') },
            { tab: 'architecte', icon: Building2, title: t('rejoignez.tab4_title'), color: 'orange', desc: t('rejoignez.tab4_desc') }
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
                <p className={`hidden md:block text-sm font-medium leading-relaxed ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
                   {desc}
                </p>
                {isActive && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 bg-inherit border-r-2 border-b-2 border-inherit"></div>}
              </button>
            );
          })}
        </div>

        <div className="transition-all duration-700 w-full">
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

// --- FORMULAIRES ---

function CandidatureSpontaneeForm() {
  const { t } = useLanguage();
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', poste: '', motivation: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-green-50 rounded-[4rem] shadow-2xl p-8 md:p-20 border border-green-100 animate-fadeIn">
      <div className="flex items-center mb-16 text-gray-800">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-8 shadow-xl text-white"><FileText className="w-8 h-8 md:w-12 md:h-12" /></div>
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase">{t('rejoignez.tab1_title')}</h2>
      </div>
      {submitSuccess ? <SuccessView color="green" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <input name="nom" placeholder={`${t('quote.form.lastName')} *`} onChange={handleChange} required className="input-field-xxl" />
            <input name="prenom" placeholder={`${t('quote.form.firstName')} *`} onChange={handleChange} required className="input-field-xxl" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <input name="email" type="email" placeholder={`${t('quote.form.email')} *`} onChange={handleChange} required className="input-field-xxl" />
            <input name="telephone" type="tel" placeholder={`${t('quote.form.phone')} *`} onChange={handleChange} required className="input-field-xxl" />
          </div>
          <input name="poste" placeholder={t('rejoignez.form_job') || "Poste recherché *"} onChange={handleChange} required className="input-field-xxl" />
          <textarea name="motivation" placeholder={t('rejoignez.form_motivation') || "Décrivez votre parcours..."} rows={8} onChange={handleChange} required className="input-field-xxl"></textarea>
          <button type="submit" className="w-full bg-green-600 text-white py-8 rounded-3xl font-black text-2xl hover:bg-green-700 transition-all shadow-2xl active:scale-[0.99] uppercase tracking-[0.2em]">{t('rejoignez.form_submit_profile') || "Envoyer mon profil"}</button>
        </form>
      )}
    </div>
  );
}

function ApporteurAffairesForm() {
  const { t } = useLanguage();
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', message: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-sky-50 rounded-[4rem] shadow-2xl p-8 md:p-20 border border-sky-100 animate-fadeIn">
      <div className="flex items-center mb-16 text-gray-800">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mr-8 shadow-xl text-white"><Handshake className="w-8 h-8 md:w-12 md:h-12" /></div>
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase">{t('rejoignez.tab2_title')}</h2>
      </div>
      {submitSuccess ? <SuccessView color="sky" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <input name="nom" placeholder={`${t('quote.form.lastName')} *`} onChange={handleChange} required className="input-field-xxl" />
            <input name="prenom" placeholder={`${t('quote.form.firstName')} *`} onChange={handleChange} required className="input-field-xxl" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <input name="email" type="email" placeholder={`${t('quote.form.email')} *`} onChange={handleChange} required className="input-field-xxl" />
            <input name="telephone" type="tel" placeholder={`${t('quote.form.phone')} *`} onChange={handleChange} required className="input-field-xxl" />
          </div>
          <textarea name="message" placeholder={t('rejoignez.form_network') || "Parlez-nous de votre réseau..."} rows={8} onChange={handleChange} className="input-field-xxl"></textarea>
          <button type="submit" className="w-full bg-sky-600 text-white py-8 rounded-3xl font-black text-2xl hover:bg-sky-700 transition-all shadow-2xl active:scale-[0.99] uppercase tracking-[0.2em]">{t('rejoignez.form_submit_request') || "Envoyer la demande"}</button>
        </form>
      )}
    </div>
  );
}

function FranchiseeForm() {
  const { t } = useLanguage();
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', telephone: '', ville: '', apport: '', motivation: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-amber-50 rounded-[4rem] shadow-2xl p-8 md:p-20 border border-amber-100 animate-fadeIn">
      <div className="flex items-center mb-16 text-gray-800">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mr-8 shadow-xl text-white"><Briefcase className="w-8 h-8 md:w-12 md:h-12" /></div>
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase">{t('rejoignez.tab3_title')}</h2>
      </div>
      {submitSuccess ? <SuccessView color="amber" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <input name="nom" placeholder={`${t('quote.form.lastName')} *`} onChange={handleChange} required className="input-field-xxl" />
            <input name="prenom" placeholder={`${t('quote.form.firstName')} *`} onChange={handleChange} required className="input-field-xxl" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <input name="email" type="email" placeholder={`${t('quote.form.email')} *`} onChange={handleChange} required className="input-field-xxl" />
            <input name="telephone" type="tel" placeholder={`${t('quote.form.phone')} *`} onChange={handleChange} required className="input-field-xxl" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <input name="ville" placeholder={`${t('quote.form.city')} *`} onChange={handleChange} required className="input-field-xxl" />
            <input name="apport" placeholder={t('rejoignez.form_investment') || "Apport disponible"} onChange={handleChange} className="input-field-xxl" />
          </div>
          <textarea name="motivation" placeholder={t('rejoignez.form_project') || "Votre projet..."} rows={8} onChange={handleChange} className="input-field-xxl"></textarea>
          <button type="submit" className="w-full bg-amber-600 text-white py-8 rounded-3xl font-black text-2xl hover:bg-amber-700 transition-all shadow-2xl active:scale-[0.99] uppercase tracking-[0.2em]">{t('rejoignez.form_request_doc') || "Demander documentation"}</button>
        </form>
      )}
    </div>
  );
}

function ArchitecteForm() {
  const { t } = useLanguage();
  const { handleChange, handleSubmit, submitSuccess } = useSecureForm({
    nom: '', prenom: '', email: '', cabinet: '', message: ''
  });
  return (
    <div className="bg-gradient-to-br from-white to-orange-50 rounded-[4rem] shadow-2xl p-8 md:p-20 border border-orange-100 animate-fadeIn">
      <div className="flex items-center mb-16 text-gray-800">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mr-8 shadow-xl text-white"><Building2 className="w-8 h-8 md:w-12 md:h-12" /></div>
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase">{t('rejoignez.tab4_title')}</h2>
      </div>
      {submitSuccess ? <SuccessView color="orange" /> : (
        <form onSubmit={handleSubmit(() => {})} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <input name="nom" placeholder={`${t('quote.form.lastName')} *`} onChange={handleChange} required className="input-field-xxl" />
            <input name="prenom" placeholder={`${t('quote.form.firstName')} *`} onChange={handleChange} required className="input-field-xxl" />
          </div>
          <input name="cabinet" placeholder={t('rejoignez.form_firm') || "Nom du cabinet *"} onChange={handleChange} required className="input-field-xxl" />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <input name="email" type="email" placeholder={t('rejoignez.form_pro_email') || "Email professionnel *"} onChange={handleChange} required className="input-field-xxl" />
            <input name="telephone" type="tel" placeholder={`${t('quote.form.phone')} *`} onChange={handleChange} required className="input-field-xxl" />
          </div>
          <textarea name="message" placeholder={t('rejoignez.form_needs') || "Besoins spécifiques..."} rows={8} onChange={handleChange} className="input-field-xxl"></textarea>
          <button type="submit" className="w-full bg-orange-600 text-white py-8 rounded-3xl font-black text-2xl hover:bg-orange-700 transition-all shadow-2xl active:scale-[0.99] uppercase tracking-[0.2em]">{t('rejoignez.form_join_network') || "Rejoindre le réseau"}</button>
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
    const { t } = useLanguage();
    const bg = color === 'green' ? 'bg-green-500' : color === 'sky' ? 'bg-sky-500' : color === 'amber' ? 'bg-amber-500' : 'bg-orange-500';
    return (
        <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
            <div className={`w-32 h-32 ${bg} rounded-full flex items-center justify-center mx-auto mb-10 text-white shadow-2xl animate-bounce`}>
              <CheckCircle2 size={64} />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gray-800 uppercase tracking-tighter">{t('devis.form.success')}</h3>
            <p className="text-gray-500 text-2xl mt-6 font-medium">We will get back to you shortly.</p>
        </div>
    );
}
