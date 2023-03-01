const expect = require('chai').expect;
const MathForFun = require('../mathForFun');

// Test MathForFun class
describe('MathForFun - Chai', () => {
  
  // Test 'sum' function
  describe('sum', () => {
    // Test positive integer sum case
    it('should correctly add two positive integers', () => {
      const result = MathForFun.sum(1, 2);
      expect(result).to.equal(3);
    });

    // Test non-positive integer sum case
    it('should correctly add a positive and negative integer', () => {
      const result = MathForFun.sum(-1, 2);
      expect(result).to.equal(1);
    });

    // Test false case
    it('should not return incorrect answer', () => {
      const result = MathForFun.sum(10, 2);
      expect(result).to.not.equal(13);
    });
  });

  // Test 'subtract' function
  describe('subtract', () => {
    // Test positive integer subtract case
    it('should correctly subtract two positive integers', () => {
      const result = MathForFun.subtract(5, 2);
      expect(result).to.equal(3);
    });

    // Test non-positive integer subtract case
    it('should correctly add a positive and negative integer', () => {
      const result = MathForFun.subtract(-1, 2);
      expect(result).to.equal(-3);
    });

    // Test false case
    it('should not return incorrect answer', () => {
      const result = MathForFun.subtract(10, 2);
      expect(result).to.not.equal(9);
    });
  });

});