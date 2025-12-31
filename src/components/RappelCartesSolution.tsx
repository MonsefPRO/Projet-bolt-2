import { useLanguage } from '../contexts/LanguageContext';

export default function RappelCartesSolution() {
  const { t } = useLanguage();

  return (
    <div className="mt-16 bg-gradient-to-br from-white to-sky-50/30 shadow-2xl border-y-2 border-sky-100">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="space-y-3">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-semibold mb-2">
              Innovation
            </div>
            <p
              className="text-xl text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('benefits.summaryPart1') }}
            />
          </div>
          <div className="space-y-3">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-semibold mb-2">
              Performance
            </div>
            <p
              className="text-xl text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('benefits.summaryPart2') }}
            />
          </div>
        </div>

        <div className="flex justify-center pt-8 border-t-2 border-sky-100">
          <a
            href="/devis"
            className="bg-gradient-to-r from-brand-orange-500 to-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-brand-orange-600 hover:to-red-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform inline-flex items-center gap-3"
          >
            <span>{t('hero.cta')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
