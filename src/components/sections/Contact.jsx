import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const ThreadsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12a7 7 0 1 0-7 7A7 7 0 0 0 19 12z"></path>
        <path d="M19 12v3.5A2.5 2.5 0 0 1 16.5 18a2.5 2.5 0 0 1-2.5-2.5V12"></path>
        <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 5.5 1.5 7.5 4"></path>
    </svg>
);

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a0b2e] to-[#130420] border border-white/10 rounded-3xl p-12 text-center shadow-2xl"
            >
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-10">
                    I am currently available for new opportunities in Data Engineering and Business Intelligence.
                    Feel free to reach out.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Mail size={20} />
                        </div>
                        <h4 className="text-white font-medium mb-1">Email</h4>
                        <a href="mailto:rajishalini1999@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">rajishalini1999@gmail.com</a>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Phone size={20} />
                        </div>
                        <h4 className="text-white font-medium mb-1">Phone</h4>
                        <a href="tel:+916374423740" className="text-sm text-gray-400 hover:text-white transition-colors">+91 637 442 3740</a>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            <MapPin size={20} />
                        </div>
                        <h4 className="text-white font-medium mb-1">Location</h4>
                        <span className="text-sm text-gray-400">Bangalore, India</span>
                    </div>
                </div>

                <div className="flex justify-center gap-8 pt-8 border-t border-white/5 flex-wrap">
                    {[
                        { Icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
                        { Icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
                        { Icon: Twitter, label: "Twitter", href: "#", color: "hover:text-sky-400" },
                        { Icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-500" },
                        { Icon: ThreadsIcon, label: "Threads", href: "#", color: "hover:text-white" }
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            className={`text-gray-500 transition-colors flex items-center gap-2 ${social.color}`}
                        >
                            {social.Icon === ThreadsIcon ? <ThreadsIcon /> : <social.Icon size={20} />}
                            <span className="hidden md:inline">{social.label}</span>
                        </a>
                    ))}
                </div>
            </motion.div>

            <div className="text-center mt-12 text-sm text-gray-600">
                © 2026 Rajeswari Sivakumar. All Rights Reserved.
            </div>
        </section>
    );
};

export default Contact;
