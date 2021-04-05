// Write your function here
function addToBackOfNew( arr, element) {
    let newArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    
    newArr.push(element);
    return newArr;
}


var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]