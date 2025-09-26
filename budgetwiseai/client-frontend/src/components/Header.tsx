import React from 'react';
import { Brain, TrendingUp, Shield, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FinanceAI
              </h1>
              <p className="text-sm text-gray-600">Smart Financial Optimization</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Dashboard
            </a>
            <a href="#analysis" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Analysis
            </a>
            <a href="#recommendations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Recommendations
            </a>
            <a href="#goals" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Goals
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-2 rounded-full">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Secure</span>
            </div>
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}