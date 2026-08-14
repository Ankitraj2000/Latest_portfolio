import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Zap, 
  Calendar, 
  Award, 
  Sparkles, 
  CheckCircle2,
  Medal,
  Flame
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Trophy,
  Zap,
  Medal
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-800/40 text-xs font-mono text-amber-300 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>06. ACHIEVEMENTS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Competitive Coding & <span className="gradient-text">Hackathons</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Recognitions earned in competitive coding challenges and team hackathons.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="glass-card glass-card-hover rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Bar: Icon & Award Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/10">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-800/60 flex items-center gap-1.5 shadow-sm">
                      <Medal className="w-3.5 h-3.5" />
                      {item.award}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 mt-2 mb-4">
                    <span className="font-semibold text-slate-200">{item.organization}</span>
                    <span className="flex items-center gap-1 font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5" /> {item.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer category badge */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400" /> Event Category
                  </span>
                  <span className="font-mono text-cyan-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    {item.type}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
