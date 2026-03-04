import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations } from '../i18n/translations';

type Language = 'de' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.de;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    // Check browser language on mount
    const browserLang = navigator.language;
    if (browserLang.startsWith('zh')) {
      setLanguage('zh');
    } else {
      setLanguage('de');
    }
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
