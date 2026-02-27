import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { Book, Microscope, Calculator, Palette, Music, Globe, Calendar } from 'lucide-react';

export const Academics: React.FC = () => {
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
            Academic Programs
          </motion.h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            Comprehensive and rigorous curriculum designed to prepare students for global success.
          </p>
        </div>
      </section>

      {/* Primary School */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/seed/primary-edu/800/600"
              alt="Primary Students"
              className="rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="space-y-6">
            <span className="text-secondary font-bold uppercase tracking-widest">Ages 5 - 11</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Primary School Section</h2>
            <p className="text-slate-600 leading-relaxed">
              Our primary school curriculum is based on a blend of the British National Curriculum and the Nigerian National Curriculum. We focus on building strong foundations in literacy, numeracy, and social skills.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Book size={18} />, label: 'Literacy' },
                { icon: <Calculator size={18} />, label: 'Numeracy' },
                { icon: <Microscope size={18} />, label: 'Basic Science' },
                { icon: <Palette size={18} />, label: 'Creative Arts' },
                { icon: <Music size={18} />, label: 'Music' },
                { icon: <Globe size={18} />, label: 'Social Studies' },
              ].map((sub, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                  <div className="text-secondary">{sub.icon}</div>
                  {sub.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary School */}
      <section className="section-padding bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-primary font-bold uppercase tracking-widest">Ages 11 - 18</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Secondary School Section</h2>
            <p className="text-slate-600 leading-relaxed">
              In the secondary section, we prepare students for national and international examinations including WAEC, NECO, and IGCSE. Our curriculum is designed to foster independent research and critical thinking.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900">Junior Secondary (JSS 1-3)</h4>
                <p className="text-sm text-slate-500">Focus on broad-based knowledge across sciences, arts, and vocational subjects.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900">Senior Secondary (SSS 1-3)</h4>
                <p className="text-sm text-slate-500">Specialization in Science, Commercial, or Arts tracks based on student aptitude.</p>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img
              src="https://picsum.photos/seed/secondary-edu/800/600"
              alt="Secondary Students"
              className="rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="section-padding">
        <SectionHeader
          title="Academic Calendar 2025/2026"
          subtitle="Important dates and events for the current academic session."
        />
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            { term: 'First Term (Resumption)', date: 'September 8, 2025' },
            { term: 'Mid-Term Break', date: 'October 20 - 24, 2025' },
            { term: 'End of First Term', date: 'December 12, 2025' },
            { term: 'Second Term (Resumption)', date: 'January 5, 2026' },
            { term: 'Inter-House Sports', date: 'March 15, 2026' },
            { term: 'End of Second Term', date: 'April 3, 2026' },
          ].map((event, i) => (
            <div key={i} className="flex justify-between items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-primary transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full text-slate-500">
                  <Calendar size={20} />
                </div>
                <span className="font-bold text-slate-900">{event.term}</span>
              </div>
              <span className="text-primary font-semibold">{event.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
