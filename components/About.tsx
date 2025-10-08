
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                    About Me
                </h2>
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg text-primary/80 mb-6">
                        Hello! I'm Najmeh, a seasoned Software Developer with a deep-rooted passion for Cybersecurity. With over a decade of experience in the tech industry, I specialize in crafting robust, scalable, and secure applications. My journey has taken me from building full-stack web solutions to architecting cloud infrastructure and defending digital assets against complex threats.
                    </p>
                    <p className="text-lg text-primary/80 mb-6">
                        I thrive on the challenge of solving complex problems, whether it's optimizing application performance or identifying and mitigating security vulnerabilities. My dual expertise allows me to approach development with a security-first mindset, ensuring that systems are not only functional but also resilient.
                    </p>
                    <p className="text-xl text-accent italic">
                        "I believe the best code is secure code, and the strongest defense is a well-built system."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
