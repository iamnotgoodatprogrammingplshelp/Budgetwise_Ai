import React from 'react';
import { Target, Calendar, TrendingUp, CheckCircle } from 'lucide-react';
import { FinancialGoal } from '../types';

interface GoalsProps {
  goals: FinancialGoal[];
}

export function Goals({ goals }: GoalsProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const calculateProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const calculateMonthsRemaining = (deadline: Date) => {
    const now = new Date();
    const diffTime = deadline.getTime() - now.getTime();
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return Math.max(diffMonths, 0);
  };

  const calculateMonthlySavingsNeeded = (goal: FinancialGoal) => {
    const remaining = goal.targetAmount - goal.currentAmount;
    const monthsLeft = calculateMonthsRemaining(goal.deadline);
    return monthsLeft > 0 ? remaining / monthsLeft : 0;
  };

  return (
    <section id="goals" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Goals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track your progress and get AI-powered strategies to achieve your financial objectives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {goals.map((goal) => {
            const progress = calculateProgress(goal.currentAmount, goal.targetAmount);
            const monthsRemaining = calculateMonthsRemaining(goal.deadline);
            const monthlySavingsNeeded = calculateMonthlySavingsNeeded(goal);
            
            return (
              <div key={goal.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Target className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                      <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full border text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                        <span className="capitalize">{goal.priority} Priority</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">${goal.currentAmount.toLocaleString()}</span>
                    <span className="text-sm font-medium text-gray-900">${goal.targetAmount.toLocaleString()}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">Time Left</span>
                    </div>
                    <p className="text-lg font-bold text-blue-700">{monthsRemaining} months</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">Monthly Need</span>
                    </div>
                    <p className="text-lg font-bold text-green-700">${monthlySavingsNeeded.toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>AI Strategy</span>
                  </h4>
                  <p className="text-sm text-gray-700">
                    {goal.title === 'House Down Payment' && 
                      'Allocate 60% to high-yield savings and 40% to conservative investments. Consider increasing monthly contributions by $200.'
                    }
                    {goal.title === 'Retirement Fund' && 
                      'Maximize employer 401(k) match and increase contributions by 1% annually. Consider Roth IRA for tax diversification.'
                    }
                    {goal.title === 'Vacation Fund' && 
                      'Set up automatic transfers of $200/month. Use cashback rewards and consider a short-term CD for better returns.'
                    }
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  Optimize Strategy
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}