// Write your function here
function getAllElementsButNth(arr, index) {
    arr.splice(index, 1);
    return arr;
}


var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']