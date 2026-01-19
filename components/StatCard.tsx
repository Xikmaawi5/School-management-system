
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Stat } from '../types';

const StatCard: React.FC<Stat> = ({ label, value, change, isPositive, icon, color }) => {
  return (
    <div className="glass-card p-6 rounded-2xl flex flex-col gap-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-500 shadow-lg shadow-${color}-500/5`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {change}
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">{label}</p>
        <h3 className="text-3xl font-bold font-outfit text-white">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
