import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Student } from '../../types';
import { 
  Star, 
  Book, 
  Pencil, 
  Smile,
  Clock,
  CheckCircle2,
  Bell
} from 'lucide-react';
import { MOCK_RESULTS, MOCK_ASSIGNMENTS } from '../../constants';
import { motion } from 'motion/react';

export const PrimaryDashboard: React.FC = () => {
  const { user, userType } = useAuth();

  if (userType !== 'student') return null;
  const student = user as Student;

  const stats = [
    { label: 'My Stars', value: '12', icon: <Star className="text-yellow-500" />, color: 'bg-yellow-100' },
    { label: 'Attendance', value: '100%', icon: <Smile className="text-pink-500" />, color: 'bg-pink-100' },
    { label: 'Homework', value: '1 Left', icon: <Pencil className="text-orange-500" />, color: 'bg-orange-100' },
    { label: 'Fun Points', value: '450', icon: <Star className="text-purple-500" />, color: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome - Primary Style */}
      <div className="bg-secondary rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-secondary/20">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white"
          >
            <img src={student?.photo} alt="Student" className="w-full h-full object-cover" />
          </motion.div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Hi, {student?.name.split(' ')[0]}! 🌟</h1>
            <p className="text-xl text-slate-100">Ready for a fun day of learning in {student?.class}?</p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-bold border border-white/30">
                Term: {student?.term}
              </span>
            </div>
          </div>
        </div>
        {/* Playful shapes */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-1/2 w-24 h-24 bg-pink-400/20 rounded-full -mb-12" />
      </div>

      {/* Stats Grid - Primary Style */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-[2rem] border-2 border-slate-50 shadow-sm flex flex-col items-center text-center gap-3"
          >
            <div className={`p-4 rounded-2xl ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* My Subjects & Performance */}
        <div className="bg-white rounded-[2.5rem] border-2 border-slate-50 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2">
              <Book className="text-primary" /> My Subjects
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {MOCK_RESULTS.slice(0, 4).map((res, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-primary shadow-sm">
                    {res.subject[0]}
                  </div>
                  <span className="font-bold text-slate-900">{res.subject}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                    res.total >= 80 ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {res.total >= 80 ? 'Excellent!' : 'Good Job!'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Homework - Primary Style */}
        <div className="bg-white rounded-[2.5rem] border-2 border-slate-50 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-xl text-slate-900 flex items-center gap-2">
              <Pencil className="text-orange-500" /> Homework
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {MOCK_ASSIGNMENTS.map((task) => (
              <div key={task.id} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary transition-all">
                <div className={`p-3 rounded-xl ${
                  task.status === 'pending' ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {task.status === 'pending' ? <Clock size={24} /> : <CheckCircle2 size={24} />}
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-slate-900">{task.title}</h4>
                  <p className="text-sm text-slate-500">{task.subject} • Due {task.deadline}</p>
                </div>
                {task.status === 'pending' && (
                  <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-primary/20">
                    Do it!
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Teacher's Message */}
      <div className="bg-accent/10 border-2 border-accent/20 p-8 rounded-[2.5rem] flex items-start gap-6">
        <div className="bg-accent p-4 rounded-2xl text-slate-900">
          <Bell size={32} />
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-900">Message from Mrs. Jenkins</h4>
          <p className="text-lg text-slate-700 mt-2 italic">
            "Don't forget to bring your colored pencils for Art class tomorrow! You're all doing a wonderful job with your reading projects."
          </p>
        </div>
      </div>
    </div>
  );
};
