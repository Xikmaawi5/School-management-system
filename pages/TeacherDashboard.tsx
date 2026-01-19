
import React from 'react';
import { BookOpen, Users, CheckSquare, Award, Play } from 'lucide-react';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';

const TeacherDashboard = () => {
  const stats = [
    { label: 'My Students', value: '142', change: '+5', isPositive: true, icon: <Users size={24} />, color: 'blue' },
    { label: 'Active Classes', value: '4', change: 'Stable', isPositive: true, icon: <BookOpen size={24} />, color: 'indigo' },
    { label: 'Exams Scheduled', value: '2', change: 'Next: Friday', isPositive: true, icon: <CheckSquare size={24} />, color: 'amber' },
    { label: 'Class GPA', value: '3.8', change: '+0.2', isPositive: true, icon: <Award size={24} />, color: 'emerald' },
  ];

  const classes = [
    { code: 'PHYS-301', name: 'Quantum Mechanics II', time: '10:00 AM', room: 'Lab 4B', students: '32' },
    { code: 'MATH-402', name: 'Complex Analysis', time: '01:30 PM', room: 'Hall 12', students: '28' },
    { code: 'AST-101', name: 'Intro to Astrophysics', time: '04:00 PM', room: 'Observatory', students: '45' },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <div>
        <h2 className="text-4xl font-outfit font-bold text-white tracking-tight">Academic Command</h2>
        <p className="text-gray-400 mt-1">Managing your courses and student performance metrics.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <DataTable 
            title="Today's Lecture Schedule"
            columns={[
              { header: 'Code', key: 'code' },
              { header: 'Course Name', key: 'name' },
              { header: 'Time', key: 'time' },
              { header: 'Room', key: 'room' },
              { header: 'Capacity', key: 'students' },
            ]}
            data={classes}
            actions={() => (
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all text-xs font-bold uppercase tracking-widest">
                <Play size={14} /> Start
              </button>
            )}
          />
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="font-outfit font-bold text-xl text-white mb-6">Upcoming Submissions</h3>
          <div className="space-y-4">
            {[
              { title: 'Relativity Essay', subject: 'PHYS-301', due: 'In 2 Days', count: '14/32' },
              { title: 'Midterm Research', subject: 'AST-101', due: 'In 5 Days', count: '0/45' },
              { title: 'Calculus Quiz', subject: 'MATH-402', due: 'Completed', count: '28/28' },
            ].map((task, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-bold text-white">{task.title}</p>
                    <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{task.subject}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded ${task.due === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                    {task.due}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden mr-4">
                    <div className="bg-blue-600 h-full" style={{ width: `${(parseInt(task.count) / parseInt(task.count.split('/')[1])) * 100}%` }}></div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-500">{task.count} Submitted</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
