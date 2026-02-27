import React from 'react';
import { motion } from 'motion/react';
import { MOCK_RESULTS } from '../../constants';
import { TrendingUp, Award, BookOpen, Download, Star, Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Student } from '../../types';

export const DashboardAcademics: React.FC = () => {
  const { user, userType } = useAuth();
  const gpa = 4.85;

  if (userType !== 'student') return null;
  const student = user as Student;

  if (student.level === 'primary') {
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-900">My Learning Progress</h1>
            <p className="text-slate-500">See how well you are doing in your subjects!</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-yellow-100 p-4 rounded-2xl flex items-center gap-3 border-2 border-yellow-200">
              <Star className="text-yellow-500" fill="currentColor" />
              <span className="text-xl font-black text-yellow-700">12 Stars</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MOCK_RESULTS.map((res, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-50 shadow-sm flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl font-black">
                  {res.subject[0]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{res.subject}</h3>
                  <p className="text-slate-500 font-medium">Teacher: Mrs. Jenkins</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-slate-400 uppercase mb-1">My Score</div>
                <div className="text-3xl font-black text-primary">{res.total}</div>
                <div className="mt-2">
                  <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-xs font-bold">
                    {res.total >= 80 ? 'Super!' : 'Great!'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white p-10 rounded-[3rem] border-2 border-slate-50 shadow-sm text-center space-y-6">
          <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto text-pink-500">
            <Heart size={40} fill="currentColor" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Teacher's Comment</h3>
          <p className="text-xl text-slate-600 italic max-w-2xl mx-auto">
            "{student.name} is a very bright student who participates actively in class. Always ready to help others and shows great curiosity in Science!"
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Academic Performance</h1>
          <p className="text-slate-500">View your detailed results and academic standing.</p>
        </div>
        <button className="btn-primary !py-2 !text-sm flex items-center gap-2">
          <Download size={18} /> Download Result Slip
        </button>
      </div>

      {/* GPA & Standing */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600">
            <TrendingUp size={32} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Current GPA</p>
            <p className="text-3xl font-bold text-slate-900">{gpa}</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="bg-amber-100 p-4 rounded-2xl text-amber-600">
            <Award size={32} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Class Rank</p>
            <p className="text-3xl font-bold text-slate-900">3rd / 45</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
          <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
            <BookOpen size={32} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Total Credits</p>
            <p className="text-3xl font-bold text-slate-900">24.0</p>
          </div>
        </div>
      </div>

      {/* Full Results Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100">
          <h3 className="text-xl font-bold text-slate-900">Termly Results Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="px-8 py-5">Subject</th>
                <th className="px-8 py-5 text-center">CA (30)</th>
                <th className="px-8 py-5 text-center">Exam (70)</th>
                <th className="px-8 py-5 text-center">Total (100)</th>
                <th className="px-8 py-5 text-center">Grade</th>
                <th className="px-8 py-5">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_RESULTS.map((res, i) => (
                <motion.tr 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-8 py-5 font-bold text-slate-900">{res.subject}</td>
                  <td className="px-8 py-5 text-center text-slate-600">{res.ca}</td>
                  <td className="px-8 py-5 text-center text-slate-600">{res.exam}</td>
                  <td className="px-8 py-5 text-center font-bold text-primary">{res.total}</td>
                  <td className="px-8 py-5 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      res.grade.startsWith('A') ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {res.grade}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-slate-500 text-sm italic">
                    {res.total >= 80 ? 'Excellent performance' : 'Good effort, keep it up'}
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
