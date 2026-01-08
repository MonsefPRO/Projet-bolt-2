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

      {/* HERO SECTION RESPONSIVE */}
      <div className="h-[300px] md:h-96 bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden pt-20">
        <img
          src="/rony.jpg"
          alt="Nettoyage de panneaux photovoltaïques par drone"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
              Panneaux Photovoltaïques
            </h1>
            <p className="text-lg md:text-2xl text-amber-100 font-medium">
              Maximisez votre production d'énergie solaire
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
        {/* BREADCRUMB */}
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-amber-600 font-medium">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/prestations" className="hover:text-amber-600 font-medium">Prestations</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-bold">Photovoltaïque</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          <div className="lg:col-span-2 space-y-10 md:space-y-12">
            {/* TEXTE PRINCIPAL */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233B72] mb-6">Optimisez votre rendement énergétique</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg text-justify">
                <p>
                  Des <strong>panneaux photovoltaïques</strong> encrassés peuvent perdre <strong>jusqu'à 30 % de leur production</strong>. Poussières, pollens et pollution s'accumulent, impactant directement votre rentabilité.
                </p>
                <p>
                  Grâce à notre nettoyage par drone, vous optimisez votre production en <strong>toute sécurité, sans contact et sans rayures</strong>. Une intervention régulière garantit un rendement maximal pour vos installations industrielles ou agricoles.
                </p>
              </div>
            </section>

            {/* ÉQUIPEMENTS - GRID RESPONSIVE */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Équipements spécialisés</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Drone Spécialisé', desc: 'Technologie certifiée pour grandes surfaces' },
                  { title: 'Basse Pression', desc: 'Nettoyage doux pour préserver les cellules' },
                  { title: 'Eau Osmosée', desc: 'Zéro résidu calcaire, séchage parfait' },
                  { title: 'Thermique HD', desc: 'Détection des points chauds et défauts' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border-2 border-amber-50 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-base">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AVANTAGES LISTE COMPACTE */}
            <section className="bg-amber-50/50 rounded-3xl p-6 md:p-10 border border-amber-100">
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-6">Avantages de notre solution</h3>
              <div className="space-y-3">
                {[
                  { title: 'Zéro Contact', desc: 'Aucun risque de micro-fissures sur les panneaux.' },
                  { title: 'Sécurité Électrique', desc: 'Aucun technicien exposé aux risques haute tension.' },
                  { title: 'Rapidité Extrême', desc: 'Jusqu\'à 5x plus rapide qu\'un nettoyage manuel.' },
                  { title: 'Rentabilité', desc: 'ROI immédiat par le gain de production mesurable.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-amber-50">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800 font-bold text-sm md:text-base">{item.title}</p>
                      <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-8 text-center uppercase tracking-widest text-amber-400">Garanties de Service</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Certifié DGAC', 'RC Pro Électricité', 'Normes 2026',
                  'Formation PV', 'Garantie 10 ans', 'Eco-Responsable'
                ].map((cert, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-white/10 flex flex-col items-center justify-center gap-2">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span className="text-[10px] md:text-xs font-black uppercase">{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR STICKY RESPONSIVE */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              
              {/* CARD DEVIS SOLAIRE */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl text-center">
                <Sun className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold mb-4 leading-tight">Augmentez vos revenus</h3>
                <p className="mb-8 text-amber-50 text-sm md:text-base leading-relaxed">
                  Nettoyez vos panneaux deux fois par an pour une production maximale toute l'année.
                </p>
                <Link
                  to="/devis"
                  className="block w-full bg-white text-orange-600 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg active:scale-95"
                >
                  Devis Gratuit
                </Link>
              </div>

              {/* POINTS FORTS COMPACTS */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-6 border-b pb-2">Atouts Expertise</h4>
                <div className="space-y-5">
                  {[
                    { icon: TrendingUp, title: 'Rendement', desc: '+30% de production' },
                    { icon: Shield, title: 'Protection', desc: 'Aucun contact direct' },
                    { icon: Leaf, title: 'Écologique', desc: 'Zéro chimie nocive' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-2 bg-amber-50 rounded-xl">
                        <item.icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 text-sm">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NAVIGATION INTERNE */}
              <div className="bg-[#233B72] rounded-3xl p-6 text-white">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-sky-300">Autres Services</h4>
                <div className="space-y-4">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between group">
                    <span className="text-sm font-bold group-hover:underline">Nettoyage façade</span>
                    <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between group">
                    <span className="text-sm font-bold group-hover:underline">Démoussage toiture</span>
                    <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
