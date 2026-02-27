import { NavItem, NewsItem, StaffMember, Facility, Student, Result, Assignment, TimetableEntry, PaymentRecord, Teacher, Admin } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Staff', href: '/staff' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Annual Inter-House Sports Competition',
    date: 'March 15, 2026',
    excerpt: 'Join us for a day of athletic excellence and school spirit as our students compete in various track and field events.',
    category: 'Sports',
    image: 'https://picsum.photos/seed/sports/800/600',
  },
  {
    id: '2',
    title: 'Science Fair Winners Announced',
    date: 'February 20, 2026',
    excerpt: 'Congratulations to our young innovators who showcased brilliant projects at this year\'s Horizon Science Fair.',
    category: 'Academics',
    image: 'https://picsum.photos/seed/science/800/600',
  },
  {
    id: '3',
    title: 'New ICT Center Commissioned',
    date: 'January 10, 2026',
    excerpt: 'We are proud to announce the opening of our state-of-the-art ICT center, equipped with the latest computing technology.',
    category: 'Facilities',
    image: 'https://picsum.photos/seed/tech/800/600',
  },
];

export const STAFF: StaffMember[] = [
  {
    id: '1',
    name: 'Dr. Elizabeth Thompson',
    role: 'Principal / Proprietress',
    qualification: 'Ph.D. in Educational Management',
    image: 'https://picsum.photos/seed/principal/400/400',
  },
  {
    id: '2',
    name: 'Mr. David Okafor',
    role: 'Vice Principal (Secondary)',
    qualification: 'M.Ed. in Curriculum Studies',
    image: 'https://picsum.photos/seed/vp/400/400',
  },
  {
    id: '3',
    name: 'Mrs. Sarah Jenkins',
    role: 'Head Teacher (Primary)',
    qualification: 'B.Ed. in Early Childhood Education',
    image: 'https://picsum.photos/seed/headteacher/400/400',
  },
];

export const FACILITIES: Facility[] = [
  {
    id: '1',
    title: 'Modern Classrooms',
    description: 'Spacious, well-ventilated, and equipped with interactive smart boards to enhance learning.',
    image: 'https://picsum.photos/seed/classroom/800/600',
  },
  {
    id: '2',
    title: 'Science Laboratories',
    description: 'Fully equipped labs for Physics, Chemistry, and Biology to foster practical scientific inquiry.',
    image: 'https://picsum.photos/seed/lab/800/600',
  },
  {
    id: '3',
    title: 'Digital Library',
    description: 'A vast collection of physical books and digital resources to support research and reading habits.',
    image: 'https://picsum.photos/seed/library/800/600',
  },
  {
    id: '4',
    title: 'Sports Complex',
    description: 'Facilities for football, basketball, volleyball, and track events to promote physical fitness.',
    image: 'https://picsum.photos/seed/stadium/800/600',
  },
];

export const MOCK_STUDENTS: Record<string, Student> = {
  'HA/2024/001': {
    id: 'STU001',
    name: 'Alex Johnson',
    class: 'SSS 2',
    arm: 'A (Science)',
    admissionNumber: 'HA/2024/001',
    photo: 'https://picsum.photos/seed/student-sec/200/200',
    session: '2025/2026',
    term: 'Second Term',
    level: 'secondary',
  },
  'HA/2024/002': {
    id: 'STU002',
    name: 'Toby Smith',
    class: 'Primary 3',
    arm: 'Blue',
    admissionNumber: 'HA/2024/002',
    photo: 'https://picsum.photos/seed/student-pri/200/200',
    session: '2025/2026',
    term: 'Second Term',
    level: 'primary',
    guardianName: 'Mr. Robert Smith',
    guardianPhone: '+1 (555) 012-3456',
  },
  'HA/2024/003': {
    id: 'STU003',
    name: 'Sarah Williams',
    class: 'SSS 1',
    arm: 'B (Arts)',
    admissionNumber: 'HA/2024/003',
    photo: 'https://picsum.photos/seed/student3/200/200',
    session: '2025/2026',
    term: 'Second Term',
    level: 'secondary',
  },
  'HA/2024/004': {
    id: 'STU004',
    name: 'Michael Chen',
    class: 'Primary 5',
    arm: 'Red',
    admissionNumber: 'HA/2024/004',
    photo: 'https://picsum.photos/seed/student4/200/200',
    session: '2025/2026',
    term: 'Second Term',
    level: 'primary',
    guardianName: 'Mrs. Li Chen',
  },
  'HA/2024/005': {
    id: 'STU005',
    name: 'Zainab Yusuf',
    class: 'SSS 3',
    arm: 'A (Science)',
    admissionNumber: 'HA/2024/005',
    photo: 'https://picsum.photos/seed/student5/200/200',
    session: '2025/2026',
    term: 'Second Term',
    level: 'secondary',
  },
  'HA/2024/006': {
    id: 'STU006',
    name: 'David Brown',
    class: 'Primary 2',
    arm: 'Green',
    admissionNumber: 'HA/2024/006',
    photo: 'https://picsum.photos/seed/student6/200/200',
    session: '2025/2026',
    term: 'Second Term',
    level: 'primary',
  },
  'HA/2024/007': {
    id: 'STU007',
    name: 'Emily Davis',
    class: 'SSS 2',
    arm: 'C (Commercial)',
    admissionNumber: 'HA/2024/007',
    photo: 'https://picsum.photos/seed/student7/200/200',
    session: '2025/2026',
    term: 'Second Term',
    level: 'secondary',
  },
  'HA/2024/008': {
    id: 'STU008',
    name: 'James Wilson',
    class: 'Primary 4',
    arm: 'Yellow',
    admissionNumber: 'HA/2024/008',
    photo: 'https://picsum.photos/seed/student8/200/200',
    session: '2025/2026',
    term: 'Second Term',
    level: 'primary',
  },
};

