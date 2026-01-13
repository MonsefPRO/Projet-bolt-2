import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Leaf, 
  Target, 
  Clock, 
  ChevronRight, 
  CheckCircle2,
  Wind,
  Droplets,
  ThermometerSun
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Hover3DCard } from '../components/Hover3DCard';
import { Link } from 'react-router-dom';

export default function NettoyageFacade() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Dynamique */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ares.png" 
            className="w-full h-full object-cover scale-110"
            alt="Nettoyage façade par drone"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#233B72]/90 to-[#233B72]/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6">
              Nettoyage de façade par drone
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium">
              La technologie au service de votre patrimoine
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
                  <div className="w-2 h-10 bg-brand-orange-500 rounded-full"></div>
                  L'excellence du nettoyage aérien
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                  <p>
                    Ellipsys révolutionne l'entretien des façades avec une <strong>solution par drone</strong>, spécialement conçue pour les entreprises et collectivités. Notre méthode s'impose comme la référence du <strong>nettoyage sans échafaudage</strong>.
                  </p>
                  <p>
                    Nos pilotes certifiés interviennent sur tous matériaux : pierre, béton, bardage ou vitres, éliminant efficacement pollution et contaminants par une pulvérisation précise.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            {/* Équipements de pointe (Grille Bento) */}
            <section>
              <h2 className="text-2xl font-bold text-[#233B72] mb-8 uppercase tracking-wider">Équipements de pointe</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Drone Spécialisé", desc: "Accès sécurisé aux grandes hauteurs", icon: Wind, color: "blue" },
                  { title: "Pression Adaptative", desc: "Puissance réglée selon le support", icon: Droplets, color: "orange" },
                  { title: "Produits Bio AB", icon: Leaf, desc: "Nettoyants écologiques performants", color: "green" },
                  { title: "Thermique HD", icon: ThermometerSun, desc: "Diagnostic des zones critiques", color: "red" }
                ].map((item, idx) => (
                  <Hover3DCard key={idx}>
                    <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100 flex items-start gap-4">
                      <div className="bg-white p-3 rounded-xl shadow-sm">
                        <item.icon className="w-6 h-6 text-[#233B72]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </Hover3DCard>
                ))}
              </div>
            </section>

            {/* Pourquoi choisir le drone ? */}
            <ScrollReveal delay={0.2}>
              <section className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#233B72] mb-8">Pourquoi choisir le drone ?</h2>
                <div className="space-y-6">
                  {[
                    { t: "Sécurité Totale", d: "Zéro risque de chute pour les techniciens.", icon: ShieldCheck },
                    { t: "Gain de Temps", d: "Pas de montage d'échafaudage ou nacelle.", icon: Clock },
                    { t: "Économie Majeure", d: "Réduction des coûts logistiques et matériels.", icon: Target },
                    { t: "Matériaux Préservés", d: "Nettoyage doux sans contact mécanique.", icon: CheckCircle2 }
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-6 p-4 hover:bg-sky-50 rounded-xl transition-colors">
                      <benefit.icon className="w-8 h-8 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{benefit.t}</h4>
                        <p className="text-gray-600">{benefit.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar Sticky (Droite) */}
          <aside className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              {/* Call to Action Bleu */}
              <div className="bg-gradient-to-br from-[#233B72] to-blue-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Besoin d'un ravalement ?</h3>
                <p className="mb-8 text-blue-100 relative z-10">
                  Confiez votre façade à nos experts pour un résultat irréprochable et sécurisé.
                </p>
                <Link 
                  to="/devis"
                  className="w-full bg-white text-[#233B72] py-4 rounded-xl font-bold text-center block hover:bg-brand-orange-500 hover:text-white transition-all shadow-lg"
                >
                  Devis Personnalisé
                </Link>
              </div>

              {/* Atouts Rapides */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h4 className="font-bold text-[#233B72] mb-4 uppercase text-xs tracking-widest">Atouts Ellipsys</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <ShieldCheck className="w-5 h-5 text-blue-500" /> Intervention sans nacelle
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Zap className="w-5 h-5 text-blue-500" /> Mise en place immédiate
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Leaf className="w-5 h-5 text-blue-500" /> Produits certifiés AB
                  </li>
                </ul>
              </div>

              {/* Navigation Autres Services */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-4 text-sm">AUTRES SERVICES</h4>
                <div className="space-y-2">
                  <Link to="/prestations/demoussage" className="flex items-center justify-between p-3 hover:bg-sky-50 rounded-lg group transition-all">
                    <span className="text-gray-600 group-hover:text-[#233B72] font-medium">Démoussage toiture</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1" />
                  </Link>
                  <Link to="/prestations/elimination-frelons" className="flex items-center justify-between p-3 hover:bg-sky-50 rounded-lg group transition-all">
                    <span className="text-gray-600 group-hover:text-[#233B72] font-medium">Nids de frelons</span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Section Garanties Légales */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12 tracking-[0.2em] uppercase">Garanties Légales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border border-white/10 rounded-2xl">
              <div className="font-bold mb-2">CERTIFIÉ DGAC</div>
              <p className="text-gray-400 text-sm">Pilotes homologués pour vols en zone urbaine</p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl">
              <div className="font-bold mb-2">PILOTES PRO</div>
              <p className="text-gray-400 text-sm">Formation continue et expertise technique</p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl">
              <div className="font-bold mb-2">RC PRO COMPLÈTE</div>
              <p className="text-gray-400 text-sm">Assurance couvrant l'intégralité du chantier</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
