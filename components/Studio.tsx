import React, { useRef } from 'react';
import { UploadIcon } from './Icons';
import { useLanguage } from '../src/contexts/LanguageContext';

interface StudioProps {
  portraitSrc: string;
  onUpdatePortrait: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAdmin: boolean;
}

const Studio: React.FC<StudioProps> = ({ portraitSrc, onUpdatePortrait, isAdmin }) => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className={`${language === 'zh' ? 'text-3xl md:text-6xl lg:text-7xl leading-[1.15]' : 'text-4xl md:text-7xl lg:text-8xl leading-[0.85]'} font-serif font-normal text-stone-100 mb-20 tracking-tight`}>
        {t.studio.title} <br />
        <span className="text-stone-600">{t.studio.subtitle}</span>
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
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-300">{t.studio.photoChange}</span>
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
             <span>{t.studio.owner}</span>
             <span>Kai Yang</span>
           </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          
          <div className="space-y-12">
            <div className="prose prose-invert prose-xl max-w-none">
              {t.studio.section1Title && <h2 className="font-serif text-3xl text-stone-100 mb-6">{t.studio.section1Title}</h2>}
              
              <p className="text-stone-400 font-light leading-relaxed text-justify hyphens-auto">
                {t.studio.section1Text1}
              </p>
              
              <p className="text-stone-400 font-light leading-relaxed text-justify hyphens-auto">
                {t.studio.section1Text2}
              </p>

              <h2 className="font-serif text-3xl text-stone-100 mb-6 mt-12">{t.studio.bioTitle}</h2>

              <ul className="space-y-4 text-stone-400 font-light text-base leading-relaxed">
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">{t.studio.bio1Year}</strong>
                        <span>{t.studio.bio1Text}</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">{t.studio.bio2Year}</strong>
                        <span>{t.studio.bio2Text}</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">{t.studio.bio3Year}</strong>
                        <span>{t.studio.bio3Text}</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">{t.studio.bio4Year}</strong>
                        <span>{t.studio.bio4Text}</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">{t.studio.bio5Year}</strong>
                        <span>{t.studio.bio5Text}</span>
                    </div>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-stone-600 flex-shrink-0"></span>
                    <div className="flex flex-col sm:flex-row sm:gap-4 w-full">
                        <strong className="text-stone-300 font-normal sm:w-32 shrink-0">{t.studio.bio6Year}</strong>
                        <span>{t.studio.bio6Text}</span>
                    </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-stone-800 pt-12">
                <div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">{t.studio.methodTitle}</h3>
                    <ul className="space-y-2 text-sm text-stone-400 font-light">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>{t.studio.method1}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>{t.studio.method2}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>{t.studio.method3}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>{t.studio.method4}</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">{t.studio.servicesTitle}</h3>
                    <ul className="space-y-2 text-sm text-stone-400 font-light">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>{t.studio.service1}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>{t.studio.service2}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>{t.studio.service3}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-600 rounded-full"></span>{t.studio.service4}</li>
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