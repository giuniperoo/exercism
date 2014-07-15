var helpers = {
  isUpperCase: function (str) {
    return str === str.toUpperCase();
  },
  isQuestion: function (str) {
    return str.charAt(str.length - 1) === '?';
  },
  isSilent: function (str) {
    return !str.match(/\S/);
  },
  containsAlphabeticalChars: function (str) {
    return str.match(/[a-z]/i);
  }
};

module.exports = helpers;
