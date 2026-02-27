import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, PieChart, BarChart2, Users, GraduationCap, TrendingUp, Calendar } from 'lucide-react';

export const AdminReports: React.FC = () => {
  const reportTypes = [
    { title: 'Academic Performance', desc: 'Termly results summary and class averages.', icon: <GraduationCap />, color: 'bg-blue-500' },
    { title: 'Financial Summary', desc: 'Income, expenses, and pending payments.', icon: <PieChart />, color: 'bg-emerald-500' },
    { title: 'Attendance Report', desc: 'Staff and student attendance analytics.', icon: <Users />, color: 'bg-amber-500' },
    { title: 'Enrollment Stats', desc: 'New admissions and withdrawal trends.', icon: <TrendingUp />, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
        <p className="text-slate-500">Generate and download school-wide performance reports.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reportTypes.map((report, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`${report.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                {report.icon}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all">
                <Download size={14} />
                Generate
              </button>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{report.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{report.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Custom Report Builder */}
      <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Custom Report Builder</h2>
          <p className="text-slate-400 mb-8">Select specific parameters to generate a tailored report for your needs.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Category</label>
              <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20">
                <option className="bg-slate-900">Academics</option>
                <option className="bg-slate-900">Finance</option>
                <option className="bg-slate-900">Staff</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Session</label>
              <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20">
                <option className="bg-slate-900">2025/2026</option>
                <option className="bg-slate-900">2024/2025</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Format</label>
              <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/20">
                <option className="bg-slate-900">PDF Document</option>
                <option className="bg-slate-900">Excel Sheet</option>
              </select>
            </div>
          </div>

          <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
            <BarChart2 size={18} />
            Build Custom Report
          </button>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl" />
      </div>
    </div>
  );
};
