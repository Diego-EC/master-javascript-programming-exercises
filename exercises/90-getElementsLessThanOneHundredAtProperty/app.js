// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
  var arr = [];
  if(!obj.hasOwnProperty(key)) { //If there is no property at the key
    return arr;
  }
  if(obj[key].length === 0) { //If the array is empty
    return arr;
  }
  for(var i = 0; i < obj[key].length; i++) { //If array contains no elements equal to 10 & If the property at the given key is not an array
    if(obj[key][i] < 100) {
      arr.push(obj[key][i]);
    }
  }
  return arr;
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]