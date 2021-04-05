// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
  var arr = [];
  if(!obj.hasOwnProperty(key)) { //If there is no property at the key
    return arr;
  }
  if(obj[key].length === 0) { //If the array is empty
    return arr;
  }
  for(var i = 0; i < obj[key].length; i++) { //If array contains no elements equal to 10 & If the property at the given key is not an array
    if(obj[key][i] === 10) {
      arr.push(obj[key][i]);
    }
  }
  return arr;
}




var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]