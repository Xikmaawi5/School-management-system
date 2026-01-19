
import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="h-20 glass-panel border-b border-white/5 sticky top-0 z-40 flex items-center justify-between px-6 md:px-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
        <div className="relative group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search records, students, reports..." 
            className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 w-64 md:w-96 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors group">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-gray-950 group-hover:scale-110 transition-transform"></span>
        </button>
        <div className="hidden md:flex flex-col text-right">
          <span className="text-sm font-semibold text-white">Monday, Sep 18</span>
          <span className="text-xs text-gray-500">Academic Year 2024/25</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
