import { useState, useEffect } from 'react';
import { X, Shield, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    timestamp: Date.now()
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    const fullConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    };
    saveConsent(fullConsent);
  };

  const handleAcceptNecessary = () => {
    const necessaryConsent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    };
    saveConsent(necessaryConsent);
  };

  const handleCustomSave = () => {
    saveConsent({ ...consent, timestamp: Date.now() });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center pointer-events-none">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto" onClick={() => setShowBanner(false)}></div>

      <div className="relative w-full max-w-4xl mx-4 mb-4 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 pointer-events-auto animate-in slide-in-from-bottom duration-500">
        <button
          onClick={() => setShowBanner(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Nous respectons votre vie privée
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et personnaliser le contenu.
                Vous pouvez choisir les cookies que vous acceptez.
              </p>
            </div>
          </div>

          {!showDetails ? (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 min-w-[200px] bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
                >
                  Tout accepter
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="flex-1 min-w-[200px] border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Nécessaires uniquement
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex-1 min-w-[200px] border-2 border-sky-600 text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all"
                >
                  Personnaliser
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>
                  En savoir plus sur notre{' '}
                  <Link to="/politique-confidentialite" className="text-sky-600 hover:text-sky-700 underline">
                    politique de confidentialité
                  </Link>
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-800">Cookies nécessaires</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                        Toujours actifs
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                    Ils permettent de naviguer sur le site et d'utiliser ses fonctionnalités de base.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">Cookies analytiques</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ces cookies nous aident à comprendre comment vous utilisez notre site pour améliorer votre expérience.
                    Les données sont anonymisées.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">Cookies marketing</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ces cookies permettent de vous proposer des publicités et du contenu personnalisés en fonction de vos centres d'intérêt.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleCustomSave}
                  className="flex-1 min-w-[200px] bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
                >
                  Enregistrer mes choix
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 min-w-[200px] border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Retour
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-2xl">
          <p className="text-xs text-gray-500 text-center">
            En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies nécessaires.
            Consultez notre{' '}
            <Link to="/politique-confidentialite" className="text-sky-600 hover:text-sky-700 underline">
              politique de confidentialité
            </Link>
            {' '}pour plus d'informations.
          </p>
        </div>
      </div>
    </div>
  );
}
