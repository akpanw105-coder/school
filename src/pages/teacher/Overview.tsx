import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  CheckCircle,
  Clock,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { Teacher } from '../../types';

export const TeacherOverview: React.FC = () => {
  const { user } = useAuth();
  const teacher = user as Teacher;

  const stats = [
    { label: 'Total Students', value: '124', icon: <Users className="text-blue-500" />, color: 'bg-blue-50' },
    { label: 'Classes Today', value: '4', icon: <Calendar className="text-emerald-500" />, color: 'bg-emerald-50' },
    { label: 'Pending Grades', value: '12', icon: <TrendingUp className="text-amber-500" />, color: 'bg-amber-50' },
    { label: 'New Messages', value: '3', icon: <MessageSquare className="text-purple-500" />, color: 'bg-purple-50' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-primary rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {teacher?.name.split(' ')[1]}! 👋</h1>
          <p className="text-slate-200">You have 4 classes scheduled for today. Your first class starts in 15 minutes.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold border border-white/20">
              Role: {teacher?.role}
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold border border-white/20">
              Session: {teacher?.session}
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
        {/* Today's Schedule */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Today's Schedule</h3>
            <button className="text-sm text-primary font-bold hover:underline">View Full Timetable</button>
          </div>
          <div className="p-6 space-y-4">
            {[
              { time: '08:00 - 09:00', class: 'SSS 2A', subject: 'Physics', status: 'Completed' },
              { time: '09:00 - 10:00', class: 'SSS 1B', subject: 'Further Maths', status: 'In Progress' },
              { time: '11:00 - 12:00', class: 'SSS 3A', subject: 'Physics', status: 'Upcoming' },
              { time: '13:00 - 14:00', class: 'SSS 2B', subject: 'Physics', status: 'Upcoming' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-6">
                  <div className="text-xs font-bold text-slate-400 w-24">{item.time}</div>
                  <div>
                    <p className="font-bold text-slate-900">{item.class}</p>
                    <p className="text-xs text-slate-500">{item.subject}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                  item.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' :
                  item.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                  'bg-slate-200 text-slate-600'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Announcements */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">Recent Announcements</h3>
          </div>
          <div className="p-6 space-y-4">
            {[
              { title: 'Staff Meeting', date: 'Today, 3:00 PM', type: 'Meeting' },
              { title: 'Result Upload Deadline', date: 'Friday, Mar 6', type: 'Deadline' },
              { title: 'Inter-House Sports', date: 'Mar 15', type: 'Event' },
            ].map((note, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{note.title}</h4>
                  <p className="text-xs text-slate-500">{note.date} • {note.type}</p>
                </div>
              </div>
            ))}
            <button className="w-full py-3 text-sm font-bold text-slate-500 hover:text-primary transition-colors">
              Post New Announcement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
