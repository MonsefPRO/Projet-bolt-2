import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('fr')}
        className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${
          language === 'fr' ? 'border-blue-600 scale-110' : 'border-gray-300 opacity-70 hover:opacity-100'
        }`}
        aria-label="Français"
        title="Français"
      >
        <svg viewBox="0 0 3 2" className="w-full h-full">
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#FFFFFF" />
          <rect x="2" width="1" height="2" fill="#ED2939" />
        </svg>
      </button>

      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-6 rounded overflow-hidden border-2 transition-all ${
          language === 'en' ? 'border-blue-600 scale-110' : 'border-gray-300 opacity-70 hover:opacity-100'
        }`}
        aria-label="English"
        title="English"
      >
        <svg viewBox="0 0 60 30" className="w-full h-full">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
          </g>
        </svg>
      </button>
    </div>
  );
}
