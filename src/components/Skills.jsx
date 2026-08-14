import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Wrench, 
  BookOpen, 
  Coffee, 
  Terminal, 
  FileCode, 
  Server, 
  Database, 
  GitBranch, 
  Cpu, 
  Layers, 
  Table, 
  FileSpreadsheet,
  BarChart3, 
  Brain,
  Boxes,
  Workflow,
  Sparkles,
  CheckCircle,
  Layout,
  Palette
} from 'lucide-react';
import { Github } from './SocialIcons';
import { skillsData } from '../data/portfolioData';

// Icon Map for dynamic lookup
const iconMap = {
  Code2,
  Terminal,
  Coffee,
  FileCode,
  Server,
  Database,
  GitBranch,
  Github,
  Cpu,
  Layers,
  Table,
  FileSpreadsheet,
  BarChart3,
  Brain,
  Boxes,
  Workflow,
  Layout,
  Palette
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technical Stack & <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Comprehensive skill set across programming languages, backend frameworks, data science tools, and core computer science principles.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Category 1: Programming Languages */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Programming Languages</h3>
              <div className="h-px flex-1 bg-slate-800/80 ml-2" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
              {skillsData.programmingLanguages.map((skill, idx) => {
                const IconComponent = iconMap[skill.icon] || Code2;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="glass-card glass-card-hover p-4 rounded-xl flex flex-col items-center justify-center text-center group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/50 group-hover:text-white transition-all shadow-sm mb-2.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {skill.level}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Category 2: Technologies & Tools */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-indigo-950/80 border border-indigo-800/60 text-indigo-400">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Technologies & Tools</h3>
              <div className="h-px flex-1 bg-slate-800/80 ml-2" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
              {skillsData.technologiesTools.map((tech, idx) => {
                const IconComponent = iconMap[tech.icon] || Wrench;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="glass-card glass-card-hover p-4 rounded-xl flex flex-col items-center justify-center text-center group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-indigo-500/50 group-hover:text-white transition-all shadow-sm mb-2.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {tech.level}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Category 3: Core Concepts */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Core Computer Science Concepts</h3>
              <div className="h-px flex-1 bg-slate-800/80 ml-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillsData.coreConcepts.map((concept, idx) => {
                const IconComponent = iconMap[concept.icon] || Boxes;
                return (
                  <motion.div
                    key={concept.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800/50">
                          {concept.badge}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                        {concept.title}
                      </h4>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {concept.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Strong Foundation</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
