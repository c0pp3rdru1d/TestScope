import React from 'react';
import { Activity, CheckCircle, XCircle, Clock } from 'lucide-react';

const SummaryCards = ({ totalStats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Tests</p>
            <p className="text-3xl font-bold text-gray-900">{totalStats.total}</p>
          </div>
          <Activity className="w-10 h-10 text-blue-500" />
        </div>
        <p className="text-sm text-gray-500 mt-2">Across all suites</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Passed</p>
            <p className="text-3xl font-bold text-green-600">{totalStats.passed}</p>
          </div>
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {totalStats.total > 0 ? Math.round((totalStats.passed / totalStats.total) * 100) : 0}% success rate
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Failed</p>
            <p className="text-3xl font-bold text-red-600">{totalStats.failed}</p>
          </div>
          <XCircle className="w-10 h-10 text-red-500" />
        </div>
        <p className="text-sm text-gray-500 mt-2">Requires attention</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">Duration</p>
            <p className="text-3xl font-bold text-gray-900">{(totalStats.duration / 1000).toFixed(1)}s</p>
          </div>
          <Clock className="w-10 h-10 text-purple-500" />
        </div>
        <p className="text-sm text-gray-500 mt-2">Total execution time</p>
      </div>
    </div>
  );
};

export default SummaryCards;
