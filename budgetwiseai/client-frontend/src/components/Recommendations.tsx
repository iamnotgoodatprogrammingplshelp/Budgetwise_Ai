import React from 'react';
import { CheckCircle, Clock, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';
import { AIRecommendation } from '../types';

interface RecommendationsProps {
  recommendations: AIRecommendation[];
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return AlertTriangle;
      case 'medium': return Clock;
      case 'low': return CheckCircle;
      default: return CheckCircle;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'savings': return DollarSign;
      case 'investment': return TrendingUp;
      case 'debt': return AlertTriangle;
      case 'expense': return DollarSign;
      case 'income': return TrendingUp;
      default: return CheckCircle;
    }
  };

  return (
    <section id="recommendations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Recommendations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Personalized financial optimization strategies based on your data analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {recommendations.map((rec) => {
            const PriorityIcon = getPriorityIcon(rec.priority);
            const TypeIcon = getTypeIcon(rec.type);
            
            return (
              <div key={rec.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <TypeIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                      <p className="text-sm text-gray-500 capitalize">{rec.type} optimization</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                    <PriorityIcon className="w-3 h-3" />
                    <span className="capitalize">{rec.priority}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{rec.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-600 font-medium">Potential Savings</p>
                    <p className="text-lg font-bold text-green-700">${rec.impact.toLocaleString()}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-600 font-medium">Timeframe</p>
                    <p className="text-lg font-bold text-blue-700">{rec.timeframe}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Action Items:</h4>
                  <ul className="space-y-2">
                    {rec.actionItems.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  Implement Recommendation
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}