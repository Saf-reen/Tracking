import React, { useState } from 'react';
import Card from '../components/Card';

const Budget = () => {
  const [budgetData] = useState({
    categories: [
      { name: 'Projects', allocated: 16000, spent: 8150 },
      { name: 'Marketing', allocated: 5000, spent: 4200 },
      { name: 'Operations', allocated: 3000, spent: 2800 },
      { name: 'Miscellaneous', allocated: 1000, spent: 350 }
    ]
  });

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <div className="mb-8">
        <h2 className="mb-2 text-3xl font-bold text-gray-800">Budget Overview</h2>
        <p className="text-gray-600">Track your spending across different categories</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
        <Card className="p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-600">Total Budget</h3>
          <p className="text-3xl font-bold text-green-600">₹{budgetData.totalBudget.toLocaleString()}</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-600">Total Spent</h3>
          <p className="text-3xl font-bold text-blue-600">₹{budgetData.totalSpent.toLocaleString()}</p>
        </Card>
        <Card className="p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold text-gray-600">Remaining</h3>
          <p className="text-3xl font-bold text-orange-600">₹{(budgetData.totalBudget - budgetData.totalSpent).toLocaleString()}</p>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card className="p-6">
        <h3 className="mb-6 text-xl font-semibold text-gray-800">Category Breakdown</h3>
        <div className="space-y-4">
          {budgetData.categories.map((category, index) => (
            <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">{category.name}</span>
                <span className="text-sm text-gray-600">
                  ₹{category.spent.toLocaleString()} / ₹{category.allocated.toLocaleString()}
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div 
                  className="h-3 transition-all duration-300 bg-green-600 rounded-full" 
                  style={{ width: `${(category.spent / category.allocated) * 100}%` }}
                ></div>
              </div>
              <div className="mt-1 text-right">
                <span className="text-sm text-gray-600">
                  {((category.spent / category.allocated) * 100).toFixed(1)}% used
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Budget;
