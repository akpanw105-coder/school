import React from 'react';
import { motion } from 'motion/react';
import { MOCK_TIMETABLE } from '../../constants';
import { Clock, Calendar, Sun, Coffee, BookOpen } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Student } from '../../types';

export const DashboardTimetable: React.FC = () => {
  const { user, userType } = useAuth();

  if (userType !== 'student') return null;
  const student = user as Student;

  if (student.level === 'primary') {
    return (
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-slate-900">My School Day</h1>
          <p className="text-slate-500">See what we are learning today!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {MOCK_TIMETABLE.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[3rem] border-2 border-slate-50 shadow-sm overflow-hidden"
            >
              <div className="bg-secondary p-8 text-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl">
                    <Sun size={24} />
                  </div>
                  <h3 className="font-black text-2xl tracking-tight">{day.day}</h3>
                </div>
              </div>
              <div className="p-8 space-y-6">
                {day.periods.map((period, j) => (
                  <div key={j} className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 border-2 border-transparent hover:border-secondary transition-all group">
                    <div className="flex flex-col items-center gap-1 text-slate-400 font-black text-xs uppercase min-w-[100px]">
                      <Clock size={18} className="text-secondary" />
                      {period.time.split(' - ')[0]}
                    </div>
                    <div className="h-12 w-1.5 bg-secondary/20 rounded-full group-hover:bg-secondary transition-colors" />
                    <div className="flex-grow">
                      <div className="text-xl font-black text-slate-900">{period.subject}</div>
                      <div className="text-sm text-slate-500 font-bold">Room 3A • Mrs. Jenkins</div>
                    </div>
                    <div className="hidden sm:block">
                      <BookOpen className="text-slate-200 group-hover:text-secondary transition-colors" size={32} />
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-orange-50 border-2 border-orange-100">
                  <div className="flex flex-col items-center gap-1 text-orange-400 font-black text-xs uppercase min-w-[100px]">
                    <Coffee size={18} />
                    10:00 AM
                  </div>
                  <div className="h-12 w-1.5 bg-orange-200 rounded-full" />
                  <div className="flex-grow">
                    <div className="text-xl font-black text-orange-900">Snack & Play Time!</div>
                    <div className="text-sm text-orange-600 font-bold">School Playground</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Class Timetable</h1>
        <p className="text-slate-500">Your weekly schedule for the current term.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {MOCK_TIMETABLE.map((day, i) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <div className="bg-primary p-6 text-white flex items-center gap-3">
              <Calendar size={20} />
              <h3 className="font-bold text-lg">{day.day}</h3>
            </div>
            <div className="p-6 space-y-4">
              {day.periods.map((period, j) => (
                <div key={j} className="flex items-center gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary transition-all">
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase min-w-[120px]">
                    <Clock size={14} />
                    {period.time}
                  </div>
                  <div className="h-8 w-1 bg-primary/20 rounded-full" />
                  <div className="font-bold text-slate-900">{period.subject}</div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl flex items-start gap-4">
        <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
          <Clock size={20} />
        </div>
        <div>
          <h4 className="font-bold text-amber-900">Note on Schedule</h4>
          <p className="text-sm text-amber-700 mt-1">
            The timetable is subject to change during exam periods or special school events. Please check the announcements regularly.
          </p>
        </div>
      </div>
    </div>
  );
};
