import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Plus, MoreVertical, Briefcase, Mail, Phone, BookOpen } from 'lucide-react';
import { MOCK_TEACHERS } from '../../constants';

export const AdminTeachers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const teachers = Object.values(MOCK_TEACHERS);

  const filteredTeachers = teachers.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Staff Management</h1>
          <p className="text-slate-500">Manage academic staff, subject allocations, and class teachers.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 shadow-lg shadow-slate-900/20 transition-all">
          <Plus size={18} />
          Onboard New Staff
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Staff</p>
          <p className="text-2xl font-black text-slate-900">{teachers.length}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Teachers</p>
          <p className="text-2xl font-black text-emerald-600">
            {teachers.filter(t => t.level === 'primary').length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Secondary Teachers</p>
          <p className="text-2xl font-black text-blue-600">
            {teachers.filter(t => t.level === 'secondary').length}
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by name, ID, or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-slate-800 transition-all"
          />
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher, i) => (
          <motion.div
            key={teacher.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-bold text-slate-900">{teacher.name}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{teacher.role}</p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="bg-slate-50 p-2 rounded-lg"><BookOpen size={14} /></div>
                <span>{teacher.subjects.join(', ')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="bg-slate-50 p-2 rounded-lg"><Mail size={14} /></div>
                <span className="truncate">jenkins.s@horizon.edu</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="bg-slate-50 p-2 rounded-lg"><Phone size={14} /></div>
                <span>+234 801 234 5678</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                teacher.level === 'primary' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {teacher.level}
              </span>
              <button className="text-xs font-bold text-primary hover:underline">View Profile</button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="p-20 text-center bg-white rounded-3xl border border-slate-100">
          <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-300">
            <Briefcase size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No staff members found</h3>
          <p className="text-slate-500">Try searching for a different name or subject.</p>
        </div>
      )}
    </div>
  );
};
