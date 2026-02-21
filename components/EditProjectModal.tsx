import React, { useState, useEffect, useRef } from 'react';
import { XIcon, SparklesIcon, LoaderIcon, UploadIcon } from './Icons';
import { Project } from '../types';
import { generateProjectDescription } from '../services/geminiService';

interface EditProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  onUpdate: (updatedProject: Project) => void;
}

const EditProjectModal: React.FC<EditProjectModalProps> = ({ isOpen, onClose, project, onUpdate }) => {
  const [title, setTitle] = useState(project.title);
  const [location, setLocation] = useState(project.location);
  const [category, setCategory] = useState<any>(project.category);
  const [year, setYear] = useState(project.year);
  const [description, setDescription] = useState(project.description);
  const [imagePreview, setImagePreview] = useState<string>(project.imageUrl);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync state with project prop changes
  useEffect(() => {
    if (isOpen) {
      setTitle(project.title);
      setLocation(project.location);
      setCategory(project.category);
      setYear(project.year);
      setDescription(project.description);
      setImagePreview(project.imageUrl);
    }
  }, [isOpen, project]);

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

  const handleGenerateDescription = async () => {
    setIsGenerating(true);
    try {
      // Pass the existing or new image for context
      const desc = await generateProjectDescription(imagePreview, title || project.title);
      setDescription(desc);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onUpdate({
      ...project,
      title,
      location,
      year,
      category,
      description,
      imageUrl: imagePreview, // Update the cover image
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
      <div className="bg-stone-900 w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-stone-800">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-stone-800">
          <h2 className="text-2xl font-serif text-stone-100">Projekt bearbeiten</h2>
          <button onClick={onClose} className="p-2 hover:bg-stone-800 rounded-full transition-colors">
            <XIcon className="text-stone-400" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          <form id="edit-project-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* Image Upload/Preview */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Titelbild</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="relative aspect-video w-full bg-stone-800 border border-dashed border-stone-700 hover:border-stone-500 cursor-pointer group overflow-hidden transition-all"
                title="Klicken um Bild zu ändern"
              >
                 <img 
                   src={imagePreview} 
                   alt="Vorschau" 
                   className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50" 
                 />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col items-center text-stone-200">
                      <UploadIcon size={32} className="mb-2" />
                      <span className="text-xs font-bold uppercase tracking-widest">Bild ändern</span>
                    </div>
                 </div>
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
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest">Standort</label>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none placeholder-stone-600"
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
                  disabled={isGenerating}
                  className="text-xs flex items-center gap-1 font-medium px-2 py-1 rounded transition-colors text-purple-400 hover:bg-stone-800"
                >
                  {isGenerating ? <LoaderIcon size={14} /> : <SparklesIcon size={14} />}
                  {isGenerating ? 'Generiere...' : 'Mit KI neu generieren'}
                </button>
              </div>
              <textarea 
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 bg-stone-800 border border-stone-700 text-stone-100 focus:border-stone-500 focus:outline-none transition-colors rounded-none placeholder-stone-600"
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
            form="edit-project-form"
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

export default EditProjectModal;