function highAndLow(numbers){
  var arr = numbers.split(" ");
  var max = arr[0];
  var min = arr[0];
  
  for (var i = 1; i < arr.length; ++i) {
    if (parseInt(arr[i]) > max) max = arr[i];
    if (parseInt(arr[i]) < min) min = arr[i];
  }
  
  return max.toString() + " " + min.toString();
}