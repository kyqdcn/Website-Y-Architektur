import React, { useRef } from 'react';
import { UploadIcon } from './Icons';

interface StudioProps {
  portraitSrc: string;
  onUpdatePortrait: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAdmin: boolean;
}

const Studio: React.FC<StudioProps> = ({ portraitSrc, onUpdatePortrait, isAdmin }) => {
  const currentYear = new Date().getFullYear();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.85] text-stone-100 mb-20 tracking-tight">
        Über <br />
        <span className="text-stone-600">Mich.</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        {/* Left Column: Image */}
        <div className="lg:col-span-5 space-y-8">
           <div 
             className={`aspect-[3/4] w-full bg-stone-800 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group ${isAdmin ? 'cursor-pointer' : ''}`}
             onClick={() => isAdmin && fileInputRef.current?.click()}
             title={isAdmin ? "Bild ändern" : ""}
           >
             {/* Inhaber Portrait */}
             <img 
               src={portraitSrc} 
               alt="Kai Yang - Inhaber" 
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
               referrerPolicy="no-referrer"
             />
             
             {/* Admin Upload Overlay */}
             {isAdmin && (
               <div className="absolute inset-0 bg-stone-900/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <UploadIcon className="text-stone-200 mb-2" size={32} />
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-300">Foto ändern</span>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={onUpdatePortrait} 
                    accept="image/*" 
                    className="hidden" 
                  />
               </div>
             )}
           </div>
           <div className="flex justify-between text-xs uppercase tracking-widest text-stone-500 border-t border-stone-800 pt-4">
             <span>Inhaber</span>
             <span>Kai Yang</span>
           </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          
          <div className="space-y-12">
            <div className="prose prose-invert prose-xl max-w-none">
              <h2 className="font-serif text-3xl text-stone-100 mb-6">Kultivierung von Stille & Struktur</h2>
              
              <p className="text-stone-400 font-light leading-relaxed text-justify hyphens-auto">
                Mein multidisziplinärer akademischer Hintergrund aus Architektur, Bauingenieurwesen und Gebäudeenergietechnik bildet das starke Fundament meiner Arbeit. Ich verfüge über weitreichende Praxiserfahrung im Hochbau und begleite sowohl Neubauten als auch anspruchsvolle Altbausanierungen über nahezu alle Leistungsphasen (LP 1–8 gem. HOAI). Dadurch behalte ich auch bei komplexen Projekten stets den Überblick. Mit einem klaren Schwerpunkt auf den Planungsphasen (LP 1–5) ist für mich eine präzise Ausarbeitung der Schlüssel zum Erfolg. Mein Ziel ist es, den architektonischen Entwurf so zu realisieren, dass Ästhetik und wirtschaftliche Machbarkeit in perfekter Balance zueinander stehen.
              </p>
              
              <p className="text-stone-400 font-light leading-relaxed text-justify hyphens-auto">
                Als eingetragener Energieeffizienz-Experte verbinde ich Gestaltung mit Nachhaltigkeit. Von der Erstellung maßgeschneiderter Energiekonzepte bis hin zur energetischen Baubegleitung geförderter Projekte: Ich stehe Ihnen als zuverlässiger Fachberater für Ihr geplante energetische Gebäudesanierung oder Ihr Neubauvorhaben zur Seite.
              </p>

              <h2 className="font-serif text-3xl text-stone-100 mb-6 mt-12">Biographie</h2>

              <ul className="space-y-4 text-stone-400 font-light text-base leading-relaxed">
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">Seit 2019:</strong>
                        <span>Gründer und Inhaber von YANG Architektur & Energie, Hamburg</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">2016 – 2018:</strong>
                        <span>Architekt bei der EUROPA-CENTER AG, Hamburg</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">2010 – 2016:</strong>
                        <span>Architekt und Projektleiter bei Spengler · Wiescholek Architekten, Hamburg</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">2008 – 2010:</strong>
                        <span>Architekt bei GMP Architekten (Gerkan, Marg und Partner), Hamburg</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">2004 – 2010:</strong>
                        <span>Architekturstudium an der Leibniz Universität Hannover</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">Bis 2004:</strong>
                        <span>Architekturstudium an der Tongji-Universität und Studium des Bauingenieurwesens an der Technischen Universität Shanghai</span>
                    </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-stone-800 pt-12">
                <div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">Methodik</h3>
                    <ul className="space-y-2 text-sm text-stone-400 font-light">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>Kontextuelle Integration</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>Materialauthentizität</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>Nachhaltiger Minimalismus</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>Lichtführung</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">Leistungen</h3>
                    <ul className="space-y-2 text-sm text-stone-400 font-light">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>Architekturentwurf</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>Ausführungsplanung</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>Energieberatung</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>Beratung für Projektentwicklung</li>
                    </ul>
                </div>
            </div>

          </div>

          <div className="mt-32 lg:mt-24">
             <p className="text-6xl md:text-8xl font-serif text-stone-800 leading-none select-none">
               2019 — {currentYear}
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Studio;