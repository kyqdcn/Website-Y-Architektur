import React from 'react';
import { useLanguage } from '../src/contexts/LanguageContext';

interface EntwicklungProps {
  onNavigate?: (view: 'contact') => void;
}

const Entwicklung: React.FC<EntwicklungProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className={`${language === 'zh' ? 'text-3xl md:text-6xl lg:text-7xl leading-[1.15]' : 'text-4xl md:text-7xl lg:text-8xl leading-[0.85]'} font-serif font-normal text-stone-100 mb-20 tracking-tight`}>
        {t.development.title} <br />
        <span className="text-stone-600">{t.development.subtitle}</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        {/* Left Column: Visual & Key Message */}
        <div className="lg:col-span-5 space-y-12">
            <p className="text-xl md:text-2xl font-serif text-stone-200 leading-snug">
                {t.development.quote}
            </p>
            
            <div className="aspect-[4/5] w-full bg-[#1a1a17] relative overflow-hidden group">
                 <iframe 
                   src={language === 'zh' ? "/images/Network-3d-cn.html" : "/images/Network-3d.html"}
                   className="absolute inset-0 w-full h-full border-0"
                   title="Netzwerk Animation"
                   scrolling="no"
                 />
            </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-7 flex flex-col gap-16">
            
            <div className="prose prose-invert prose-xl max-w-none">
                <p className="text-stone-400 font-light leading-relaxed text-justify hyphens-auto">
                    {t.development.mainText}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                
                {/* Service 1 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">{t.development.service1Title}</h3>
                    <p className="text-base text-stone-400 font-light mb-4 leading-relaxed">
                        {t.development.service1Text}
                    </p>
                    <ul className="space-y-2 text-xs text-stone-500 uppercase tracking-widest">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.development.service1List1}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.development.service1List2}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.development.service1List3}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.development.service1List4}</li>
                    </ul>
                </div>

                {/* Service 2 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">{t.development.service2Title}</h3>
                    <p className="text-base text-stone-400 font-light mb-4 leading-relaxed">
                        {t.development.service2Text}
                    </p>
                    <ul className="space-y-2 text-xs text-stone-500 uppercase tracking-widest">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.development.service2List1}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.development.service2List2}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.development.service2List3}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.development.service2List4}</li>
                    </ul>
                </div>

            </div>
            
            {/* Contact CTA */}
            <div className="mt-8 p-8 border border-stone-800 bg-stone-900/50">
                 <h4 className="text-stone-100 font-serif text-xl mb-4">{t.development.ctaTitle}</h4>
                 <p className="text-stone-400 font-light text-sm mb-6">
                    {t.development.ctaText}
                 </p>
                 <button 
                    onClick={() => onNavigate && onNavigate('contact')}
                    className="px-8 py-4 border border-stone-700 text-stone-300 text-xs font-bold uppercase tracking-widest hover:bg-stone-100 hover:text-stone-900 hover:border-stone-100 transition-all duration-300"
                 >
                    {t.development.ctaButton}
                 </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Entwicklung;
