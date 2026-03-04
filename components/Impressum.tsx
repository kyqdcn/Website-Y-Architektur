import React from 'react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Impressum: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className={`${language === 'zh' ? 'text-3xl md:text-6xl lg:text-7xl leading-[1.15]' : 'text-4xl md:text-7xl lg:text-8xl leading-[0.85]'} font-serif font-normal text-stone-100 mb-20 tracking-tight`}>
        {t.imprint.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        <div className="lg:col-span-8 lg:col-start-3 prose prose-invert prose-stone max-w-none">
            
            <h2 className="text-2xl font-serif text-stone-100 mb-6">{t.imprint.tmg}</h2>
            <p className="text-stone-300 font-light leading-relaxed mb-8">
                <strong>YANG Architektur & Energie</strong><br />
                Friedrichshof | Raboisen 32<br />
                20095 Hamburg | Deutschland
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">{t.imprint.representedBy}</h3>
                    <p className="text-stone-300">Dipl.-Ing. Kai Yang</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">{t.imprint.contact}</h3>
                    <p className="text-stone-300">
                        Telefon: +49(0)40 7569 3367<br />
                        E-Mail: info@y-architektur.de
                    </p>
                </div>
            </div>

            <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">{t.imprint.jobTitle}</h3>
                <p className="text-stone-300">
                    {t.imprint.jobTitleText}
                </p>
                <p className="text-stone-300">
                    {t.imprint.energyAdvisor}
                </p>
            </div>

            <div className="mb-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 mb-2">{t.imprint.chamber}</h3>
                <p className="text-stone-300 mb-2">
                    {t.imprint.chamberText}
                </p>
                <p className="text-stone-300 mb-2">
                    {t.imprint.chamberId}
                </p>
                 <p className="text-stone-300 mb-2">
                    {t.imprint.bafaText}
                </p>
                <p className="text-stone-300 mb-2">
                    {t.imprint.bafaId}
                </p>
            </div>

            <div className="w-full h-px bg-stone-800 my-16"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-8">{t.imprint.disclaimerTitle}</h2>

            <div className="space-y-8">
                <div>
                    <h4 className="text-lg font-serif text-stone-200 mb-2">{t.imprint.contentLiabilityTitle}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed font-light">
                        {t.imprint.contentLiabilityText}
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-serif text-stone-200 mb-2">{t.imprint.linksLiabilityTitle}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed font-light">
                        {t.imprint.linksLiabilityText}
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-serif text-stone-200 mb-2">{t.imprint.copyrightTitle}</h4>
                    <p className="text-stone-400 text-sm leading-relaxed font-light">
                        {t.imprint.copyrightText}
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Impressum;