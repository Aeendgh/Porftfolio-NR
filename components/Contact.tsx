
import React, { useState } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        // For this demo, we'll just show a success message.
        if (formData.name && formData.email && formData.message) {
            setStatus('Thank you for your message!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 5000);
        } else {
            setStatus('Please fill out all fields.');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <section className="py-20 bg-card/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-heading font-bold text-center mb-12">
                    Get In Touch
                </h2>
                <div className="max-w-xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-primary/80">Name</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-card border border-gray-700 rounded-md py-2 px-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary/80">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-card border border-gray-700 rounded-md py-2 px-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-primary/80">Message</label>
                            <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-card border border-gray-700 rounded-md py-2 px-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-accent text-background font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition duration-300">
                                Send Message
                            </button>
                        </div>
                        {status && <p className="text-center mt-4 text-accent">{status}</p>}
                    </form>
                    <div className="mt-12 text-center">
                        <p className="mb-4">Or connect with me on social media:</p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-primary hover:text-accent transition-colors"><LinkedInIcon className="w-8 h-8"/></a>
                            <a href="#" className="text-primary hover:text-accent transition-colors"><GitHubIcon className="w-8 h-8"/></a>
                            <a href="#" className="text-primary hover:text-accent transition-colors"><TwitterIcon className="w-8 h-8"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
