import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg text-white">
              <GraduationCap size={24} />
            </div>
            <span className="text-xl font-bold text-white">HORIZON ACADEMY</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Nurturing young minds for a brighter future. Providing quality education from primary to secondary levels with a focus on excellence and character.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Portals</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/login" className="hover:text-white transition-colors">Student Portal</Link></li>
            <li><Link to="/login" className="hover:text-white transition-colors font-bold text-secondary">Teacher Portal</Link></li>
            <li><Link to="/login" className="hover:text-white transition-colors">Parent Portal (Coming Soon)</Link></li>
            <li><Link to="/admissions" className="hover:text-white transition-colors">Admission Portal</Link></li>
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h4 className="text-white font-semibold mb-6">Academics</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/academics" className="hover:text-white transition-colors">Primary School</Link></li>
            <li><Link to="/academics" className="hover:text-white transition-colors">Secondary School</Link></li>
            <li><Link to="/academics" className="hover:text-white transition-colors">Curriculum</Link></li>
            <li><Link to="/academics" className="hover:text-white transition-colors">Academic Calendar</Link></li>
            <li><Link to="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-secondary shrink-0" />
              <span>123 Education Way, Academic District, City, Country</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-secondary shrink-0" />
              <span>+1 (234) 567-8900</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-secondary shrink-0" />
              <span>info@horizonacademy.edu</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Horizon Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};
