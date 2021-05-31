const middle = function(arry) {
  let middleArry = [];
  if (arry.length <= 2) {
    return middleArry;
  }
  if (arry.length % 2 === 0) {
    middleArry.push(arry[Math.floor(arry.length / 2) - 1], arry[Math.floor(arry.length / 2)]);
      
  } else {
    middleArry.push(arry[Math.floor(arry.length / 2)]);
      
  }
  return middleArry;
};

module.exports = middle;



