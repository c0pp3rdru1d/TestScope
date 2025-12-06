import React from 'react';
import { GitBranch, Code, Zap, Activity } from 'lucide-react';

const CIPipeline = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <GitBranch className="w-6 h-6 text-gray-700" />
        <h2 className="text-xl font-bold text-gray-900">CI/CD Integration</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <Code className="w-5 h-5 text-gray-600 mb-2" />
          <p className="text-sm font-semibold text-gray-700 mb-1">Test Framework</p>
          <p className="text-xs text-gray-600">Jest, Playwright, K6</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <Zap className="w-5 h-5 text-gray-600 mb-2" />
          <p className="text-sm font-semibold text-gray-700 mb-1">Automation</p>
          <p className="text-xs text-gray-600">GitHub Actions, Pre-commit hooks</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <Activity className="w-5 h-5 text-gray-600 mb-2" />
          <p className="text-sm font-semibold text-gray-700 mb-1">Reporting</p>
          <p className="text-xs text-gray-600">Real-time metrics, coverage reports</p>
        </div>
      </div>
    </div>
  );
};

export default CIPipeline;
