import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Code2, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { personalInfo, interests } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Academic Background & <span className="gradient-text">Developer Profile</span>
          </h2>
          <p className="text-slate-400 text-base">
            Software developer pursuing Master of Computer Applications at Lovely Professional University.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Photo & Contact Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col items-center text-center space-y-6"
          >
            <div className="glass-card p-6 rounded-3xl border border-slate-800 w-full space-y-6">
              
              {/* Profile Avatar Frame */}
              <div className="w-36 h-44 mx-auto rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/20 bg-[#070b14] relative">
                <img 
                  src="./ankit_profile.png" 
                  alt="Ankit Raj" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">{personalInfo.title}</p>
                <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {personalInfo.location}
                </p>
              </div>

              {/* Direct Details List */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-left">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 font-mono">Email:</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-semibold text-cyan-300 hover:underline">
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-400 font-mono">Phone:</span>
                  <a href={`tel:${personalInfo.phone}`} className="font-semibold text-indigo-300 hover:underline">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Bio & Education Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio summary */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Who I Am
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a dedicated software developer passionate about building clean, efficient, real-world applications. With strong roots in <strong className="text-white">Java, Spring Boot, React, SQL, and Python</strong>, I focus on creating high-quality full-stack software and data-driven solutions.
              </p>
            </div>

            {/* MCA & BCA Education Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* MCA Card */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase">MCA Degree</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">2025–2027</span>
                </div>
                <h4 className="font-bold text-white text-base">Lovely Professional University</h4>
                <p className="text-xs text-slate-400 mt-1">Phagwara, Punjab</p>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Academic Score:</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">CGPA 8.23</span>
                </div>
              </div>

              {/* BCA Card */}
              <div className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-indigo-400 uppercase">BCA Degree</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">2021–2024</span>
                </div>
                <h4 className="font-bold text-white text-base">M.M.H.A.P.U. University</h4>
                <p className="text-xs text-slate-400 mt-1">Patna, Bihar</p>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Academic Score:</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">78% Marks</span>
                </div>
              </div>

            </div>

            {/* Key Focus Tags */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800">
              <span className="text-xs font-mono text-slate-400 block mb-3">Core Technical Interests:</span>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
