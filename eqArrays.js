const eqArrays = function(actual, expected) {
// ---- check first if they have the same lengths -----//
  if (actual.length !== expected.length) {
    return false;
  }
  for (let value = 0; value < actual.length; value++) {
    // ---- check second if they have the same values at the same index ---//
    if (actual[value] !== expected[value]) {
      return false;
    }
  }
  // ----- return true if they have the same values and length ---//
  return true;
};

module.exports = eqArrays;