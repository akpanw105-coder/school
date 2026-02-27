import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Teacher } from '../../types';
import { Save, AlertCircle, CheckCircle2, Upload, Download, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ResultsEntry: React.FC = () => {
  const { user } = useAuth();
  const teacher = user as Teacher;
  const [selectedClass, setSelectedClass] = useState(teacher.assignedClasses[0]);
  const [selectedSubject, setSelectedSubject] = useState(teacher.subjects[0]);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock student scores
  const [scores, setScores] = useState([
    { id: '1', name: 'Alex Johnson', ca: 25, exam: 60 },
    { id: '2', name: 'Sarah Williams', ca: 22, exam: 55 },
    { id: '3', name: 'David Smith', ca: 28, exam: 65 },
    { id: '4', name: 'Emma Brown', ca: 20, exam: 45 },
    { id: '5', name: 'Michael Chen', ca: 15, exam: 30 },
  ]);

  const handleScoreChange = (id: string, field: 'ca' | 'exam', value: string) => {
    const numValue = parseInt(value) || 0;
    const max = field === 'ca' ? 30 : 70;
    if (numValue > max) return;

    setScores(prev => prev.map(s => s.id === id ? { ...s, [field]: numValue } : s));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    // Simulate file processing
    setTimeout(() => {
      // Mock updated scores from file
      const updatedScores = scores.map(s => ({
        ...s,
        ca: Math.floor(Math.random() * 31),
        exam: Math.floor(Math.random() * 71)
      }));
      setScores(updatedScores);
      setIsUploading(false);
      setShowUploadModal(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const calculateGrade = (total: number) => {
    if (teacher.level === 'primary') {
      if (total >= 80) return 'Excellent';
      if (total >= 60) return 'Good';
      if (total >= 40) return 'Fair';
      return 'Needs Improvement';
    } else {
      if (total >= 75) return 'A1';
      if (total >= 70) return 'B2';
      if (total >= 65) return 'B3';
      if (total >= 60) return 'C4';
      if (total >= 55) return 'C5';
      if (total >= 50) return 'C6';
      return 'F9';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Results Entry</h1>
          <p className="text-slate-500">Record and compute student assessments for {teacher.term}.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all"
          >
            <Upload size={18} /> Bulk Upload
          </button>
          <select 
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
          >
            {teacher.assignedClasses.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select 
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary"
          >
            {teacher.subjects.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="btn-primary !py-2 !text-sm flex items-center gap-2"
          >
            {isSaving ? 'Saving...' : <><Save size={18} /> Save Results</>}
          </button>
        </div>
      </div>

      {showSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 text-emerald-600 p-4 rounded-2xl flex items-center gap-3 border border-emerald-100"
        >
          <CheckCircle2 size={20} />
          Results for {selectedSubject} ({selectedClass}) updated successfully!
        </motion.div>
      )}

      {/* Entry Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center gap-4 text-sm font-bold text-slate-500">
          <AlertCircle size={18} className="text-primary" />
          Max Scores: CA (30), Exam (70). Total is auto-calculated.
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="px-8 py-5">Student Name</th>
                <th className="px-8 py-5 text-center">CA (30)</th>
                <th className="px-8 py-5 text-center">Exam (70)</th>
                <th className="px-8 py-5 text-center">Total (100)</th>
                <th className="px-8 py-5 text-center">Grade</th>
                <th className="px-8 py-5">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {scores.map((student, i) => {
                const total = student.ca + student.exam;
                const grade = calculateGrade(total);
                return (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-900">{student.name}</td>
                    <td className="px-8 py-5 text-center">
                      <input 
                        type="number"
                        value={student.ca}
                        onChange={(e) => handleScoreChange(student.id, 'ca', e.target.value)}
                        className="w-16 text-center py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      />
                    </td>
                    <td className="px-8 py-5 text-center">
                      <input 
                        type="number"
                        value={student.exam}
                        onChange={(e) => handleScoreChange(student.id, 'exam', e.target.value)}
                        className="w-16 text-center py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      />
                    </td>
                    <td className="px-8 py-5 text-center font-black text-primary text-lg">{total}</td>
                    <td className="px-8 py-5 text-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        total >= 70 ? 'bg-emerald-100 text-emerald-600' :
                        total >= 50 ? 'bg-blue-100 text-blue-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {grade}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <input 
                        type="text"
                        placeholder="Add remark..."
                        className="w-full bg-transparent border-b border-slate-100 focus:border-primary outline-none py-1 text-sm text-slate-600"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-900">Bulk Upload Results</h3>
                <button 
                  onClick={() => setShowUploadModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-400" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="bg-blue-50 p-4 rounded-2xl flex items-start gap-3 border border-blue-100">
                  <AlertCircle className="text-blue-500 shrink-0" size={20} />
                  <div className="text-sm text-blue-700">
                    <p className="font-bold mb-1">Instructions:</p>
                    <ul className="list-disc list-inside space-y-1 opacity-80">
                      <li>Use the official template for best results.</li>
                      <li>Ensure student IDs match the class list.</li>
                      <li>Scores must be within 0-30 (CA) and 0-70 (Exam).</li>
                    </ul>
                  </div>
                </div>

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all ${
                    isUploading ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-primary hover:bg-slate-50'
                  }`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept=".csv,.xlsx"
                    onChange={handleFileUpload}
                  />
                  {isUploading ? (
                    <div className="space-y-4">
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="font-bold text-primary">Processing file...</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                        <Upload size={32} />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900">Click or drag file to upload</p>
                        <p className="text-sm text-slate-500">Supports .CSV and .XLSX files</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg text-primary shadow-sm">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Results_Template.csv</p>
                      <p className="text-xs text-slate-500">12 KB • Ready to use</p>
                    </div>
                  </div>
                  <button className="text-primary hover:underline text-sm font-bold flex items-center gap-1">
                    <Download size={16} /> Download
                  </button>
                </div>
              </div>

              <div className="p-8 bg-slate-50 flex justify-end gap-3">
                <button 
                  onClick={() => setShowUploadModal(false)}
                  className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-700"
                >
                  Cancel
                </button>
                <button 
                  disabled={isUploading}
                  className="btn-primary !py-2 !px-8 !text-sm"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
