var Words = function (words) {

  var obj = {count: {}}, wordArray;

  // strip out everything except alphanumeric chars and whitespace,
  // then collapse multiple adjacent spaces to single spaces
  words = words.replace(/[^\w\s]|_/g, '')
               .replace(/\s+/g, ' ');

  // normalize case
  words = words.toLowerCase();

  wordArray = words.split(' ');

  for (var i = 0; i < wordArray.length; i += 1) {
    if (wordArray[i] in obj.count) {
      obj.count[wordArray[i]] += 1;
    } else {
      obj.count[wordArray[i]] = 1;
    }
  }

  return obj;
};

module.exports = Words;
