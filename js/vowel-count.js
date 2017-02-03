function getCount(str) {
  /*
    Brute force solution as there are only five vowels to check
    each string character against, so a nested-loop is fine as a start.
  */
  var vowelsCount = 0;

  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < str.length; ++i) {
    for (var j = 0; j < vowels.length; ++j) {
      if (str.charAt(i) === vowels[j]) ++vowelsCount;
    }
  }

  return vowelsCount;
}