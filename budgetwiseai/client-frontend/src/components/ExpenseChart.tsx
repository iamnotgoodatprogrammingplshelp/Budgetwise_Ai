import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ExpenseCategory } from '../types';

interface ExpenseChartProps {
  expenses: ExpenseCategory[];
}

export function ExpenseChart({ expenses }: ExpenseChartProps) {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-semibold">{data.category}</p>
          <p className="text-blue-600">${data.amount.toLocaleString()}</p>
          <p className="text-gray-600">{data.percentage}% of total</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="analysis" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Expense Analysis</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI breakdown of your spending patterns and recommendations for optimization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Monthly Expense Distribution</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={expenses}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {expenses.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Housing costs</strong> represent 38.7% of your income, which is within the recommended 30-40% range.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Entertainment spending</strong> is 15% above average. Consider reducing by $150/month.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Transportation costs</strong> are well-optimized at 12.9% of expenses.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Category Breakdown</h4>
              <div className="space-y-3">
                {expenses.map((expense, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: expense.color }}
                      ></div>
                      <span className="text-gray-700">{expense.category}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${expense.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{expense.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}