import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const jobs = [
        {
            company: "Affirm Data Solutions",
            role: "Senior Process Specialist (Data Analysis)",
            location: "Bangalore",
            period: "Feb 2022 – Present",
            bullets: [
                "Led data analysis initiatives for US mortgage clients (AFRM).",
                "Developed and maintained self-service dashboards using Tableau and Power BI.",
                "Designed ETL architectures using Informatica to optimize data warehousing.",
                "Executed complex SQL queries for ad-hoc reporting and data validation."
            ]
        },
        {
            company: "Zolostays Property Solutions",
            role: "Process BDM (Business Analyst)",
            location: "Bangalore",
            period: "Jan 2021 – Feb 2022",
            bullets: [
                "Conducted business process analysis to improve operational efficiency.",
                "collaborated with stakeholders to define requirements and deliver data-driven solutions.",
                "Generated monthly performance reports to support strategic decision making."
            ]
        },
        {
            company: "E-Infotech",
            role: "Process Executive (Trainer)",
            location: "Coimbatore",
            period: "Feb 2020 - Jan 2021",
            bullets: [
                "Facilitated training sessions for new hires on process workflows.",
                "Managed process documentation and quality assurance metrics."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
            <div className="mb-16 border-b border-white/10 pb-8">
                <h2 className="text-4xl font-bold text-white tracking-tight">Professional Experience</h2>
                <p className="text-gray-400 mt-2">Detailed career progression and key achievements.</p>
            </div>

            <div className="space-y-12">
                {jobs.map((job, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-8 md:pl-0"
                    >
                        <div className="md:grid md:grid-cols-12 gap-8">
                            {/* Timeline / Date */}
                            <div className="md:col-span-3 text-gray-500 text-sm font-medium pt-1 md:text-right">
                                {job.period}
                                <div className="text-xs mt-1 opacity-70">{job.location}</div>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-9 relative">
                                {/* Decorative Dot */}
                                <div className="absolute -left-[43px] top-2 w-3 h-3 rounded-full bg-primary border-4 border-[#130420] md:block hidden"></div>
                                <div className="absolute -left-[38px] top-6 bottom-[-48px] w-px bg-white/10 md:block hidden"></div>

                                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                <div className="text-primary-glow font-medium mb-4">{job.company}</div>

                                <ul className="space-y-2">
                                    {job.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="text-gray-300 text-md leading-relaxed flex items-start">
                                            <span className="text-primary mr-2 mt-1.5 text-xs">●</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
