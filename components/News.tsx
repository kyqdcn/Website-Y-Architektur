import React, { useState } from 'react';
import { NewsItem, NewNewsData } from '../types';
import { PlusIcon, EditIcon, TrashIcon } from './Icons';
import AddNewsModal from './AddNewsModal';
import EditNewsModal from './EditNewsModal';

interface NewsProps {
  items: NewsItem[];
  isAdmin: boolean;
  onAdd?: (item: NewNewsData) => void;
  onUpdate?: (item: NewsItem) => void;
  onDelete?: (id: string) => void;
}

const News: React.FC<NewsProps> = ({ items, isAdmin, onAdd, onUpdate, onDelete }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);

  const handleUpdate = (updatedItem: NewsItem) => {
    if (onUpdate) onUpdate(updatedItem);
    setEditingItem(null);
  };

  const handleAdd = (newItem: NewNewsData) => {
    if (onAdd) onAdd(newItem);
    setIsAddModalOpen(false);
  };

  return (
    <div className="pt-40 pb-20 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
      
      {/* Page Header Container with Admin Action */}
      <div className="flex justify-between items-start mb-20">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-normal leading-[0.85] text-stone-100 tracking-tight">
          Aktuelle <br />
          <span className="text-stone-600">Nachrichten.</span>
        </h1>
        
        {isAdmin && (
           <button 
             onClick={() => setIsAddModalOpen(true)}
             className="flex items-center gap-2 px-5 py-3 bg-stone-100 text-stone-900 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
           >
             <PlusIcon size={16} />
             <span className="hidden sm:inline">Neuer Eintrag</span>
           </button>
        )}
      </div>

      <div className="border-t border-stone-800">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 border-b border-stone-800 transition-colors hover:bg-stone-800/20 relative"
          >
            {/* Admin Controls Overlay */}
            {isAdmin && (
              <div className="absolute top-4 right-4 flex gap-2 opacity-100 z-10 bg-stone-900/50 p-2 rounded backdrop-blur-sm">
                 <button 
                   onClick={(e) => { e.stopPropagation(); setEditingItem(item); }}
                   className="p-2 text-stone-300 hover:text-white hover:bg-stone-700 rounded transition-colors"
                   title="Bearbeiten"
                 >
                   <EditIcon size={18} />
                 </button>
                 <button 
                   onClick={(e) => { e.stopPropagation(); onDelete && onDelete(item.id); }}
                   className="p-2 text-red-400 hover:text-red-200 hover:bg-red-900/30 rounded transition-colors"
                   title="Löschen"
                 >
                   <TrashIcon size={18} />
                 </button>
              </div>
            )}

            {/* Date Column */}
            <div className="md:col-span-3 flex flex-col justify-between">
              <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">{item.date}</span>
              <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase text-stone-600 mt-2">{item.category}</span>
            </div>

            {/* Content Column */}
            <div className="md:col-span-6 space-y-4">
              <span className="md:hidden text-[10px] tracking-[0.2em] uppercase text-stone-600 mb-2 block">{item.category}</span>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-200 group-hover:text-stone-100 transition-colors">
                {item.title}
              </h2>
              <p className="text-stone-400 font-light leading-relaxed max-w-xl group-hover:text-stone-300 transition-colors whitespace-pre-line">
                {item.excerpt}
              </p>
              <div className="pt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 group-hover:text-stone-100 transition-colors">
                Mehr lesen <span className="text-lg leading-none">&rarr;</span>
              </div>
            </div>

            {/* Optional Image Column */}
            <div className="md:col-span-3 hidden md:flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               {item.imageUrl && (
                 <div className="w-full aspect-video bg-stone-800 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                   <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                   />
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-20 text-center">
         <button className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-100 transition-colors border-b border-stone-800 hover:border-stone-100 pb-1">
            Archiv
         </button>
      </div>

      {/* Modals */}
      <AddNewsModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAdd}
      />

      {editingItem && (
        <EditNewsModal
          isOpen={!!editingItem}
          onClose={() => setEditingItem(null)}
          item={editingItem}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default News;