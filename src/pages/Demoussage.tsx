import { useEffect } from 'react';
import { ChevronRight, Shield, Clock, Droplets, CheckCircle, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Demoussage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION RESPONSIVE */}
      <div className="h-[300px] md:h-96 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden pt-20">
        <img
          src="/Demoussage drone 1.jpg"
          alt="Démoussage de toiture par drone"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
              Démoussage de toiture par drone
            </h1>
            <p className="text-lg md:text-2xl text-green-100 font-medium">
              L'expertise aérienne au service de votre toiture
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
        {/* BREADCRUMB - Caché sur petit mobile pour gagner de la place */}
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-sky-600 font-medium">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-bold">Démoussage de toiture</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* CONTENU PRINCIPAL (Ordre 1 sur mobile) */}
          <div className="lg:col-span-2 space-y-10 md:space-y-12">
            
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-[#233B72] mb-6">L'innovation au service de votre patrimoine</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Ellipsys modernise l'entretien de toiture grâce au <strong>démoussage par drone</strong>, une solution conçue pour les professionnels et collectivités.
                </p>
                <p>
                  Nos drones certifiés interviennent sur tous types de supports (tuiles, ardoises, bac acier) en éliminant efficacement les micro-organismes sans jamais monter sur votre toit.
                </p>
              </div>
            </section>

            {/* BOX ALERTE ESSENTIELLE */}
            <section className="bg-amber-50 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-amber-800 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0" />
                Pourquoi est-ce vital ?
              </h3>
              <ul className="space-y-4">
                {[
                  'Les mousses accélèrent la dégradation des tuiles',
                  'Risque d\'infiltrations d\'eau dans la charpente',
                  'Perte d\'étanchéité progressive',
                  'Diminution de la durée de vie du toit de 30 à 50%'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-amber-200 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-amber-800 font-bold text-xs">!</span>
                    </div>
                    <span className="text-amber-900 text-sm md:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* MÉTHODE EN 4 ÉTAPES - GRID 1 COL MOBILE */}
            <section>
              <h3 className="text-2xl font-bold text-[#233B72] mb-8">Notre méthode d'intervention</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { title: 'Inspection HD', desc: 'Diagnostic complet par drone avant travaux' },
                  { title: 'Nettoyage drone', desc: 'Élimination par pulvérisation ciblée' },
                  { title: 'Traitement biocide', desc: 'Application de produits biodégradables certifiés' },
                  { title: 'Hydrofugation', desc: 'Protection longue durée jusqu\'à 10 ans' }
                ].map((item, index) => (
                  <div key={index} className="bg-white border-2 border-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-600" />
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

            {/* SUPPORTS TRAITÉS - BADGES COMPACTS MOBILE */}
            <section className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">Supports pris en charge</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Tuiles', 'Ardoises', 'Zinc', 'Bac acier', 'Toits plats', 'Industriel', 'Monuments'
                ].map((type, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white text-green-700 font-bold rounded-full border border-green-100 shadow-sm text-sm">
                    {type}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR (Sticky sur PC, à la suite sur Mobile) */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              
              {/* CARD DEVIS PRIORITAIRE SUR MOBILE */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Projet de toiture ?</h3>
                <p className="mb-6 text-green-100 text-sm md:text-base leading-relaxed">
                  Nos experts analysent votre demande sous 24h pour une intervention rapide.
                </p>
                <Link
                  to="/devis"
                  className="block w-full bg-white text-green-600 text-center px-6 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg"
                >
                  Obtenir mon devis
                </Link>
              </div>

              {/* POINTS FORTS COMPACTS */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-5">Pourquoi le drone ?</h4>
                <div className="space-y-5">
                  {[
                    { icon: Shield, title: 'Sécurité', desc: 'Aucun risque de chute' },
                    { icon: Zap, title: 'Rapidité', desc: 'Intervention 3x plus vite' },
                    { icon: Droplets, title: 'Respect', desc: 'Aucune tuile cassée' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <item.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-800 text-sm">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LIENS INTERNES RAPIDES */}
              <div className="bg-[#233B72] rounded-3xl p-6 text-white shadow-inner">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-sky-300">Autres Prestations</h4>
                <div className="space-y-4">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between group">
                    <span className="text-sm font-medium group-hover:underline">Nettoyage façade</span>
                    <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="h-[1px] bg-white/10 w-full"></div>
                  <Link to="/prestations/elimination-frelons" className="flex items-center justify-between group">
                    <span className="text-sm font-medium group-hover:underline">Nids de frelons</span>
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
