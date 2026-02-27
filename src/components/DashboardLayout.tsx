import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Calendar,
  UserCheck,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  GraduationCap,
  Bell,
  Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Student } from '../types';
import { motion } from 'motion/react';

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const student = user as Student;
  const location = useLocation();
  const navigate = useNavigate();

  const secondaryMenuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', href: '/dashboard' },
    { icon: <BookOpen size={20} />, label: 'Academics', href: '/dashboard/academics' },
    { icon: <ClipboardList size={20} />, label: 'Assignments', href: '/dashboard/assignments' },
    { icon: <Calendar size={20} />, label: 'Timetable', href: '/dashboard/timetable' },
    { icon: <UserCheck size={20} />, label: 'Attendance', href: '/dashboard/attendance' },
    { icon: <FileText size={20} />, label: 'Resources', href: '/dashboard/resources' },
    { icon: <CreditCard size={20} />, label: 'Payments', href: '/dashboard/payments' },
    { icon: <Settings size={20} />, label: 'Settings', href: '/dashboard/settings' },
  ];

  const primaryMenuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'My Dashboard', href: '/dashboard' },
    { icon: <BookOpen size={20} />, label: 'My Subjects', href: '/dashboard/academics' },
    { icon: <ClipboardList size={20} />, label: 'Homework', href: '/dashboard/assignments' },
    { icon: <Calendar size={20} />, label: 'My Timetable', href: '/dashboard/timetable' },
    { icon: <UserCheck size={20} />, label: 'Attendance', href: '/dashboard/attendance' },
    { icon: <FileText size={20} />, label: 'Fun Learning', href: '/dashboard/resources' },
    { icon: <Settings size={20} />, label: 'My Profile', href: '/dashboard/settings' },
  ];

  const menuItems = student?.level === 'primary' ? primaryMenuItems : secondaryMenuItems;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col sticky top-0 h-screen transition-colors duration-500 ${
        student?.level === 'primary' ? 'border-secondary/20' : 'border-slate-200'
      }`}>
        <div className="p-8">
          <Link to="/" className="flex items-center gap-2">
            <div className={`${student?.level === 'primary' ? 'bg-secondary' : 'bg-primary'} p-2 rounded-lg text-white transition-colors`}>
              <GraduationCap size={24} />
            </div>
            <span className="text-lg font-bold text-slate-900">HORIZON</span>
          </Link>
        </div>

        <nav className="flex-grow px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                location.pathname === item.href
                  ? `${student?.level === 'primary' ? 'bg-secondary' : 'bg-primary'} text-white shadow-lg ${
                      student?.level === 'primary' ? 'shadow-secondary/20' : 'shadow-primary/20'
                    }`
                  : `text-slate-500 hover:bg-slate-50 ${student?.level === 'primary' ? 'hover:text-secondary' : 'hover:text-primary'}`
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-grow max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search resources, results..."
                className={`w-full pl-12 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm outline-none transition-all ${
                  student?.level === 'primary' ? 'focus:ring-2 focus:ring-secondary' : 'focus:ring-2 focus:ring-primary'
                }`}
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className={`relative transition-colors ${
              student?.level === 'primary' ? 'text-slate-500 hover:text-secondary' : 'text-slate-500 hover:text-primary'
            }`}>
              <Bell size={22} />
              <span className={`absolute -top-1 -right-1 w-4 h-4 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white ${
                student?.level === 'primary' ? 'bg-secondary' : 'bg-red-500'
              }`}>
                3
              </span>
            </button>
            
            <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">{student?.name}</p>
                <p className="text-xs text-slate-500">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold mr-2 ${
                    student?.level === 'primary' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
                  }`}>
                    {student?.level?.toUpperCase()}
                  </span>
                  {student?.class} • {student?.admissionNumber}
                </p>
              </div>
              <img
                src={student?.photo}
                alt="Profile"
                className={`w-10 h-10 rounded-full border-2 ${
                  student?.level === 'primary' ? 'border-secondary/20' : 'border-primary/20'
                }`}
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};
