import React from 'react';
import { 
  Mail, 
  ArrowUp, 
  Code2, 
  Heart,
  Terminal
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
                <div className="w-full h-full bg-[#080c14] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
                  AR
                </div>
              </div>
              <span className="text-lg font-extrabold text-white">Ankit Raj</span>
            </div>
            
            <p className="text-slate-400 font-mono text-xs">
              MCA Student | Software Developer | Full-Stack Engineer
            </p>
            <p className="text-slate-500 text-xs">
              Muzaffarpur, Bihar, India • Lovely Professional University
            </p>
          </div>

          {/* Nav Links & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-medium">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-all shadow-md group focus:outline-none"
            aria-label="Scroll to top"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Ankit Raj. All rights reserved.</p>
          
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
