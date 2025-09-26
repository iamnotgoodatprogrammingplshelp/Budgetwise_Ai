import { FinancialData, AIRecommendation, FinancialGoal } from '../types';

export const mockFinancialData: FinancialData = {
  monthlyIncome: 8500,
  monthlyExpenses: 6200,
  currentSavings: 45000,
  totalDebt: 28000,
  creditScore: 742,
  investments: [
    { id: '1', type: 'stocks', amount: 25000, returns: 8.5, risk: 'medium' },
    { id: '2', type: 'bonds', amount: 15000, returns: 4.2, risk: 'low' },
    { id: '3', type: 'crypto', amount: 5000, returns: -12.3, risk: 'high' },
    { id: '4', type: 'mutual-funds', amount: 18000, returns: 6.8, risk: 'medium' },
  ],
  expenses: [
    { category: 'Housing', amount: 2400, percentage: 38.7, color: '#3B82F6' },
    { category: 'Transportation', amount: 800, percentage: 12.9, color: '#10B981' },
    { category: 'Food', amount: 650, percentage: 10.5, color: '#F59E0B' },
    { category: 'Utilities', amount: 320, percentage: 5.2, color: '#EF4444' },
    { category: 'Entertainment', amount: 480, percentage: 7.7, color: '#8B5CF6' },
    { category: 'Healthcare', amount: 290, percentage: 4.7, color: '#06B6D4' },
    { category: 'Shopping', amount: 420, percentage: 6.8, color: '#F97316' },
    { category: 'Other', amount: 840, percentage: 13.5, color: '#6B7280' },
  ],
};

export const mockRecommendations: AIRecommendation[] = [
  {
    id: '1',
    type: 'expense',
    title: 'Reduce Entertainment Spending',
    description: 'Your entertainment expenses are 15% above the recommended budget. Consider cutting back on subscriptions and dining out.',
    impact: 1440,
    priority: 'high',
    timeframe: '1-2 months',
    actionItems: [
      'Cancel unused streaming subscriptions',
      'Set a monthly dining out budget of $200',
      'Find free entertainment alternatives',
      'Use cashback apps for purchases'
    ]
  },
  {
    id: '2',
    type: 'investment',
    title: 'Diversify Your Portfolio',
    description: 'Your investment portfolio is heavily weighted in stocks. Consider rebalancing for better risk management.',
    impact: 3200,
    priority: 'medium',
    timeframe: '3-6 months',
    actionItems: [
      'Increase bond allocation to 30%',
      'Consider international diversification',
      'Add REITs for real estate exposure',
      'Review and rebalance quarterly'
    ]
  },
  {
    id: '3',
    type: 'debt',
    title: 'Accelerate Debt Payoff',
    description: 'By increasing your debt payments by $300/month, you could save $4,200 in interest over 2 years.',
    impact: 4200,
    priority: 'high',
    timeframe: '24 months',
    actionItems: [
      'Apply debt avalanche method',
      'Consider debt consolidation',
      'Allocate windfalls to debt',
      'Negotiate lower interest rates'
    ]
  },
  {
    id: '4',
    type: 'savings',
    title: 'Optimize Emergency Fund',
    description: 'Your emergency fund covers 7.2 months of expenses. Consider investing excess funds for better returns.',
    impact: 2100,
    priority: 'low',
    timeframe: '6-12 months',
    actionItems: [
      'Keep 6 months in high-yield savings',
      'Invest excess in conservative funds',
      'Set up automatic transfers',
      'Review fund allocation annually'
    ]
  }
];

export const mockGoals: FinancialGoal[] = [
  {
    id: '1',
    title: 'House Down Payment',
    targetAmount: 80000,
    currentAmount: 32000,
    deadline: new Date('2026-06-01'),
    priority: 'high'
  },
  {
    id: '2',
    title: 'Retirement Fund',
    targetAmount: 1000000,
    currentAmount: 125000,
    deadline: new Date('2055-12-31'),
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Vacation Fund',
    targetAmount: 8000,
    currentAmount: 2400,
    deadline: new Date('2025-08-01'),
    priority: 'low'
  }
];