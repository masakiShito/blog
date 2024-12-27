import React from 'react';
import { Project } from '../../types';

const PortfolioSection: React.FC = () => {
  const projects: Project[] = [
    { title: 'Project 1', category: 'Web Design' },
    { title: 'Project 2', category: 'Development' },
    { title: 'Project 3', category: 'App' },
    { title: 'Project 4', category: 'Web Design' },
    { title: 'Project 5', category: 'Development' },
    { title: 'Project 6', category: 'App' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.imageUrl ?? `/api/placeholder/400/300`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;