
import React from 'react';
import { Calendar, Award, BookOpen, Clock, FileText } from 'lucide-react';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';

const StudentDashboard = () => {
  const stats = [
    { label: 'Attendance', value: '96%', change: '+2%', isPositive: true, icon: <Calendar size={24} />, color: 'blue' },
    { label: 'GPA Score', value: '3.92', change: '+0.05', isPositive: true, icon: <Award size={24} />, color: 'emerald' },
    { label: 'Credits Done', value: '48', change: 'Total 120', isPositive: true, icon: <BookOpen size={24} />, color: 'indigo' },
    { label: 'Next Class', value: '14:00', change: 'Lab 2', isPositive: true, icon: <Clock size={24} />, color: 'amber' },
  ];

  const results = [
    { subject: 'Advanced Mathematics', grade: 'A+', score: '98/100', credit: '4.0' },
    { subject: 'Quantum Physics', grade: 'A', score: '92/100', credit: '4.0' },
    { subject: 'Molecular Biology', grade: 'A-', score: '89/100', credit: '3.7' },
    { subject: 'Ethics in Tech', grade: 'B+', score: '85/100', credit: '3.3' },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-outfit font-bold text-white tracking-tight">Student Portal</h2>
          <p className="text-gray-400 mt-1">Review your academic progress and upcoming milestones.</p>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-panel border border-emerald-500/20">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Academic Status: Elite</span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <DataTable 
            title="Semester Performance Report"
            columns={[
              { header: 'Subject', key: 'subject' },
              { header: 'Grade', key: 'grade' },
              { header: 'Score', key: 'score' },
              { header: 'Credit Pts', key: 'credit' },
            ]}
            data={results}
            actions={() => (
              <button className="text-blue-500 hover:text-blue-400 transition-colors">
                <FileText size={18} />
              </button>
            )}
          />
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-outfit font-bold text-xl text-white mb-6">Upcoming Assignments</h3>
          <div className="space-y-6">
            {[
              { title: 'Project: Neural Networks', sub: 'CS-402', due: 'Sep 24, 2024', urgent: true },
              { title: 'Lab Report: Optics', sub: 'PH-305', due: 'Sep 28, 2024', urgent: false },
              { title: 'Ethics Case Study', sub: 'HUM-101', due: 'Oct 02, 2024', urgent: false },
            ].map((job, i) => (
              <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-white/10 hover:before:bg-blue-500 transition-all duration-300">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-white">{job.title}</h4>
                  {job.urgent && <span className="text-[8px] bg-red-500/20 text-red-500 px-1.5 py-0.5 rounded font-black uppercase tracking-widest">Urgent</span>}
                </div>
                <p className="text-xs text-gray-500 mb-2 font-medium">{job.sub}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-600">
                  <Clock size={12} /> DUE: {job.due}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
            View Academic Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
