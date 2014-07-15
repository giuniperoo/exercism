var helpers = require('./helpers');

// define constructor
var Bob = function () {};

// augment its prototype
Bob.prototype.hey = function (utterance) {

  // response if utterance is ALL CAPS
  if (helpers.containsAlphabeticalChars(utterance) && helpers.isUpperCase(utterance)) {
    return 'Woah, chill out!';

  // response if utterance is a question
  } else if (helpers.isQuestion(utterance)) {
    return 'Sure.';

  // response if utterance is silent
  } else if (helpers.isSilent(utterance)) {
    return 'Fine. Be that way!';

  // response to all other utterances
  } else {
    return 'Whatever.';
  }
}

module.exports = Bob;
