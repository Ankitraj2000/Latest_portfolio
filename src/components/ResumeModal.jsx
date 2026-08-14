import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileText, 
  Download, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, skillsData, projectsData, educationTimeline } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const triggerDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 }
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#090d16] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header Bar */}
          <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-cyan-400" />
              <div>
                <h3 className="text-base font-bold text-white">Ankit Raj — Resume Preview</h3>
                <p className="text-xs text-slate-400 font-mono">Software Developer Curriculum Vitae</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="./resume.pdf"
                download="Ankit_Raj_Resume.pdf"
                onClick={triggerDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Canvas Frame */}
          <div className="p-4 sm:p-6 bg-[#0d121f] flex flex-col items-center justify-center">
            <iframe 
              src="./resume.pdf#toolbar=0" 
              title="Ankit Raj Resume PDF"
              className="w-full h-[70vh] rounded-xl border border-slate-800 bg-white"
            />
          </div>

          {/* Modal Bottom Actions */}
          <div className="bg-slate-900/90 px-6 py-4 border-t border-slate-800 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close Preview
            </button>
            <a
              href="./resume.pdf"
              download="Ankit_Raj_Resume.pdf"
              onClick={triggerDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
