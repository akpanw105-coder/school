export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  image: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Student {
  id: string;
  name: string;
  class: string;
  arm: string;
  admissionNumber: string;
  photo: string;
  session: string;
  term: string;
  level: 'primary' | 'secondary';
  guardianName?: string;
  guardianPhone?: string;
}

export interface Result {
  subject: string;
  ca: number;
  exam: number;
  total: number;
  grade: string;
}

export interface Assignment {
  id: string;
  subject: string;
  title: string;
  deadline: string;
  status: 'pending' | 'submitted' | 'graded';
}

export interface TimetableEntry {
  day: string;
  periods: { time: string; subject: string }[];
}

export interface PaymentRecord {
  id: string;
  description: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending';
}

export interface Teacher {
  id: string;
  name: string;
  role: 'Class Teacher' | 'Subject Teacher';
  level: 'primary' | 'secondary';
  photo: string;
  assignedClasses: string[];
  subjects: string[];
  session: string;
  term: string;
  class?: string; // For Class Teachers
}

export interface AttendanceRecord {
  studentId: string;
  studentName: string;
  status: 'present' | 'absent' | 'late';
  date: string;
}

export interface Admin {
  id: string;
  name: string;
  role: 'Super Admin' | 'Admin';
  email: string;
  photo: string;
}
