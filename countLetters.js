const countLetters = function (sentence) {
  let count = {};
  for (let letters of sentence) {
    if (count[letters] === undefined) {
      count[letters] = 0;
    }
    count[letters] += 1;
    delete count[" "];

  }
  return count;

};



module.exports = countLetters;