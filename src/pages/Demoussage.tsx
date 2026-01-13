import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Droplets, 
  CheckCircle, 
  ChevronRight, 
  AlertTriangle,
  Home,
  Waves,
  Calendar
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { Link } from 'react-router-dom';

export default function Demoussage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Dynamique */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Demoussage drone 1.jpg" 
            className="w-full h-full object-cover scale-110"
            alt="Démoussage de toiture par drone"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-800/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6">
              Démoussage de toiture par drone
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 font-medium">
              L'expertise aérienne au service de votre toiture
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
                <h2 className="text-3xl font-bold text-[#233B72] mb-6 flex items-center gap-3">
                  <div className="w-2 h-10 bg-emerald-500 rounded-full"></div>
                  Innovation & Patrimoine
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                  <p>
                    Ellipsys modernise l'entretien de toiture grâce au <strong>démoussage par drone</strong>, une solution conçue pour les professionnels et collectivités.
                  </p>
                  <p>
                    Nos drones certifiés interviennent sur tous types de supports (tuiles, ardoises, bac acier) en éliminant efficacement les micro-organismes <strong>sans jamais monter sur votre toit</strong>, préservant ainsi l'intégrité physique de vos matériaux.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* Box Alerte Vitale (Bento Style) */}
            <section className="bg-amber-50 rounded-3xl p-8 border border-amber-200 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 p-4">
                <AlertTriangle size={120} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6 flex items-center gap-3">
                <Shield className="w-7 h-7" />
                Pourquoi est-ce vital ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                {[
                  'Les mousses accélèrent la dégradation des tuiles',
                  'Risque d\'infiltrations d\'eau dans la charpente',
                  'Perte d\'étanchéité progressive',
                  'Baisse de la durée de vie du toit de 30 à 50%'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/50 p-3 rounded-xl border border-amber-100">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-amber-900 font-medium text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Méthode d'intervention (Grille Bento) */}
            <section>
              <h2 className="text-2xl font-bold text-[#233B72] mb-8 uppercase tracking-wider">Notre méthode d'intervention</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Inspection HD", desc: "Diagnostic complet par drone avant travaux", icon: Waves },
                  { title: "Nettoyage Drone", desc: "Élimination par pulvérisation ciblée", icon: Zap },
                  { title: "Traitement Biocide", desc: "Produits biodégradables certifiés", icon: Droplets },
                  { title: "Hydrofugation", desc: "Protection longue durée jusqu'à 10 ans", icon: Shield }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-start gap-4 h-full">
                      <div className="bg-white p-3 rounded-xl shadow-sm">
                        <item.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Hover3DCard>
                ))}
              </div>
            </section>

            {/* Supports traités */}
            <ScrollReveal delay={0.2}>
              <section className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
                <h3 className="text-2xl font-bold text-[#233B72] mb-8">Supports pris en charge</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Tuiles', 'Ardoises', 'Zinc', 'Bac acier', 'Toits plats', 'Industriel', 'Monuments'
                  ].map((type, idx) => (
                    <span key={idx} className="px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl border border-emerald-100 shadow-sm transition-transform hover:scale-105">
                      {type}
                    </span>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Vert */}
              <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Projet de toiture ?</h3>
                <p className="mb-8 text-emerald-100 relative z-10">
                  Nos experts analysent votre demande sous 24h pour une intervention rapide et sécurisée.
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-white text-emerald-700 py-4 rounded-xl font-bold text-center block hover:bg-brand-orange-500 hover:text-white transition-all shadow-lg"
                >
                  Obtenir mon devis
                </Link>
              </div>

              {/* Atouts Rapides */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#233B72] mb-4 uppercase text-xs tracking-widest">Pourquoi le drone ?</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Shield className="w-5 h-5 text-emerald-500" /> Sécurité : Zéro risque de chute
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Zap className="w-5 h-5 text-emerald-500" /> Rapidité : 3x plus vite
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Home className="w-5 h-5 text-emerald-500" /> Intégrité : Aucune tuile cassée
                  </li>
                </ul>
              </div>

              {/* Navigation Autres Services */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider text-center">Autres Services</h4>
                <div className="space-y-2">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg group transition-all">
                    <span className="text-gray-600 group-hover:text-emerald-700 font-medium">Nettoyage façade</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/panneaux-photovoltaiques" className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg group transition-all">
                    <span className="text-gray-600 group-hover:text-emerald-700 font-medium">Photovoltaïque</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1" />
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
