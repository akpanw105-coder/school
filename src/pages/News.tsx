import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { NEWS } from '../constants';
import { Search, Calendar, User, Tag } from 'lucide-react';

export const News: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            News & Events
          </motion.h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            Stay informed about the latest activities, achievements, and announcements.
          </p>
        </div>
      </section>

      {/* News Feed */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-12">
            {NEWS.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="h-96 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-semibold mb-6">
                    <div className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {item.date}</div>
                    <div className="flex items-center gap-2"><User size={16} className="text-primary" /> Admin</div>
                    <div className="flex items-center gap-2"><Tag size={16} className="text-primary" /> {item.category}</div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {item.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="btn-primary">Read Full Article</button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Search */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Search News</h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none"
                />
                <Search className="absolute right-4 top-4 text-slate-400" size={20} />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Categories</h4>
              <ul className="space-y-4">
                {['Academics', 'Sports', 'Arts', 'Facilities', 'Events', 'Admissions'].map((cat) => (
                  <li key={cat}>
                    <a href="#" className="flex justify-between items-center text-slate-600 hover:text-primary transition-colors font-medium">
                      {cat}
                      <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-md">12</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming Events */}
            <div className="bg-primary text-white p-8 rounded-3xl shadow-xl">
              <h4 className="text-lg font-bold mb-6">Upcoming Events</h4>
              <div className="space-y-6">
                {[
                  { d: '15', m: 'MAR', t: 'Inter-House Sports' },
                  { d: '22', m: 'MAR', t: 'Parent-Teacher Meeting' },
                  { d: '05', m: 'APR', t: 'Easter Break Begins' },
                ].map((ev, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="bg-white/10 p-3 rounded-xl text-center min-w-[60px]">
                      <div className="text-xl font-bold leading-none">{ev.d}</div>
                      <div className="text-[10px] font-bold uppercase">{ev.m}</div>
                    </div>
                    <div className="font-bold text-sm leading-tight">{ev.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
