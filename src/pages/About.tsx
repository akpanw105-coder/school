import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { Target, Eye, Heart, Quote } from 'lucide-react';

export const About: React.FC = () => {
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
            About Horizon Academy
          </motion.h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            A legacy of excellence, a commitment to character, and a vision for the future.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <SectionHeader title="Our History" centered={false} />
            <p className="text-slate-600 leading-relaxed">
              Founded in 1999, Horizon Academy began with a simple vision: to provide a world-class education that is accessible and grounded in strong moral values. What started as a small primary school with just 50 students has grown into a premier educational institution serving over 1,200 students across primary and secondary levels.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Over the past two decades, we have consistently produced top-performing students who have gone on to excel in prestigious universities worldwide. Our growth is a testament to our unwavering dedication to academic excellence and the holistic development of every child.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/seed/history/800/600"
              alt="School History"
              className="rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="bg-slate-50 section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Eye className="text-primary" size={40} />,
              title: 'Our Vision',
              desc: 'To be a leading center of educational excellence, producing globally competitive and morally upright leaders.',
            },
            {
              icon: <Target className="text-secondary" size={40} />,
              title: 'Our Mission',
              desc: 'To provide a stimulating learning environment that fosters intellectual curiosity, critical thinking, and character development.',
            },
            {
              icon: <Heart className="text-accent" size={40} />,
              title: 'Core Values',
              desc: 'Integrity, Excellence, Resilience, Respect, and Service to Humanity are the pillars of our school community.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center space-y-4"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img
              src="https://picsum.photos/seed/principal-msg/800/1000"
              alt="Principal"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center bg-slate-50">
            <Quote className="text-primary/20 mb-6" size={60} />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Message from the Principal</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed italic">
              <p>
                "Welcome to Horizon Academy. It is an honor to lead an institution that is so deeply committed to the success of its students. Our goal is not just to teach subjects, but to inspire a lifelong love for learning."
              </p>
              <p>
                "We believe that every child has a unique gift, and it is our responsibility to provide the environment and guidance necessary for that gift to flourish. We invite you to join us on this exciting journey of discovery and growth."
              </p>
            </div>
            <div className="mt-8">
              <p className="font-bold text-slate-900 text-lg">Dr. Elizabeth Thompson</p>
              <p className="text-primary font-semibold">Principal / Proprietress</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
