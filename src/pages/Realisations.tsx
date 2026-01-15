import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Home, 
  Factory, 
  Landmark, 
  Check, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Award 
} from 'lucide-react';
import Header from '../components/Header';
import { HeroCarousel } from '../components/HeroCarousel';
import Footer from '../components/Footer';

interface Realisation {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  surface: string;
  service: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
  benefits: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export default function Realisations() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [comparisonSlider, setComparisonSlider] = useState<{[key: number]: number}>({});

  const realisations: Realisation[] = [
    {
      id: 1,
      title: "Immeuble de bureaux",
      category: "commercial",
      location: "Paris 15ème",
      date: "Octobre 2024",
      surface: "2 500 m²",
      service: "Nettoyage de façade",
      imageBefore: "bati1.png",
      imageAfter: "bati2.png",
      description: "Nettoyage complet d'une façade vitrée de 8 étages par drone. Intervention réalisée sans interruption d'activité.",
      benefits: [
        "Aucun échafaudage nécessaire",
        "Économie de 45% vs traditionnel",
        "Zéro interruption d'activité"
      ],
      stats: [
        { label: "Durée", value: "2 j" },
        { label: "Économie", value: "-45%" },
        { label: "Surface", value: "2500m²" }
      ]
    },
    {
      id: 2,
      title: "Entrepôt industriel",
      category: "industrial",
      location: "Lyon",
      date: "Septembre 2024",
      surface: "5 000 m²",
      service: "Démoussage de toiture",
      imageBefore: "indus1.png",
      imageAfter: "indus2.png",
      description: "Traitement anti-mousse longue durée par drone sur une toiture industrielle de grande envergure.",
      benefits: [
        "Traitement 100% homogène",
        "Accès zones difficiles",
        "Produit écologique certifié"
      ],
      stats: [
        { label: "Durée", value: "3 j" },
        { label: "Économie", value: "-50%" },
        { label: "Surface", value: "5000m²" }
      ]
    },
    {
        id: 3,
        title: "Résidence de 6 étages",
        category: "residential",
        location: "Bordeaux",
        date: "Août 2024",
        surface: "1 800 m²",
        service: "Nettoyage de façade",
        imageBefore: "38.png", 
        imageAfter: "39.png",
        description: "Ravalement par drone en milieu habité. Aucune nuisance sonore ou visuelle pour les résidents.",
        benefits: [
          "Pas de gêne résidents",
          "Traitement anti-pollution",
          "Garantie résultat 2 ans"
        ],
        stats: [
          { label: "Durée", value: "3 j" },
          { label: "Économie", value: "-40%" },
          { label: "Surface", value: "1800m²" }
        ]
      },
      {
        id: 4,
        title: "Monument historique",
        category: "heritage",
        location: "Toulouse",
        date: "Juillet 2024",
        surface: "800 m²",
        service: "Inspection + Nettoyage",
        imageBefore: "36.png",
        imageAfter: "37.png",
        description: "Nettoyage délicat d'une façade classée avec validation de l'Architecte des Bâtiments de France.",
        benefits: [
          "Respect du patrimoine",
          "Produits non agressifs",
          "Inspection thermique HD"
        ],
        stats: [
          { label: "Durée", value: "4 j" },
          { label: "Précision", value: "100%" },
          { label: "Surface", value: "800m²" }
        ]
      }
  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: Building2 },
    { id: 'commercial', label: 'Pro', icon: Building2 },
    { id: 'industrial', label: 'Usine', icon: Factory },
    { id: 'residential', label: 'Habitat', icon: Home },
    { id: 'heritage', label: 'Patrimoine', icon: Landmark }
  ];

  const filteredRealisations = selectedCategory === 'all'
    ? realisations
    : realisations.filter(r => r.category === selectedCategory);

  const handleSliderChange = (id: number, value: number) => {
    setComparisonSlider(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* HERO SECTION HARMONISÉE */}
      <section className="relative pt-20 overflow-hidden flex items-center h-[300px] md:h-[450px]">
        <HeroCarousel />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-blue-900/40 to-black/60 z-10"></div>
        
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-3xl md:text-7xl font-extrabold mb-4 drop-shadow-2xl text-white uppercase tracking-tighter">
            Nos Réalisations
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-lg font-semibold text-white">
            L'excellence technologique en action
          </p>

          <div className="flex justify-center gap-4 md:gap-8 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span className="font-bold text-white text-xs md:text-sm">500+ Projets</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Check className="w-5 h-5 text-green-400" />
              <span className="font-bold text-white text-xs md:text-sm">98% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
        
        {/* FILTRES HARMONISÉS */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-2 md:gap-3 mb-10 md:mb-16 no-scrollbar justify-start md:justify-center">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-black whitespace-nowrap transition-all text-sm md:text-base shadow-sm ${
                  selectedCategory === cat.id
                    ? 'bg-[#233B72] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#f97316] hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {filteredRealisations.map(realisation => {
            const sliderValue = comparisonSlider[realisation.id] || 50;

            return (
              <div
                key={realisation.id}
                className="group bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500"
              >
                {/* SLIDER AVANT/APRÈS */}
                <div className="relative h-64 sm:h-72 md:h-80 bg-gray-200 overflow-hidden touch-none">
                  <div className="absolute inset-0">
                    <img src={realisation.imageAfter} alt="Après" className="w-full h-full object-cover" />
                  </div>

                  <div
                    className="absolute inset-0 transition-none"
                    style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                  >
                    <img src={realisation.imageBefore} alt="Avant" className="w-full h-full object-cover" />
                  </div>

                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20"
                    style={{ left: `${sliderValue}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2.5 shadow-2xl">
                       <div className="flex gap-0.5">
                         <ChevronLeft className="w-4 h-4 text-[#233B72]" />
                         <ChevronRight className="w-4 h-4 text-[#233B72]" />
                       </div>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => handleSliderChange(realisation.id, parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/20">Avant</span>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-[#233B72]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/20">Après</span>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-black text-[#233B72] mb-4 leading-tight">
                    {realisation.title}
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs font-bold uppercase tracking-tighter text-gray-400">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                      <MapPin className="w-4 h-4 text-[#f97316]" /> {realisation.location}
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                      <Calendar className="w-4 h-4 text-[#f97316]" /> {realisation.date}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm md:text-base mb-8 font-medium leading-relaxed">
                    {realisation.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
                    {realisation.stats.map((stat, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center group-hover:bg-blue-50 transition-colors">
                        <div className="text-base md:text-xl font-black text-[#233B72]">{stat.value}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mt-auto border-t border-gray-50 pt-6">
                    {realisation.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-gray-700">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        <span className="font-bold">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BANNIÈRE FINALE HARMONISÉE */}
      <div className="bg-gradient-to-br from-[#233B72] via-blue-900 to-black text-white py-16 md:py-24 px-4 overflow-hidden relative">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Award className="w-12 h-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            Votre bâtiment mérite ce résultat
          </h2>
          <p className="text-sky-100 text-base md:text-xl mb-10 opacity-90 font-medium">
            Rejoignez les centaines de clients qui ont déjà fait confiance à l'expertise drone Ellipsys.
          </p>
          <Link
            to="/devis"
            className="inline-flex items-center gap-3 bg-white text-[#233B72] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl active:scale-95 uppercase tracking-widest"
          >
            Je fais ma demande !
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-[120px]"></div>
           <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
