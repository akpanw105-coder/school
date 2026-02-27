import React from 'react';
import { motion } from 'motion/react';
import { Settings as SettingsIcon, Bell, Shield, Globe, Database, Save, Calendar, Clock } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  const sections = [
    { id: 'school', label: 'School Info', icon: <Globe size={18} /> },
    { id: 'academic', label: 'Academic Session', icon: <Calendar size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'security', label: 'Security & Access', icon: <Shield size={18} /> },
    { id: 'backup', label: 'Data & Backup', icon: <Database size={18} /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">System Settings</h1>
        <p className="text-slate-500">Configure school parameters, academic sessions, and security.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav */}
        <div className="lg:w-64 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                section.id === 'school' 
                  ? 'bg-slate-900 text-white shadow-lg' 
                  : 'text-slate-500 hover:bg-white hover:text-slate-900'
              }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-grow space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-50">General School Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">School Name</label>
                <input 
                  type="text" 
                  defaultValue="Horizon Academy International"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-slate-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">School Email</label>
                <input 
                  type="email" 
                  defaultValue="info@horizonacademy.edu"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-slate-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Current Session</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 outline-none focus:ring-2 focus:ring-slate-800">
                  <option>2025/2026</option>
                  <option>2024/2025</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Current Term</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 outline-none focus:ring-2 focus:ring-slate-800">
                  <option>First Term</option>
                  <option>Second Term</option>
                  <option>Third Term</option>
                </select>
              </div>
            </div>

            <div className="mt-10 flex justify-end">
              <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Academic Calendar</h3>
            <div className="space-y-4">
              {[
                { event: 'Term Resumption', date: 'Jan 12, 2026', type: 'Academic' },
                { event: 'Mid-Term Break', date: 'Feb 20, 2026', type: 'Holiday' },
                { event: 'Examination Week', date: 'Mar 24, 2026', type: 'Academic' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded-lg text-slate-400">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{item.event}</p>
                      <p className="text-xs text-slate-500">{item.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    item.type === 'Academic' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
