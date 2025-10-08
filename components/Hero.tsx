
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-background bg-[length:200%_200%] animate-gradient-bg z-0"></div>
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="flex flex-col items-center">
                    <img
                        src="https://picsum.photos/seed/portfoliodev/150/150"
                        alt="Aeen Dehghan"
                        className="w-36 h-36 rounded-full mb-6 border-4 border-accent shadow-lg"
                    />
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                        Najmeh Rezaei
                    </h1>
                    <p className="text-lg md:text-2xl text-accent font-medium mb-6">
                        Senior Software Developer & Cybersecurity Specialist
                    </p>
                    <p className="max-w-3xl text-primary/80 mb-8">
                        Building Secure & Scalable Digital Systems
                    </p>
                    <div className="flex space-x-4">
                        <a href="#projects" className="bg-accent text-background font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition duration-300">
                            View My Work
                        </a>
                        <a href="#contact" className="border-2 border-accent text-accent font-bold py-3 px-6 rounded-lg hover:bg-accent hover:text-background transition duration-300">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