export const MOCK_STUDENT = MOCK_STUDENTS['HA/2024/001'];

export const MOCK_RESULTS: Result[] = [
  { subject: 'Mathematics', ca: 28, exam: 58, total: 86, grade: 'A1' },
  { subject: 'English Language', ca: 25, exam: 60, total: 85, grade: 'A1' },
  { subject: 'Physics', ca: 24, exam: 52, total: 76, grade: 'B2' },
  { subject: 'Chemistry', ca: 26, exam: 50, total: 76, grade: 'B2' },
  { subject: 'Biology', ca: 27, exam: 55, total: 82, grade: 'A1' },
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
  { id: '1', subject: 'Mathematics', title: 'Calculus Worksheet 4', deadline: '2026-03-05', status: 'pending' },
  { id: '2', subject: 'Physics', title: 'Optics Lab Report', deadline: '2026-03-02', status: 'submitted' },
  { id: '3', subject: 'English', title: 'Essay: The Future of AI', deadline: '2026-02-28', status: 'graded' },
];

export const MOCK_TIMETABLE: TimetableEntry[] = [
  {
    day: 'Monday',
    periods: [
      { time: '08:00 - 09:00', subject: 'Mathematics' },
      { time: '09:00 - 10:00', subject: 'Physics' },
      { time: '10:30 - 11:30', subject: 'Chemistry' },
    ],
  },
  {
    day: 'Tuesday',
    periods: [
      { time: '08:00 - 09:00', subject: 'English' },
      { time: '09:00 - 10:00', subject: 'Biology' },
      { time: '10:30 - 11:30', subject: 'Geography' },
    ],
  },
];

export const MOCK_TEACHERS: Record<string, Teacher> = {
  'TEA/2024/001': {
    id: 'TEA001',
    name: 'Mrs. Sarah Jenkins',
    role: 'Class Teacher',
    level: 'primary',
    photo: 'https://picsum.photos/seed/teacher-pri/200/200',
    assignedClasses: ['Primary 3A', 'Primary 3B'],
    subjects: ['Mathematics', 'English', 'Science'],
    session: '2025/2026',
    term: 'Second Term',
    class: 'Primary 3A',
  },
  'TEA/2024/002': {
    id: 'TEA002',
    name: 'Mr. David Okafor',
    role: 'Subject Teacher',
    level: 'secondary',
    photo: 'https://picsum.photos/seed/teacher-sec/200/200',
    assignedClasses: ['SSS 1', 'SSS 2', 'SSS 3'],
    subjects: ['Physics', 'Further Mathematics'],
    session: '2025/2026',
    term: 'Second Term',
  },
};

export const MOCK_ADMINS: Record<string, Admin> = {
  'ADM/2024/001': {
    id: 'ADM001',
    name: 'Dr. Elizabeth Thompson',
    role: 'Super Admin',
    email: 'admin@horizonacademy.edu',
    photo: 'https://picsum.photos/seed/admin/200/200',
  },
};

export const MOCK_PAYMENTS: PaymentRecord[] = [
  { id: 'PAY001', description: 'Tuition Fees - Second Term', amount: 2000, date: '2026-01-15', status: 'paid' },
  { id: 'PAY002', description: 'Laboratory Levy', amount: 200, date: '2026-01-15', status: 'paid' },
  { id: 'PAY003', description: 'Inter-House Sports Fee', amount: 50, date: '2026-02-10', status: 'pending' },
];
