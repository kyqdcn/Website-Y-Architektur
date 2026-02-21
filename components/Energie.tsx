import React from 'react';

const Energie: React.FC = () => {
  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.85] text-stone-100 mb-20 tracking-tight">
        Energie <br />
        <span className="text-stone-600">Effizienz.</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        {/* Left Column: Concept & Visual */}
        <div className="lg:col-span-5 space-y-12">
            <p className="text-xl md:text-2xl font-serif text-stone-200 leading-snug">
                Nachhaltige Architektur ist keine additive Schicht, sondern die fundamentale Logik der Form.
            </p>
            
            <div className="aspect-square w-full bg-stone-800 relative overflow-hidden group">
                 {/* Abstract representation of energy/heat map or detail */}
                 <img 
                   src="https://picsum.photos/800/800?random=50" 
                   alt="Visualisierung Thermische Analyse" 
                   className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute bottom-6 left-6 border border-stone-600/50 bg-stone-900/80 backdrop-blur px-4 py-2">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-stone-400">Simulationsdaten</span>
                    <span className="block text-xs text-stone-200 mt-1">Thermische Komfortanalyse</span>
                 </div>
            </div>

            <div className="hidden lg:block border-t border-stone-800 pt-8">
                <h4 className="text-stone-100 font-bold mb-6 text-sm uppercase tracking-widest">Warum Design & Energie integrieren?</h4>
                <div className="space-y-6">
                    <div className="pl-4 border-l border-stone-700">
                        <strong className="block text-stone-200 text-sm mb-1">Ganzheitliches Design</strong>
                        <p className="text-xs text-stone-400 leading-relaxed">Vermeidung von Konflikten zwischen Dämmschichten und ästhetischen Details durch gemeinsame Planung.</p>
                    </div>
                    <div className="pl-4 border-l border-stone-700">
                        <strong className="block text-stone-200 text-sm mb-1">Kosteneffizienz</strong>
                        <p className="text-xs text-stone-400 leading-relaxed">Integrierte Planung reduziert Baufehler und optimiert die Betriebskosten über den Lebenszyklus des Gebäudes.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Services Details */}
        <div className="lg:col-span-7 flex flex-col gap-16">
            
            <div className="prose prose-invert prose-xl max-w-none">
                <p className="text-stone-400 font-light leading-relaxed">
                    Energieeffizienz und anspruchsvolle Architektur schließen sich nicht aus – sie ergänzen sich. Deshalb integriere ich energetische Strategien bereits in den ersten Entwurfsphasen meiner Projekte. Meine Energieberatung sorgt nicht nur für die sichere Einhaltung aktueller Vorschriften (GEG) und maximalen Nutzerkomfort, sondern denkt auch zukunftsorientiert. Wenn Sie Ihr Bauvorhaben auf das nächste Level heben und staatliche Fördermittel (z. B. für KfW-Effizienzhäuser) optimal einsetzen möchten, entwickle ich das passende Konzept für Sie und begleite Sie fachgerecht bis zur erfolgreichen Umsetzung.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                
                {/* Service 1 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">Energieberatung</h3>
                    <p className="text-sm text-stone-400 font-light mb-4 leading-relaxed">
                        Umfassende Energiekonzepte für Neubau und Sanierung. Wir führen Sie durch die Komplexität des Gebäudeenergiegesetzes (GEG) und der Bundesförderung (BEG/KfW).
                    </p>
                    <ul className="space-y-2 text-xs text-stone-500 uppercase tracking-widest">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>GEG-Nachweis</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>KfW-Effizienzhaus-Planung</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>Energieberatung mit iSFP und Fördermittelbeantragung</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>Wärmebrückenberechnung</li>
                    </ul>
                </div>

                {/* Service 2 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">Simulation & Analyse</h3>
                    <p className="text-sm text-stone-400 font-light mb-4 leading-relaxed">
                        Datengetriebene Entwurfsoptimierung unter Verwendung fortschrittlicher Simulationstools zur Vorhersage von thermischem Komfort, Tageslichtverfügbarkeit und Energiebedarf vor Baubeginn.
                    </p>
                    <ul className="space-y-2 text-xs text-stone-500 uppercase tracking-widest">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>Dynamische Thermische Simulation</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>Tageslichtanalyse</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>Ökobilanzierung (LCA)</li>
                    </ul>
                </div>

                {/* Service 3 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">Nachhaltige Sanierung</h3>
                    <p className="text-sm text-stone-400 font-light mb-4 leading-relaxed">
                        Revitalisierung bestehender Strukturen, um moderne Effizienzstandards zu erfüllen und gleichzeitig das architektonische Erbe zu bewahren. Wir entwickeln spezifische Strategien für Dämmung, Verglasung und technische Systeme, die die vorhandene Substanz respektieren.
                    </p>
                </div>

                {/* Service 4 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">Zertifizierung</h3>
                    <p className="text-sm text-stone-400 font-light mb-4 leading-relaxed">
                         Begleitung von Projekten zu anerkannten Nachhaltigkeitszertifizierungen (DGNB, BNB, QNG), um den Immobilienwert zu steigern und ökologische Verantwortung sicherzustellen.
                    </p>
                </div>

            </div>
            
            {/* CTA */}
            <div className="mt-8">
                 <button className="px-8 py-4 border border-stone-700 text-stone-300 text-xs font-bold uppercase tracking-widest hover:bg-stone-100 hover:text-stone-900 hover:border-stone-100 transition-all duration-300">
                    Energieberatung anfragen
                 </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Energie;