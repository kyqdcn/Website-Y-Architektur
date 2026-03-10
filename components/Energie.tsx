import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, TrashIcon } from './Icons';
import { useLanguage } from '../src/contexts/LanguageContext';

interface EnergieProps {
  isAdmin?: boolean;
  onNavigate?: (view: 'contact') => void;
}

const Energie: React.FC<EnergieProps> = ({ isAdmin = false, onNavigate }) => {
  const { t, language } = useLanguage();
  // Initial images - minimum 2 required
  const [images, setImages] = useState<string[]>([
    "https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Energie-Cover.jpg",
    "https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Energie-1.jpg",
    "https://cdn.jsdelivr.net/gh/kyqdcn/Website-Y-Architektur@main/public/images/Energie-2.jpg",
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex, images.length]);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const nextImage = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    stopAutoPlay();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (images.length >= 4) {
      alert("Maximal 4 Bilder erlaubt.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = [...images, reader.result as string];
      setImages(newImages);
      setCurrentIndex(newImages.length - 1); // Switch to new image
    };
    reader.readAsDataURL(file);
    
    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemoveImage = () => {
    if (images.length <= 2) {
      alert("Mindestens 2 Bilder erforderlich.");
      return;
    }

    const newImages = images.filter((_, index) => index !== currentIndex);
    setImages(newImages);
    setCurrentIndex(0); // Reset to first to avoid index out of bounds
  };

  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Page Header */}
      <h1 className={`${language === 'zh' ? 'text-3xl md:text-6xl lg:text-7xl leading-[1.15]' : 'text-4xl md:text-7xl lg:text-8xl leading-[0.85]'} font-serif font-normal text-stone-100 mb-20 tracking-tight`}>
        {t.energy.title} <br />
        <span className="text-stone-600">{t.energy.subtitle}</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-stone-800 pt-16">
        
        {/* Left Column: Concept & Visual */}
        <div className="lg:col-span-5 space-y-12">
            <p className="text-xl md:text-2xl font-serif text-stone-200 leading-snug">
                {t.energy.quote}
            </p>
            
            {/* Carousel Container */}
            <div 
              className="aspect-square w-full bg-stone-800 relative overflow-hidden group"
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
            >
                 {/* Images */}
                 {images.map((img, index) => (
                   <img 
                     key={index}
                     src={img} 
                     alt={`Visualisierung ${index + 1}`} 
                     className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                       index === currentIndex ? 'opacity-60 grayscale group-hover:grayscale-0 z-10' : 'opacity-0 z-0'
                     }`}
                   />
                 ))}



                 {/* Navigation Controls */}
                 <button 
                   onClick={(e) => { e.stopPropagation(); prevImage(); }}
                   className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-stone-900/50 text-stone-200 hover:bg-stone-900 hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                 >
                   <ChevronLeftIcon size={20} />
                 </button>
                 <button 
                   onClick={(e) => { e.stopPropagation(); nextImage(); }}
                   className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-stone-900/50 text-stone-200 hover:bg-stone-900 hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                 >
                   <ChevronRightIcon size={20} />
                 </button>

                 {/* Indicators */}
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                   {images.map((_, idx) => (
                     <div 
                       key={idx} 
                       className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-stone-200' : 'w-2 bg-stone-600'}`}
                     />
                   ))}
                 </div>

                 {/* Admin Controls */}
                 {isAdmin && (
                   <div className="absolute top-4 right-4 flex gap-2 z-30">
                     {/* Add Button */}
                     {images.length < 4 && (
                       <div className="relative">
                         <button 
                           onClick={() => fileInputRef.current?.click()}
                           className="p-2 bg-stone-900/80 text-green-400 hover:bg-stone-900 hover:text-green-300 rounded border border-stone-700"
                           title="Bild hinzufügen (Max 4)"
                         >
                           <PlusIcon size={16} />
                         </button>
                         <input 
                           type="file" 
                           ref={fileInputRef}
                           onChange={handleAddImage}
                           accept="image/*"
                           className="hidden"
                         />
                       </div>
                     )}
                     
                     {/* Remove Button */}
                     {images.length > 2 && (
                       <button 
                         onClick={handleRemoveImage}
                         className="p-2 bg-stone-900/80 text-red-400 hover:bg-stone-900 hover:text-red-300 rounded border border-stone-700"
                         title="Aktuelles Bild entfernen (Min 2)"
                       >
                         <TrashIcon size={16} />
                       </button>
                     )}
                   </div>
                 )}
            </div>

            <div className="hidden lg:block border-t border-stone-800 pt-8">
                <h4 className="text-stone-100 font-bold mb-6 text-sm uppercase tracking-widest">{t.energy.whyTitle}</h4>
                <div className="space-y-6">
                    <div className="pl-4 border-l border-stone-700">
                        <strong className="block text-stone-200 text-sm mb-1">{t.energy.why1Title}</strong>
                        <p className="text-xs text-stone-400 leading-relaxed">{t.energy.why1Text}</p>
                    </div>
                    <div className="pl-4 border-l border-stone-700">
                        <strong className="block text-stone-200 text-sm mb-1">{t.energy.why2Title}</strong>
                        <p className="text-xs text-stone-400 leading-relaxed">{t.energy.why2Text}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Column: Services Details */}
        <div className="lg:col-span-7 flex flex-col gap-16">
            
            <div className="prose prose-invert prose-xl max-w-none">
                <p className="text-stone-400 font-light leading-relaxed">
                    {t.energy.mainText}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                
                {/* Service 1 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">{t.energy.service1Title}</h3>
                    <p className="text-base text-stone-400 font-light mb-4 leading-relaxed">
                        {t.energy.service1Text}
                    </p>
                    <ul className="space-y-2 text-xs text-stone-500 uppercase tracking-widest">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.energy.service1List1}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.energy.service1List2}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.energy.service1List3}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.energy.service1List4}</li>
                    </ul>
                </div>

                {/* Service 2 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">{t.energy.service2Title}</h3>
                    <p className="text-base text-stone-400 font-light mb-4 leading-relaxed">
                        {t.energy.service2Text}
                    </p>
                    <ul className="space-y-2 text-xs text-stone-500 uppercase tracking-widest">
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.energy.service2List1}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.energy.service2List2}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-500 rounded-full"></span>{t.energy.service2List3}</li>
                    </ul>
                </div>

                {/* Service 3 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">{t.energy.service3Title}</h3>
                    <p className="text-base text-stone-400 font-light mb-4 leading-relaxed">
                        {t.energy.service3Text}
                    </p>
                </div>

                {/* Service 4 */}
                <div className="group">
                    <div className="h-px w-full bg-stone-800 mb-6 group-hover:bg-stone-600 transition-colors"></div>
                    <h3 className="text-stone-100 font-serif text-2xl mb-4">{t.energy.service4Title}</h3>
                    <p className="text-base text-stone-400 font-light mb-4 leading-relaxed">
                         {t.energy.service4Text}
                    </p>
                </div>

            </div>
            
            {/* CTA */}
            <div className="mt-8">
                 <button 
                    onClick={() => onNavigate?.('contact')}
                    className="px-8 py-4 border border-stone-700 text-stone-300 text-xs font-bold uppercase tracking-widest hover:bg-stone-100 hover:text-stone-900 hover:border-stone-100 transition-all duration-300"
                 >
                    {t.energy.cta}
                 </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Energie;