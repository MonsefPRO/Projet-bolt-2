import { useEffect } from 'react';
import { ChevronRight, Shield, TrendingUp, Zap, CheckCircle, Leaf, Award, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function PanneauxPhotovoltaiques() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* BANNIÈRE : Texte ajusté pour ne pas déborder sur mobile */}
      <div className="h-[350px] md:h-[450px] bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden pt-20">
        <img
          src="/rony.jpg"
          alt="Nettoyage de panneaux photovoltaïques par drone"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-full">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight break-words">
              Nettoyage de Panneaux <br className="md:hidden" /> Photovoltaïques
            </h1>
            <p className="text-base md:text-2xl text-amber-100 font-medium px-2">
              Maximisez votre production d'énergie solaire
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-amber-600 font-medium">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/prestations" className="hover:text-amber-600 font-medium">Prestations</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-bold">Photovoltaïque</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          <div className="lg:col-span-2 space-y-10 md:space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233B72] mb-6">Optimisez votre rendement</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-lg text-justify">
                <p>
                  Des panneaux encrassés perdent <strong>jusqu'à 30 % de production</strong>. 
                  Grâce au drone, nettoyez sans contact, sans rayures et en toute sécurité.
                </p>
              </div>
            </section>

            {/* ÉQUIPEMENTS : 2 colonnes sur mobile pour gagner de la place */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Équipements spécialisés</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-6">
                {[
                  { title: 'Drone Spécialisé', desc: 'Certifié grandes surfaces' },
                  { title: 'Basse Pression', desc: 'Nettoyage doux' },
                  { title: 'Eau Osmosée', desc: 'Zéro résidu' },
                  { title: 'Thermique HD', desc: 'Détection défauts' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border-2 border-amber-50 rounded-2xl p-4 md:p-6 shadow-sm">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-xs md:text-base leading-tight">{item.title}</h4>
                        <p className="hidden md:block text-gray-500 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AVANTAGES : 2 colonnes sur mobile pour gagner de la place */}
            <section>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Avantages de notre solution</h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { title: 'Zéro Contact', desc: 'Aucune rayure.' },
                  { title: 'Sécurité', desc: 'Risque élec. nul.' },
                  { title: 'Rapidité', desc: '5x plus vite.' },
                  { title: 'Rentabilité', desc: 'ROI immédiat.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-2 p-4 bg-white rounded-2xl shadow-sm border border-amber-50">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold text-xs md:text-base">{item.title}</p>
                      <p className="hidden md:block text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CERTIFICATIONS : Reste tel quel */}
            <section className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-6 md:p-10 text-white shadow-2xl">
              <h3 className="text-lg md:text-2xl font-bold mb-6 text-center uppercase tracking-widest text-amber-400">Garanties de Service</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {['Certifié DGAC', 'RC Pro Électricité', 'Normes 2026', 'Formation PV', 'Garantie 10 ans', 'Eco-Responsable'].map((cert, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-white/10 flex flex-col items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] md:text-xs font-bold">{cert}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* BÉNÉFICES : Reste tel quel */}
            <section className="bg-amber-50/50 rounded-3xl p-6 md:p-10 border border-amber-100">
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-6">Bénéfices clients</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Récupérez jusqu\'à 30% d\'énergie',
                  'Zéro contact : aucun risque',
                  'Intervention 5x plus rapide',
                  'Produits non abrasifs',
                  'Planning bi-annuel',
                  'Rapport de performance'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-xs md:text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl text-center">
                <Sun className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-extrabold mb-4">Augmentez vos revenus</h3>
                <Link to="/devis" className="block w-full bg-white text-orange-600 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">
                  Devis Gratuit
                </Link>
              </div>

              {/* POINTS CLÉS : Reste tel quel */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-5 border-b pb-2">Atouts Expertise</h4>
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, title: 'Rendement', val: '+30%' },
                    { icon: Shield, title: 'Protection', val: 'Zéro rayure' },
                    { icon: Leaf, title: 'Bio', val: 'Écologique' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-gray-600">{item.title}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-800">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
