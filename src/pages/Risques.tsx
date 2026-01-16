{/* VISUEL / CARD D'EXPERTISE DÉMONSTRATIVE */}
<div className="w-full lg:w-1/2">
  <Hover3DCard className="bg-[#1a2e5a] rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-white/10">
      <div className="relative z-10">
          {/* On change l'icône et le texte selon la section */}
          {section.id === 'securite-humaine' && (
            <>
              <ShieldCheck size={48} className="mb-6 text-green-400" />
              <h3 className="text-xl font-bold mb-4 uppercase">Balisage de Sécurité</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Visualisation du périmètre d'exclusion au sol. Nous garantissons une zone 100% hermétique aux tiers durant toute la durée du vol.
              </p>
              <div className="mt-6 flex gap-2">
                <div className="h-1 w-full bg-green-500/30 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full"></div>
                </div>
              </div>
            </>
          )}

          {section.id === 'cadre-juridique' && (
            <>
              <FileText size={48} className="mb-6 text-blue-400" />
              <h3 className="text-xl font-bold mb-4 uppercase">Audit Administratif</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Accréditations DGAC et assurances spécifiques travaux aériens. Votre dossier de "Diligence Raisonnable" est complet et archivable.
              </p>
              <div className="mt-6 p-3 bg-white/10 rounded-lg border border-white/20 text-[10px] font-mono opacity-70">
                REF: PROTOCOLE_S3_CERTIFIED_OK
              </div>
            </>
          )}

          {section.id === 'limites-techniques' && (
            <>
              <Zap size={48} className="mb-6 text-yellow-400" />
              <h3 className="text-xl font-bold mb-4 uppercase">Capteurs Temps Réel</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">
                Analyse télémétrique du vent et de l'humidité. Si les conditions dérivent hors-cadre, l'intervention est sécurisée et reportée.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">VENT: 22km/h</span>
                <span className="text-xs font-bold px-2 py-1 bg-green-500/20 text-green-400 rounded">STATUS: OK</span>
              </div>
            </>
          )}
      </div>
      {/* Design de fond pour le côté technologique */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
  </Hover3DCard>
</div>
