import React from 'react';
import { useLanguage } from '../src/contexts/LanguageContext';

const Datenschutz: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className={`${language === 'zh' ? 'text-3xl md:text-6xl lg:text-7xl leading-[1.15]' : 'text-4xl md:text-7xl lg:text-8xl leading-[0.85]'} font-serif font-normal text-stone-100 mb-20 tracking-tight`}>
        {t.nav.privacy}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        <div className="lg:col-span-8 lg:col-start-3 prose prose-invert prose-stone max-w-none">
            
            <h2 className="text-2xl font-serif text-stone-100 mb-6">{t.privacy.section1Title}</h2>
            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.generalNotesTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.generalNotesText}
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.dataCollectionTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                <strong>{t.privacy.responsibleTitle}</strong><br/>
                {t.privacy.responsibleText}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                <strong>{t.privacy.howCollectTitle}</strong><br/>
                {t.privacy.howCollectText1}<br/>
                {t.privacy.howCollectText2}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                <strong>{t.privacy.whyUseTitle}</strong><br/>
                {t.privacy.whyUseText}
            </p>

            <div className="w-full h-px bg-stone-800 my-12"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-6">{t.privacy.section2Title}</h2>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.hostingText}
            </p>

            <div className="w-full h-px bg-stone-800 my-12"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-6">{t.privacy.section3Title}</h2>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.privacyTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.privacyText}
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.responsibleBodyTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.responsibleBodyText}<br/><br/>
                YANG Architektur & Energie<br/>
                Friedrichshof | Raboisen 32<br/>
                20095 Hamburg | Deutschland<br/><br/>
                Telefon: +49(0)40 7569 3367<br/>
                E-Mail: info@y-architektur.de
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.responsibleBodyDefinition}
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.revocationTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.revocationText}
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.complaintTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.complaintText}
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.portabilityTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.portabilityText}
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.sslTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.sslText}
            </p>

            <div className="w-full h-px bg-stone-800 my-12"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-6">{t.privacy.section4Title}</h2>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.contactFormTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.contactFormText1}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.contactFormText2}
            </p>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.googleFontsTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
               {t.privacy.googleFontsText1}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
               {t.privacy.googleFontsText2}
            </p>

            <div className="w-full h-px bg-stone-800 my-12"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-6">{t.privacy.section5Title}</h2>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.analyticsTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.analyticsText1}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.analyticsText2}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.analyticsText3}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.analyticsText4}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.analyticsText5}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.analyticsText6} <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white underline decoration-stone-600 underline-offset-4">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
            </p>

            <h4 className="text-base font-serif text-stone-200 mt-6 mb-2">{t.privacy.pluginTitle}</h4>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.pluginText} <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white underline decoration-stone-600 underline-offset-4">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
            </p>

            <h4 className="text-base font-serif text-stone-200 mt-6 mb-2">{t.privacy.processingTitle}</h4>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.processingText}
            </p>

            <div className="w-full h-px bg-stone-800 my-12"></div>

            <h2 className="text-2xl font-serif text-stone-100 mb-6">{t.privacy.section6Title}</h2>

            <h3 className="text-lg font-serif text-stone-200 mt-8 mb-4">{t.privacy.mapsTitle}</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.mapsText1}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.mapsText2}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.mapsText3}
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.mapsText4} <a href="https://privacy.google.com/businesses/gdprcontrollerterms/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white underline decoration-stone-600 underline-offset-4">https://privacy.google.com/businesses/gdprcontrollerterms/</a> und <a href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white underline decoration-stone-600 underline-offset-4">https://privacy.google.com/businesses/gdprcontrollerterms/sccs/</a>.
            </p>
            <p className="text-stone-400 font-light leading-relaxed mb-4">
                {t.privacy.mapsText5} <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white underline decoration-stone-600 underline-offset-4">https://policies.google.com/privacy?hl=de</a>.
            </p>

        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
