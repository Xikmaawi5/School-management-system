
import React from 'react';
// Added missing Clock icon import
import { Wallet, TrendingUp, CreditCard, DollarSign, Download, MoreHorizontal, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';
import DataTable from '../components/DataTable';

const BalanceDashboard = () => {
  const stats = [
    { label: 'Gross Revenue', value: '$842,500', change: '+18%', isPositive: true, icon: <DollarSign size={24} />, color: 'emerald' },
    // Using the imported Clock icon
    { label: 'Pending Payments', value: '$24,120', change: '-2%', isPositive: true, icon: <Clock size={24} />, color: 'amber' },
    { label: 'Active Invoices', value: '1,420', change: '+45', isPositive: true, icon: <CreditCard size={24} />, color: 'blue' },
    { label: 'Expenses', value: '$124,000', change: '+5%', isPositive: false, icon: <Wallet size={24} />, color: 'rose' },
  ];

  const transactions = [
    { id: '#INV-9021', student: 'Sarah Connor', amount: '$4,200', date: 'Sep 15, 2024', status: 'Paid' },
    { id: '#INV-9022', student: 'John Miller', amount: '$3,850', date: 'Sep 16, 2024', status: 'Pending' },
    { id: '#INV-9023', student: 'Emma Watson', amount: '$4,200', date: 'Sep 16, 2024', status: 'Paid' },
    { id: '#INV-9024', student: 'Robert De Niro', amount: '$1,200', date: 'Sep 17, 2024', status: 'Overdue' },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-outfit font-bold text-white tracking-tight">Financial Intelligence</h2>
          <p className="text-gray-400 mt-1">Campus-wide treasury management and revenue tracking.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-bold text-sm hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
          <Download size={18} /> Export Financial Ledger
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <DataTable 
            title="Recent Billing Transactions"
            columns={[
              { header: 'Invoice ID', key: 'id' },
              { header: 'Student Account', key: 'student' },
              { header: 'Amount', key: 'amount' },
              { header: 'Date', key: 'date' },
              { header: 'Status', key: 'status' },
            ]}
            data={transactions}
            actions={(row) => (
              <span className={`px-2 py-1 rounded-[4px] text-[10px] font-black uppercase tracking-widest ${
                row.status === 'Paid' ? 'bg-emerald-500/10 text-emerald-500' :
                row.status === 'Pending' ? 'bg-amber-500/10 text-amber-500' : 'bg-rose-500/10 text-red-500'
              }`}>
                {row.status}
              </span>
            )}
          />
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-3xl p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
            <div className="flex justify-between items-start mb-10">
              <CreditCard size={32} />
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Nexus Reserve</p>
                <p className="text-lg font-outfit font-bold">**** 8842</p>
              </div>
            </div>
            <div className="mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Vault Balance</p>
              <h4 className="text-4xl font-outfit font-bold">$2,842,900.00</h4>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Authorized Officer</p>
                <p className="text-sm font-bold">FINANCE-ALPHA-01</p>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-6 opacity-60" alt="Card provider" />
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-outfit font-bold text-xl text-white mb-6">Revenue Growth</h3>
            <div className="space-y-4">
              {[
                { label: 'Tuition Fees', value: '$680k', p: 80, color: 'blue' },
                { label: 'Lab/Asset Fees', value: '$92k', p: 40, color: 'purple' },
                { label: 'Endowments', value: '$70k', p: 15, color: 'emerald' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="text-white">{item.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full bg-${item.color}-500`} style={{ width: `${item.p}%` }}></div>
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

export default BalanceDashboard;
