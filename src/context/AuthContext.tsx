import React, { createContext, useContext, useState, useEffect } from 'react';
import { Student, Teacher, Admin } from '../types';
import { MOCK_STUDENTS, MOCK_TEACHERS, MOCK_ADMINS } from '../constants';

interface AuthContextType {
  user: Student | Teacher | Admin | null;
  login: (id: string, pin: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  userType: 'student' | 'teacher' | 'admin' | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Student | Teacher | Admin | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('horizon_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (id: string, pin: string) => {
    // Mock login logic
    const student = MOCK_STUDENTS[id];
    const teacher = MOCK_TEACHERS[id];
    const admin = MOCK_ADMINS[id];

    if (student && pin === '1234') {
      setUser(student);
      localStorage.setItem('horizon_user', JSON.stringify(student));
      return true;
    }

    if (teacher && pin === '1234') {
      setUser(teacher);
      localStorage.setItem('horizon_user', JSON.stringify(teacher));
      return true;
    }

    if (admin && pin === '1234') {
      setUser(admin);
      localStorage.setItem('horizon_user', JSON.stringify(admin));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('horizon_user');
  };

  const userType = user ? (
    'admissionNumber' in user ? 'student' : 
    'assignedClasses' in user ? 'teacher' : 'admin'
  ) : null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, userType }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
