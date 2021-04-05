// Write your function here
function select(arr, obj) {
    var myObj = {};

    console.log(arr.length);
    console.log(obj.length);

    for (let i = 0; i < arr.length; i++) {
        for (x in obj) {
            if (arr[i] == x) {
                myObj[x] = obj[x];
            } 
        }
    }
    return myObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }