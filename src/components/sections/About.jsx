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
        <section id="about" className="pt-16 pb-8 px-6 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16 text-center"
            >
                About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Right Column (Now Left on Grid, but Image is Ordered Second): Image with Floating Card */}
                {/* Actually, user wants Image on Right Side. So Text should be Order 1, Image Order 2. */}

                {/* Text Content - Order 1 */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 order-1 md:order-1"
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

                    {/* Stats Row */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex justify-between text-center divide-x divide-white/20">
                            <div className="px-2 flex-1">
                                <div className="text-2xl font-bold text-white mb-1">4+</div>
                                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Years Exp</div>
                            </div>
                            <div className="px-2 flex-1">
                                <div className="text-2xl font-bold text-white mb-1">20+</div>
                                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Projects</div>
                            </div>
                            <div className="px-2 flex-1">
                                <div className="text-2xl font-bold text-white mb-1">5+</div>
                                <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Awards</div>
                            </div>
                        </div>
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

                {/* Image Column - Order 2 */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative order-2 md:order-2 flex justify-center"
                >
                    <div className="relative z-10 w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#130420] via-transparent to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
                        <img
                            src={profile2}
                            alt="Rajeswari Sivakumar"
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                        />


                    </div>
                    {/* Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                </motion.div>

            </div>

            {/* Additional Content: Certifications & Achievements */}
            <div className="mt-24 grid md:grid-cols-2 gap-12">
                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="w-8 h-1 bg-gradient-to-r from-primary to-purple-400 rounded-full"></span>
                        Certifications & Courses
                    </h3>
                    <div className="space-y-6 border-l-2 border-white/10 ml-3 pl-8 relative">
                        {[
                            { year: "2019 - 2021", title: "Diploma in Hardware & Security", org: "Dr. N.G.P. Arts And Science College" },
                            { year: "2021", title: "The Fundamentals of Digital Marketing", org: "Google Digital Garage" },
                            { year: "2018 - 2019", title: "Diploma in Yoga For Youth Empowerment", org: "Bharathiar University" },
                            { year: "2017 - 2019", title: "Diploma in Cyber Security", org: "D.R. N.G.P. Arts and Science College" },
                            { year: "2016 - 2017", title: "DCA (Diploma in Computer Application)", org: "CSC Institutions" },
                        ].map((cert, idx) => (
                            <div key={idx} className="relative">
                                <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-[#130420] bg-primary"></span>
                                <span className="text-xs text-primary-glow font-mono mb-1 block">{cert.year}</span>
                                <h4 className="text-white font-semibold">{cert.title}</h4>
                                <p className="text-gray-400 text-sm">{cert.org}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></span>
                        Key Achievements
                    </h3>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-white/20 transition-colors">
                        {[
                            "World Record Holder: 'World's Biggest International Hands-On Security Forensics' (Wikitechy & Microsoft Research Community).",
                            "Record Raisers in 'Largest Yoga Gathering in Different Venue' (APS Academy).",
                            "Assisted World Record 'Largest Yoga Gathering' of 2300 students.",
                            "Certificate of Merit: National Schools Computer Science Competition (NSCSC).",
                            "1st Team Leadership Champion Award in 'MPOWER' Training program (Verticaleye Lifeskill Training Foundation)."
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                                <span className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-blue-400"></span>
                                <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default About;
