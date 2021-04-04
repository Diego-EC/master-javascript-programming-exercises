// Write your function here
function isEvenAndGreaterThanTen(number) {
    if ((number > 10) && (number % 2 == 0)) {
        return true;
    }
    return false;
}


var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> falso