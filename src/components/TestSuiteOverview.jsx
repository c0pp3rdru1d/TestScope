import React from 'react';

const TestSuiteOverview = ({ testResults }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Test Suite Overview</h2>
      
      {Object.entries(testResults).map(([category, stats]) => (
        <div key={category} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900 capitalize">{category} Tests</h3>
            <span className="text-sm text-gray-500">{stats.duration}ms</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              <p className="text-sm text-gray-600">Total</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{stats.passed}</p>
              <p className="text-sm text-gray-600">Passed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">{stats.failed}</p>
              <p className="text-sm text-gray-600">Failed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">{stats.skipped}</p>
              <p className="text-sm text-gray-600">Skipped</p>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="flex h-2 rounded-full overflow-hidden">
              <div 
                className="bg-green-500"
                style={{ width: `${(stats.passed / stats.total) * 100}%` }}
              />
              <div 
                className="bg-red-500"
                style={{ width: `${(stats.failed / stats.total) * 100}%` }}
              />
              <div 
                className="bg-yellow-500"
                style={{ width: `${(stats.skipped / stats.total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestSuiteOverview;
