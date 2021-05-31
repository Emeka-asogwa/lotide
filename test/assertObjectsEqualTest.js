const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const abc = { a: "1", b: "2", c: "3" };


describe("#assertObjectsEqual", () => {
  it("returns true for the two", () => {
    assert.strictEqual(assertObjectsEqual(ab, ba));

  });

  it("returns false", () => {
    assert.strictEqual(assertObjectsEqual(ab, abc));

  });
  it("returns false", () => {
    assert.strictEqual(assertObjectsEqual(cd, cd2));

  });
  it("returns true", () => {
    assert.strictEqual(assertObjectsEqual(cd, dc));

  });

});



// console.log(eqObjects(ab, ba)); // => true

// console.log(eqObjects(ab, abc)); // => false


// console.log(eqObjects(cd, dc)); // => true

// console.log(eqObjects(cd, cd2)); // => false

//assertObjectsEqual(ab,ba);


