export interface User {
  id: string;
  name: string;
  email: string;
  designation: string;
  department: string;
  photo?: string;
  signature?: string;
  isVerified: boolean;
  createdAt: Date;
}

export interface DiaryEntry {
  id: string;
  userId: string;
  date: Date;
  subject: string;
  topic: string;
  classType: 'theory' | 'practical' | 'tutorial';
  duration: number;
  studentsPresent: number;
  totalStudents: number;
  remarks?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MonthlyStats {
  allottedClasses: number;
  classesTaken: number;
  classesNotTaken: number;
  attendancePercentage: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export interface RegisterData {
  name: string;
  designation: string;
  department: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo?: File;
  signature?: File;
}

export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type ModalType = 'login' | 'register' | null;

export type DashboardView = 'dashboard' | 'add-diary' | 'edit-diary' | 'profile' | 'verification';