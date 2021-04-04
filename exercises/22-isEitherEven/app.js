// Write your function here
function isEitherEven(number1, number2) {
    if ((number1 % 2 == 0) || (number2 % 2 == 0)) {
        return true;
    }
    return false;
}

var output = isEitherEven(1, 4);
console.log(output); // --> true