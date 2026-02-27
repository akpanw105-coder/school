import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, CreditCard, TrendingUp, TrendingDown, Clock, CheckCircle2, Download, Filter } from 'lucide-react';
import { MOCK_PAYMENTS } from '../../constants';

export const AdminFinance: React.FC = () => {
  const totalRevenue = MOCK_PAYMENTS.filter(p => p.status === 'paid').reduce((acc, curr) => acc + curr.amount, 0);
  const pendingRevenue = MOCK_PAYMENTS.filter(p => p.status === 'pending').reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Financial Management</h1>
          <p className="text-slate-500">Track tuition fees, expenses, and school revenue.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Download size={18} />
            Financial Report
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-all">
            <DollarSign size={18} />
            Record Payment
          </button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
              <TrendingUp size={24} />
            </div>
            <span className="text-emerald-500 text-xs font-bold">+12.5%</span>
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Collected</p>
          <p className="text-3xl font-black text-slate-900 mt-1">${totalRevenue.toLocaleString()}</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-amber-100 p-3 rounded-2xl text-amber-600">
              <Clock size={24} />
            </div>
            <span className="text-amber-500 text-xs font-bold">42 Students</span>
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pending Fees</p>
          <p className="text-3xl font-black text-slate-900 mt-1">${pendingRevenue.toLocaleString()}</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-red-100 p-3 rounded-2xl text-red-600">
              <TrendingDown size={24} />
            </div>
            <span className="text-red-500 text-xs font-bold">-2.1%</span>
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Expenses</p>
          <p className="text-3xl font-black text-slate-900 mt-1">$12,450</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-900">Recent Transactions</h3>
          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
            <Filter size={18} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="px-8 py-5">Description</th>
                <th className="px-8 py-5">Amount</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_PAYMENTS.map((payment, i) => (
                <motion.tr
                  key={payment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-100 p-2 rounded-lg text-slate-500">
                        <CreditCard size={18} />
                      </div>
                      <span className="font-bold text-slate-900">{payment.description}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 font-black text-slate-900">${payment.amount.toLocaleString()}</td>
                  <td className="px-8 py-5 text-sm text-slate-500">{payment.date}</td>
                  <td className="px-8 py-5">
                    <span className={`flex items-center gap-1.5 text-xs font-bold ${
                      payment.status === 'paid' ? 'text-emerald-600' : 'text-amber-600'
                    }`}>
                      {payment.status === 'paid' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-xs font-bold text-primary hover:underline">View Receipt</button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
