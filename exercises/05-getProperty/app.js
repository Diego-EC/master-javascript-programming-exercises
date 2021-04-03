function getProperty(obj, key) {
  // your code here
  return obj[key];
}

var car = {
  model: 'Toyota'
};
var output = getProperty(car, 'model');
console.log(output); // --> 'valor'