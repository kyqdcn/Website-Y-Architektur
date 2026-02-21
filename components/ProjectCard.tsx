import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative w-full aspect-square overflow-hidden cursor-pointer bg-stone-800"
      onClick={() => onClick(project)}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-500 group-hover:bg-stone-900/60 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100">
        <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <p className="text-[10px] font-sans tracking-[0.2em] text-stone-300 uppercase mb-2 border-l border-stone-300 pl-2">{project.category}</p>
          <h3 className="text-2xl font-serif text-white font-medium leading-none mb-2">{project.title}</h3>
          <p className="text-sm font-sans text-stone-400">{project.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;