
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-card py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary/60">
                <p>&copy; {currentYear} Najmeh Doe. All Rights Reserved.</p>
                <p>Built with React & Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;
