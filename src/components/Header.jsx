import React from 'react';
import { Play } from 'lucide-react';

const Header = ({ isRunning, progress, onRunTests }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Automation Dashboard</h1>
          <p className="text-gray-600">Comprehensive testing suite with multi-layer coverage</p>
        </div>
        <button
          onClick={onRunTests}
          disabled={isRunning}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            isRunning 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <Play className="w-5 h-5" />
          {isRunning ? 'Running Tests...' : 'Run All Tests'}
        </button>
      </div>

      {isRunning && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Test Execution Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
