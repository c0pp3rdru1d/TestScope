export const mockTests = {
  unit: [
    { name: 'UserService.createUser()', status: 'pending', duration: 0 },
    { name: 'AuthController.login()', status: 'pending', duration: 0 },
    { name: 'DataValidator.validateEmail()', status: 'pending', duration: 0 },
    { name: 'PasswordHasher.hash()', status: 'pending', duration: 0 },
    { name: 'TokenGenerator.generate()', status: 'pending', duration: 0 },
    { name: 'CacheManager.set()', status: 'pending', duration: 0 },
    { name: 'ErrorHandler.handleNotFound()', status: 'pending', duration: 0 },
    { name: 'DateFormatter.format()', status: 'pending', duration: 0 }
  ],
  integration: [
    { name: 'API: POST /auth/register', status: 'pending', duration: 0 },
    { name: 'API: POST /auth/login', status: 'pending', duration: 0 },
    { name: 'API: GET /users/:id', status: 'pending', duration: 0 },
    { name: 'Database: User CRUD operations', status: 'pending', duration: 0 },
    { name: 'Redis: Cache integration', status: 'pending', duration: 0 }
  ],
  e2e: [
    { name: 'User Registration Flow', status: 'pending', duration: 0 },
    { name: 'Login and Dashboard Access', status: 'pending', duration: 0 },
    { name: 'Profile Update Flow', status: 'pending', duration: 0 },
    { name: 'Password Reset Flow', status: 'pending', duration: 0 }
  ],
  performance: [
    { name: 'API Response Time < 200ms', status: 'pending', duration: 0 },
    { name: 'Concurrent Users (100)', status: 'pending', duration: 0 },
    { name: 'Database Query Performance', status: 'pending', duration: 0 },
    { name: 'Memory Usage Under Load', status: 'pending', duration: 0 }
  ]
};

export const getInitialTestResults = () => ({
  unit: { total: mockTests.unit.length, passed: 0, failed: 0, skipped: 0, duration: 0 },
  integration: { total: mockTests.integration.length, passed: 0, failed: 0, skipped: 0, duration: 0 },
  e2e: { total: mockTests.e2e.length, passed: 0, failed: 0, skipped: 0, duration: 0 },
  performance: { total: mockTests.performance.length, passed: 0, failed: 0, skipped: 0, duration: 0 }
});
