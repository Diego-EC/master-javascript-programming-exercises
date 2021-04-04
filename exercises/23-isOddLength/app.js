// Write your function here
function isOddLength(word) {
    let amount = word.length;
    if (amount % 2 != 0) {
        return true;
    }
    return false;
}

var output = isOddLength('special');
console.log(output); // --> verdadero