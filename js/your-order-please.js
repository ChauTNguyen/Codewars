function order(words) {
  /*
    This initial solution is pretty inefficient
    as I not only create an additional array,
    but I also write an unoptimized bubble sort
    algorithm.
  */
  var arr = words.split(' ');
  var numArr = [];

  for (var i = 0; i < arr.length; ++i) {
    numArr[i] = arr[i].match(/\d/g);
  }

  // Modified bubble sort solution.
  for (var m = 0; m < arr.length; ++m) {
    for (var n = 0; n < arr.length - 1; ++n) {
      if (numArr[n] > numArr[n + 1]) {
        var arrTemp = arr[n];
        arr[n] = arr[n + 1];
        arr[n + 1] = arrTemp;

        var numArrTemp = numArr[n];
        numArr[n] = numArr[n + 1];
        numArr[n + 1] = numArrTemp;
      }
    }
  }

  return arr.join(' ');
}