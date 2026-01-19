
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, ChevronRight } from 'lucide-react';
import { UserRole } from '../types';
import { ROLE_CONFIG } from '../constants';

interface SidebarProps {
  role: UserRole;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, isOpen, toggleSidebar }) => {
  const location = useLocation();
  const config = ROLE_CONFIG[role];

  return (
    <aside 
      className={`fixed top-0 left-0 h-full glass-panel z-50 transition-all duration-500 ease-in-out ${
        isOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full md:translate-x-0'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Brand */}
        <div className="p-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
              N
            </div>
            {isOpen && <span className="font-outfit font-bold text-xl tracking-tight text-white">NEXUS</span>}
          </Link>
          <button onClick={toggleSidebar} className="md:hidden text-gray-400 hover:text-white">
            <ChevronRight size={24} className={isOpen ? 'rotate-180' : ''} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {config.nav.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <span className={isActive ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-300'}>
                  {item.icon}
                </span>
                {isOpen && <span className="font-medium whitespace-nowrap">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Profile/Logout */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-sm">
              JD
            </div>
            {isOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate capitalize">{role}</p>
              </div>
            )}
          </div>
          <Link 
            to="/login" 
            className="flex items-center gap-4 px-4 py-3 mt-2 rounded-xl text-red-400 hover:bg-red-400/10 transition-all duration-200"
          >
            <LogOut size={20} />
            {isOpen && <span className="font-medium">Logout</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
