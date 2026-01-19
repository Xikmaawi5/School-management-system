
import React from 'react';
import { Users, GraduationCap, BookOpen, Clock, Activity, MoreVertical } from 'lucide-react';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Students', value: '4,285', change: '+12%', isPositive: true, icon: <GraduationCap size={24} />, color: 'blue' },
    { label: 'Active Teachers', value: '184', change: '+2.4%', isPositive: true, icon: <Users size={24} />, color: 'indigo' },
    { label: 'Classes Running', value: '56', change: '-4%', isPositive: false, icon: <BookOpen size={24} />, color: 'purple' },
    { label: 'Active Sessions', value: '12', change: '+3', isPositive: true, icon: <Activity size={24} />, color: 'emerald' },
  ];

  const students = [
    { id: '#ST-2940', name: 'Marcus Aurelius', grade: 'Grade 12', status: 'Active', email: 'm.aurelius@nexus.edu' },
    { id: '#ST-2941', name: 'Hypatia Smith', grade: 'Grade 11', status: 'Probation', email: 'h.smith@nexus.edu' },
    { id: '#ST-2942', name: 'Leonhard Euler', grade: 'Grade 12', status: 'Active', email: 'l.euler@nexus.edu' },
    { id: '#ST-2943', name: 'Marie Curie', grade: 'Grade 10', status: 'On Leave', email: 'm.curie@nexus.edu' },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-outfit font-bold text-white tracking-tight">Executive Dashboard</h2>
          <p className="text-gray-400 mt-1">Real-time surveillance of campus operations and metrics.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2.5 rounded-xl glass-panel border border-white/10 text-white text-sm font-bold hover:bg-white/5 transition-colors">Generate Report</button>
          <button className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">System Settings</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <DataTable 
            title="Recent Student Enrollments"
            columns={[
              { header: 'Student ID', key: 'id' },
              { header: 'Full Name', key: 'name' },
              { header: 'Level', key: 'grade' },
              { header: 'Status', key: 'status' },
            ]}
            data={students}
            actions={() => (
              <button className="p-2 text-gray-500 hover:text-white transition-colors">
                <MoreVertical size={18} />
              </button>
            )}
          />

          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-outfit font-bold text-xl text-white mb-6">Faculty Performance Matrix</h3>
            <div className="h-64 flex items-end justify-between gap-4 px-4">
              {[60, 85, 45, 90, 75, 55, 80].map((h, i) => (
                <div key={i} className="flex-1 group relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}%
                  </div>
                  <div 
                    className="w-full bg-blue-600/20 group-hover:bg-blue-500/40 rounded-t-lg transition-all duration-500 border-t border-blue-500/30" 
                    style={{ height: `${h}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6 h-full">
            <h3 className="font-outfit font-bold text-xl text-white mb-6 flex items-center justify-between">
              Activity Stream <Activity size={18} className="text-blue-500" />
            </h3>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
              {[
                { time: '10:45 AM', action: 'System Backup Complete', desc: 'Auto-routine executed successfully', type: 'system' },
                { time: '09:12 AM', action: 'New Faculty Onboarding', desc: 'Dr. Elena Vance assigned to Bio-Lab', type: 'user' },
                { time: 'Yesterday', action: 'Grade Reports Dispatched', desc: '1,240 parents notified via nexus-mail', type: 'alert' },
                { time: 'Yesterday', action: 'Maintenance Warning', desc: 'Central AC system in Wing-B requires check', type: 'warning' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 relative">
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 z-10 border-4 border-[#030712] ${
                    item.type === 'system' ? 'bg-emerald-500' : 
                    item.type === 'user' ? 'bg-blue-500' : 
                    item.type === 'alert' ? 'bg-indigo-500' : 'bg-amber-500'
                  }`}></div>
                  <div className="flex-1 -mt-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-bold text-white">{item.action}</p>
                      <span className="text-[10px] text-gray-500 font-bold uppercase">{item.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
