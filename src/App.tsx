import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DashboardLayout } from './components/DashboardLayout';

// Lazy load pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Admissions } from './pages/Admissions';
import { Staff } from './pages/Staff';
import { Facilities } from './pages/Facilities';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { DashboardOverview } from './pages/dashboard/Overview';
import { DashboardAcademics } from './pages/dashboard/Academics';
import { DashboardTimetable } from './pages/dashboard/Timetable';
import { TeacherDashboardLayout } from './components/TeacherDashboardLayout';
import { TeacherOverview } from './pages/teacher/Overview';
import { ClassManagement } from './pages/teacher/ClassManagement';
import { ResultsEntry } from './pages/teacher/ResultsEntry';
import { Attendance } from './pages/teacher/Attendance';
import { AdminDashboardLayout } from './components/AdminDashboardLayout';
import { AdminOverview } from './pages/admin/Overview';
import { AdminStudents } from './pages/admin/Students';
import { AdminTeachers } from './pages/admin/Teachers';
import { AdminFinance } from './pages/admin/Finance';
import { AdminReports } from './pages/admin/Reports';
import { AdminSettings } from './pages/admin/Settings';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedType?: 'student' | 'teacher' }> = ({ children, allowedType }) => {
  const { isAuthenticated, userType } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (allowedType && userType !== allowedType) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

const DashboardRouter: React.FC = () => {
  const { userType } = useAuth();

  if (userType === 'admin') {
    return (
      <AdminDashboardLayout>
        <Routes>
          <Route index element={<AdminOverview />} />
          <Route path="students" element={<AdminStudents />} />
          <Route path="teachers" element={<AdminTeachers />} />
          <Route path="finance" element={<AdminFinance />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="*" element={
            <div className="p-12 text-center">
              <h2 className="text-2xl font-bold text-slate-400">Section Under Development</h2>
              <p className="text-slate-500 mt-2">Admin features are being added to the control panel.</p>
            </div>
          } />
        </Routes>
      </AdminDashboardLayout>
    );
  }

  if (userType === 'teacher') {
    return (
      <TeacherDashboardLayout>
        <Routes>
          <Route index element={<TeacherOverview />} />
          <Route path="classes" element={<ClassManagement />} />
          <Route path="results" element={<ResultsEntry />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="*" element={
            <div className="p-12 text-center">
              <h2 className="text-2xl font-bold text-slate-400">Section Under Development</h2>
              <p className="text-slate-500 mt-2">This part of the teacher portal is coming soon.</p>
            </div>
          } />
        </Routes>
      </TeacherDashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<DashboardOverview />} />
        <Route path="academics" element={<DashboardAcademics />} />
        <Route path="timetable" element={<DashboardTimetable />} />
        <Route path="*" element={
          <div className="p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-400">Section Under Development</h2>
            <p className="text-slate-500 mt-2">This part of the student portal is coming soon.</p>
          </div>
        } />
      </Routes>
    </DashboardLayout>
  );
};

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><PageWrapper><Home /></PageWrapper></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><PageWrapper><About /></PageWrapper></PublicLayout>} />
          <Route path="/academics" element={<PublicLayout><PageWrapper><Academics /></PageWrapper></PublicLayout>} />
          <Route path="/admissions" element={<PublicLayout><PageWrapper><Admissions /></PageWrapper></PublicLayout>} />
          <Route path="/staff" element={<PublicLayout><PageWrapper><Staff /></PageWrapper></PublicLayout>} />
          <Route path="/facilities" element={<PublicLayout><PageWrapper><Facilities /></PageWrapper></PublicLayout>} />
          <Route path="/gallery" element={<PublicLayout><PageWrapper><Gallery /></PageWrapper></PublicLayout>} />
          <Route path="/news" element={<PublicLayout><PageWrapper><News /></PageWrapper></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><PageWrapper><Contact /></PageWrapper></PublicLayout>} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/*" element={
            <ProtectedRoute>
              <DashboardRouter />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
