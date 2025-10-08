
import React from 'react';
import type { ExperienceItem } from '../types';
import BriefcaseIcon from './icons/BriefcaseIcon';

const experienceData: ExperienceItem[] = [
    {
        role: "Lead Security Engineer",
        company: "CyberSec Solutions",
        duration: "2020 - Present",
        achievements: [
            "Led a team of 5 security engineers in architecting and implementing a company-wide security overhaul.",
            "Developed a proprietary threat detection system using machine learning, reducing false positives by 40%.",
            "Performed regular penetration testing and vulnerability assessments on critical infrastructure.",
            "Authored security policies and incident response plans adopted across the organization."
        ]
    },
    {
        role: "Senior Full Stack Developer",
        company: "Innovatech Inc.",
        duration: "2017 - 2020",
        achievements: [
            "Engineered and maintained scalable microservices for a SaaS platform with over 1 million users.",
            "Integrated security best practices (OWASP Top 10) into the SDLC, reducing critical vulnerabilities by 90%.",
            "Mentored junior developers on secure coding practices and modern JavaScript frameworks (React, Node.js).",
            "Optimized database queries and API response times, improving overall application performance by 25%."
        ]
    },
    {
        role: "Software Engineer",
        company: "Data Systems Corp.",
        duration: "2014 - 2017",
        achievements: [
            "Developed features for a large-scale data processing pipeline using Python and C++.",
            "Contributed to the migration of legacy systems to a cloud-based architecture on AWS.",
            "Wrote unit and integration tests, increasing code coverage to over 95% for key modules."
        ]
    }
    ,
    {
        role: "Software Engineer",
        company: "Data Systems Corp.",
        duration: "2014 - 2017",
        achievements: [
            "Developed features for a large-scale data processing pipeline using Python and C++.",
            "Contributed to the migration of legacy systems to a cloud-based architecture on AWS.",
            "Wrote unit and integration tests, increasing code coverage to over 95% for key modules."
        ]
    }
];


const Experience: React.FC = () => {
    return (
        <section className="py-20 bg-card/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                    Work Experience
                </h2>
                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700/50"></div>
                    {experienceData.map((item, index) => (
                        <div key={index} className="mb-12 flex items-center w-full">
                            <div className="w-1/2 pr-8 text-right">
                                {(index % 2 === 0) && (
                                    <div className="bg-card p-6 rounded-lg border border-gray-700/50 shadow-lg">
                                        <h3 className="text-xl font-bold text-accent">{item.role}</h3>
                                        <p className="font-medium">{item.company}</p>
                                        <p className="text-sm text-primary/60 mb-3">{item.duration}</p>
                                        <ul className="text-left list-disc list-inside text-primary/80 space-y-1">
                                            {item.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="w-1/2 pl-8 text-left">
                                {(index % 2 !== 0) && (
                                     <div className="bg-card p-6 rounded-lg border border-gray-700/50 shadow-lg">
                                        <h3 className="text-xl font-bold text-accent">{item.role}</h3>
                                        <p className="font-medium">{item.company}</p>
                                        <p className="text-sm text-primary/60 mb-3">{item.duration}</p>
                                        <ul className="list-disc list-inside text-primary/80 space-y-1">
                                            {item.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                             <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                                <BriefcaseIcon className="w-4 h-4 text-background" />
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Experience;
