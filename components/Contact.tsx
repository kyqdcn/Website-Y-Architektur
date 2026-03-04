import React, { useState } from 'react';
import { InstagramIcon, LinkedInIcon, PinterestIcon, XiaohongshuIcon } from './Icons';
import { useLanguage } from '../src/contexts/LanguageContext';

interface ContactProps {
  onNavigate?: (view: 'impressum' | 'datenschutz') => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  // --- KONFIGURATION ---
  // 1. Formspree ID (für die ersten 50 Mails/Monat)
  const FORMSPREE_ID = 'mgolbnan'; 
  
  // 2. Fallback E-Mail (wenn Formspree voll ist)
  const recipientEmail = 'info@y-architektur.de';
  // ---------------------

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Allgemein',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Helper: Mailto Fallback Funktion
  const openMailClient = () => {
    const subject = `Anfrage via Website: ${formData.inquiryType} von ${formData.name}`;
    const body = `Name: ${formData.name}\nE-Mail: ${formData.email}\nAnfrageart: ${formData.inquiryType}\n\nNachricht:\n${formData.message}`;
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    alert('Direktversand nicht verfügbar. Ihr Standard-E-Mail-Programm wird geöffnet.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Wenn keine ID gesetzt ist, direkt Mailto nutzen
    if ((FORMSPREE_ID as string) === 'PLACEHOLDER_ID') {
      openMailClient();
      return;
    }

    setStatus('submitting');

    try {
      // Versuch 1: Formspree API
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Erfolg!
        setStatus('success');
        setFormData({ name: '', email: '', inquiryType: 'Allgemein', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        // Fehler (z.B. Limit erreicht) -> Fallback zu Mailto
        console.warn('Formspree limit reached or error, falling back to mailto.');
        setStatus('idle'); // Reset status so user can click again if needed, but mailto opens
        openMailClient();
      }
    } catch (error) {
      // Netzwerkfehler -> Fallback zu Mailto
      console.error('Network error, falling back to mailto:', error);
      setStatus('idle');
      openMailClient();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className={`${language === 'zh' ? 'text-3xl md:text-6xl lg:text-7xl leading-[1.15]' : 'text-4xl md:text-7xl lg:text-8xl leading-[0.85]'} font-serif font-normal text-stone-100 mb-20 tracking-tight`}>
        {t.contact.title} <br />
        <span className="text-stone-600">{t.contact.subtitle}</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-5 space-y-16">
           
           <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">{t.contact.office}</h3>
              <p className="text-xl md:text-2xl font-serif text-stone-200 leading-snug">
                Friedrichshof | Raboisen 32<br />
                20095 Hamburg | Deutschland
              </p>
              <a href="mailto:info@y-architektur.de" className="inline-block text-stone-400 hover:text-stone-100 transition-colors border-b border-stone-800 hover:border-stone-100 pb-1">
                info@y-architektur.de
              </a>
              <p className="text-stone-400">+49(0)40 7569 3367</p>
           </div>

           {/* Google Map */}
           <div className="w-full h-48 bg-stone-800 overflow-hidden group border border-stone-800 hover:border-stone-500 transition-colors duration-500">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.065609363598!2d10.00169131587564!3d53.55108498002241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18ee1f1e1e1e1%3A0x1e1e1e1e1e1e1e1e!2sRaboisen%2032%2C%2020095%20Hamburg!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde" 
               width="100%" 
               height="100%" 
               className="w-full h-full grayscale invert-[.9] contrast-[.8] opacity-70 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-700 ease-in-out"
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Map Raboisen 32"
             ></iframe>
           </div>

           <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">{t.nav.social}</h3>
              <div className="flex gap-6 items-center">
                <a href="#" className="text-stone-400 hover:text-white transition-colors" title="Instagram">
                    <InstagramIcon size={24} />
                </a>
                <a href="https://www.linkedin.com/in/kai-yang-59248b104" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors" title="LinkedIn">
                    <LinkedInIcon size={24} />
                </a>
                <a href="#" className="text-stone-400 hover:text-white transition-colors" title="Pinterest">
                    <PinterestIcon size={24} />
                </a>
                <a href="#" className="text-stone-400 hover:text-white transition-colors" title="Xiaohongshu">
                    <XiaohongshuIcon size={24} />
                </a>
              </div>
           </div>

           <div className="pt-8 border-t border-stone-800 flex flex-col gap-4">
                <button onClick={() => onNavigate?.('impressum')} className="text-left text-stone-500 hover:text-stone-300 text-xs uppercase tracking-widest transition-colors">
                    {t.nav.imprint}
                </button>
                <button onClick={() => onNavigate?.('datenschutz')} className="text-left text-stone-500 hover:text-stone-300 text-xs uppercase tracking-widest transition-colors">
                    {t.nav.privacy}
                </button>
            </div>

        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-serif text-stone-100 mb-8">{t.contact.startConversation}</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-stone-300 transition-colors">{t.contact.nameLabel}</label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone-700 py-3 text-stone-100 focus:outline-none focus:border-stone-100 transition-colors rounded-none placeholder-stone-700"
                        placeholder={t.contact.namePlaceholder}
                    />
                </div>
                <div className="space-y-2 group">
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-stone-300 transition-colors">{t.contact.emailLabel}</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone-700 py-3 text-stone-100 focus:outline-none focus:border-stone-100 transition-colors rounded-none placeholder-stone-700"
                        placeholder={t.contact.emailPlaceholder}
                    />
                </div>
            </div>

            <div className="space-y-2 group">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-stone-300 transition-colors">{t.contact.typeLabel}</label>
                <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-stone-700 py-3 text-stone-100 focus:outline-none focus:border-stone-100 transition-colors rounded-none appearance-none cursor-pointer"
                >
                    <option value="Allgemein" className="bg-stone-900">{t.contact.typeOption1}</option>
                    <option value="Neues Projekt" className="bg-stone-900">{t.contact.typeOption2}</option>
                    <option value="Kooperation" className="bg-stone-900">{t.contact.typeOption3}</option>
                    {/* <option value="Presse" className="bg-stone-900">Presse & Medien</option> */}
                    <option value="Karriere" className="bg-stone-900">{t.contact.typeOption4}</option>
                </select>
            </div>

            <div className="space-y-2 group">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-stone-300 transition-colors">{t.contact.messageLabel}</label>
                <textarea 
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-stone-900/50 border border-stone-700 p-4 text-stone-100 focus:outline-none focus:border-stone-500 transition-colors rounded-none placeholder-stone-700 resize-none"
                    placeholder={t.contact.messagePlaceholder}
                />
            </div>

            <div className="pt-4">
                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      status === 'submitting' 
                        ? 'bg-stone-700 text-stone-400 cursor-wait' 
                        : 'bg-stone-100 text-stone-900 hover:bg-white hover:px-10'
                    }`}
                >
                    {status === 'submitting' ? t.contact.sending : t.contact.submitButton}
                </button>

                {status === 'success' && (
                    <p className="mt-4 text-green-400 text-sm animate-[fadeIn_0.5s_ease-out]">
                      {t.contact.successMessage}
                    </p>
                )}
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
