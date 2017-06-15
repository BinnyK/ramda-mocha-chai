// var assert = require('chai').assert;
var expect = require('chai').expect;
// var should = require('chai').should;
import '../index';
import R from 'ramda';


describe('Initial test', () => {
  it('should work...', () => {
    expect('working!').to.equal('working!')
  });
})



describe('Solving Project Euler alogrithms using Ramda', () => {
  
  const isDivBy3 = (number) => R.modulo(number, 3) === 0;
  const isDivBy5 = (number) => R.modulo(number, 5) === 0;
  
  const sumOfMultiples = R.compose(
    R.sum,
    R.filter(
      R.either(isDivBy3, isDivBy5)
    )
  )

  it('should find sum of multiples of 3 and 5', () => {
    expect(sumOfMultiples(R.range(1,1000))).to.equal(233168);
  });

  let fibValues = [1, 2];
  const isOver4Mil = number => number > 4000000;
  const isEven = number => number % 2 === 0;

  for (let i = 0; i < 50; i++) {
    let last = fibValues.length - 1;
    let secondLast = fibValues.length - 2;
    if (isOver4Mil(fibValues[last] + fibValues[secondLast])) {
      break;
    } else {
      fibValues.push(fibValues[last] + fibValues[secondLast])  
    }
  }
  const sumOfEvenFib = fibValues.filter(isEven).reduce((acc, val) => acc + val);


  it('should find the sum of Even Fibonacci numbers undere 4m', () => {
    expect(sumOfEvenFib).to.equal(4613732);
  });
})

