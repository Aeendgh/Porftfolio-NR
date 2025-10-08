
import React from 'react';
import CodeIcon from './icons/CodeIcon';
import ShieldCheckIcon from './icons/ShieldCheckIcon';

const hobbies = [
    { name: "CTF Competitions", icon: <ShieldCheckIcon className="w-10 h-10 text-accent"/> },
    { name: "Open Source", icon: <CodeIcon className="w-10 h-10 text-accent"/> },
    { name: "Photography", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
    { name: "Gaming", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
]

const Hobbies: React.FC = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                    Hobbies & Interests
                </h2>
                <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16">
                    {hobbies.map((hobby, index) => (
                         <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mb-4 border-2 border-gray-700/50">
                                {hobby.icon}
                            </div>
                            <p className="font-medium">{hobby.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
