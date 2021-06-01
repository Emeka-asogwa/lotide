const without = require('../without');
const assert = require('chai').assert;



describe("#without", () => {
  it("returns '[2, 3]'", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);

  });
  it("returns '['1', '2']'", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

  });
  it("returns '['hello', 'world']'", () => {
    assert.deepEqual(without(words, ["lighthouse"]),["hello", "world"]);

  });
});






// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);