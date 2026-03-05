import React, { useState, useMemo, useRef } from 'react';
import { useLanguage } from './src/contexts/LanguageContext';
import { Project, NewProjectData, NewsItem, NewNewsData } from './types';
import { INITIAL_PROJECTS, INITIAL_NEWS } from './constants';
import ProjectCard from './components/ProjectCard';
import AddProjectModal from './components/AddProjectModal';
import ProjectDetail from './components/ProjectDetail';
import AdminLoginModal from './components/AdminLoginModal';
import Studio from './components/Studio';
import News from './components/News';
import Contact from './components/Contact';
import Energie from './components/Energie';
import Entwicklung from './components/Entwicklung';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import { PlusIcon, FolderIcon, EditIcon, InstagramIcon, LinkedInIcon, PinterestIcon, MenuIcon, XIcon, XiaohongshuIcon } from './components/Icons';

// ----------------------------------------------------------------------
// 教程：如何永久更改 Logo 和 个人照片
// 1. 在项目根目录下创建文件夹结构: public/images/
// 2. 将你的 Logo图片放入，重命名为 'logo.png'
// 3. 将你的 个人照片放入，重命名为 'portrait.jpg'
// 4. 下面的代码会自动读取这些文件。
// ----------------------------------------------------------------------

type GridItem = Project | { id: string; isBlank: true };
type ViewState = 'projects' | 'studio' | 'news' | 'contact' | 'energie' | 'entwicklung' | 'impressum' | 'datenschutz';

