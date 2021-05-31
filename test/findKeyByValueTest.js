const findKeyByValue = require('../findkeyByValue');
const assert = require('chai').assert;


describe("#findKeyByValue", () =>{
  it("Returns drama", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,'The Wire'), 'drama');
  });
  it("Returns undefined", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"The '70s show"), undefined);
  });
});

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};





// console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
/// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
