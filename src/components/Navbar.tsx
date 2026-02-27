import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`glass-nav transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
            <GraduationCap size={28} />
          </div>
          <div>
            <span className="text-xl font-bold text-primary block leading-none">HORIZON</span>
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">Academy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.href ? 'text-primary' : 'text-slate-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors border-l border-slate-200 pl-8">
            Student Portal
          </Link>
          <Link to="/login" className="text-sm font-bold text-secondary hover:text-secondary/80 transition-colors">
            Teacher Portal
          </Link>
          <Link to="/login" className="text-sm font-bold text-slate-800 hover:text-slate-600 transition-colors">
            Admin Portal
          </Link>
          <Link to="/admissions" className="btn-primary !py-2 !text-sm">
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-600 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-lg font-medium ${
                    location.pathname === item.href ? 'text-primary' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/admissions" className="btn-primary text-center">
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
