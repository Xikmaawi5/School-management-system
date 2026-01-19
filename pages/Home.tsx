
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Layers, Globe, BarChart3, Users } from 'lucide-react';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel border-b border-white/5' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-xl text-white shadow-xl shadow-blue-500/20">
              N
            </div>
            <span className="font-outfit font-bold text-2xl tracking-tighter text-white">NEXUS ACADEMY</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['Features', 'Platform', 'Security', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <Link to="/login" className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all duration-300 shadow-xl shadow-white/5">
            Dashboard Portal
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10 opacity-50"></div>
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[100px] rounded-full -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-400">Next Generation ERP</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-outfit font-black tracking-tight mb-8 leading-[0.9] animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">MASTER YOUR</span> <br />
            <span className="text-blue-500">ACADEMIC GALAXY</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A high-performance command center for modern educational institutions. Integrated dashboards for administrators, teachers, students, and finance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/login" className="group px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold flex items-center gap-3 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-blue-500/25">
              Launch Dashboards <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 rounded-2xl glass-panel border border-white/10 text-white font-bold hover:bg-white/5 transition-all duration-300">
              Watch Demo Trailer
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Active Students', value: '12,480+', icon: <Users className="text-blue-500" /> },
            { label: 'Global Campuses', value: '14', icon: <Globe className="text-purple-500" /> },
            { label: 'Efficiency Boost', value: '98%', icon: <Zap className="text-amber-500" /> },
            { label: 'Annual Revenue', value: '$24M', icon: <BarChart3 className="text-emerald-500" /> },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex mb-4 p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-outfit font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-outfit font-bold text-white mb-4">Precision Engineering</h2>
            <p className="text-gray-400">Everything you need to manage elite educational environments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Role-Based Control', desc: 'Secure, granular access for administrators, staff, and students with customized views.', icon: <Shield size={32} /> },
              { title: 'Financial Intelligence', desc: 'Comprehensive billing, payroll, and revenue forecasting dashboards with real-time analytics.', icon: <Layers size={32} /> },
              { title: 'Cinematic Analytics', desc: 'Data visualization that tells a story. Monitor performance and attendance at a glance.', icon: <Zap size={32} /> },
            ].map((feature, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-outfit font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Preview */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">N</div>
            <span className="font-outfit font-bold text-xl text-white">NEXUS</span>
          </div>
          <p className="text-sm text-gray-500">© 2024 Nexus Academy Systems. Built for the future of learning.</p>
          <div className="flex gap-6">
            {['Twitter', 'GitHub', 'LinkedIn'].map(link => (
              <a key={link} href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
