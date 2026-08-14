import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Sparkles,
  ShieldCheck,
  Star
} from 'lucide-react';
import { Github } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectMockup from './ProjectMockup';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-slate-950/50 border-t border-slate-900">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Practical Applications & <span className="gradient-text">Engineering Work</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world projects showcasing full-stack backend APIs, machine learning data pipelines, and core Java object-oriented systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all shadow-xl shadow-black/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side (or Alternate): Project Info & Key Features */}
                <div className={`lg:col-span-7 flex flex-col justify-between space-y-5 ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  
                  {/* Badge & Timeline */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900 border ${
                      project.id === 'expense-tracker' 
                        ? 'border-cyan-500/40 text-cyan-300' 
                        : project.id === 'traffic-accident-analysis'
                        ? 'border-emerald-500/40 text-emerald-300'
                        : 'border-amber-500/40 text-amber-300'
                    }`}>
                      {project.badge}
                    </span>

                    <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {project.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-white hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features List */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                      Key Highlights & Technical Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-md group"
                    >
                      <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-300 ml-1" />
                    </a>

                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" /> Source Code Verified
                    </span>
                  </div>

                </div>

                {/* Right Side: Visual Mockup */}
                <div className={`lg:col-span-5 ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <ProjectMockup type={project.mockType} />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
