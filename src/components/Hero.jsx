import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Send, 
  FolderGit2, 
  MapPin, 
  GraduationCap,
  Sparkles,
  ArrowRight,
  Code,
  CheckCircle2,
  Camera
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('./ankit_profile.png');

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Info & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-300 w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Developer Roles & Internships</span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <span className="text-slate-400 font-mono text-sm font-medium">
                Hello, I am 👋
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mt-1 mb-2">
                {personalInfo.name}
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold gradient-text tracking-tight">
                {personalInfo.title}
              </h2>
            </div>

            {/* Quick Education & Location Tag */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {personalInfo.location}
              </span>
              
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-cyan-300 font-medium">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                MCA @ LPU (CGPA 8.23)
              </span>
            </div>

            {/* Clean Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.shortIntro}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <a
                href="./resume.pdf"
                download="Ankit_Raj_Resume.pdf"
                onClick={triggerConfetti}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 transition-all hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/60">
              <span className="text-slate-500 uppercase tracking-wider">Socials:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-indigo-400 transition-colors bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column - Profile Photo Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-card border border-slate-800 p-4 space-y-4 shadow-2xl">
                
                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#070b14] border border-slate-800 flex items-center justify-center">
                  <img 
                    src={imgSrc} 
                    alt="Ankit Raj Profile" 
                    onError={() => setImgSrc('/favicon.svg')}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Active Developer Badge */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 flex items-center gap-2 shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Ankit Raj</span>
                  </div>
                </div>

                {/* Tech Pills Summary */}
                <div className="flex flex-wrap justify-between items-center px-1 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                      Java
                    </span>
                    <span className="px-2.5 py-1 rounded-md font-mono bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                      Spring Boot
                    </span>
                    <span className="px-2.5 py-1 rounded-md font-mono bg-slate-900 text-slate-300 border border-slate-800">
                      React
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">Full-Stack</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
