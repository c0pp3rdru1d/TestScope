import React, { useState } from 'react';
import { useTestRunner } from '../hooks/useTestRunner';
import Header from './Header';
import SummaryCards from './SummaryCards';
import TestSuiteOverview from './TestSuiteOverview';
import TestList from './TestList';
import CoverageReport from './CoverageReport';
import CIPipeline from './CIPipeline';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const {
    isRunning,
    progress,
    testResults,
    detailedTests,
    coverage,
    startTests
  } = useTestRunner();

  const getTotalStats = () => {
    const total = Object.values(testResults).reduce((sum, cat) => sum + cat.total, 0);
    const passed = Object.values(testResults).reduce((sum, cat) => sum + cat.passed, 0);
    const failed = Object.values(testResults).reduce((sum, cat) => sum + cat.failed, 0);
    const skipped = Object.values(testResults).reduce((sum, cat) => sum + cat.skipped, 0);
    const duration = Object.values(testResults).reduce((sum, cat) => sum + cat.duration, 0);
    return { total, passed, failed, skipped, duration };
  };

  const totalStats = getTotalStats();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <Header 
          isRunning={isRunning} 
          progress={progress} 
          onRunTests={startTests} 
        />

        <SummaryCards totalStats={totalStats} />

        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <div className="flex gap-6 px-6">
              {['overview', 'unit', 'integration', 'e2e', 'performance', 'coverage'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && <TestSuiteOverview testResults={testResults} />}
            
            {['unit', 'integration', 'e2e', 'performance'].includes(activeTab) && (
              <TestList tests={detailedTests[activeTab]} category={activeTab} />
            )}

            {activeTab === 'coverage' && <CoverageReport coverage={coverage} />}
          </div>
        </div>

        <CIPipeline />
      </div>
    </div>
  );
};

export default Dashboard;
