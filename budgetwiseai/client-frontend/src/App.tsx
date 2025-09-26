import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FinancialOverview } from './components/FinancialOverview';
import { ExpenseChart } from './components/ExpenseChart';
import { Recommendations } from './components/Recommendations';
import { Goals } from './components/Goals';
import { Footer } from './components/Footer';
import { mockFinancialData, mockRecommendations, mockGoals } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FinancialOverview data={mockFinancialData} />
      <ExpenseChart expenses={mockFinancialData.expenses} />
      <Recommendations recommendations={mockRecommendations} />
      <Goals goals={mockGoals} />
      <Footer />
    </div>
  );
}

export default App;