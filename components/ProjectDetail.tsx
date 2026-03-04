import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Project, ProjectImage } from '../types';
import { XIcon, UploadIcon, ChevronLeftIcon, ChevronRightIcon, MaximizeIcon, MinimizeIcon, EditIcon } from './Icons';
import EditProjectModal from './EditProjectModal';
import { useLanguage } from '../src/contexts/LanguageContext';

interface ProjectDetailProps {
  project: Project | null;
  onUpdate?: (project: Project) => void;
  onClose: () => void;
  isAdmin: boolean;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onUpdate, onClose, isAdmin }) => {
  const { language } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Helper to extract URL
  const getImageUrl = (img: string | ProjectImage) => {
    return typeof img === 'string' ? img : img.url;
  };

  // Helper to extract Metadata
  const getImageMetadata = (img: string | ProjectImage) => {
    if (typeof img === 'string') return null;
    return { title: img.title, copyright: img.copyright };
  };

  // Combine hero image and additional images into one gallery array
  const allImages = useMemo(() => {
    if (!project) return [];
    // For project 9, do not include the main image in the gallery
    if (project.id === '9') {
      return [...(project.additionalImages || [])];
    }
    return [project.imageUrl, ...(project.additionalImages || [])];
  }, [project]);

  // Reset index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsFullscreen(false);
  }, [project?.id]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (isEditModalOpen) return; // Disable keyboard nav when editing
      
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, isFullscreen, onClose, allImages.length, isEditModalOpen]);

  if (!project) return null;

  // Language-specific content
  const title = language === 'zh' && project.titleZh ? project.titleZh : project.title;
  const location = language === 'zh' && project.locationZh ? project.locationZh : project.location;
  const subtitle = language === 'zh' && project.subtitleZh ? project.subtitleZh : project.subtitle;
  const description = language === 'zh' && project.descriptionZh ? project.descriptionZh : project.description;
  const category = language === 'zh' && project.categoryZh ? project.categoryZh : project.category;

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdate) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const updatedImages = project.additionalImages ? [...project.additionalImages, result] : [result];
        
        // Update project
        onUpdate({
          ...project,
          additionalImages: updatedImages
        });
        // Switch to the newly added image (which will be at the end)
        setCurrentImageIndex(allImages.length); // length of old array = index of new item
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleUpdateProjectDetails = (updatedProject: Project) => {
      if (onUpdate) {
          onUpdate(updatedProject);
      }
  };

  // Render Fullscreen View
  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-[60] bg-stone-950 flex flex-col items-center justify-center animate-[fadeIn_0.2s_ease-out]">
        {/* Fullscreen Controls */}
        <button 
          onClick={() => setIsFullscreen(false)}
          className="absolute top-6 right-6 z-50 p-3 bg-stone-900/50 backdrop-blur text-stone-100 rounded-full hover:bg-stone-800 transition-colors border border-stone-700"
          title={language === 'zh' ? "退出" : "Verlassen"}
        >
          <MinimizeIcon size={24} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center p-4">
             {/* Main Image (Fullscreen) */}
             <img 
                src={getImageUrl(allImages[currentImageIndex])} 
                alt={`${title} - View ${currentImageIndex + 1}`} 
                className="max-w-full max-h-full object-contain select-none"
                referrerPolicy="no-referrer"
             />

             {/* Metadata Overlay */}
             {(() => {
               const meta = getImageMetadata(allImages[currentImageIndex]);
               if (meta && (meta.title || meta.copyright)) {
                 return (
                   <div className="absolute bottom-8 right-8 text-right text-stone-400 text-xs font-mono tracking-widest z-50 bg-stone-900/50 backdrop-blur px-3 py-2 rounded pointer-events-none">
                     {meta.title && <div className="text-stone-200 font-bold mb-1 uppercase">{meta.title}</div>}
                     {meta.copyright && <div>{meta.copyright}</div>}
                   </div>
                 );
               }
               return null;
             })()}

             {/* Navigation Overlay */}
             {allImages.length > 1 && (
               <>
                 <button 
                   onClick={handlePrevImage}
                   className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-stone-400 hover:text-white hover:bg-stone-900/50 rounded-full transition-all"
                 >
                   <ChevronLeftIcon size={48} />
                 </button>
                 <button 
                   onClick={handleNextImage}
                   className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-stone-400 hover:text-white hover:bg-stone-900/50 rounded-full transition-all"
                 >
                   <ChevronRightIcon size={48} />
                 </button>
               </>
             )}

             {/* Counter */}
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-stone-900/80 rounded-full text-xs font-mono tracking-widest text-stone-400">
                {currentImageIndex + 1} / {allImages.length}
             </div>
        </div>
      </div>
    );
  }

  // Render Standard Modal View
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl bg-stone-900 h-full max-h-[90vh] shadow-2xl flex flex-col animate-[fadeIn_0.3s_ease-out] border border-stone-800 overflow-hidden">
        
        {/* Header Actions */}
        <div className="absolute top-6 right-6 z-20 flex gap-4">
           {isAdmin && onUpdate && (
             <button 
               onClick={() => setIsEditModalOpen(true)}
               className="p-3 bg-stone-900/50 backdrop-blur text-stone-100 rounded-full hover:bg-stone-800 transition-colors border border-stone-700"
               title={language === 'zh' ? "编辑" : "Bearbeiten"}
             >
               <EditIcon size={24} />
             </button>
           )}
           <button 
             onClick={onClose}
             className="p-3 bg-stone-900/50 backdrop-blur text-stone-100 rounded-full hover:bg-stone-800 transition-colors border border-stone-700"
             title={language === 'zh' ? "关闭" : "Schließen"}
           >
             <XIcon className="text-stone-200" />
           </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
            
            {/* Main Hero Image Area (Carousel) */}
            <div className="w-full aspect-video bg-stone-800 relative group select-none">
                <img 
                    src={getImageUrl(allImages[currentImageIndex])} 
                    alt={title} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {allImages.length > 1 && (
                      <>
                        <button 
                            onClick={handlePrevImage}
                            className="p-2 bg-stone-900/50 backdrop-blur text-stone-200 hover:bg-stone-900 hover:text-white rounded-full transition-colors"
                        >
                            <ChevronLeftIcon size={32} />
                        </button>
                        <button 
                            onClick={handleNextImage}
                            className="p-2 bg-stone-900/50 backdrop-blur text-stone-200 hover:bg-stone-900 hover:text-white rounded-full transition-colors"
                        >
                            <ChevronRightIcon size={32} />
                        </button>
                      </>
                    )}
                </div>

                {/* Zoom Button */}
                <button 
                    onClick={() => setIsFullscreen(true)}
                    className="absolute bottom-4 right-4 p-2 bg-stone-900/50 backdrop-blur text-stone-200 hover:bg-stone-900 hover:text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    title={language === 'zh' ? "全屏" : "Vollbild"}
                >
                    <MaximizeIcon size={24} />
                </button>

                 {/* Counter */}
                 <div className="absolute bottom-4 left-4 px-3 py-1 bg-stone-900/60 backdrop-blur rounded text-[10px] font-mono tracking-widest text-stone-300">
                    {currentImageIndex + 1} / {allImages.length}
                 </div>

                 {/* Metadata Overlay (Carousel) */}
                 {(() => {
                   const meta = getImageMetadata(allImages[currentImageIndex]);
                   if (meta && (meta.title || meta.copyright)) {
                     return (
                       <div className="absolute bottom-4 right-16 text-right text-stone-400 text-[10px] font-mono tracking-widest z-20 bg-stone-900/60 backdrop-blur px-3 py-1 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         {meta.title && <span className="text-stone-200 font-bold uppercase mr-2">{meta.title}</span>}
                         {meta.copyright && <span>{meta.copyright}</span>}
                       </div>
                     );
                   }
                   return null;
                 })()}
            </div>

            <div className="p-8 md:p-16 flex flex-col items-center text-center">
                
                {/* Header Info */}
                <div className="flex flex-col gap-4 mb-12 max-w-2xl mx-auto">
                    <span className="text-xs font-bold tracking-[0.3em] text-stone-500 uppercase">{category}</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-stone-100 leading-tight">{title}</h2>
                    <div className="flex items-center justify-center gap-4 text-stone-400 mt-2 text-sm font-light uppercase tracking-widest">
                        <span>{location}</span>
                        <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                        <span>{project.year}</span>
                    </div>
                    {subtitle && (
                        <div className="text-stone-500 mt-2 text-sm font-light tracking-wide">
                            {subtitle}
                        </div>
                    )}
                </div>

                {/* Description - Justified text (Blocksatz), Full Width, Word Break, Hyphenation */}
                <div className="w-full mx-auto mb-16">
                    <p className="text-lg md:text-xl text-stone-300 leading-relaxed font-light font-serif whitespace-pre-line break-words hyphens-auto text-justify" lang={language}>
                        {description}
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="w-full max-w-5xl">
                    <h3 className="text-2xl font-serif text-stone-100 mb-8 text-left border-l-2 border-stone-700 pl-4">
                        {language === 'zh' ? '项目图集' : 'Projektgalerie'}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Gallery Thumbnails */}
                        {allImages.map((img, idx) => (
                            <div 
                                key={idx} 
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`aspect-square bg-stone-800 overflow-hidden group cursor-pointer border-2 transition-all duration-300 ${currentImageIndex === idx ? 'border-stone-100 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'} relative`}
                            >
                                <img src={getImageUrl(img)} alt={`Detail ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                                
                                {/* Metadata Overlay (Thumbnail) */}
                                {(() => {
                                   const meta = getImageMetadata(img);
                                   if (meta && (meta.title || meta.copyright)) {
                                     return (
                                       <div className="absolute bottom-0 left-0 right-0 bg-stone-900/80 p-2 text-[8px] text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                         {meta.title && <div className="text-stone-200 font-bold uppercase truncate">{meta.title}</div>}
                                         {meta.copyright && <div className="truncate">{meta.copyright}</div>}
                                       </div>
                                     );
                                   }
                                   return null;
                                })()}
                            </div>
                        ))}

                        {/* Add Image Button - Only in Admin Mode */}
                        {isAdmin && (
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className="aspect-square bg-stone-800/50 border border-dashed border-stone-700 hover:border-stone-400 hover:bg-stone-800 flex flex-col items-center justify-center cursor-pointer transition-all group opacity-60 hover:opacity-100"
                            >
                                <UploadIcon className="text-stone-500 group-hover:text-stone-200 mb-3" size={24} />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 group-hover:text-stone-200">
                                    {language === 'zh' ? '添加' : 'Hinzufügen'}
                                </span>
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    className="hidden" 
                                    accept="image/*"
                                    onChange={handleAddImage}
                                />
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
        
        {/* Edit Modal */}
        <EditProjectModal 
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            project={project}
            onUpdate={handleUpdateProjectDetails}
        />

      </div>
    </div>
  );
};

export default ProjectDetail;