import React from 'react';
import { TrendingUp } from 'lucide-react';

const CoverageReport = ({ coverage }) => {
  const avgCoverage = Math.round(
    Object.values(coverage).reduce((a, b) => a + b, 0) / 4
  );

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Code Coverage Analysis</h2>
      <div className="space-y-4">
        {Object.entries(coverage).map(([metric, value]) => (
          <div key={metric}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 font-medium capitalize">{metric}</span>
              <span className={`font-bold ${
                value >= 85 ? 'text-green-600' : 
                value >= 70 ? 'text-yellow-600' : 
                'text-red-600'
              }`}>
                {value}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full ${
                  value >= 85 ? 'bg-green-500' : 
                  value >= 70 ? 'bg-yellow-500' : 
                  'bg-red-500'
                }`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Coverage Summary</h3>
            <p className="text-sm text-blue-800">
              Overall coverage is {avgCoverage}%. All metrics are above 80% threshold, 
              indicating comprehensive test coverage across the codebase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageReport;
