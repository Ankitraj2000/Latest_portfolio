import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    // Trigger celebration confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });

    setFormStatus('success');
    // Reset form after short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>08. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            I am currently open to software engineering internships, entry-level developer positions, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Feel free to reach out directly via email, phone, or LinkedIn. I usually respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Email */}
                <div className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-mono text-slate-500">EMAIL</span>
                      <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors truncate">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-800/50">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-mono text-slate-500">PHONE</span>
                      <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-slate-200 hover:text-indigo-300 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-purple-950/80 text-purple-400 border border-purple-800/50">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-slate-500">LOCATION</span>
                    <span className="text-sm font-semibold text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Social Profiles:</span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-xs font-semibold text-slate-200 hover:text-indigo-300 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Fill out the form below to initiate communication or discuss project proposals.
                </p>
              </div>

              {/* Frontend Form Notice */}
              <div className="mb-6 p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-start gap-2.5 text-xs text-cyan-300">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Frontend Demo Notice:</strong> Form validates inputs and simulates real-time response. For urgent queries, please email <a href={`mailto:${personalInfo.email}`} className="underline font-semibold">{personalInfo.email}</a> directly.
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Software Internship Opportunity / Web Project"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all resize-none"
                  />
                </div>

                {/* Form Feedback Alerts */}
                {formStatus === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Please fill in your Name, Email, and Message before submitting.</span>
                  </div>
                )}

                {formStatus === 'success' && (
                  <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-xs text-emerald-300 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Thank you, {formData.name || 'friend'}! Your message preview has been received.</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl text-sm font-bold text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
