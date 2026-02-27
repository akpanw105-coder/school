import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../components/SectionHeader';
import { X, Maximize2 } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    { src: 'https://picsum.photos/seed/event1/800/600', title: 'Cultural Day 2025', category: 'Events' },
    { src: 'https://picsum.photos/seed/event2/800/800', title: 'Science Exhibition', category: 'Academics' },
    { src: 'https://picsum.photos/seed/event3/600/800', title: 'Football Finals', category: 'Sports' },
    { src: 'https://picsum.photos/seed/event4/800/600', title: 'Music Concert', category: 'Arts' },
    { src: 'https://picsum.photos/seed/event5/800/600', title: 'Graduation Ceremony', category: 'Events' },
    { src: 'https://picsum.photos/seed/event6/800/800', title: 'Class Project', category: 'Academics' },
    { src: 'https://picsum.photos/seed/event7/600/800', title: 'Basketball Match', category: 'Sports' },
    { src: 'https://picsum.photos/seed/event8/800/600', title: 'Art Workshop', category: 'Arts' },
  ];

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
            School Gallery
          </motion.h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Capturing the vibrant life and memorable moments at Horizon Academy.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg"
              onClick={() => setSelectedImg(img.src)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                <h4 className="text-white font-bold text-lg">{img.title}</h4>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                  <Maximize2 size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-accent transition-colors">
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              alt="Gallery Full"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
