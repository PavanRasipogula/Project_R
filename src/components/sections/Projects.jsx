import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Internal Debt Statistics Analysis",
            client: "Guardian Asset Management (NY)",
            role: "Data Analyst",
            budget: "$75,000 USD",
            desc: "Analyzed unstructured debt statistics to discover new insights. Collaborated with stakeholders to define reporting requirements.",
            tech: ["SQL", "DataViz", "Unstructured Data"],
            outcome: "Delivered actionable dashboards for credit risk assessment."
        },
        {
            title: "ETL Architecture Implementation",
            client: "US Bank",
            role: "ETL Developer",
            budget: "Enterprise",
            desc: "Designed and implemented robust ETL pipelines using Informatica PowerCenter. Loaded data from flat files/CSV/RDBMS into Data Warehouse.",
            tech: ["Informatica", "Oracle", "Workflow Manager"],
            outcome: "Improved data load efficiency and data quality compliance."
        },
        {
            title: "Android Medicare Alert System",
            client: "Apollo Hospital / Anna University",
            role: "Technical Lead",
            budget: "₹2 Crore (Gov Grant)",
            desc: "Developed a Geo-fencing based emergency alert system. Used LBS to trigger alerts when patients exited safe zones.",
            tech: ["Android", "Geo-Fencing", "IoT"],
            outcome: "Successful prototype deployment for emergency response."
        },
        {
            title: "Executive Dashboard Suite",
            client: "Various US Clients",
            role: "BI Developer",
            budget: "Ongoing",
            desc: "Created 4 comprehensive self-service dashboards. Enabled senior management to query data using natural language (Ask Data).",
            tech: ["Tableau", "Power BI", "Data Modeling"],
            outcome: "Enhanced executive decision-making speed by 40%."
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto bg-white/2 rounded-3xl my-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                <div>
                    <h2 className="text-4xl font-bold text-white tracking-tight">Key Projects</h2>
                    <p className="text-gray-400 mt-2">Selected case studies and implementations.</p>
                </div>
                <button className="text-sm text-primary-glow font-medium mt-4 md:mt-0 hover:text-white transition-colors">
                    View Full Portfolio &rarr;
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-[#1a0b2e] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-primary-glow transition-colors">{project.title}</h3>
                                <div className="text-sm text-gray-500 mt-1">{project.client}</div>
                            </div>
                            <ArrowUpRight className="text-gray-600 group-hover:text-primary transition-colors" size={24} />
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            {project.desc}
                        </p>

                        <div className="border-t border-white/5 pt-4 mb-6">
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                    <span className="text-gray-500 block">Role</span>
                                    <span className="text-white font-medium">{project.role}</span>
                                </div>
                                <div>
                                    <span className="text-gray-500 block">Budget/Scale</span>
                                    <span className="text-white font-medium">{project.budget}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
