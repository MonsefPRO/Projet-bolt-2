import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { Share2, BookOpen, ShieldCheck, Zap } from 'lucide-react';

export default function Blog() {
  const [activeTab, setActiveTab] = useState('Tous');

  const tabs = [
    { name: 'Tous', icon: BookOpen },
    { name: 'Conseils', icon: ShieldCheck },
    { name: 'Technologies', icon: Zap },
    { name: 'Réglementation', icon: ShieldCheck },
    { name: 'Nos Réseaux', icon: Share2 }, // Nouvel onglet
  ];

  useEffect(() => {
    // Chargement du script Elfsight (Solution 1)
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section Blog */}
      <section className="pt-32 pb-12 bg-[#233B72] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Actualités</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Retrouvez nos derniers articles techniques, les évolutions de la réglementation drone et toute la vie d'Ellipsys sur nos réseaux.
          </p>
        </div>
      </section>

      {/* Système d'onglets (Filtres) */}
      <nav className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex justify-center space-x-2 md:space-x-8 py-4 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${
                  activeTab === tab.name
                    ? 'bg-brand-orange-500 text-white shadow-md'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 min-h-[60vh]">
        
        {/* CONDITION : Si "Nos Réseaux" est actif */}
        {activeTab === 'Nos Réseaux' ? (
          <ScrollReveal>
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#233B72]">Suivez-nous au quotidien</h2>
                <p className="text-gray-500">Nos dernières interventions en direct de LinkedIn, Instagram et Facebook</p>
              </div>
              
              {/* WIDGET ELFSIGHT : Remplace l'ID ci-dessous par ton ID Elfsight une fois inscrit */}
              <div className="elfsight-app-VOTRE-ID-UNIQUE" data-elfsight-app-lazy></div>
              
              {/* Note pour toi : Si tu n'as pas encore l'ID, Elfsight affichera un placeholder */}
            </div>
          </ScrollReveal>
        ) : (
          /* CONTENU DES AUTRES ONGLETS (Articles classiques) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ici viendront tes articles de blog filtrés selon activeTab */}
            {/* Exemple de message si vide pour le moment */}
            <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">
                Les articles de la catégorie "{activeTab}" sont en cours de rédaction.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
