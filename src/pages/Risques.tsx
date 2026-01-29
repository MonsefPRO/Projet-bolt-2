import { ChevronRight, ShieldAlert, Scale, AlertTriangle, CheckCircle, ShieldCheck, Zap, Lock, Activity, Radar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import { Hover3DCard } from '../components/Hover3DCard';
import { ScrollReveal } from '../components/ScrollReveal';
import Footer from '../components/Footer';

export default function Risques() {
  const { t } = useLanguage();

  const sections = [
    {
      id: 'securite-humaine',
      title: t('risques.title1') || 'Maîtrise des Risques Humains & EPC',
      description: t('risques.desc1') || "Neutraliser le risque de chute : La priorité absolue du donneur d'ordre.",
      icon: ShieldAlert,
      content: t('risques.content1') || `En application du Code du Travail (R4323-58), la priorité doit être donnée aux équipements de protection collective. Le drone n'est pas une alternative 'gadget', c'est le seul bouclier technologique qui supprime totalement l'exposition au vide.`,
      items: [
        t('benefits.safety.title'),
        t('risques.item1_2') || 'Protection collective par technologie déportée',
        t('risques.item1_3') || 'Réduction drastique de la pénibilité (TMS)',
        t('risques.item1_4') || 'Zéro personnel suspendu ou en nacelle'
      ],
      visualTitle: t('risques.vTitle1') || "Bulle de Sécurité Active",
      visualDesc: t('risques.vDesc1') || "Zone 100% hermétique aux tiers durant l'intervention.",
      visualIcon: Radar,
      visualDetail: <div className="mt-4 flex items-center gap-2 text-green-400 font-mono text-xs"><Activity size={Activity} /> {t('risques.vDetail1') || 'SCANNER_SOL: ACTIF'}</div>
    },
    {
      id: 'cadre-juridique',
      title: t('risques.title2') || 'Sécurisation de votre Position Juridique',
      description: t('risques.desc2') || "Syndics, foncières et industriels : votre responsabilité civile et pénale est engagée.",
      icon: Scale,
      content: t('risques.content2') || `Nous ne livrons pas seulement une façade propre, nous livrons un dossier de conformité. Nous gérons l'intégralité des protocoles : déclarations préfectorales S1, S2, S3, accords avec la DGAC.`,
      items: [
        t('risques.item2_1') || 'Assurance RC Aérienne spécifique (hors standard)',
        t('risques.item2_2') || 'Conformité DGAC & Protocoles Préfectoraux',
        t('risques.item2_3') || 'Dossier de levée de risques complet',
        t('risques.item2_4') || 'Traçabilité et archivage post-intervention'
      ],
      visualTitle: t('risques.vTitle2') || "Dossier de Diligence",
      visualDesc: t('risques.vDesc2') || "Accès aux protocoles S1-S2-S3 et attestations RC Pro Aérienne.",
      visualIcon: Lock,
      visualDetail: <div className="mt-4 p-2 bg-white/10 rounded border border-white/20 font-mono text-[10px] text-blue-200 uppercase tracking-widest">{t('risques.vDetail2') || 'Auth_DGAC: Validé'}</div>
    },
    {
      id: 'limites-techniques',
      title: t('risques.title3') || 'L\'Honnêteté Technique : Savoir dire Non',
      description: t('risques.desc3') || "La confiance naît de la rigueur, pas des promesses intenables.",
      icon: AlertTriangle,
      content: t('risques.content3') || `Le drone est une solution d'excellence, mais elle possède des contre-indications. Si le vent dépasse 30 km/h, nous préconisons d'autres méthodes.`,
      items: [
        t('risques.item3_1') || 'Seuil météo strict (Vent < 30km/h)',
        t('risques.item3_2') || 'Diagnostic de porosité préalable',
        t('risques.item3_3') || 'Analyse No-Fly Zone (Zone d\'exclusion)',
        t('risques.item3_4') || 'Validation d\'intégrité du support'
      ],
      visualTitle: t('risques.vTitle3') || "Télémétrie Météo",
      visualDesc: t('risques.vDesc3') || "Monitoring temps réel des conditions de vol.",
      visualIcon: Zap,
      visualDetail: <div className="mt-4 flex gap-2"><span className="text-[10px] font-bold px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded border border-yellow-500/30 uppercase">Vent: 22km/h</span><span className="text-[10px] font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded border border-green-500/30 uppercase">Statut: OK</span></div>
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e5a]/80 via-[#1a2e5a]/60 to-black/70 z-10"></div>
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-6xl font-black mb-3 drop-shadow-2xl text-white uppercase tracking-tighter">
            {t('risques.title')}
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-bold text-blue-200 italic uppercase tracking-wider">
            {t('risques.subtitle')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 mb-8 md:mb-12">
          <Link to="/" className="hover:text-[#1a2e5a]">{t('nav.home')}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1a2e5a] font-black uppercase tracking-tight">{t('risques.title')}</span>
        </nav>

        <ScrollReveal>
          <div className="max-w-4xl mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[#1a2e5a] mb-6 leading-tight uppercase tracking-tighter italic">
              {t('risques.quote') || "\"Celui qui explique le risque inspire plus confiance que celui qui promet qu'il n'existe pas.\""}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-medium">
              {t('risques.intro') || "Le nettoyage de façade par drone n'est pas une simple innovation, c'est une stratégie de réduction des risques industriels."}
            </p>
          </div>
        </ScrollReveal>

        {/* SECTIONS DE MAÎTRISE */}
        <div className="space-y-16 md:space-y-32">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const VisualIcon = section.visualIcon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={section.id} delay={0.1}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 rounded-xl bg-white shadow-xl text-[#e63946] border border-gray-100">
                            <Icon size={32} />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-[#1a2e5a] uppercase tracking-tighter">
                            {section.title}
                        </h2>
                    </div>
                    <p className="text-[#1a2e5a] font-black text-lg md:text-xl leading-relaxed italic border-l-4 border-[#e63946] pl-4 uppercase tracking-tight">
                      {section.description}
                    </p>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed text-justify font-medium">
                      {section.content}
                    </p>
                    
                    <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 md:p-8 shadow-xl">
                      <h3 className="font-black text-[#1a2e5a] mb-6 flex items-center gap-2 text-sm md:text-base uppercase tracking-widest">
                        <CheckCircle size={20} className="text-green-600" />
                        {t('valeurs.whyChoose.subtitle') || 'Engagements Ellipsys :'}
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 font-bold">
                            <span className="text-[#e63946] font-black">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CARTE VISUELLE TECHNIQUE */}
                  <div className="w-full lg:w-1/2">
                    <Hover3DCard className="bg-[#1a2e5a] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden border border-white/10 group">
                        <div className="relative z-10">
                            <VisualIcon size={48} className="mb-6 text-[#e63946] group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic">{section.visualTitle}</h3>
                            <p className="text-blue-100/70 mb-4 text-lg leading-relaxed font-medium">{section.visualDesc}</p>
                            {section.visualDetail}
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-[100px]"></div>
                    </Hover3DCard>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* TABLEAU COMPARATIF */}
        <ScrollReveal>
            <div className="mt-32 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-[#1a2e5a] mb-12 text-center uppercase tracking-tighter">
                  {t('risques.compareTitle') || 'Drone vs Traditionnel : Gestion des risques'}
                </h2>
                <div className="overflow-hidden rounded-[2.5rem] border-4 border-slate-100 shadow-2xl bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-[#1a2e5a] text-white">
                            <tr>
                                <th className="p-8 font-black uppercase text-xs tracking-[0.2em]">{t('risques.tableCol1') || 'Risques'}</th>
                                <th className="p-8 font-black uppercase text-xs tracking-[0.2em] text-blue-200">{t('risques.tableCol2') || 'Méthodes Classiques'}</th>
                                <th className="p-8 font-black uppercase text-xs tracking-[0.2em] bg-red-600/20">{t('risques.tableCol3') || 'Solution Drone'}</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm md:text-lg">
                            {[
                              { label: "Fall from height", trad: "Major risk (High exposure)", drone: "Risk eliminated (Ground based)" },
                              { label: "Surface damage", trad: "Impact risk (Scaffolding)", drone: "Zero physical contact" },
                              { label: "Security / Intrusion", trad: "Permanent structures", drone: "No fixed access points" },
                              { label: "Operation continuity", trad: "Long term disruptions", drone: "Fast & discreet (Hours)" }
                            ].map((row, i) => (
                              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                                <td className="p-8 font-black text-[#1a2e5a] uppercase text-sm tracking-tight">{row.label}</td>
                                <td className="p-8 text-gray-500 italic font-medium">{row.trad}</td>
                                <td className="p-8 font-black text-green-700 bg-green-50/30">{row.drone}</td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ScrollReveal>

        {/* CTA FINAL AUDIT */}
        <div className="mt-32 bg-[#1a2e5a] rounded-[4rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <ShieldCheck className="w-20 h-20 mx-auto mb-10 text-[#e63946]" />
            <h2 className="text-3xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic">{t('risques.ctaTitle') || 'Besoin d\'un audit de risque ?'}</h2>
            <p className="text-lg md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              {t('risques.ctaSubtitle') || "Nous étudions votre bâtiment pour confirmer si le drone est la solution la plus sûre pour votre projet."}
            </p>
            <Link to="/devis" className="inline-flex items-center gap-3 bg-[#e63946] text-white px-12 py-6 rounded-2xl font-black hover:scale-105 transition-all shadow-2xl text-xl uppercase tracking-widest">
              {t('risques.cta') || 'Demander mon audit gratuit'}
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
