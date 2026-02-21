import React, { useState, useRef } from 'react';
import { XIcon, UploadIcon, SparklesIcon, LoaderIcon } from './Icons';
import { NewProjectData } from '../types';
import { generateProjectDescription } from '../services/geminiService';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (project: NewProjectData) => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState<any>('Wohnbau');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateDescription = async () => {
    if (!imagePreview) return;
    setIsGenerating(true);
    try {
      const desc = await generateProjectDescription(imagePreview, title || "Unbenanntes Projekt");
      setDescription(desc);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !imagePreview) return;

    onAdd({
      title,
      location,
      year,
      category,
      description,
      imageUrl: imagePreview
    });

    // Reset form
    setTitle('');
    setLocation('');
    setDescription('');
    setImageFile(null);
    setImagePreview(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
      <div className="bg-stone-900 w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-stone-800">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-stone-800">
          <h2 className="text-2xl font-serif text-stone-100">Neues Projekt</h2>
          <button onClick={onClose} className="p-2 hover:bg-stone-800 rounded-full transition-colors">
            <XIcon className="text-stone-400" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          <form id="add-project-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* Image Upload */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Projektbild</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`relative aspect-video w-full rounded-none border border-dashed flex flex-col items-center justify-center cursor-pointer transition-colors ${imagePreview ? 'border-stone-700' : 'border-stone-700 hover:bg-stone-800 hover:border-stone-500'}`}
              >
                 {imagePreview ? (
                   <img src={imagePreview} alt="Vorschau" className="h-full w-full object-cover" />
                 ) : (
                   <div className="text-center p-6">
                     <UploadIcon className="mx-auto text-stone-600 mb-2" size={32} />
                     <p className="text-stone-500 text-sm">Klicken zum Hochladen</p>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Titel</label>
                <input 
                  type="text" 
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none placeholder-stone-600"
                  placeholder="z.B. Glaspavillon"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Standort</label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none placeholder-stone-600"
                  placeholder="z.B. Berlin, Deutschland"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Kategorie</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none"
                >
                  <option value="Wohnbau">Wohnbau</option>
                  <option value="Gewerbe">Gewerbe</option>
                  <option value="Öffentlich">Öffentlich</option>
                  <option value="Interieur">Interieur</option>
                  <option value="Landschaft">Landschaft</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Jahr</label>
                <input 
                  type="text" 
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Beschreibung</label>
                <button 
                  type="button" 
                  onClick={handleGenerateDescription}
                  disabled={!imagePreview || isGenerating}
                  className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded transition-colors ${!imagePreview ? 'text-stone-600 cursor-not-allowed' : 'text-purple-400 hover:bg-stone-800'}`}
                >
                  {isGenerating ? <LoaderIcon size={14} /> : <SparklesIcon size={14} />}
                  {isGenerating ? 'Generiere...' : 'Mit KI generieren'}
                </button>
              </div>
              <textarea 
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none placeholder-stone-600"
                placeholder="Projektbeschreibung..."
              />
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-stone-800 bg-stone-900 flex justify-end gap-3">
          <button 
            type="button" 
            onClick={onClose}
            className="px-6 py-2 text-stone-500 hover:text-stone-300 text-sm font-medium transition-colors"
          >
            Abbrechen
          </button>
          <button 
            form="add-project-form"
            type="submit"
            disabled={!title || !imagePreview}
            className={`px-8 py-2 bg-stone-100 text-stone-900 text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors ${(!title || !imagePreview) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Projekt Hinzufügen
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;