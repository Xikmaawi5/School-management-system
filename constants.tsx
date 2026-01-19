
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Wallet, 
  Settings, 
  Bell, 
  Search,
  Calendar,
  CheckCircle,
  TrendingUp,
  Clock
} from 'lucide-react';
import { UserRole, NavItem } from './types';

export const ROLE_CONFIG = {
  [UserRole.ADMIN]: {
    name: 'Administrator',
    nav: [
      { label: 'Overview', path: '/admin', icon: <LayoutDashboard size={20} /> },
      { label: 'Students', path: '/admin/students', icon: <GraduationCap size={20} /> },
      { label: 'Teachers', path: '/admin/teachers', icon: <Users size={20} /> },
      { label: 'Classes', path: '/admin/classes', icon: <BookOpen size={20} /> },
      { label: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> }
    ]
  },
  [UserRole.TEACHER]: {
    name: 'Teacher',
    nav: [
      { label: 'My Classes', path: '/teacher', icon: <BookOpen size={20} /> },
      { label: 'Attendance', path: '/teacher/attendance', icon: <CheckCircle size={20} /> },
      { label: 'Exams', path: '/teacher/exams', icon: <LayoutDashboard size={20} /> },
      { label: 'Performance', path: '/teacher/performance', icon: <TrendingUp size={20} /> }
    ]
  },
  [UserRole.STUDENT]: {
    name: 'Student',
    nav: [
      { label: 'My Dashboard', path: '/student', icon: <LayoutDashboard size={20} /> },
      { label: 'My Results', path: '/student/results', icon: <TrendingUp size={20} /> },
      { label: 'Schedule', path: '/student/schedule', icon: <Calendar size={20} /> },
      { label: 'Info', path: '/student/info', icon: <Users size={20} /> }
    ]
  },
  [UserRole.BALANCE]: {
    name: 'Finance Officer',
    nav: [
      { label: 'Balance Summary', path: '/balance', icon: <Wallet size={20} /> },
      { label: 'Monthly Report', path: '/balance/monthly', icon: <TrendingUp size={20} /> },
      { label: 'Payments', path: '/balance/payments', icon: <Clock size={20} /> }
    ]
  }
};
