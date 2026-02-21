import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Allgemein',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.');
    setFormData({ name: '', email: '', inquiryType: 'Allgemein', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.85] text-stone-100 mb-20 tracking-tight">
        Kontakt <br />
        <span className="text-stone-600">Aufnehmen.</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-5 space-y-16">
           
           <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">Büro Hamburg</h3>
              <p className="text-xl md:text-2xl font-serif text-stone-200 leading-snug">
                Friedrichshof | Raboisen 32<br />
                20095 Hamburg | Deutschland
              </p>
              <a href="mailto:info@y-architektur.de" className="inline-block text-stone-400 hover:text-stone-100 transition-colors border-b border-stone-800 hover:border-stone-100 pb-1">
                info@y-architektur.de
              </a>
              <p className="text-stone-400">+49(0)40 7569 3367</p>
           </div>

           <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">Presseanfragen</h3>
              <a href="mailto:press@y-architektur.de" className="inline-block text-stone-400 hover:text-stone-100 transition-colors border-b border-stone-800 hover:border-stone-100 pb-1">
                press@y-architektur.de
              </a>
           </div>

           <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">Social</h3>
              <div className="flex flex-col gap-2 items-start">
                <a href="#" className="text-stone-400 hover:text-stone-100 transition-colors">Instagram</a>
                <a href="#" className="text-stone-400 hover:text-stone-100 transition-colors">LinkedIn</a>
                <a href="#" className="text-stone-400 hover:text-stone-100 transition-colors">Pinterest</a>
              </div>
           </div>

        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-serif text-stone-100 mb-8">Beginnen Sie ein Gespräch</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-stone-300 transition-colors">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone-700 py-3 text-stone-100 focus:outline-none focus:border-stone-100 transition-colors rounded-none placeholder-stone-700"
                        placeholder="Ihr Name"
                    />
                </div>
                <div className="space-y-2 group">
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-stone-300 transition-colors">E-Mail</label>
                    <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone-700 py-3 text-stone-100 focus:outline-none focus:border-stone-100 transition-colors rounded-none placeholder-stone-700"
                        placeholder="email@beispiel.de"
                    />
                </div>
            </div>

            <div className="space-y-2 group">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-stone-300 transition-colors">Anfrageart</label>
                <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-stone-700 py-3 text-stone-100 focus:outline-none focus:border-stone-100 transition-colors rounded-none appearance-none cursor-pointer"
                >
                    <option value="Allgemein" className="bg-stone-900">Allgemeine Anfrage</option>
                    <option value="Neues Projekt" className="bg-stone-900">Neues Projekt</option>
                    <option value="Presse" className="bg-stone-900">Presse & Medien</option>
                    <option value="Karriere" className="bg-stone-900">Karriere</option>
                </select>
            </div>

            <div className="space-y-2 group">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest group-focus-within:text-stone-300 transition-colors">Nachricht</label>
                <textarea 
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-stone-900/50 border border-stone-700 p-4 text-stone-100 focus:outline-none focus:border-stone-500 transition-colors rounded-none placeholder-stone-700 resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                />
            </div>

            <div className="pt-4">
                <button 
                    type="submit" 
                    className="px-8 py-4 bg-stone-100 text-stone-900 text-sm font-bold uppercase tracking-widest hover:bg-white hover:px-10 transition-all duration-300"
                >
                    Anfrage Senden
                </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;