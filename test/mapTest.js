const assert = require('chai').assert;

const map = require('../map');


describe('#map', () => {
  it('return [ "g", "c", "t", "m", "t" ]', () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
});


const words = ["ground", "control", "to", "major", "tom"];