const App: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [newsItems, setNewsItems] = useState<NewsItem[]>(INITIAL_NEWS);
  
  // 修改这里：指向 public/images/ 文件夹中的真实文件
  // 注意：路径必须以 '/' 开头，代表 public 根目录
  const [logoSrc, setLogoSrc] = useState('https://github.com/kyqdcn/Website-Y-Architektur/blob/main/public/images/logo-Ya.png?raw=true');
  const [portraitSrc, setPortraitSrc] = useState('https://github.com/kyqdcn/Website-Y-Architektur/blob/main/public/images/Portrait-1.jpg?raw=true');
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('Alle');
  const [view, setView] = useState<ViewState>('projects'); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  
  // Admin state
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const folderInputRef = useRef<HTMLInputElement>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);

  const categories = ['Alle', 'Wohnbau', 'Gewerbe', 'Öffentlich', 'Interieur'];

  // Project Handlers
  const handleAddProject = (newProjectData: NewProjectData) => {
    const newProject: Project = {
      ...newProjectData,
      id: Date.now().toString(),
      additionalImages: []
    };
    setProjects([newProject, ...projects]);
  };

  const handleUpdateProject = (updatedProject: Project) => {
    setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
    setSelectedProject(updatedProject);
  };

  // News Handlers
  const handleAddNews = (newItem: NewNewsData) => {
    const news: NewsItem = {
      ...newItem,
      id: Date.now().toString()
    };
    setNewsItems([news, ...newsItems]);
  };

  const handleUpdateNews = (updatedItem: NewsItem) => {
    setNewsItems(newsItems.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const handleDeleteNews = (id: string) => {
    if (window.confirm("Sind Sie sicher, dass Sie diesen Eintrag löschen möchten?")) {
      setNewsItems(newsItems.filter(item => item.id !== id));
    }
  };

  // Image Upload Handlers (仅用于当前会话预览，刷新失效)
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePortraitUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPortraitSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Folder Import Logic
  const handleFolderImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const imageMap: Record<string, string> = {};
    let importedProjects: any[] = [];
    let jsonFound = false;

    // First pass: Process files
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      if (file.name === 'projects.json' || file.name === 'data.json') {
        try {
          const text = await file.text();
          importedProjects = JSON.parse(text);
          jsonFound = true;
        } catch (err) {
          console.error("Error parsing JSON:", err);
          alert("Fehler beim Lesen der JSON-Datei.");
        }
      } else if (file.type.startsWith('image/')) {
        // Create local URL for the image file
        imageMap[file.name] = URL.createObjectURL(file);
      }
    }

    let newProjects: Project[] = [];

    if (jsonFound) {
      // Scenario A: JSON found, map data to images
      newProjects = importedProjects.map((p: any) => {
        const mainImageUrl = imageMap[p.imageFileName] || p.imageUrl;
        const additionalImages = p.additionalImageFileNames?.map((name: string) => imageMap[name]).filter(Boolean) || [];

        return {
          id: p.id || Date.now().toString() + Math.random(),
          title: p.title || "Unbenannt",
          location: p.location || "",
          year: p.year || "",
          category: p.category || "Wohnbau",
          description: p.description || "",
          imageUrl: mainImageUrl || "https://picsum.photos/800/600", // Fallback
          additionalImages: additionalImages
        };
      });
      alert(`${newProjects.length} Projekte aus projects.json geladen!`);
    } else {
      // Scenario B: No JSON found, create projects from images directly
      const imageNames = Object.keys(imageMap);
      if (imageNames.length === 0) {
        alert("Keine Bilder oder projects.json im ausgewählten Ordner gefunden.");
        return;
      }

      const confirmAuto = window.confirm(
        `Keine 'projects.json' gefunden.\nMöchten Sie ${imageNames.length} gefundene Bilder automatisch als Projekte importieren?`
      );

      if (!confirmAuto) return;

      newProjects = imageNames.map((fileName, index) => ({
        id: `auto-${Date.now()}-${index}`,
        title: fileName.split('.')[0], // Use filename without extension as title
        location: 'Importiert',
        year: new Date().getFullYear().toString(),
        category: 'Wohnbau', // Default category
        description: 'Automatisch aus Ordner importiert.',
        imageUrl: imageMap[fileName],
        additionalImages: []
      }));
    }

    if (newProjects.length > 0) {
      setProjects(newProjects);
      if (view !== 'projects') setView('projects');
    }
  };

  const processedProjects = useMemo(() => {
    // 1. Filter
    let filtered = filter === 'Alle' 
        ? [...projects] 
        : projects.filter(p => p.category === filter);

    // 2. Shuffle (Random arrangement)
    // Using a simple sort with random.
    filtered.sort(() => Math.random() - 0.5);

    // 3. Logic: Min 8, Max 16
    const MIN_SLOTS = 8;
    const MAX_SLOTS = 16;
    
    // Slice to max 16
    const limited = filtered.slice(0, MAX_SLOTS);
    
    // Pad to min 8
    const result: GridItem[] = [...limited];
    while (result.length < MIN_SLOTS) {
        result.push({
            id: `blank-${filter}-${result.length}`,
            isBlank: true
        });
    }

    return result;
  }, [projects, filter]);

  const handleNavClick = (newView: ViewState) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const handleAdminToggle = () => {
    if (isAdmin) {
      // Logout immediately
      setIsAdmin(false);
    } else {
      // Open login modal
      setIsLoginModalOpen(true);
    }
  };

  const handleAdminLoginSuccess = () => {
    setIsAdmin(true);
    setIsLoginModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-900 text-stone-200 font-sans selection:bg-stone-700 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-stone-900/90 backdrop-blur-md z-30 border-b border-stone-800">
        <div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-4 cursor-pointer group relative" 
            onClick={(e) => {
              // Only navigate if we didn't click the file input label
              if ((e.target as HTMLElement).closest('.admin-upload-trigger')) return;
              handleNavClick('projects');
            }}
          >
            <div className="relative">
              <img 
                  src={logoSrc} 
                  alt="YANG Logo" 
                  className="h-14 w-auto brightness-0 invert opacity-100 transition-opacity duration-300"
                  referrerPolicy="no-referrer"
              />
              
              {/* Admin: Edit Logo Overlay */}
              {isAdmin && (
                <div 
                  className="admin-upload-trigger absolute inset-0 bg-stone-900/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    logoInputRef.current?.click();
                  }}
                  title="Logo ändern"
                >
                  <EditIcon size={20} className="text-stone-200" />
                  <input 
                    type="file" 
                    ref={logoInputRef}
                    onChange={handleLogoUpload}
                    className="hidden" 
                    accept="image/*"
                  />
                </div>
              )}
            </div>

            {/* Logo Text - Removed */}
          </div>
          <div className="hidden md:flex items-center gap-8 text-base font-medium tracking-widest uppercase text-stone-500">
            <button 
                onClick={() => handleNavClick('projects')}
                className={`transition-colors hover:text-stone-100 ${view === 'projects' ? 'text-stone-100' : ''}`}
            >
                {t.nav.projects}
            </button>
            <button 
                onClick={() => handleNavClick('energie')}
                className={`transition-colors hover:text-stone-100 ${view === 'energie' ? 'text-stone-100' : ''}`}
            >
                {t.nav.energy}
            </button>
            <button 
                onClick={() => handleNavClick('entwicklung')}
                className={`transition-colors hover:text-stone-100 ${view === 'entwicklung' ? 'text-stone-100' : ''}`}
            >
                {t.nav.development}
            </button>
            <button 
                onClick={() => handleNavClick('studio')}
                className={`transition-colors hover:text-stone-100 ${view === 'studio' ? 'text-stone-100' : ''}`}
            >
                {t.nav.studio}
            </button>
            <button 
                onClick={() => handleNavClick('contact')}
                className={`transition-colors hover:text-stone-100 ${view === 'contact' ? 'text-stone-100' : ''}`}
            >
                {t.nav.contact}
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Language Selector */}
            <div className="hidden md:flex items-center gap-2 text-base font-bold uppercase tracking-widest text-stone-500">
              <button 
                onClick={() => setLanguage('de')} 
                className={`transition-colors hover:text-stone-100 ${language === 'de' ? 'text-stone-100' : ''}`}
              >
                DE
              </button>
              <span className="text-stone-700">|</span>
              <button 
                onClick={() => setLanguage('zh')} 
                className={`transition-colors hover:text-stone-100 ${language === 'zh' ? 'text-stone-100' : ''}`}
              >
                CN
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-stone-400 hover:text-stone-100 transition-colors p-2"
                >
                  {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {/* Admin Toolbar - Only visible in Admin Mode */}
            {isAdmin && (
            <div className="flex items-center gap-3">
              
              {/* Folder Import Button (Only for Projects View) */}
              {view === 'projects' && (
                <>
                  <button 
                    onClick={() => folderInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 border border-stone-700 text-stone-400 text-xs font-bold uppercase tracking-wider hover:bg-stone-800 hover:text-stone-200 transition-colors"
                    title="Lokalen Ordner mit Bildern laden"
                  >
                    <FolderIcon size={16} />
                    <span className="hidden xl:inline">Ordner Laden</span>
                  </button>
                  <input
                      type="file"
                      ref={folderInputRef}
                      onChange={handleFolderImport}
                      className="hidden"
                      // @ts-ignore - webkitdirectory is non-standard but supported
                      webkitdirectory="" 
                      directory=""
                      multiple
                  />

                  {/* Add Project Button */}
                  <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-5 py-2 bg-stone-100 text-stone-900 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    <PlusIcon size={16} />
                    <span className="hidden sm:inline">Neues Projekt</span>
                  </button>
                </>
              )}
            </div>
            )}
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="fixed top-20 left-0 w-full bg-stone-900 border-b border-stone-800 z-20 md:hidden flex flex-col py-6 px-6 animate-[fadeIn_0.2s_ease-out] shadow-2xl">
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-stone-500">
              <button 
                  onClick={() => { handleNavClick('projects'); setIsMobileMenuOpen(false); }}
                  className={`transition-colors hover:text-stone-100 text-left py-1 ${view === 'projects' ? 'text-stone-100' : ''}`}
              >
                  {t.nav.projects}
              </button>
              <button 
                  onClick={() => { handleNavClick('energie'); setIsMobileMenuOpen(false); }}
                  className={`transition-colors hover:text-stone-100 text-left py-1 ${view === 'energie' ? 'text-stone-100' : ''}`}
              >
                  {t.nav.energy}
              </button>
              <button 
                  onClick={() => { handleNavClick('entwicklung'); setIsMobileMenuOpen(false); }}
                  className={`transition-colors hover:text-stone-100 text-left py-1 ${view === 'entwicklung' ? 'text-stone-100' : ''}`}
              >
                  {t.nav.development}
              </button>
              <button 
                  onClick={() => { handleNavClick('studio'); setIsMobileMenuOpen(false); }}
                  className={`transition-colors hover:text-stone-100 text-left py-1 ${view === 'studio' ? 'text-stone-100' : ''}`}
              >
                  {t.nav.studio}
              </button>
              <button 
                  onClick={() => { handleNavClick('contact'); setIsMobileMenuOpen(false); }}
                  className={`transition-colors hover:text-stone-100 text-left py-1 ${view === 'contact' ? 'text-stone-100' : ''}`}
              >
                  {t.nav.contact}
              </button>
            </div>

            {/* Language Selector Mobile */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-stone-800 text-xs font-bold uppercase tracking-widest text-stone-500">
              <button 
                onClick={() => { setLanguage('de'); setIsMobileMenuOpen(false); }} 
                className={`transition-colors hover:text-stone-100 ${language === 'de' ? 'text-stone-100' : ''}`}
              >
                DE
              </button>
              <span className="text-stone-700">|</span>
              <button 
                onClick={() => { setLanguage('zh'); setIsMobileMenuOpen(false); }} 
                className={`transition-colors hover:text-stone-100 ${language === 'zh' ? 'text-stone-100' : ''}`}
              >
                CN
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      {view === 'projects' && (
        <>
          {/* Hero Section */}
          <header className="pt-40 pb-24 px-6 max-w-[1920px] mx-auto animate-[fadeIn_0.5s_ease-out]">
            <h1 className={`${language === 'zh' ? 'text-3xl md:text-6xl lg:text-7xl leading-[1.15]' : 'text-4xl md:text-7xl lg:text-8xl leading-[0.85]'} font-serif font-normal text-stone-100 mb-16 tracking-tight`}>
              {t.hero.title} <br />
              <span className="text-stone-600">{t.hero.subtitle}</span>
            </h1>
            
            {/* Architectural Philosophy & Filters */}
            <div className="border-t border-stone-800 pt-10 flex flex-col gap-10">
                {/* Text Block - 50% Width on medium screens */}
                <p className="w-full md:w-1/2 text-lg md:text-xl font-light text-stone-400 leading-relaxed text-justify hyphens-auto">
                    {t.hero.description}
                </p>
            </div>
          </header>

          {/* Gallery Grid - Fixed 8 Slots */}
          <main className="px-6 pb-20 max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[5px]">
              {processedProjects.map((item) => {
                 if ('isBlank' in item) {
                    return (
                        <div 
                            key={item.id} 
                            className="aspect-square w-full bg-stone-900 border border-stone-800/40"
                            aria-hidden="true"
                        />
                    );
                 }
                 return (
                    <ProjectCard 
                      key={item.id} 
                      project={item} 
                      onClick={setSelectedProject} 
                    />
                 );
              })}
            </div>
          </main>
        </>
      )}

      {view === 'studio' && (
        <Studio 
          portraitSrc={portraitSrc}
          onUpdatePortrait={handlePortraitUpload}
          isAdmin={isAdmin}
        />
      )}
      
      {view === 'energie' && <Energie isAdmin={isAdmin} onNavigate={handleNavClick} />}
      
      {view === 'entwicklung' && <Entwicklung onNavigate={handleNavClick} />}

      {/* News Section - Temporarily Disabled */}
      {/* {view === 'news' && (
        <News 
          items={newsItems} 
          isAdmin={isAdmin}
          onAdd={handleAddNews}
          onUpdate={handleUpdateNews}
          onDelete={handleDeleteNews}
        />
      )} */}

      {view === 'contact' && <Contact onNavigate={handleNavClick} />}
      
      {view === 'impressum' && <Impressum />}
      
      {view === 'datenschutz' && <Datenschutz />}

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-24 px-6 border-t border-stone-800">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div>
                <h3 className="text-stone-100 font-serif text-3xl mb-8">YANG Architektur & Energie</h3>
                <p className="text-sm font-light leading-relaxed max-w-xs text-stone-400">
                    Friedrichshof | Raboisen 32<br/>
                    20095 Hamburg | Deutschland<br/>
                    +49(0)40 7569 3367<br/>
                    info@y-architektur.de
                </p>
            </div>
            <div className="flex gap-16 text-xs uppercase tracking-widest">
                <div className="flex flex-col gap-6">
                    <span className="text-stone-100 font-bold">{t.nav.social}</span>
                    <div className="flex gap-4">
                        <span className="text-stone-700 cursor-not-allowed" title="Instagram (Coming Soon)">
                            <InstagramIcon size={20} />
                        </span>
                        <a href="https://www.linkedin.com/in/kai-yang-59248b104" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-100 transition-colors" title="LinkedIn">
                            <LinkedInIcon size={20} />
                        </a>
                        <span className="text-stone-700 cursor-not-allowed" title="Pinterest (Coming Soon)">
                            <PinterestIcon size={20} />
                        </span>
                        <span className="text-stone-700 cursor-not-allowed" title="Xiaohongshu (Coming Soon)">
                            <XiaohongshuIcon size={20} className="rotate-180" />
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <span className="text-stone-100 font-bold">{t.nav.legal}</span>
                    <button onClick={() => handleNavClick('datenschutz')} className="hover:text-stone-100 transition-colors text-left">{t.nav.privacy}</button>
                    <button onClick={() => handleNavClick('impressum')} className="hover:text-stone-100 transition-colors text-left">{t.nav.imprint}</button>
                </div>
            </div>
        </div>
        <div className="max-w-[1920px] mx-auto mt-24 pt-8 border-t border-stone-900 text-xs text-stone-700 flex justify-between">
            <span>{t.nav.rights}</span>
            {/* Admin Toggle */}
            <span 
                onClick={handleAdminToggle} 
                className={`cursor-pointer transition-colors ${isAdmin ? 'text-stone-100 font-bold' : 'hover:text-stone-500'}`}
                title={isAdmin ? t.nav.logout : t.nav.adminLogin}
            >
                {t.nav.poweredBy}
            </span>
        </div>
      </footer>

      {/* Modals */}
      <AddProjectModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onAdd={handleAddProject} 
      />

      <ProjectDetail 
        project={selectedProject} 
        onUpdate={handleUpdateProject}
        onClose={() => setSelectedProject(null)}
        isAdmin={isAdmin}
      />
      
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleAdminLoginSuccess}
      />

    </div>
  );
};

export default App;