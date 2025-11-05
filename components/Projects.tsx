
import React, { useState } from 'react';
import type { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const projectsData: Project[] = [
    {
        name: "VulnScanner",
        description: "A network vulnerability scanner with a web-based dashboard for visualizing scan results and generating reports.",
        techStack: ["Python", "Django", "Celery", "React", "Nmap"],
        image: "https://picsum.photos/seed/project1/500/300",
        githubLink: "#",
        liveLink: "#",
        category: "Cybersecurity"
    },
    {
        name: "SecureAuth API",
        description: "A JWT-based authentication and authorization service with role-based access control and rate limiting.",
        techStack: ["Go", "Gin", "PostgreSQL", "Docker", "Redis"],
        image: "https://picsum.photos/seed/project2/500/300",
        githubLink: "#",
        category: "Tool"
    },
    {
        name: "E-commerce Platform",
        description: "A full-stack e-commerce website built with security best practices, including secure payment processing.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
        image: "https://picsum.photos/seed/project3/500/300",
        githubLink: "#",
        liveLink: "#",
        category: "Web App"
    },
    {
        name: "Log Analysis Script",
        description: "A Python script to parse and analyze web server logs for suspicious activity and potential security threats.",
        techStack: ["Python", "Regex", "Pandas"],
        image: "https://picsum.photos/seed/project4/500/300",
        githubLink: "#",
        category: "Script"
    },
    {
        name: "SAP HANA Database Presentation",
        description: "An explanatory blog about sap hana in-memory data base",
        techStack: ["SAP", "HANA", "Database"],
        image: "https://cloudfoundation.com/blog/wp-content/uploads/2023/03/SAP-HANA-is-versatile..png",
        githubLink: "./hana-present.html",
        category: "Presentation"
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-card rounded-lg overflow-hidden border border-gray-700/50 group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-accent mb-2">{project.name}</h3>
            <p className="text-primary/80 mb-4 h-20">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                     <span key={i} className="bg-gray-700 text-primary text-xs font-medium px-2 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex items-center justify-end space-x-4">
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-300">
                        <GitHubIcon className="w-6 h-6" />
                    </a>
                )}
                 {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors duration-300">
                        <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                )}
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];

    const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);
    
    return (
        <section className="py-20 bg-card/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-heading font-bold text-center mb-4">
                    My Work / Projects
                </h2>
                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    {categories.map(category => (
                        <button 
                            key={category} 
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                                filter === category 
                                    ? 'bg-accent text-background' 
                                    : 'bg-card hover:bg-accent/80 hover:text-background'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
