import { useEffect } from 'react';
import { ChevronRight, AlertTriangle, CheckCircle, AlertCircle, ShieldCheck, Zap, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FloatingDrone } from '../components/FloatingDrone';

export default function EliminationFrelons() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION RESPONSIVE */}
      <div className="h-[300px] md:h-96 bg-gradient-to-br from-red-600 to-rose-700 relative overflow-hidden pt-20">
        <FloatingDrone
          src="/abateur_de_frelons.png"
          alt="Élimination de nids de frelons par drone"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
              Nids de frelons par drone
            </h1>
            <p className="text-lg md:text-2xl text-red-100 font-medium">
              Intervention sécurisée sans exposition humaine
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
        {/* BREADCRUMB */}
        <nav className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600 font-medium">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/prestations" className="hover:text-red-600 font-medium">Prestations</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-800 font-bold">Frelons</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          <div className="lg:col-span-2 space-y-10">
            {/* TEXTE PRINCIPAL */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                Neutralisation de précision
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg text-justify">
                <p>
                  L'élimination des nids de frelons, notamment de <strong>frelons asiatiques</strong>, représente un risque majeur. Avec notre solution par drone, nous intervenons <strong>sans exposition humaine</strong>, même en haute altitude.
                </p>
                <p>
                  Chaque intervention est menée par des <strong>pilotes certifiés DGAC</strong>, garantissant un traitement efficace et conforme à la réglementation environnementale.
                </p>
              </div>
            </section>

            {/* BOX ALERTE - ULTRA VISIBLE SUR MOBILE */}
            <section className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                <AlertCircle className="w-12 h-12 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="font-black text-red-900 mb-2 text-lg uppercase tracking-tighter">Ne prenez aucun risque !</h3>
                  <p className="text-red-800 text-sm md:text-base font-medium">
                    Ne tentez jamais de détruire un nid vous-même. Les frelons asiatiques attaquent en groupe et sont extrêmement agressifs.
                  </p>
                </div>
              </div>
            </section>

            {/* EQUIPEMENTS - GRID 1 COL MOBILE */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Technologie de pointe</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Hauteur 50m+', desc: 'Accès total sans nacelle ni échelle' },
                  { title: 'Injection Précise', desc: 'Cible le cœur du nid directement' },
                  { title: 'Biocides Éco', desc: 'Produits certifiés biodégradables' },
                  { title: 'Thermique HD', desc: 'Localisation précise par chaleur' }
                ].map((item, index) => (
                  <div key={index} className="bg-white border-2 border-gray-50 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">{item.title}</h4>
                        <p className="text-gray-500 text-xs md:text-sm leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AVANTAGES LISTE COMPACTE */}
            <section className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Pourquoi choisir le drone ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Zéro contact humain avec l\'essaim',
                  'Accès aux toitures et grands arbres',
                  'Destruction totale garantie du nid',
                  'Traitement rapide (moins de 1h)'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR STICKY */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              
              {/* CARD D'URGENCE */}
              <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl p-8 text-white shadow-xl text-center">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold mb-2">URGENCE FRELONS</h3>
                <p className="mb-8 text-red-100 text-sm">
                  Intervention rapide garantie. Nos techniciens sont mobilisables immédiatement.
                </p>
                <div className="space-y-3">
                   <Link
                    to="/devis"
                    className="block w-full bg-white text-red-600 py-4 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg"
                  >
                    Demander mon devis
                  </Link>
                  <a
                    href="tel:0467209709"
                    className="flex items-center justify-center gap-2 w-full bg-red-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-900 transition-all"
                  >
                    <Phone className="w-5 h-5" /> Appeler
                  </a>
                </div>
              </div>

              {/* CERTIFS COMPACTES */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-800 mb-5 border-b pb-2">Certifications</h4>
                <div className="space-y-4">
                  {['Certifié DGAC', 'Assurance RC Pro', 'Agrément Biocides'].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-sm font-bold text-gray-700">{cert}</span>
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
