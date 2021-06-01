

const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns ['a', 1,   'b', 2,   'c', 'd', 'e', 5,'f', 6] for [['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]", () => {
    assert.deepEqual(flatten([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]),['a', 1,'b', 2,'c', 'd', 'e', 5,'f', 6]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []);
  });
  it("returns [1, 2, 3] for [1, [2, 3]]", () => {
    assert.deepEqual(flatten([1, [2, 3]]), [1, 2, 3]);
  });
  it("returns [1] for [[[1]]]", () => {
    assert.deepEqual(flatten([[[1]]]), [1]);
  });
});

