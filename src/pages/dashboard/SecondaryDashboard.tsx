import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Student } from '../../types';
import { 
  BookOpen, 
  ClipboardList, 
  Calendar, 
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { MOCK_RESULTS, MOCK_ASSIGNMENTS } from '../../constants';

export const SecondaryDashboard: React.FC = () => {
  const { user, userType } = useAuth();

  if (userType !== 'student') return null;
  const student = user as Student;

  const stats = [
    { label: 'GPA', value: '4.85', icon: <TrendingUp className="text-emerald-500" />, color: 'bg-emerald-50' },
    { label: 'Attendance', value: '94%', icon: <Calendar className="text-blue-500" />, color: 'bg-blue-50' },
    { label: 'Assignments', value: '2 Pending', icon: <ClipboardList className="text-amber-500" />, color: 'bg-amber-50' },
    { label: 'Current Rank', value: '3rd', icon: <BookOpen className="text-purple-500" />, color: 'bg-purple-50' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-primary rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {student?.name.split(' ')[0]}! 👋</h1>
          <p className="text-slate-200">You have 2 assignments due this week. Keep up the great work!</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold border border-white/20">
              Session: {student?.session}
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold border border-white/20">
              Term: {student?.term}
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-2xl ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-xl font-bold text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Results */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Recent Results</h3>
            <button className="text-sm text-primary font-bold hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
                <tr>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">CA (30)</th>
                  <th className="px-6 py-4">Exam (70)</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_RESULTS.slice(0, 4).map((res, i) => (
                  <tr key={i} className="text-sm">
                    <td className="px-6 py-4 font-bold text-slate-900">{res.subject}</td>
                    <td className="px-6 py-4 text-slate-600">{res.ca}</td>
                    <td className="px-6 py-4 text-slate-600">{res.exam}</td>
                    <td className="px-6 py-4 font-bold text-primary">{res.total}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                        res.grade.startsWith('A') ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {res.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">Upcoming Assignments</h3>
          </div>
          <div className="p-6 space-y-4">
            {MOCK_ASSIGNMENTS.map((task) => (
              <div key={task.id} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary transition-colors">
                <div className={`p-2 rounded-lg ${
                  task.status === 'pending' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {task.status === 'pending' ? <Clock size={18} /> : <CheckCircle2 size={18} />}
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-bold text-slate-900">{task.title}</h4>
                  <p className="text-xs text-slate-500">{task.subject} • Due {task.deadline}</p>
                </div>
              </div>
            ))}
            <button className="w-full py-3 text-sm font-bold text-slate-500 hover:text-primary transition-colors">
              View All Assignments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
