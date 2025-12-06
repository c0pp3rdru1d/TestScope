import { useState } from 'react';
import { mockTests, getInitialTestResults } from '../utils/mockData';
import { runAllTests } from '../utils/testRunner';

export const useTestRunner = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [testResults, setTestResults] = useState(getInitialTestResults());
  const [detailedTests, setDetailedTests] = useState(mockTests);
  const [coverage, setCoverage] = useState({ 
    statements: 0, 
    branches: 0, 
    functions: 0, 
    lines: 0 
  });
  const [performanceMetrics, setPerformanceMetrics] = useState([]);

  const startTests = async () => {
    setIsRunning(true);
    setProgress(0);

    await runAllTests({
      onProgress: setProgress,
      onTestUpdate: setDetailedTests,
      onResultUpdate: setTestResults,
      onCoverageUpdate: setCoverage,
      onComplete: ({ performanceMetrics: metrics }) => {
        setPerformanceMetrics(metrics);
        setIsRunning(false);
      }
    });
  };

  return {
    isRunning,
    progress,
    testResults,
    detailedTests,
    coverage,
    performanceMetrics,
    startTests
  };
};
