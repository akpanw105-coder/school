import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { FACILITIES } from '../constants';

export const Facilities: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            World-Class Facilities
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Providing the right environment and tools to enhance the learning experience.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding">
        <div className="grid md:grid-cols-2 gap-12">
          {FACILITIES.map((facility, i) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="h-80 rounded-[2rem] overflow-hidden mb-6 shadow-xl relative">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{facility.title}</h3>
              <p className="text-slate-600 leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="bg-slate-50 section-padding">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Take a Virtual Tour</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Can't make it to the campus in person? Experience our facilities from the comfort of your home with our interactive 360-degree virtual tour.
            </p>
            <button className="btn-secondary w-fit">Start Virtual Tour</button>
          </div>
          <div className="relative h-64 lg:h-auto">
            <img
              src="https://picsum.photos/seed/virtual-tour/800/800"
              alt="Virtual Tour"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white animate-pulse">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
