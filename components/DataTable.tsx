
import React from 'react';

interface DataTableProps {
  title: string;
  columns: { header: string; key: string }[];
  data: any[];
  actions?: (item: any) => React.ReactNode;
}

const DataTable: React.FC<DataTableProps> = ({ title, columns, data, actions }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
        <h3 className="font-outfit font-bold text-xl text-white">{title}</h3>
        <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-white/[0.02]">
              {columns.map((col) => (
                <th key={col.key} className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {col.header}
                </th>
              ))}
              {actions && <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {row[col.key]}
                    </span>
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-4 text-right">
                    {actions(row)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
