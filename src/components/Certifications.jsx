import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Coffee, 
  Code2, 
  FileCode, 
  Calendar, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const iconMap = {
  Coffee,
  Code2,
  FileCode
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-slate-950/40 border-y border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05. CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Verified programming credentials validating expertise in core languages and frameworks.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => {
            const IconComponent = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl border border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Certificate Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500" />

                <div>
                  {/* Top Bar: Icon & Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-400 mt-1 mb-4">
                    <span className="font-semibold text-slate-200">{cert.issuer}</span>
                    <span className="flex items-center gap-1 font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5" /> {cert.date}
                    </span>
                  </div>

                  {/* Key Skills Covered */}
                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                      Competencies Certified:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-xs bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-cyan-400">Status: Complete</span>
                  <span className="text-slate-500 text-[11px]">Credential Verified</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
