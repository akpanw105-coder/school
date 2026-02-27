import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Lock, User, AlertCircle, Users, Briefcase, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

type LoginRole = 'student' | 'teacher' | 'admin';

export const Login: React.FC = () => {
  const [role, setRole] = useState<LoginRole>('student');
  const [identifier, setIdentifier] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const success = await login(identifier, pin);
    
    if (success) {
      navigate('/dashboard');
    } else {
      let demoId = 'HA/2024/001';
      if (role === 'teacher') demoId = 'TEA/2024/001';
      if (role === 'admin') demoId = 'ADM/2024/001';
      
      const roleLabel = role.charAt(0).toUpperCase() + role.slice(1);
      setError(`Invalid ${roleLabel} ID or PIN. Try ${demoId} with 1234`);
    }
    setLoading(false);
  };

  const getRoleColor = () => {
    if (role === 'student') return 'bg-primary';
    if (role === 'teacher') return 'bg-secondary';
    return 'bg-slate-800';
  };

  const getRoleShadow = () => {
    if (role === 'student') return 'shadow-primary/20';
    if (role === 'teacher') return 'shadow-secondary/20';
    return 'shadow-slate-800/20';
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden"
      >
        {/* Header */}
        <div className={`${getRoleColor()} p-10 text-center text-white relative overflow-hidden transition-colors duration-500`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          <div className="relative z-10">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/30">
              {role === 'student' && <GraduationCap size={32} />}
              {role === 'teacher' && <Briefcase size={32} />}
              {role === 'admin' && <ShieldCheck size={32} />}
            </div>
            <h2 className="text-2xl font-bold">Horizon Portal</h2>
            <p className="text-slate-200 text-sm mt-2">Welcome back! Please sign in to continue.</p>
          </div>
        </div>

        {/* Role Selector */}
        <div className="p-8 pb-0">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1">
            <button
              onClick={() => { setRole('student'); setError(''); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-bold transition-all ${
                role === 'student' 
                  ? 'bg-white text-primary shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Users size={16} />
              Student
            </button>
            <button
              onClick={() => { setRole('teacher'); setError(''); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-bold transition-all ${
                role === 'teacher' 
                  ? 'bg-white text-secondary shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Briefcase size={16} />
              Teacher
            </button>
            <button
              onClick={() => { setRole('admin'); setError(''); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[11px] font-bold transition-all ${
                role === 'admin' 
                  ? 'bg-white text-slate-800 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <ShieldCheck size={16} />
              Admin
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="p-8 space-y-6" onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-50 text-red-600 p-4 rounded-2xl flex items-start gap-3 text-sm border border-red-100"
              >
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">
              {role === 'student' ? 'Admission Number / Student ID' : 
               role === 'teacher' ? 'Staff ID / Email Address' : 'Admin ID / Email'}
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder={
                  role === 'student' ? 'e.g. HA/2024/001' : 
                  role === 'teacher' ? 'e.g. TEA/2024/001' : 'e.g. ADM/2024/001'
                }
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-slate-700">Access PIN / Password</label>
              <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-2xl text-white font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
              loading 
                ? 'bg-slate-400 cursor-not-allowed' 
                : `${getRoleColor()} hover:opacity-90 ${getRoleShadow()}`
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Authenticating...
              </>
            ) : (
              `Sign In as ${role.charAt(0).toUpperCase() + role.slice(1)}`
            )}
          </button>

          <div className="pt-4 text-center">
            <p className="text-xs text-slate-400 leading-relaxed">
              By signing in, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
