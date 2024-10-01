// max.test.js
const max = require("./max");

test('should return the greater number', () => {
  expect(max(2, 1)).toBe(2);
  expect(max(1, 2)).toBe(2); 
  expect(max(3, 3)).toBe(3); 
});
