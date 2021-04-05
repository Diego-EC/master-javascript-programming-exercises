// Write your function here
function getIndexOf(elementToFind, arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === elementToFind) {
            return i;
        }
    }
    return -1; //not found
}


var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2