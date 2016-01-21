fs = require('fs');

fs.readFile('./comida.txt', 'utf8', function (err,data) {
  var arr = data.split("\n");
  for (var i = 0; i < arr.length - 1; i++) {
      console.log(arr[i] + " me mola");
  };
});
