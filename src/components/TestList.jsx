import React from 'react';
import StatusIcon from './StatusIcon';

const TestList = ({ tests, category }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4 capitalize">{category} Tests</h2>
      <div className="space-y-2">
        {tests.map((test, idx) => (
          <div 
            key={idx}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <StatusIcon status={test.status} />
              <span className="text-gray-900">{test.name}</span>
            </div>
            <span className="text-sm text-gray-500">{test.duration}ms</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestList;
