import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import App from './App.tsx';
import Prestations from './pages/Prestations.tsx';
import NettoyageFacade from './pages/NettoyageFacade.tsx';
import Demoussage from './pages/Demoussage.tsx';
import EliminationFrelons from './pages/EliminationFrelons.tsx';
import PanneauxPhotovoltaiques from './pages/PanneauxPhotovoltaiques.tsx';
import Blog from './pages/Blog.tsx';
import Realisations from './pages/Realisations.tsx';
import Devis from './pages/Devis.tsx';
import Valeurs from './pages/Valeurs.tsx';
import RejoignezNous from './pages/RejoignezNous.tsx';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/prestations/nettoyage-facade" element={<NettoyageFacade />} />
          <Route path="/prestations/demoussage" element={<Demoussage />} />
          <Route path="/prestations/panneaux-photovoltaiques" element={<PanneauxPhotovoltaiques />} />
          <Route path="/prestations/elimination-frelons" element={<EliminationFrelons />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/valeurs" element={<Valeurs />} />
          <Route path="/rejoignez-nous" element={<RejoignezNous />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
