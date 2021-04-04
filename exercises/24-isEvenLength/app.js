// Write your function here
function isEvenLength(word) {
    let amount = word.length;
    if (amount % 2 == 0) {
        return true;
    }
    return false;
}

var output = isEvenLength('wow');
console.log(output); // --> falso