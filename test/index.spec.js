// var assert = require('chai').assert;
var expect = require('chai').expect;
// var should = require('chai').should;
import '../index';
import R from 'ramda';

describe('Ramda\'s Math functions', () => {
  
  it('R.add should add values', () => {
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

  it('R.dec should decrement its argument', () => {
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

  it('R.divide should divide two values', () => {
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

  it('R.inc should increment its argument', () => {
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
  
  it('R.mathMod... Ill be back', () => {
    // Input is number
    // Output is number
    // increments input by 1
    // expect(R.mathMod(4)).to.equal(5);
  });

  it('R.mean should return the average from the given list', () => {
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

  it('R.median should return median given a list of numbers', () => {
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

  it('R.modulo should return the remainder from the division of arguments', () => {
    // Input is 2 number values
    // Output is number
    // Returns remainder
    expect(R.modulo(10, 5)).to.equal(0);
    expect(R.modulo(-10, 5)).to.equal(0);
    expect(R.modulo(1, 0.5)).to.equal(0);
    expect(R.modulo(0.8, 2)).to.equal(0.8);
  });

  it('R.multiply should return the multiplication of 2 values', () => {
    // Input is 2 number values
    // Output is number
    // Returns multiplication
    expect(R.multiply(10, 5)).to.equal(50);
    expect(R.multiply(-10, 5)).to.equal(-50);
    expect(R.multiply(1, 0.5)).to.equal(0.5);
    expect(R.multiply(0.8, 2)).to.equal(1.6);
    expect(R.multiply([2], [2])).to.equal(4);
  });

  it('E.negate should return the negative of its argument', () => {
    // Input is a number
    // Output is number
    // Returns negative number
    expect(R.negate(10)).to.equal(-10);
    expect(R.negate(-10)).to.equal(10);
    expect(R.negate(0.8)).to.equal(-0.8);
    expect(R.negate([2])).to.equal(-2);
  });

  it('R.product should return the product of all elements of a list', () => {
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

  it('R.subtract should subtract second argument from first argument', () => {
    // Input is 2 values/numbers
    // Output is number
    // Returns subtraction of second from first
    expect(R.subtract(10, 5)).to.equal(5);
    expect(R.subtract(-10, 5)).to.equal(-15);
    expect(R.subtract(-10, -5)).to.equal(-5);
    expect(R.subtract(0.5, 0.5)).to.equal(0);
    expect(R.subtract([-10], [10])).to.equal(-20);
  });

  it('R.sum should return the sum of all elements in the list', () => {
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

describe('Ramda\'s logic functions', () => {

  it('R.allPass should return true if all arguments are satisfied', () => {
    // Input is specific arguments which must be satisfied
    // Output is boolean
    const isEven = number => R.modulo(number, 2) === 0;
    const greaterThan20 = number => R.gt(number, 20);
    const iterateEven = R.allPass([isEven, greaterThan20]);

    expect(iterateEven(20)).to.equal(false);
    expect(iterateEven(30)).to.equal(true);
  });

  it('R.and should return true if both arguments are true', () => {
    // Input is boolean
    // Output is boolean
    //Returns true if both arguments are true; false otherwise.

    expect(R.and(true, true)).to.equal(true);
    expect(R.and(true, false)).to.equal(false);
    expect(R.and(false, false)).to.equal(false);

  });

  it('R.anyPass should return true if any arguments are satisfied', () => {
    // Input is specific arguments where any argument must be satisfied
    // Output is boolean
    const isEven = number => R.modulo(number, 2) === 0;
    const greaterThan20 = number => R.gt(number, 20);
    const isEvenAndGreaterThan20 = R.anyPass([isEven, greaterThan20]);

    expect(isEvenAndGreaterThan20(20)).to.equal(true);
    expect(isEvenAndGreaterThan20(30)).to.equal(true);
    expect(isEvenAndGreaterThan20(15)).to.equal(false);

  });

  it('R.both should return true if both arguments are true', () => {
    // Input is boolean
    // Output is boolean
    //Returns true if both arguments are true otherwise returns false.

    const gt10 = R.gt(R.__, 10)
    const lt20 = R.lt(R.__, 20)
    const between10And20 = R.both(gt10, lt20);

    expect(between10And20(15)).to.equal(true);
    expect(between10And20(30)).to.equal(false);
    expect(between10And20(5)).to.equal(false);

  });

  it('R.cond should return function which works as an if/else statement', () => {


  });

  it('R.defaultTo should return a default value if provided with undefined value', () => {
    //Takes in a value and returns a default value if original value is null, NaN or undefined.

    const defaultValue = R.defaultTo(50);

    expect(defaultValue(null)).to.equal(50);
    expect(defaultValue(NaN)).to.equal(50);
    expect(defaultValue(undefined)).to.equal(50);
    expect(defaultValue(51)).to.equal(51);

  });

  it('R.either should return true if first function is satisifed or the result of the second function otherwise', () => {

    //Wraps calls to two functions and uses a || operator.
    //Returns true if either of the two functions are true, else false.
    // Does not invoke the second function if first is satisfied.
    const gt10 = R.gt(R.__, 10);
    const isEven = number => R.modulo(number, 2) === 0;
    const f = R.either(gt10, isEven);

    expect(f(20)).to.equal(true);
    expect(f(5)).to.equal(false);
    expect(f(10)).to.equal(true);
    expect(f(4)).to.equal(true);

  });

  it('R.ifElse should return true if first function is satisifed or the result of the second function otherwise', () => {

  });

  it('R.isEmpty should return true if value is empty', () => {

    //Input is a value
    //Output is true if value is empty, false otherwise.

    expect(R.isEmpty([])).to.equal(true);
    expect(R.isEmpty([1, 2, 3])).to.equal(false);
    expect(R.isEmpty('')).to.equal(true);

  });

  it('R.not should return false if value is true', () => {

    //Input is a boolean value
    //Output is opposite to the boolean input
    expect(R.not(true)).to.equal(false);
    expect(R.not(false)).to.equal(true);
    expect(R.not(1)).to.equal(false);
  });

  it('R.or should return true if one or both arguments are true', () => {

    //Input is a boolean value
    //Output is opposite to the boolean input
    R.or(true, true); //=> true
    R.or(true, false); //=> true
    R.or(false, true); //=> true
    R.or(false, false); //=> false  
  });

  it('R.pathSatisfies should return true if one or both arguments are true', () => {

  });

  it('R.propSatisfies should return true if one or both arguments are true', () => {

  });

  it('R.unless should return value from the second argument if the first is not satisfied', () => {

    const isEven = number => R.modulo(number, 2) === 0;
    const test = R.unless(isEven, R.inc);
    //If the first argument is satisfied then it will return original value, else calls the second function.

    expect(test(9)).to.equal(10);
    expect(test(10)).to.equal(10);

  });

  it('R.until should run the function until value satisfies predicate value', () => {
    //Takes in a predicate value, a transformative function and an initial value.
    //Runs the transformative function until it satisfies the initial value.

    const f = R.until(R.gt(R.__, 100), R.multiply(2));

    expect(f(1)).to.equal(128);
    expect(f(100)).to.equal(200);
    expect(f(200)).to.equal(200);

  });

  it('R.when should run the function when value satisfies predicate function', () => {
    //Example of a truncating string
    //Takes in a value, tests it against first function, if it passes then return original value, else pass on value to the second function.
    var truncate = R.when(
      R.propSatisfies(R.gt(R.__, 10), 'length'),
      R.pipe(R.take(10), R.append('...'), R.join('')));

    expect(truncate('12345')).to.equal('12345');
    expect(truncate('12345678901')).to.equal('1234567890...');

  });

})












