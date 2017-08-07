function multiplyAll(arr) {
  var product = 1;


  for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr[i].length; x++) {
      product *= arr[i][x];
    }
  }



  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);