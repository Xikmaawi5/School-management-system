
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import BalanceDashboard from './pages/BalanceDashboard';
import { UserRole } from './types';

const DashboardLayout: React.FC<{ children: React.ReactNode; role: UserRole }> = ({ children, role }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#030712]">
      <Sidebar 
        role={role} 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <div className={`flex-1 flex flex-col transition-all duration-500 ease-in-out ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 p-6 md:p-10 lg:p-14 overflow-x-hidden">
          {children}
        </main>
        {/* Consistent Footer for all but Student */}
        {role !== UserRole.STUDENT && (
          <footer className="p-8 text-center text-[10px] font-bold text-gray-600 uppercase tracking-widest border-t border-white/5">
            Nexus Academy Operating System | Version 4.8.2-Final | Secured by Cerberus AI
          </footer>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard Branches */}
        <Route 
          path="/admin/*" 
          element={
            <DashboardLayout role={UserRole.ADMIN}>
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/students" element={<div className="text-white p-10 glass-panel rounded-3xl">Student Management Module - Ready for Deployment</div>} />
                <Route path="/teachers" element={<div className="text-white p-10 glass-panel rounded-3xl">Faculty Management Module - Ready for Deployment</div>} />
                <Route path="/classes" element={<div className="text-white p-10 glass-panel rounded-3xl">Curriculum Management Module - Ready for Deployment</div>} />
                <Route path="/settings" element={<div className="text-white p-10 glass-panel rounded-3xl">Global System Parameters - Ready for Deployment</div>} />
              </Routes>
            </DashboardLayout>
          } 
        />

        <Route 
          path="/teacher/*" 
          element={
            <DashboardLayout role={UserRole.TEACHER}>
              <Routes>
                <Route path="/" element={<TeacherDashboard />} />
                <Route path="/attendance" element={<div className="text-white p-10 glass-panel rounded-3xl">Biometric Attendance Interface - Ready for Deployment</div>} />
                <Route path="/exams" element={<div className="text-white p-10 glass-panel rounded-3xl">Examination Controller - Ready for Deployment</div>} />
                <Route path="/performance" element={<div className="text-white p-10 glass-panel rounded-3xl">Academic Growth Analytics - Ready for Deployment</div>} />
              </Routes>
            </DashboardLayout>
          } 
        />

        <Route 
          path="/student/*" 
          element={
            <DashboardLayout role={UserRole.STUDENT}>
              <Routes>
                <Route path="/" element={<StudentDashboard />} />
                <Route path="/results" element={<div className="text-white p-10 glass-panel rounded-3xl">Grade Archival System - Ready for Deployment</div>} />
                <Route path="/schedule" element={<div className="text-white p-10 glass-panel rounded-3xl">Interactive Course Timeline - Ready for Deployment</div>} />
                <Route path="/info" element={<div className="text-white p-10 glass-panel rounded-3xl">Personal Data Profile - Ready for Deployment</div>} />
              </Routes>
            </DashboardLayout>
          } 
        />

        <Route 
          path="/balance/*" 
          element={
            <DashboardLayout role={UserRole.BALANCE}>
              <Routes>
                <Route path="/" element={<BalanceDashboard />} />
                <Route path="/monthly" element={<div className="text-white p-10 glass-panel rounded-3xl">Monthly Financial Aggregator - Ready for Deployment</div>} />
                <Route path="/payments" element={<div className="text-white p-10 glass-panel rounded-3xl">Transaction Processor - Ready for Deployment</div>} />
              </Routes>
            </DashboardLayout>
          } 
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
