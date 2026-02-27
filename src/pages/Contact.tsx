import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
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
            Get In Touch
          </motion.h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us via any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                <p className="text-slate-600 text-sm">+1 (234) 567-8900</p>
                <p className="text-slate-600 text-sm">+1 (234) 567-8901</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="bg-secondary/10 p-4 rounded-2xl text-secondary">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                <p className="text-slate-600 text-sm">info@horizonacademy.edu</p>
                <p className="text-slate-600 text-sm">admissions@horizonacademy.edu</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                <p className="text-slate-600 text-sm">123 Education Way, Academic District, City, Country</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6">
              <div className="bg-slate-100 p-4 rounded-2xl text-slate-500">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                <p className="text-slate-600 text-sm">Mon - Fri: 8:00 AM - 4:00 PM</p>
                <p className="text-slate-600 text-sm">Sat: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Message</label>
                <textarea className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary outline-none h-40" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        {/* Placeholder for Google Map */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center space-y-4">
            <MapPin size={48} className="text-primary mx-auto" />
            <p className="text-slate-500 font-bold">Interactive Google Map Integration</p>
            <p className="text-sm text-slate-400">123 Education Way, Academic District</p>
          </div>
        </div>
        {/* In a real app, you would use an iframe or a library like @react-google-maps/api */}
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468254!3d37.77492957975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1625123456789!5m2!1sen!2sus"
          className="w-full h-full border-0 grayscale opacity-80"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};
