import React from 'react';
import { 
  CreditCard, 
  TrendingUp, 
  TrendingDown, 
  PieChart, 
  Activity, 
  ShieldCheck, 
  Database, 
  Server, 
  BarChart2, 
  DollarSign, 
  AlertTriangle,
  MapPin,
  Lock,
  ArrowUpRight,
  Layers,
  Cpu
} from 'lucide-react';

export default function ProjectMockup({ type }) {
  if (type === 'expense') {
    return (
      <div className="w-full bg-[#080d18] rounded-xl border border-slate-800 overflow-hidden text-xs font-sans shadow-inner select-none">
        
        {/* Web App Top Navbar */}
        <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-[11px] text-cyan-400 font-semibold ml-2">ExpenseTracker App</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
              <ShieldCheck className="w-3 h-3" /> JWT Auth Verified
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Vercel Live</span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="p-4 space-y-3">
          
          {/* Summary Metric Cards */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400">Total Income</span>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                <TrendingUp className="w-3.5 h-3.5" /> ₹68,500
              </div>
            </div>
            
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400">Total Expenses</span>
              <div className="text-sm font-bold text-rose-400 flex items-center gap-1 mt-0.5">
                <TrendingDown className="w-3.5 h-3.5" /> ₹24,120
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400">Net Savings</span>
              <div className="text-sm font-bold text-cyan-400 flex items-center gap-1 mt-0.5">
                <DollarSign className="w-3.5 h-3.5" /> ₹44,380
              </div>
            </div>
          </div>

          {/* Visual Expense Bar Chart Simulator */}
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-semibold text-slate-200">Monthly Expense Breakdown</span>
              <span className="text-[10px] text-slate-400 font-mono">SQL Database Sync</span>
            </div>
            
            <div className="flex items-end gap-2 h-16 pt-2 px-1">
              <div className="flex-1 bg-cyan-500/30 hover:bg-cyan-500/50 rounded-t h-[40%] relative group">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-cyan-300 opacity-0 group-hover:opacity-100">Nov</span>
              </div>
              <div className="flex-1 bg-indigo-500/30 hover:bg-indigo-500/50 rounded-t h-[65%] relative group">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-indigo-300 opacity-0 group-hover:opacity-100">Dec</span>
              </div>
              <div className="flex-1 bg-cyan-500/40 hover:bg-cyan-500/60 rounded-t h-[50%] relative group">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-cyan-300 opacity-0 group-hover:opacity-100">Jan</span>
              </div>
              <div className="flex-1 bg-cyan-500/80 hover:bg-cyan-400 rounded-t h-[85%] relative group">
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] text-cyan-300 font-bold">Feb</span>
              </div>
            </div>

            <div className="flex justify-between text-[9px] text-slate-500 mt-1 font-mono">
              <span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span>
            </div>
          </div>

          {/* Transaction Table Preview */}
          <div className="rounded-lg bg-slate-900/80 border border-slate-800 overflow-hidden text-[11px]">
            <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Recent Transactions (Spring Boot REST API)</span>
              <span className="text-emerald-400">HTTP 200 OK</span>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="px-3 py-1.5 flex items-center justify-between">
                <span className="text-slate-200">Software Subscription</span>
                <span className="text-slate-400">Utilities</span>
                <span className="font-mono text-rose-400">-₹1,499</span>
              </div>
              <div className="px-3 py-1.5 flex items-center justify-between">
                <span className="text-slate-200">Stipend Credit</span>
                <span className="text-slate-400">Income</span>
                <span className="font-mono text-emerald-400">+₹15,000</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }

  if (type === 'traffic') {
    return (
      <div className="w-full bg-[#080d18] rounded-xl border border-slate-800 overflow-hidden text-xs font-sans shadow-inner select-none">
        
        {/* ML App Header */}
        <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-[11px] text-emerald-400 font-semibold ml-2">AccidentAnalytics ML</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/60">
              Scikit-learn Model
            </span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          
          {/* EDA Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400">Data Points Cleaned</span>
              <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5 mt-0.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" /> 142,500 Rows
              </div>
            </div>
            
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400">Model Accuracy</span>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <BarChart2 className="w-3.5 h-3.5 text-cyan-400" /> 89.4% ROC-AUC
              </div>
            </div>
          </div>

          {/* Visual Heatmap / Pattern Graph */}
          <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="font-semibold text-slate-200">Accident Hotspot Density (Matplotlib / Seaborn)</span>
              <span className="text-[10px] text-amber-300 font-mono">High Risk Peak: 18:00 - 21:00</span>
            </div>

            {/* Scatter plot simulation */}
            <div className="h-20 bg-slate-950/80 rounded border border-slate-800 p-2 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-amber-500/20 to-rose-500/30" />
              
              {/* Density dots */}
              <div className="relative w-full h-full">
                <div className="absolute top-2 left-6 w-2 h-2 rounded-full bg-emerald-400/80 animate-ping"></div>
                <div className="absolute top-8 left-16 w-3 h-3 rounded-full bg-amber-400/90"></div>
                <div className="absolute top-4 left-32 w-4 h-4 rounded-full bg-rose-500/90 blur-[1px]"></div>
                <div className="absolute top-10 left-48 w-5 h-5 rounded-full bg-rose-600/90 blur-[2px]"></div>
                <div className="absolute top-6 left-64 w-3 h-3 rounded-full bg-amber-400/80"></div>
                <div className="absolute top-12 left-80 w-2 h-2 rounded-full bg-emerald-400/80"></div>
              </div>

              <div className="absolute bottom-1 right-2 text-[9px] text-slate-400 font-mono">
                Pandas Dataframe EDA
              </div>
            </div>
          </div>

          {/* Key Insights List */}
          <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] space-y-1">
            <div className="flex items-center gap-1.5 text-slate-300">
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              <span>Weather correlation: Rain increases incident probability by 34%</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <AlertTriangle className="w-3 h-3 text-cyan-400" />
              <span>Speed limit factor: Primary severity determinant in highways</span>
            </div>
          </div>

        </div>

      </div>
    );
  }

  // ATM Management System
  return (
    <div className="w-full bg-[#080d18] rounded-xl border border-slate-800 overflow-hidden text-xs font-sans shadow-inner select-none">
      
      {/* ATM Console Top Navbar */}
      <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="font-mono text-[11px] text-amber-400 font-semibold ml-2">ATM Core System (Java + MySQL)</span>
        </div>
        <span className="text-[10px] text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/60 font-mono">
          JDBC Driver Active
        </span>
      </div>

      <div className="p-4 space-y-3">
        
        {/* ATM Screen Simulator */}
        <div className="bg-[#051814] p-3.5 rounded-lg border border-emerald-800/60 text-emerald-400 font-mono text-[11px] space-y-2">
          <div className="flex justify-between border-b border-emerald-900/80 pb-1.5">
            <span>&gt; BANK OF SIMULATION</span>
            <span className="text-emerald-300">CARD INSERTED</span>
          </div>

          <div className="py-1">
            <div>ACCOUNT NO: XXXX-XXXX-4821</div>
            <div>CURRENT BALANCE: <span className="font-bold text-white">₹52,400.00</span></div>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-1 text-[10px]">
            <div className="bg-emerald-950/80 p-1.5 rounded border border-emerald-800/60">
              [1] CASH WITHDRAWAL
            </div>
            <div className="bg-emerald-950/80 p-1.5 rounded border border-emerald-800/60">
              [2] CASH DEPOSIT
            </div>
            <div className="bg-emerald-950/80 p-1.5 rounded border border-emerald-800/60">
              [3] MINI STATEMENT
            </div>
            <div className="bg-emerald-950/80 p-1.5 rounded border border-emerald-800/60">
              [4] PIN CHANGE
            </div>
          </div>
        </div>

        {/* JDBC Query Log Simulator */}
        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-[10px] space-y-1">
          <div className="text-slate-500">// MySQL Transaction Log (PreparedStatement)</div>
          <div className="text-slate-300">
            <span className="text-cyan-400">UPDATE</span> accounts <span className="text-cyan-400">SET</span> balance = balance - 5000 <span className="text-cyan-400">WHERE</span> card_no = ?;
          </div>
          <div className="text-emerald-400 flex items-center gap-1">
            <span>✓ Transaction committed successfully (ACID compliant).</span>
          </div>
        </div>

      </div>

    </div>
  );
}
