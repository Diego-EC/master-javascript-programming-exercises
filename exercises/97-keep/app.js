// Write your function here
function keep(arr, value) {
    let myArr = [];

    arr.forEach(element => {
        if (element === value) {
            myArr.push(element);
        }
    });

    return myArr;
}


var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]