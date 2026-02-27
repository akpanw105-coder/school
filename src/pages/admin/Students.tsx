import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Plus, MoreVertical, GraduationCap, Download, X } from 'lucide-react';
import { MOCK_STUDENTS } from '../../constants';
import { Student } from '../../types';

export const AdminStudents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('All Levels');
  const [classFilter, setClassFilter] = useState('All Classes');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localStudents, setLocalStudents] = useState<Student[]>(Object.values(MOCK_STUDENTS));
  
  const [newStudent, setNewStudent] = useState({
    name: '',
    admissionNumber: '',
    class: '',
    level: 'primary' as 'primary' | 'secondary',
    guardianName: ''
  });

  const filteredStudents = localStudents.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         s.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === 'All Levels' || s.level === levelFilter.toLowerCase();
    const matchesClass = classFilter === 'All Classes' || s.class === classFilter;
    
    return matchesSearch && matchesLevel && matchesClass;
  });

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    const studentToAdd: Student = {
      id: `STU${Date.now()}`,
      ...newStudent,
      photo: `https://picsum.photos/seed/${Date.now()}/200/200`,
      session: '2025/2026',
      term: 'Second Term',
      arm: 'A'
    };
    setLocalStudents([studentToAdd, ...localStudents]);
    setIsModalOpen(false);
    setNewStudent({ name: '', admissionNumber: '', class: '', level: 'primary', guardianName: '' });
  };

  const classes = Array.from(new Set(localStudents.map(s => s.class))).sort();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Student Management</h1>
          <p className="text-slate-500">Manage student records, enrollment, and academic levels.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Download size={18} />
            Export CSV
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 shadow-lg shadow-slate-900/20 transition-all"
          >
            <Plus size={18} />
            Add New Student
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by name or admission number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-slate-800 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <select 
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 outline-none"
          >
            <option>All Levels</option>
            <option>Primary</option>
            <option>Secondary</option>
          </select>
          <select 
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 outline-none"
          >
            <option>All Classes</option>
            {classes.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button 
            onClick={() => {setSearchTerm(''); setLevelFilter('All Levels'); setClassFilter('All Classes');}}
            className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 hover:bg-slate-100 transition-all"
            title="Clear Filters"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="px-8 py-5">Student</th>
                <th className="px-8 py-5">Admission No.</th>
                <th className="px-8 py-5">Class</th>
                <th className="px-8 py-5">Level</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map((student, i) => (
                <motion.tr
                  key={student.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-10 h-10 rounded-xl object-cover border-2 border-white shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="font-bold text-slate-900">{student.name}</p>
                        <p className="text-xs text-slate-500">{student.guardianName || 'No Guardian Info'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-mono text-xs text-slate-600">{student.admissionNumber}</td>
                  <td className="px-8 py-5 font-bold text-slate-700">{student.class}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      student.level === 'primary' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {student.level}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredStudents.length === 0 && (
          <div className="p-20 text-center">
            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-300">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No students found</h3>
            <p className="text-slate-500">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      {/* Add Student Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Add New Student</h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
              <form onSubmit={handleAddStudent} className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input
                    required
                    type="text"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                    placeholder="Enter student's full name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-slate-800"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Admission Number</label>
                    <input
                      required
                      type="text"
                      value={newStudent.admissionNumber}
                      onChange={(e) => setNewStudent({...newStudent, admissionNumber: e.target.value})}
                      placeholder="HA/2024/XXX"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-slate-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Class</label>
                    <input
                      required
                      type="text"
                      value={newStudent.class}
                      onChange={(e) => setNewStudent({...newStudent, class: e.target.value})}
                      placeholder="e.g. SSS 1"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-slate-800"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Academic Level</label>
                  <div className="flex gap-4">
                    {['primary', 'secondary'].map((l) => (
                      <button
                        key={l}
                        type="button"
                        onClick={() => setNewStudent({...newStudent, level: l as any})}
                        className={`flex-grow py-3 rounded-xl text-sm font-bold border-2 transition-all ${
                          newStudent.level === l 
                            ? 'bg-slate-900 border-slate-900 text-white' 
                            : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
                        }`}
                      >
                        {l.charAt(0).toUpperCase() + l.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Guardian Name</label>
                  <input
                    type="text"
                    value={newStudent.guardianName}
                    onChange={(e) => setNewStudent({...newStudent, guardianName: e.target.value})}
                    placeholder="Enter guardian's name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-slate-800"
                  />
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 shadow-xl shadow-slate-900/20 transition-all">
                    Register Student
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
