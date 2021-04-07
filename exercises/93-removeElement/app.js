// Write your function here
function removeElement(arr, discarded) {
    let newArr = [];
    
    arr.forEach(element => {
        if (element !== discarded) {
            newArr.push(element);
        }
    });
    
    return newArr;
}


var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]