import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, Calendar, Bell, GraduationCap, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { NEWS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/school-hero/1920/1080"
            alt="School Campus"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-accent text-slate-900 px-4 py-1 rounded-full text-sm font-bold mb-6">
              ADMISSIONS OPEN FOR 2026/2027
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Nurturing <span className="text-secondary">Excellence</span>, Inspiring Futures.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
              Horizon Academy provides a holistic learning environment where every child is empowered to reach their full potential through academic rigor and character development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="btn-primary flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12 shadow-sm relative z-20 -mt-16 max-w-6xl mx-auto rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-8 px-8 border border-slate-100">
        {[
          { icon: <BookOpen className="text-primary" />, label: 'Curriculum', value: 'British/Nigerian' },
          { icon: <Users className="text-secondary" />, label: 'Students', value: '1,200+' },
          { icon: <Trophy className="text-accent" />, label: 'Awards', value: '50+' },
          { icon: <Calendar className="text-primary" />, label: 'Years', value: '25+' },
        ].map((stat, i) => (
          <div key={i} className="text-center space-y-2">
            <div className="flex justify-center">{stat.icon}</div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Welcome Message */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/seed/welcome/800/800"
              alt="Students Learning"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Welcome to Horizon Academy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At Horizon Academy, we believe that education is the foundation of a successful life. Our school is a vibrant community where students from primary to secondary levels are encouraged to explore their interests, develop critical thinking skills, and build a strong moral compass.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We offer a balanced curriculum that combines academic excellence with a wide range of extracurricular activities, ensuring that our students are well-prepared for the challenges of the 21st century.
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <Bell size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Expert Faculty</h4>
                  <p className="text-sm text-slate-500">Highly qualified and passionate educators.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg text-secondary">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Holistic Growth</h4>
                  <p className="text-sm text-slate-500">Focus on mental, physical, and social development.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="inline-block text-primary font-bold hover:underline">
              Read our full story &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-slate-50 section-padding">
        <SectionHeader
          title="Latest News & Announcements"
          subtitle="Stay updated with the latest happenings at Horizon Academy."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {NEWS.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col"
            >
              <div className="h-48 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs text-slate-400 font-semibold mb-2">{item.date}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link to={`/news`} className="mt-auto text-primary font-bold text-sm hover:underline">
                  Read More
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/news" className="btn-secondary">
            View All News
          </Link>
        </div>
      </section>

      {/* Portal Access Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center space-y-6"
            >
              <div className="bg-primary/10 p-5 rounded-3xl text-primary">
                <Users size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Student Portal</h3>
                <p className="text-slate-500 text-sm">Access your results, timetable, and learning materials.</p>
              </div>
              <Link to="/login" className="btn-primary !px-10">Login as Student</Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-secondary/5 p-10 rounded-[3rem] border border-secondary/10 flex flex-col items-center text-center space-y-6"
            >
              <div className="bg-secondary/10 p-5 rounded-3xl text-secondary">
                <GraduationCap size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Teacher Portal</h3>
                <p className="text-slate-500 text-sm">Manage classes, mark attendance, and upload student results.</p>
              </div>
              <Link to="/login" className="bg-secondary text-white px-10 py-3 rounded-full font-bold hover:bg-secondary/90 transition-all">
                Login as Teacher
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 flex flex-col items-center text-center space-y-6 text-white"
            >
              <div className="bg-white/10 p-5 rounded-3xl text-white">
                <ShieldCheck size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Admin Portal</h3>
                <p className="text-slate-400 text-sm">Full system control: manage staff, students, and finances.</p>
              </div>
              <Link to="/login" className="bg-white text-slate-900 px-10 py-3 rounded-full font-bold hover:bg-slate-100 transition-all">
                Login as Admin
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to join our community?</h2>
          <p className="text-lg text-slate-200 mb-10">
            Admissions are currently open for the new academic session. Secure your child's future today at Horizon Academy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all">
              Apply for Admission
            </Link>
            <Link to="/contact" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
