// Write your function here
function computeAverageOfNumbers(arr) {
    let total = 0;
    let counter = 0;
    let average = 0;

    arr.forEach(element => {
        total = total + element;
        counter++;
    });

    if (total > 0) {
        average = total / counter;
    }

    return average;
}


var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3