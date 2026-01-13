import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  ChevronRight, 
  AlertCircle,
  Phone,
  Target,
  Wind,
  ShieldAlert
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { FloatingDrone } from '../components/FloatingDrone';
import { Link } from 'react-router-dom';

export default function EliminationFrelons() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Dynamique avec FloatingDrone */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <FloatingDrone 
            src="/abateur_de_frelons.png" 
            className="w-full h-full object-cover scale-110"
            alt="Élimination de nids de frelons par drone"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-rose-800/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Nids de frelons par drone
            </h1>
            <p className="text-xl md:text-2xl text-red-100 font-medium">
              Intervention sécurisée sans exposition humaine
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
                  <div className="w-2 h-10 bg-red-600 rounded-full"></div>
                  Neutralisation de précision
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                  <p>
                    L'élimination des nids de frelons, notamment de <strong>frelons asiatiques</strong>, représente un risque majeur pour l'homme et la biodiversité. Avec notre solution par drone, nous intervenons <strong>sans aucune exposition humaine</strong>, même pour les nids situés à plus de 30 mètres de hauteur.
                  </p>
                  <p>
                    Chaque intervention est menée par des <strong>pilotes certifiés DGAC</strong>, garantissant un traitement d'une précision millimétrée et conforme à la réglementation environnementale en vigueur.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* Alerte Urgence (Bento Style) */}
            <section className="bg-red-50 rounded-3xl p-8 border border-red-200 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 p-4">
                <ShieldAlert size={120} className="text-red-600" />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                <AlertCircle className="w-16 h-16 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-black text-red-900 mb-2 uppercase tracking-tight">Ne prenez aucun risque !</h3>
                  <p className="text-red-800 font-medium leading-relaxed">
                    Ne tentez jamais de détruire un nid vous-même. Les frelons asiatiques attaquent en groupe et sont extrêmement agressifs lorsqu'ils se sentent menacés. Une chute de hauteur ou des piqûres multiples peuvent être fatales.
                  </p>
                </div>
              </div>
            </section>

            {/* Technologie de pointe (Grille Bento) */}
            <section>
              <h2 className="text-2xl font-bold text-[#233B72] mb-8 uppercase tracking-wider">Technologie de pointe</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Hauteur 50m+", desc: "Accès total sans nacelle ni échelle, même en forêt", icon: Wind },
                  { title: "Injection Précise", desc: "Cible le cœur du nid directement pour un arrêt immédiat", icon: Target },
                  { title: "Biocides Éco", desc: "Produits certifiés biodégradables sans résidus persistants", icon: ShieldCheck },
                  { title: "Thermique HD", desc: "Localisation précise par signature de chaleur du nid", icon: Zap }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 flex items-start gap-4 h-full">
                      <div className="bg-white p-3 rounded-xl shadow-sm">
                        <item.icon className="w-6 h-6 text-red-600" />
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

            {/* Pourquoi choisir le drone ? */}
            <ScrollReveal delay={0.2}>
              <section className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-[#233B72] mb-8 text-center md:text-left">Les avantages de l'aérien</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Zéro contact humain avec l\'essaim',
                    'Accès aux cimes des arbres et toitures',
                    'Destruction totale garantie du nid',
                    'Intervention rapide (moins de 1 heure)'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200 hover:border-red-200 transition-colors">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-sm md:text-base font-semibold text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Urgence Frelons */}
              <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden text-center">
                <ShieldCheck className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-black mb-4 uppercase">URGENCE FRELONS</h3>
                <p className="mb-8 text-red-100">
                  Intervention rapide garantie. Nos techniciens sont mobilisables immédiatement pour sécuriser votre environnement.
                </p>
                <div className="space-y-4">
                  <Link 
                    to="/devis"
                    className="w-full bg-white text-red-600 py-4 rounded-xl font-bold text-center block hover:bg-brand-orange-500 hover:text-white transition-all shadow-lg text-lg"
                  >
                    Demander mon devis
                  </Link>
                  <a 
                    href="tel:0467209709"
                    className="flex items-center justify-center gap-2 w-full bg-red-800/50 backdrop-blur-sm text-white py-4 rounded-xl font-bold text-center hover:bg-red-900 transition-all border border-white/20"
                  >
                    <Phone className="w-5 h-5" /> 04 67 20 97 09
                  </a>
                </div>
              </div>

              {/* Atouts Expertise */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-[#233B72] mb-4 uppercase text-xs tracking-widest">Garanties de sécurité</h4>
                <div className="space-y-4">
                  {[
                    'Certifié DGAC', 'Assurance RC Pro Spécifique', 'Agrément Certibiocide'
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-sm font-bold text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Autres Services */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-4 text-sm text-center uppercase tracking-wider">Services Entretien</h4>
                <div className="space-y-2">
                  <Link to="/prestations/nettoyage-facade" className="flex items-center justify-between p-3 hover:bg-rose-50 rounded-lg group transition-all">
                    <span className="text-gray-600 group-hover:text-red-700 font-medium">Nettoyage façade</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-rose-50 rounded-lg group transition-all">
                    <span className="text-gray-600 group-hover:text-red-700 font-medium">Démoussage toiture</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
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
