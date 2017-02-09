
Write a JavaScript program to find the most frequently occuring item of an array.
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var occursMost = function () {
  var object = {};
  for (var i = 0; i < array.length; i++) {
    var key = array[i];
    if (array[i] in object) {
      object[key]++;
    } else {
  // array[i] not in object
      object[array[i]] = 1;
    }
  }
  var most = 0;
  var mostKey = 0;
  for (var key in object) {
        if (object[key] > most) {
          most = object[key];
          mostKey = key
        }
      }
    console.log(most);
    console.log(mostKey);
}
occursMost(array);
