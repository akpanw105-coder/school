import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Teacher } from '../../types';
import { Calendar, Check, X, Clock, Search, Save } from 'lucide-react';
import { motion } from 'motion/react';

export const Attendance: React.FC = () => {
  const { user } = useAuth();
  const teacher = user as Teacher;
  const [selectedClass, setSelectedClass] = useState(teacher.assignedClasses[0]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  // Mock attendance data
  const [attendance, setAttendance] = useState([
    { id: '1', name: 'Alex Johnson', status: 'present' },
    { id: '2', name: 'Sarah Williams', status: 'present' },
    { id: '3', name: 'David Smith', status: 'absent' },
    { id: '4', name: 'Emma Brown', status: 'present' },
    { id: '5', name: 'Michael Chen', status: 'late' },
  ]);

  const toggleStatus = (id: string, status: string) => {
    setAttendance(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Attendance</h1>
          <p className="text-slate-500">Mark and track daily student attendance.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
          />
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
            <Save size={18} /> Submit Register
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600">
            <Check size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Present</p>
            <p className="text-xl font-bold text-slate-900">{attendance.filter(a => a.status === 'present').length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-red-50 text-red-600">
            <X size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Absent</p>
            <p className="text-xl font-bold text-slate-900">{attendance.filter(a => a.status === 'absent').length}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-amber-50 text-amber-600">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">Late</p>
            <p className="text-xl font-bold text-slate-900">{attendance.filter(a => a.status === 'late').length}</p>
          </div>
        </div>
      </div>

      {/* Attendance List */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-900">Student Register - {selectedClass}</h3>
          <div className="flex gap-2">
            <button className="text-xs font-bold text-emerald-600 hover:underline">Mark All Present</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="px-8 py-5">Student Name</th>
                <th className="px-8 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-right">Quick Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {attendance.map((student, i) => (
                <motion.tr 
                  key={student.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-8 py-5 font-bold text-slate-900">{student.name}</td>
                  <td className="px-8 py-5 text-center">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      student.status === 'present' ? 'bg-emerald-100 text-emerald-600' :
                      student.status === 'absent' ? 'bg-red-100 text-red-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => toggleStatus(student.id, 'present')}
                        className={`p-2 rounded-lg transition-all ${student.status === 'present' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' : 'bg-slate-100 text-slate-400 hover:bg-emerald-50 hover:text-emerald-500'}`}
                      >
                        <Check size={18} />
                      </button>
                      <button 
                        onClick={() => toggleStatus(student.id, 'absent')}
                        className={`p-2 rounded-lg transition-all ${student.status === 'absent' ? 'bg-red-500 text-white shadow-lg shadow-red-200' : 'bg-slate-100 text-slate-400 hover:bg-red-50 hover:text-red-500'}`}
                      >
                        <X size={18} />
                      </button>
                      <button 
                        onClick={() => toggleStatus(student.id, 'late')}
                        className={`p-2 rounded-lg transition-all ${student.status === 'late' ? 'bg-amber-500 text-white shadow-lg shadow-amber-200' : 'bg-slate-100 text-slate-400 hover:bg-amber-50 hover:text-amber-500'}`}
                      >
                        <Clock size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
