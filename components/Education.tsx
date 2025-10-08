
import React from 'react';
import type { EducationItem, CertificationItem } from '../types';
import ShieldCheckIcon from './icons/ShieldCheckIcon';

const educationData: EducationItem[] = [
    {
        degree: "Master of Science in Cybersecurity",
        institution: "Georgia Institute of Technology",
        years: "2016 - 2018",
        details: "Focused on network security, cryptography, and secure software development."
    },
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        years: "2010 - 2014",
        details: "Graduated with honors, specializing in algorithms and data structures."
    },
];

const certificationsData: CertificationItem[] = [
    { name: "CISSP", issuer: "(ISC)²", year: "2021" },
    { name: "OSCP", issuer: "Offensive Security", year: "2020" },
    { name: "CEH", issuer: "EC-Council", year: "2019" },
    { name: "ASP.Net ", issuer: "microsoft asp.net programing", year: "2012" },
    { name: "CCNP", issuer: "Cisco certificate, Network professional", year: "2012" },
];

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
    <div className="bg-card p-6 rounded-lg border border-gray-700/50">
        <h3 className="text-xl font-bold text-accent">{item.degree}</h3>
        <p className="text-primary font-medium">{item.institution}</p>
        <p className="text-sm text-primary/60 mb-2">{item.years}</p>
        <p className="text-primary/80">{item.details}</p>
    </div>
);

const CertificationPill: React.FC<{ item: CertificationItem }> = ({ item }) => (
     <div className="flex items-center bg-card p-3 rounded-lg border border-gray-700/50">
        <ShieldCheckIcon className="w-6 h-6 text-accent mr-3" />
        <div>
            <p className="font-bold text-primary">{item.name}</p>
            <p className="text-sm text-primary/60">{item.issuer} - {item.year}</p>
        </div>
    </div>
);


const Education: React.FC = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                    Education & Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {educationData.map((item, index) => (
                        <EducationCard key={index} item={item} />
                    ))}
                </div>
                <h3 className="text-2xl font-heading font-bold text-center mb-8">
                    Industry Certifications
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {certificationsData.map((item, index) => (
                        <CertificationPill key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
