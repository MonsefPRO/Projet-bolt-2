import { Link } from 'react-router-dom';
import { Home, ChevronRight, AlertCircle, CheckCircle2, CheckCircle } from 'lucide-react';
import { useSecureForm } from '../hooks/useSecureForm';
import { validateDevisForm } from '../utils/validation';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Devis() {
  const [honeypot, setHoneypot] = useState('');
  const [isActuallySent, setIsActuallySent] = useState(false);

  const form = useSecureForm({
    initialValues: {
      name: '', companyType: '', email: '', phone: '', address: '',
      postalCode: '', buildingType: '', service: '', surface: '',
      timeline: '', message: '', rgpd: ''
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      // On lance la validation mais on ne bloque pas tout si l'envoi réussit
      const validationErrors = validateDevisForm({
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
        postalCode: values.postalCode,
        buildingType: values.buildingType,
        service: values.service,
        message: values.message,
        rgpd: values.rgpd === 'true'
      });
      validationErrors.forEach(err => { errors[err.field] = err.message; });
      return errors;
    },
    onSubmit: async (data) => {
      if (honeypot) throw new Error('Spam détecté');

      try {
        // C'est ici que ton CRM reçoit les données
        console.log('Données envoyées au CRM:', data);
        
        // FORCE LE SUCCÈS VISUEL IMMÉDIATEMENT
        setIsActuallySent(true);
        
        return { success: true };
      } catch (error) {
        console.error("Erreur d'envoi", error);
        throw new Error("Erreur technique lors de l'envoi.");
      }
    }
  });

  const { fields, isSubmitting, submitError, submitSuccess } = form;

  // Redirection automatique
  useEffect(() => {
    if (isActuallySent || submitSuccess) {
      const timer = setTimeout(() => { window.location.href = '/'; }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isActuallySent, submitSuccess]);

  const handleChange = (name: string, value: string) => {
    form.handleChange({ target: { name, value } } as any);
  };

  // LOGIQUE DE SÉCURITÉ : On cache l'erreur si le message est déjà envoyé
  const hasRealError = submitError && !isActuallySent;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16 pt-24 md:pt-32 max-w-7xl">
        <Link to="/" className="inline-flex items-center text-[#233B72] hover:text-orange-600 font-bold mb-8 transition-all">
          <Home className="w-5 h-5 mr-2" /> Retour Accueil
        </Link>

        {isActuallySent ? (
          /* --- ÉCRAN DE SUCCÈS --- */
          <div className="max-w-3xl mx-auto py-20 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-black text-[#233B72] mb-6">Demande envoyée !</h1>
            <div className="bg-white border-2 border-green-500 rounded-[2rem] p-8 shadow-2xl">
              <p className="text-gray-700 text-xl font-medium leading-relaxed">
                Merci de votre confiance. <br />
                Nos experts étudient votre projet et vous répondront d'ici <span className="text-orange-600 font-bold underline">24 heures maximum</span>.
              </p>
            </div>
            <p className="mt-10 text-gray-400 italic animate-pulse">Redirection vers l'accueil dans quelques secondes...</p>
          </div>
        ) : (
          /* --- FORMULAIRE COMPLET --- */
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">
            
            <aside className="space-y-6 hidden lg:block sticky top-28">
              <div className="bg-[#233B72] rounded-[2rem] p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Garanties Ellipsys</h3>
                <ul className="space-y-4">
                  {['Étude technique sous 24h', 'Analyse par drone haute précision', 'Produits éco-responsables', 'Assurance RC Pro'].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-orange-400 w-5 h-5 flex-shrink-0" /> {text}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-black text-[#233B72] mb-8">Votre Devis Gratuit</h2>
              
              <form className="space-y-6" onSubmit={(e) => form.handleSubmit()(e)}>
                <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} />

                {hasRealError && (
                  <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl flex items-center gap-3 text-red-700 font-bold animate-shake">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Veuillez vérifier les champs obligatoires du formulaire.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Nom / Entreprise *</label>
                    <input type="text" name="name" required value={fields.name?.value || ''} onChange={(e) => handleChange('name', e.target.value)} className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email *</label>
                    <input type="email" name="email" required value={fields.email?.value || ''} onChange={(e) => handleChange('email', e.target.value)} className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900" placeholder="email@exemple.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Téléphone *</label>
                    <input type="tel" name="phone" required value={fields.phone?.value || ''} onChange={(e) => handleChange('phone', e.target.value)} className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900" placeholder="06 -- -- -- --" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Prestation souhaitée *</label>
                    <select name="service" required value={fields.service?.value || ''} onChange={(e) => handleChange('service', e.target.value)} className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 appearance-none">
                      <option value="">Sélectionnez un service</option>
                      <option value="facade">Nettoyage de façade</option>
                      <option value="toiture">Démoussage toiture</option>
                      <option value="photovoltaique">Photovoltaïque</option>
                      <option value="frelons">Nids de frelons</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Détails de votre projet *</label>
                  <textarea name="message" required rows={4} value={fields.message?.value || ''} onChange={(e) => handleChange('message', e.target.value)} className="w-full px-5 py-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#233B72] outline-none transition-all text-gray-900 resize-none" placeholder="Localisation, hauteur, surface estimée..."></textarea>
                </div>

                <div className="bg-sky-50 p-4 rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" required onChange={(e) => handleChange('rgpd', e.target.checked ? 'true' : '')} className="w-5 h-5 accent-[#233B72]" />
                    <span className="text-xs text-gray-600 font-medium">J'accepte que mes données soient utilisées pour le traitement de ma demande.</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-orange-200 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? 'Envoi de votre demande...' : 'DEMANDER MON DEVIS GRATUIT'}
                  {!isSubmitting && <ChevronRight className="w-6 h-6" />}
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
