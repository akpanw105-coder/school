import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Admin } from '../types';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  ShieldCheck,
  FileText,
  DollarSign
} from 'lucide-react';
import { motion } from 'motion/react';

export const AdminDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const admin = user as Admin;
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', href: '/dashboard' },
    { icon: <GraduationCap size={20} />, label: 'Students', href: '/dashboard/students' },
    { icon: <Briefcase size={20} />, label: 'Teachers', href: '/dashboard/teachers' },
    { icon: <DollarSign size={20} />, label: 'Finance', href: '/dashboard/finance' },
    { icon: <FileText size={20} />, label: 'Reports', href: '/dashboard/reports' },
    { icon: <Settings size={20} />, label: 'Settings', href: '/dashboard/settings' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-slate-400 flex flex-col fixed h-full z-50">
        <div className="p-8 flex items-center gap-3 text-white">
          <div className="bg-white/10 p-2 rounded-xl">
            <ShieldCheck size={24} className="text-white" />
          </div>
          <span className="font-black tracking-tight text-xl">ADMIN PANEL</span>
        </div>

        <nav className="flex-grow px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                location.pathname === item.href
                  ? 'bg-white/10 text-white shadow-lg'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-400 hover:bg-red-500/10 transition-all w-full"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-72 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search students, staff, records..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-sm focus:ring-2 focus:ring-slate-800 outline-none shadow-sm"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-50" />
            </button>
            
            <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">{admin?.name}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {admin?.role}
                </p>
              </div>
              <img
                src={admin?.photo}
                alt={admin?.name}
                className="w-10 h-10 rounded-xl object-cover border-2 border-white shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};
