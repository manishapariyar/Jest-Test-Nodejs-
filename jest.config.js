module.exports = {
  testEnvironment: "node", // You can also choose "jsdom" for browser-like testing
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  collectCoverage: true, // Enables coverage reporting
  coverageDirectory: "coverage", // Directory where coverage reports will be stored
  verbose: true, // Display individual test results with the test suite hierarchy
  moduleFileExtensions: ["js", "json", "jsx", "node"],
  setupFiles: ["dotenv/config"], 
  maxWorkers: 5,
  runInBand: true,
  retry: 10,
};