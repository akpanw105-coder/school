import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Student } from '../../types';
import { PrimaryDashboard } from './PrimaryDashboard';
import { SecondaryDashboard } from './SecondaryDashboard';

export const DashboardOverview: React.FC = () => {
  const { user, userType } = useAuth();

  if (userType !== 'student') return null;
  const student = user as Student;

  if (student.level === 'primary') {
    return <PrimaryDashboard />;
  }

  return <SecondaryDashboard />;
};
