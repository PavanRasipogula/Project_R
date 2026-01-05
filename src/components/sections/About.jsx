import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profile1 from "../../assets/Profiles/profile1.jpeg";
import profile2 from "../../assets/Profiles/profile2.jpeg";
import profile3 from "../../assets/Profiles/profile3.jpeg";
import profile4 from "../../assets/Profiles/profile4.jpeg";

const About = () => {
    const images = [profile1, profile2, profile3, profile4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16 text-center"
            >
                About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left Column: Image with Floating Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative order-2 md:order-1 flex justify-center"
                >
                    <div className="relative z-10 w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#130420] via-transparent to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
                        <img
                            src={profile4}
                            alt="Rajeswari Sivakumar"
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                        />


                    </div>
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                </motion.div>

                {/* Right Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 order-1 md:order-2"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-glow text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Available for new projects
                    </div>

                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Complex Data</span> into Strategic Insights.
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            With over <strong>4+ years</strong> of experience in the US mortgage sector at AFRM, I specialize in designing robust data architectures and optimizing ETL processes to drive business growth.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My focus is on enabling self-service analytics that empower senior management to make faster, smarter decisions through intuitive Power BI dashboards and automated Informatica workflows.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="pt-4">
                        <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-widest mb-4">Core Competencies</h4>
                        <div className="flex flex-wrap gap-2">
                            {['SQL', 'Tableau', 'Power BI', 'Python', 'HTML', 'CSS', 'Excel', 'Informatica', 'Excel VBA', 'Looker', 'Snowflake', 'HR Analytics'].map((tech) => (
                                <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#1a0b2e] border border-white/10 text-gray-300 text-sm hover:border-primary/50 hover:bg-white/5 transition-all cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
