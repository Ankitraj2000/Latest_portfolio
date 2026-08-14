import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  GitCommit, 
  GitBranch, 
  FolderGit2, 
  Code2, 
  CheckCircle2,
  Terminal,
  Activity,
  Star
} from 'lucide-react';
import { Github } from './SocialIcons';
import { githubActivity, personalInfo } from '../data/portfolioData';

// Simulated realistic activity representation for the past weeks
const generateContributionGrid = () => {
  const grid = [];
  const levels = [0, 1, 2, 3, 4];
  // 52 weeks x 7 days representation
  for (let i = 0; i < 140; i++) {
    // Generate deterministic clean patterns (consistent activity)
    const level = (i % 7 === 0 || i % 11 === 0 || i % 13 === 0) ? (i % 4) + 1 : (i % 5 === 0 ? 1 : 0);
    grid.push(level);
  }
  return grid;
};

const getCellBg = (level) => {
  switch (level) {
    case 1: return 'bg-cyan-950/70 border-cyan-900/60';
    case 2: return 'bg-cyan-800/80 border-cyan-700/60';
    case 3: return 'bg-cyan-600 border-cyan-500';
    case 4: return 'bg-cyan-400 border-cyan-300 shadow-sm shadow-cyan-400/50';
    default: return 'bg-slate-900/60 border-slate-800/80';
  }
};

export default function GithubActivity() {
  const contributions = generateContributionGrid();

  return (
    <section className="py-20 relative bg-slate-950/40 border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-xs font-mono text-cyan-300 mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>07. DEVELOPER ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            GitHub & <span className="gradient-text">Open Source Repositories</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Active code repositories, project source code, and developer contributions on GitHub.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Main GitHub Activity Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            
            {/* Header with profile button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    @{githubActivity.username}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Software Development Repositories & Code Activity
                  </p>
                </div>
              </div>

              <a
                href={githubActivity.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-md group"
              >
                <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300" />
              </a>

            </div>

            {/* Simulated Contribution Graph Visualizer */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  Development Activity Consistency
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:inline-block">
                  Less <span className="inline-block w-2.5 h-2.5 rounded-sm bg-slate-900 mx-0.5"></span>
                  <span className="inline-block w-2.5 h-2.5 rounded-sm bg-cyan-950 mx-0.5"></span>
                  <span className="inline-block w-2.5 h-2.5 rounded-sm bg-cyan-700 mx-0.5"></span>
                  <span className="inline-block w-2.5 h-2.5 rounded-sm bg-cyan-400 mx-0.5"></span> More
                </span>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 overflow-x-auto">
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[600px] justify-between">
                  {contributions.map((level, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm border ${getCellBg(level)} transition-colors`}
                      title={`Activity block ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Language & Technology Badges */}
            <div className="pt-2">
              <span className="text-xs font-mono text-slate-400 block mb-3">Primary Languages & Technologies:</span>
              <div className="flex flex-wrap gap-2">
                {githubActivity.topLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-200 border border-slate-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Key Repositories Direct Access Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {githubActivity.recentRepositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold text-cyan-300 group-hover:text-white transition-colors truncate">
                      {repo.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 shrink-0" />
                  </div>
                  
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                    {repo.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-slate-300">{repo.lang}</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <FolderGit2 className="w-3.5 h-3.5" /> Public Repo
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
