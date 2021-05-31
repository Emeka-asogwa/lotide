

const findKeyByValue = function(object, value) {
  for (const objectKey of Object.keys(object)) {
    if (object[objectKey] === value) {
      //console.log(object[value]);
      return objectKey;
    }
  }
};



module.exports = findKeyByValue;