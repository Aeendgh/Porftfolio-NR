
import React from 'react';
import type { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: ["Python", "JavaScript", "TypeScript", "Go", "C++", "SQL", "Bash"]
    },
    {
        title: "Cybersecurity Tools",
        skills: ["Wireshark", "Burp Suite", "Metasploit", "Nmap", "Nessus", "John the Ripper", "Ghidra"]
    },
    {
        title: "Frameworks & Platforms",
        skills: ["React", "Node.js", "Express", "Django", "Docker", "Kubernetes", "AWS", "GCP"]
    },
    {
        title: "Concepts & Methodologies",
        skills: ["DevSecOps", "CI/CD", "Penetration Testing", "Threat Modeling", "Incident Response", "Cryptography", "Agile/Scrum"]
    }
];

const Skills: React.FC = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((category, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg border border-gray-700/50">
                            <h3 className="text-xl font-bold text-accent mb-4">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="bg-gray-700 text-primary text-sm font-medium px-3 py-1 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
