import React, { useState, useEffect, useRef } from 'react';
import { XIcon, UploadIcon } from './Icons';
import { NewsItem } from '../types';

interface EditNewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: NewsItem;
  onUpdate: (updatedItem: NewsItem) => void;
}

const EditNewsModal: React.FC<EditNewsModalProps> = ({ isOpen, onClose, item, onUpdate }) => {
  const [title, setTitle] = useState(item.title);
  const [date, setDate] = useState(item.date);
  const [category, setCategory] = useState(item.category);
  const [excerpt, setExcerpt] = useState(item.excerpt);
  const [imagePreview, setImagePreview] = useState<string | undefined>(item.imageUrl);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
        setTitle(item.title);
        setDate(item.date);
        setCategory(item.category);
        setExcerpt(item.excerpt);
        setImagePreview(item.imageUrl);
    }
  }, [isOpen, item]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onUpdate({
      ...item,
      title,
      date,
      category,
      excerpt,
      imageUrl: imagePreview
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
      <div className="bg-stone-900 w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-stone-800">
        
        <div className="flex justify-between items-center p-6 border-b border-stone-800">
          <h2 className="text-2xl font-serif text-stone-100">Neuigkeit bearbeiten</h2>
          <button onClick={onClose} className="p-2 hover:bg-stone-800 rounded-full transition-colors">
            <XIcon className="text-stone-400" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6">
          <form id="edit-news-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* Image Upload */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Bild (Optional)</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`relative aspect-video w-full bg-stone-800 border border-dashed border-stone-700 hover:border-stone-500 cursor-pointer group overflow-hidden transition-all`}
              >
                 {imagePreview ? (
                   <>
                    <img src={imagePreview} alt="Vorschau" className="h-full w-full object-cover opacity-80 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <UploadIcon size={32} className="text-stone-200" />
                    </div>
                   </>
                 ) : (
                   <div className="h-full w-full flex flex-col items-center justify-center text-center p-6 hover:bg-stone-800">
                     <UploadIcon className="mx-auto text-stone-600 mb-2" size={32} />
                     <p className="text-stone-500 text-sm">Bild hochladen</p>
                   </div>
                 )}
                 <input 
                   type="file" 
                   ref={fileInputRef} 
                   onChange={handleFileChange} 
                   accept="image/*" 
                   className="hidden" 
                 />
              </div>
            </div>

            <div className="space-y-2">
               <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Titel</label>
               <input 
                 type="text" 
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none"
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Datum</label>
                <input 
                  type="text" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Kategorie</label>
                <input 
                  type="text" 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Auszug / Text</label>
              <textarea 
                rows={4}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none"
              />
            </div>

          </form>
        </div>

        <div className="p-6 border-t border-stone-800 bg-stone-900 flex justify-end gap-3">
          <button 
            type="button" 
            onClick={onClose}
            className="px-6 py-2 text-stone-500 hover:text-stone-300 text-sm font-medium transition-colors"
          >
            Abbrechen
          </button>
          <button 
            form="edit-news-form"
            type="submit"
            className="px-8 py-2 bg-stone-100 text-stone-900 text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNewsModal;