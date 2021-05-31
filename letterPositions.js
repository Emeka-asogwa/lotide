const letterPositions = function(sentence) {
  const results = {};
  const string = sentence.toLowerCase();   // This converts the sentence to uniform case so we dont count small and capital letters twice.
  for (let i = 0; i < sentence.length; i++) {
    if (!string[i].match(" ")) {
      if (!results[string[i]]) results[string[i]] = [];
      results[string[i]].push(i);
    }

  }
  return results;
};


module.exports = letterPositions;