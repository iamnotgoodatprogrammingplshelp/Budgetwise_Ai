import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PiggyBank, Target } from 'lucide-react';
import { FinancialData } from '../types';

interface FinancialOverviewProps {
  data: FinancialData;
}

export function FinancialOverview({ data }: FinancialOverviewProps) {
  const netWorth = data.currentSavings + data.investments.reduce((sum, inv) => sum + inv.amount, 0) - data.totalDebt;
  const savingsRate = ((data.monthlyIncome - data.monthlyExpenses) / data.monthlyIncome) * 100;
  const debtToIncomeRatio = (data.totalDebt / (data.monthlyIncome * 12)) * 100;

  const cards = [
    {
      title: 'Net Worth',
      value: `$${netWorth.toLocaleString()}`,
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Monthly Income',
      value: `$${data.monthlyIncome.toLocaleString()}`,
      change: '+3.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Savings Rate',
      value: `${savingsRate.toFixed(1)}%`,
      change: savingsRate > 20 ? 'Excellent' : savingsRate > 10 ? 'Good' : 'Needs Work',
      trend: savingsRate > 20 ? 'up' : 'down',
      icon: PiggyBank,
      color: savingsRate > 20 ? 'text-green-600' : 'text-yellow-600',
      bgColor: savingsRate > 20 ? 'bg-green-50' : 'bg-yellow-50'
    },
    {
      title: 'Credit Score',
      value: data.creditScore.toString(),
      change: data.creditScore > 750 ? 'Excellent' : data.creditScore > 700 ? 'Good' : 'Fair',
      trend: 'up',
      icon: CreditCard,
      color: data.creditScore > 750 ? 'text-green-600' : 'text-blue-600',
      bgColor: data.creditScore > 750 ? 'bg-green-50' : 'bg-blue-50'
    },
    {
      title: 'Total Debt',
      value: `$${data.totalDebt.toLocaleString()}`,
      change: `${debtToIncomeRatio.toFixed(1)}% of income`,
      trend: 'down',
      icon: Target,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      title: 'Investments',
      value: `$${data.investments.reduce((sum, inv) => sum + inv.amount, 0).toLocaleString()}`,
      change: '+8.7%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="dashboard" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Financial Overview</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-powered analysis of your current financial position and key metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const TrendIcon = card.trend === 'up' ? TrendingUp : TrendingDown;
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${card.bgColor}`}>
                    <Icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${card.color}`}>
                    <TrendIcon className="w-4 h-4" />
                    <span>{card.change}</span>
                  </div>
                </div>
                
                <h3 className="text-gray-600 text-sm font-medium mb-1">{card.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}