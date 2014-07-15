// define constructor
var Anagram = function (word) {
  this.anagram = word;
};

Anagram.prototype.match = function (words) {
  var anagram, word, char,
      matches = [],  // array to be returned
      i, j, k;       // iterators

  // for each word passed into match...
  for (i = 0; i < words.length; i += 1) {

    // skip word if it doesn't have same number of chars as anagram
    if (words[i].length === this.anagram.length) {

      // initialize copy of anagram
      anagram = this.anagram;

      // normalize case
      anagram = anagram.toLowerCase();
      word = words[i].toLowerCase();

      // skip word if same as anagram
      if (anagram !== word) {

        // compare each char in word with each char in anagram
        for   (j = 0; j < word.length;    j += 1) {
          for (k = 0; k < anagram.length; k += 1) {

            // if there is a match, remove char from anagram
            if (word.charAt(j) === anagram.charAt(k)) {
              char = anagram.charAt(k);
              anagram = anagram.replace(char, '');
              break;
            }
          }
        }

        if (anagram.length === 0) {
          matches.push(words[i]);
        }
      }
    }
  }

  return matches;
}

module.exports = Anagram;
