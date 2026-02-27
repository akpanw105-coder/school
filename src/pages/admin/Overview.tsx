import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Admin } from '../../types';
import { Users, GraduationCap, Briefcase, DollarSign, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const AdminOverview: React.FC = () => {
  const { user } = useAuth();
  const admin = user as Admin;

  const stats = [
    { label: 'Total Students', value: '1,248', icon: <GraduationCap />, color: 'bg-blue-500' },
    { label: 'Total Teachers', value: '86', icon: <Briefcase />, color: 'bg-emerald-500' },
    { label: 'Total Staff', value: '112', icon: <Users />, color: 'bg-amber-500' },
    { label: 'Revenue (Term)', value: '$142,500', icon: <DollarSign />, color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Admin Control Center</h1>
          <p className="text-slate-500">Welcome back, {admin.name}. Here's the school's performance overview.</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-bold">
          <ShieldCheck size={18} />
          {admin.role}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
          >
            <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
              {stat.icon}
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-3xl font-black text-slate-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">Enrollment Trends</h3>
            <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold">
              <TrendingUp size={18} />
              +12% from last session
            </div>
          </div>
          <div className="h-64 bg-slate-50 rounded-2xl flex items-center justify-center border border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">Enrollment Chart Visualization</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h3>
          <div className="space-y-3">
            {[
              'Register New Student',
              'Onboard New Teacher',
              'Generate Fee Reports',
              'Update School Calendar',
              'System Settings'
            ].map((action, i) => (
              <button
                key={i}
                className="w-full text-left px-4 py-3 rounded-xl border border-slate-100 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all text-sm font-bold text-slate-600"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
