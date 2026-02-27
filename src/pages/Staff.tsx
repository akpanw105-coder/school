import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { STAFF } from '../constants';
import { Mail, Linkedin } from 'lucide-react';

export const Staff: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Staff & Management
          </motion.h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Meet the dedicated professionals who guide and inspire our students every day.
          </p>
        </div>
      </section>

      {/* Management */}
      <section className="section-padding">
        <SectionHeader title="School Management" subtitle="The leadership team driving our vision forward." />
        <div className="grid md:grid-cols-3 gap-12">
          {STAFF.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group"
            >
              <div className="h-80 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 gap-4">
                  <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition-colors"><Mail size={18} /></a>
                  <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition-colors"><Linkedin size={18} /></a>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">{member.qualification}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teachers Section */}
      <section className="bg-slate-50 section-padding">
        <SectionHeader title="Our Educators" subtitle="A diverse team of subject matter experts and mentors." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="text-center space-y-4">
              <img
                src={`https://picsum.photos/seed/teacher-${i}/300/300`}
                alt="Teacher"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-bold text-slate-900">Teacher Name</h4>
                <p className="text-sm text-slate-500">Subject Specialist</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section-padding">
        <div className="bg-accent rounded-[3rem] p-10 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Want to join our team?</h2>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
            We are always looking for passionate educators and administrators to join our growing community.
          </p>
          <button className="btn-primary">View Career Opportunities</button>
        </div>
      </section>
    </div>
  );
};
