// var assert = require('chai').assert;
var expect = require('chai').expect;
// var should = require('chai').should;
import '../index';
import R from 'ramda';

// templates
// it('', () => {
//   expect().to.equal();
// });

describe('Ramda\'s Math functions', () => {
  
  it('Add should add values', () => {
    // Input is number/float
    // Output is number/float
    // Takes in 2 values and returns sum
    expect(R.add(10, 5)).to.equal(15);
    expect(R.add(-2, -2)).to.equal(-4);
    expect(R.add(-2, 2)).to.equal(0);
    expect(R.add(0.5, 0.2)).to.equal(0.7);
    expect(R.add(-0.5, -0.2)).to.equal(-0.7);
    expect(R.add(-0.5, 0.2)).to.equal(-0.3);

    // can take in single value arrays
    expect(R.add([1], [2])).to.equal(3);

    const add5 = R.add(R.__, 5);
    const add10 = R.add(R.__, 10);
    const add20 = R.add(R.__, 20);
    const subtract20 = R.subtract(R.__, 20);

    expect(add5(5)).to.equal(10);
    expect(add10(15)).to.equal(25);
    expect(add20(15)).to.equal(35);

    const calulateSomething = R.compose(
      subtract20,
      add20,
      add10,
      add5
    )

    expect(calulateSomething(10)).to.equal(25)
    
  });

  it('Dec should decrement its argument', () => {
    // Input is number
    // Output is number
    // Decrements input by 1
    expect(R.dec(4)).to.equal(3);
    expect(R.dec(-4)).to.equal(-5);
    // can decrement decimal/floats to negative
    expect(R.dec(0.4)).to.equal(-0.6);
    expect(R.dec(0.75)).to.equal(-0.25);
    expect(R.dec(-0.75)).to.equal(-1.75);
  });

  it('Divide should divide two values', () => {
    // Input is 2 numbers/floats
    // Output is number/float
    // Divide 2 numbers.
    expect(R.divide(10, 2)).to.equal(5);
    expect(R.divide(-10, 2)).to.equal(-5);
    expect(R.divide(-10, -2)).to.equal(5);
    expect(R.divide(0.8, 2)).to.equal(0.4);
    expect(R.divide(0.8, -2)).to.equal(-0.4);
    expect(R.divide(-0.8, -2)).to.equal(0.4);
    expect(R.divide([10], [2])).to.equal(5);
  });

  it('Inc should increment its argument', () => {
    // Input is number
    // Output is number
    // increments input by 1
    expect(R.inc(4)).to.equal(5);
    expect(R.inc(-4)).to.equal(-3);
    // can increment decimal/floats to negative
    expect(R.inc(0.4)).to.equal(1.4);
    expect(R.inc(0.75)).to.equal(1.75);
    expect(R.inc(-0.75)).to.equal(0.25);
  });

  it('Inc should increment its argument', () => {
    // Input is number
    // Output is number
    // increments input by 1
    expect(R.inc(4)).to.equal(5);
    expect(R.inc(-4)).to.equal(-3);
    // can increment decimal/floats to negative
    expect(R.inc(0.4)).to.equal(1.4);
    expect(R.inc(0.75)).to.equal(1.75);
    expect(R.inc(-0.75)).to.equal(0.25);
  });
  
  it('MathMod... Ill be back', () => {
    // Input is number
    // Output is number
    // increments input by 1
    // expect(R.mathMod(4)).to.equal(5);
  });

  it('Mean should return the average from the given list', () => {
    // Input is list
    // Output is number
    // Returns average
    expect(R.mean([5, 5, 5])).to.equal(5);
    expect(R.mean([5, 5, 5], [5, 5, 5])).to.equal(5);
    expect(R.mean([5], [5])).to.equal(5);
    expect(R.mean([5], [5, 5, 5])).to.equal(5);
    expect(R.mean([-5, -5])).to.equal(-5);
    expect(R.mean([-5], [-5])).to.equal(-5);
    expect(R.mean([0.5, 0.5, 0.5])).to.equal(0.5);
    // expect(R.mean([])).to.equal(NaN); Should work but... 
  });

  it('Median should return median given a list of numbers', () => {
    // Input is list
    // Output is number
    // Returns median
    expect(R.median([1, 3, 5])).to.equal(3);
    // Can't take multiple arrays
    // expect(R.median([1, 2, 3], [4, 5, 6])).to.equal(5);
    expect(R.median([1])).to.equal(1);
    expect(R.median([-2, -3, -4])).to.equal(-3);
    expect(R.median([0.3, 0.5, 0.7])).to.equal(0.5);
  });

  it('Modulo should return the remainder from the division of arguments', () => {
    // Input is 2 number values
    // Output is number
    // Returns remainder
    expect(R.modulo(10, 5)).to.equal(0);
    expect(R.modulo(-10, 5)).to.equal(0);
    expect(R.modulo(1, 0.5)).to.equal(0);
    expect(R.modulo(0.8, 2)).to.equal(0.8);
  });

  it('Multiply should return the multiplication of 2 values', () => {
    // Input is 2 number values
    // Output is number
    // Returns multiplication
    expect(R.multiply(10, 5)).to.equal(50);
    expect(R.multiply(-10, 5)).to.equal(-50);
    expect(R.multiply(1, 0.5)).to.equal(0.5);
    expect(R.multiply(0.8, 2)).to.equal(1.6);
    expect(R.multiply([2], [2])).to.equal(4);
  });

  it('Negate should return the negative of its argument', () => {
    // Input is a number
    // Output is number
    // Returns negative number
    expect(R.negate(10)).to.equal(-10);
    expect(R.negate(-10)).to.equal(10);
    expect(R.negate(0.8)).to.equal(-0.8);
    expect(R.negate([2])).to.equal(-2);
  });

  it('Product should return the product of all elements of a list', () => {
    // Input is a list
    // Output is number
    // Returns product of all numbers in list
    expect(R.product([10,10,10])).to.equal(1000);
    expect(R.product([-10, -10])).to.equal(100);
    expect(R.product([-10, -10, -10])).to.equal(-1000);
    expect(R.product([0.5, 0.5])).to.equal(0.25);
    // Will not work with 2 arrays
    // expect(R.product([10, 10], [10, 10])).to.equal(10000);
  });

  it('Subtract should subtract second argument from first argument', () => {
    // Input is 2 values/numbers
    // Output is number
    // Returns subtraction of second from first
    expect(R.subtract(10, 5)).to.equal(5);
    expect(R.subtract(-10, 5)).to.equal(-15);
    expect(R.subtract(-10, -5)).to.equal(-5);
    expect(R.subtract(0.5, 0.5)).to.equal(0);
    expect(R.subtract([-10], [10])).to.equal(-20);
  });

  it('Sum should return the sum of all elements in the list', () => {
    // Input is 2 list
    // Output is number
    // Returns sum of all elements from list
    expect(R.sum([10, 5])).to.equal(15);
    expect(R.sum([-10, 5])).to.equal(-5);
    expect(R.sum([-10, -15])).to.equal(-25);
    expect(R.sum([0.5, 0.5])).to.equal(1);
    
    // Will not work with 2 arrays because it needs a list
    // expect(R.sum([10], [10])).to.equal(20);
  });

})












