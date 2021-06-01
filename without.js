
const without = function(array1, array2) {
  let newArray = [];
  for (const value of array1) {
    if (!array2.includes(value)) {
      newArray.push(value);
    }
  }
  return newArray;
};



module.exports = without;
