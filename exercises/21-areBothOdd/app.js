// Write your function here
function areBothOdd(number1, number2) {
    if ((number1 % 2 != 0) && (number2 % 2 != 0)) {
        return true;
    }
    return false;
}



var output = areBothOdd(1, 3);
console.log(output); // --> true