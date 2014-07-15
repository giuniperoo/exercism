Hamming = {
  compute: function (str1, str2) {
    var length = (str1.length > str2.length) ? str2.length : str1.length,
        count = 0,
        i;

    for (i = 0; i < length; i += 1) {
      if (str1[i] !== str2[i]) {
        count += 1;
      }
    }

    return count;
  }
};

module.exports = Hamming;
