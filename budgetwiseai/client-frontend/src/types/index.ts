export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  income: number;
  expenses: number;
  savings: number;
  debt: number;
  riskTolerance: 'low' | 'medium' | 'high';
  financialGoals: string[];
}

export interface FinancialData {
  monthlyIncome: number;
  monthlyExpenses: number;
  currentSavings: number;
  totalDebt: number;
  creditScore: number;
  investments: Investment[];
  expenses: ExpenseCategory[];
}

export interface Investment {
  id: string;
  type: 'stocks' | 'bonds' | 'crypto' | 'real-estate' | 'mutual-funds';
  amount: number;
  returns: number;
  risk: 'low' | 'medium' | 'high';
}

export interface ExpenseCategory {
  category: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface AIRecommendation {
  id: string;
  type: 'savings' | 'investment' | 'debt' | 'expense' | 'income';
  title: string;
  description: string;
  impact: number;
  priority: 'high' | 'medium' | 'low';
  timeframe: string;
  actionItems: string[];
}

export interface FinancialGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  priority: 'high' | 'medium' | 'low';
}