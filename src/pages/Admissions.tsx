import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { CheckCircle, Download, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const Admissions: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the age requirement for Primary 1?',
      a: 'Children must be at least 5 years old by September of the year of entry.',
    },
    {
      q: 'Do you offer scholarships?',
      a: 'Yes, we offer academic and sports scholarships to exceptional students entering the secondary section.',
    },
    {
      q: 'What are the school hours?',
      a: 'Primary: 8:00 AM - 2:00 PM. Secondary: 8:00 AM - 3:30 PM.',
    },
    {
      q: 'Is there a school bus service?',
      a: 'Yes, we provide safe and reliable transportation across major routes in the city.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-accent py-20 text-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Join Our Community
          </motion.h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Start your journey with Horizon Academy. We make the admission process simple and transparent.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <SectionHeader title="Admission Requirements" centered={false} />
            <div className="space-y-4">
              {[
                'Completed Application Form',
                'Birth Certificate (Original and Photocopy)',
                'Two Recent Passport Photographs',
                'Previous Academic Records/Reports',
                'Transfer Certificate (if applicable)',
                'Medical Fitness Report',
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle className="text-primary" size={24} />
                  <span className="font-medium text-slate-700">{req}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <button className="btn-primary flex items-center gap-2">
                <Download size={20} /> Download Admission Guide
              </button>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Online Inquiry Form</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Student First Name</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Student Last Name</label>
                  <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Parent/Guardian Email</label>
                <input type="email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="parent@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Applying For</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none">
                  <option>Primary School</option>
                  <option>Secondary School</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message/Inquiry</label>
                <textarea className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none h-32" placeholder="Tell us about your child..."></textarea>
              </div>
              <button type="submit" className="w-full btn-primary">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Tuition & Fees" light centered />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 text-center">
              <h4 className="text-2xl font-bold mb-4">Primary Section</h4>
              <p className="text-slate-400 mb-6">Annual tuition including books and uniforms.</p>
              <div className="text-4xl font-bold text-accent mb-8">$2,500 <span className="text-sm font-normal text-slate-400">/ year</span></div>
              <ul className="text-left space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /> Tuition & Materials</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /> School Uniforms</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-accent" /> Extracurricular Activities</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 text-center">
              <h4 className="text-2xl font-bold mb-4">Secondary Section</h4>
              <p className="text-slate-400 mb-6">Annual tuition including lab fees and exams.</p>
              <div className="text-4xl font-bold text-secondary mb-8">$4,000 <span className="text-sm font-normal text-slate-400">/ year</span></div>
              <ul className="text-left space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Tuition & Lab Fees</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Examination Fees</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary" /> Career Counseling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-bold text-slate-900">{faq.q}</span>
                {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-slate-600"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
