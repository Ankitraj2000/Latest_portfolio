import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  School, 
  MapPin, 
  Calendar, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

const iconMap = {
  GraduationCap,
  BookOpen,
  Award,
  School
};

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>04. EDUCATION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Academic <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured educational journey in computer applications and science foundations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 -translate-x-1/2 opacity-30 hidden sm:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 opacity-30 sm:hidden" />

          <div className="space-y-10">
            {educationTimeline.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || GraduationCap;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  
                  {/* Timeline Dot Icon */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 z-10 shadow-lg shadow-cyan-500/20">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Card Content (Swaps left & right on desktop) */}
                  <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:ml-auto sm:pl-12 sm:text-left'
                  }`}>
                    
                    <div className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-3">
                      
                      {/* Year & Score Pills */}
                      <div className={`flex flex-wrap items-center gap-2 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-800/50">
                          {item.years}
                        </span>

                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-800/50">
                          {item.score}
                        </span>
                      </div>

                      {/* Institution & Degree */}
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {item.institution}
                        </h3>
                        <h4 className="text-sm font-semibold text-cyan-400 mt-1">
                          {item.degree}
                        </h4>
                      </div>

                      {/* Location & Status */}
                      <div className={`flex items-center gap-3 text-xs text-slate-400 ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-300 font-mono">{item.status}</span>
                      </div>

                      {/* Highlights */}
                      <div className="pt-3 border-t border-slate-800/80">
                        <div className={`flex flex-wrap gap-1.5 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}>
                          {item.highlights.map((hl) => (
                            <span
                              key={hl}
                              className="px-2 py-0.5 rounded text-[11px] bg-slate-900 text-slate-300 border border-slate-800"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
