import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Teacher } from '../../types';
import { Search, Filter, User, MoreVertical, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export const ClassManagement: React.FC = () => {
  const { user } = useAuth();
  const teacher = user as Teacher;
  const [selectedClass, setSelectedClass] = useState(teacher.assignedClasses[0]);

  // Mock student list
  const students = [
    { id: '1', name: 'Alex Johnson', admissionNo: 'HA/2024/001', gender: 'Male', status: 'Active' },
    { id: '2', name: 'Sarah Williams', admissionNo: 'HA/2024/015', gender: 'Female', status: 'Active' },
    { id: '3', name: 'David Smith', admissionNo: 'HA/2024/022', gender: 'Male', status: 'Active' },
    { id: '4', name: 'Emma Brown', admissionNo: 'HA/2024/031', gender: 'Female', status: 'Active' },
    { id: '5', name: 'Michael Chen', admissionNo: 'HA/2024/045', gender: 'Male', status: 'Suspended' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Class Management</h1>
          <p className="text-slate-500">Manage students in your assigned classes.</p>
        </div>
        <div className="flex gap-3">
          <select 
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
          >
            {teacher.assignedClasses.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <button className="btn-primary !py-2 !text-sm flex items-center gap-2">
            Add New Student
          </button>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by name or admission number..."
            className="w-full pl-12 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50">
          <Filter size={18} /> Filters
        </button>
      </div>

      {/* Student Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="px-8 py-5">Student Name</th>
                <th className="px-8 py-5">Admission No.</th>
                <th className="px-8 py-5">Gender</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student, i) => (
                <motion.tr 
                  key={student.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User size={20} />
                      </div>
                      <span className="font-bold text-slate-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-slate-600 font-medium">{student.admissionNo}</td>
                  <td className="px-8 py-5 text-slate-600">{student.gender}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                      student.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <Mail size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <Phone size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
          Showing 5 of 45 students in {selectedClass}
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
