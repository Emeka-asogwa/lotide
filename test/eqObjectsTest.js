const assert = require('chai').assert;
const eqObjects = require('../eqObjects');



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false

describe("#eqObjects", () => {
  it("Checks the two objects", () => {
    assert.strictEqual(eqObjects(ab,ba), true);

  });
  it("Checks the two objects", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });
  it("Checks the two objects", () => {
    assert.strictEqual(eqObjects(cd,dc), true);
  });
  it("Checks the two objects", () => {
    assert.strictEqual(eqObjects(cd,cd2), false);
  });

});



