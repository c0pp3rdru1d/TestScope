import { mockTests } from './mockData';

export const runAllTests = async (callbacks) => {
  const { onProgress, onTestUpdate, onResultUpdate, onCoverageUpdate, onComplete } = callbacks;
  
  const allTests = [
    ...mockTests.unit,
    ...mockTests.integration,
    ...mockTests.e2e,
    ...mockTests.performance
  ];
  const totalTests = allTests.length;
  let completed = 0;

  const newResults = {
    unit: { total: mockTests.unit.length, passed: 0, failed: 0, skipped: 0, duration: 0 },
    integration: { total: mockTests.integration.length, passed: 0, failed: 0, skipped: 0, duration: 0 },
    e2e: { total: mockTests.e2e.length, passed: 0, failed: 0, skipped: 0, duration: 0 },
    performance: { total: mockTests.performance.length, passed: 0, failed: 0, skipped: 0, duration: 0 }
  };

  const newDetailedTests = JSON.parse(JSON.stringify(mockTests));
  const perfMetrics = [];

  for (const category of ['unit', 'integration', 'e2e', 'performance']) {
    for (let i = 0; i < newDetailedTests[category].length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const duration = Math.floor(Math.random() * 500) + 50;
      const rand = Math.random();
      const status = rand > 0.85 ? 'failed' : rand > 0.80 ? 'skipped' : 'passed';
      
      newDetailedTests[category][i] = { 
        ...newDetailedTests[category][i], 
        status, 
        duration 
      };
      
      if (status === 'passed') newResults[category].passed++;
      else if (status === 'failed') newResults[category].failed++;
      else newResults[category].skipped++;
      
      newResults[category].duration += duration;

      if (category === 'performance') {
        perfMetrics.push({
          name: newDetailedTests[category][i].name,
          value: Math.floor(Math.random() * 300) + 50,
          threshold: 200,
          status
        });
      }

      completed++;
      onProgress((completed / totalTests) * 100);
      onTestUpdate(newDetailedTests);
      onResultUpdate(newResults);
    }
  }

  const coverage = {
    statements: 87 + Math.floor(Math.random() * 8),
    branches: 82 + Math.floor(Math.random() * 10),
    functions: 91 + Math.floor(Math.random() * 7),
    lines: 88 + Math.floor(Math.random() * 9)
  };

  onCoverageUpdate(coverage);
  onComplete({ detailedTests: newDetailedTests, performanceMetrics: perfMetrics });
};
