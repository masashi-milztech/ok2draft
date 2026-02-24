import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: '新規事業支援',
    category: 'Consulting',
    description: 'Market entry strategy for a leading apparel brand.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    tags: []
  },
  {
    id: '2',
    title: 'リブランディング',
    category: 'Planning',
    description: 'Rebranding campaign for a Shibuya-based lifestyle store.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    tags: []
  },
  {
    id: '3',
    title: 'Connecting',
    category: 'Connecting',
    description: 'Connecting artists with tech firms for a unique exhibition.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    tags: []
  },
  {
    id: '4',
    title: '企業再生',
    category: 'Consulting',
    description: 'Optimizing logistics for sustainability goals.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    tags: []
  },
  {
    id: '5',
    title: 'Consulting',
    category: 'Planning',
    description: 'Concept and execution of a high-end pop-up.',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    tags: []
  },
  {
    id: '6',
    title: 'Planning',
    category: 'Connecting',
    description: 'Matching investors with promising early-stage startups.',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    tags: []
  }
];

export const ProjectGrid: React.FC = () => {
  const filteredProjects = projects;

  return (
    <section id="works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
             <h2 className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-2 uppercase">Service</h2>
             <h3 className="text-3xl font-bold text-ok-black">Service</h3>
          </div>
          

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="flex flex-col items-start">
                <h4 className="text-lg font-bold text-ok-black group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-gray-400 uppercase tracking-wide border border-gray-100 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
