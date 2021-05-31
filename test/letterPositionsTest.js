const letterPositions = require('../letterPositions');
const assert = require('chai').assert;


describe('#letterPositions', () => {
  it('returns 1 for "e" in "hello"', () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  })
});


//console.log(letterPositions("lighthouse in the House"));

// console.log(asserArraysEqual(letterPosition("hello").e,[1]));