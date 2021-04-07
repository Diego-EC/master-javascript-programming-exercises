// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    let myArr = [];

    if (!obj.hasOwnProperty(key)) {
        return myArr;
    }
    if (obj[key].length === 0) {
        return myArr;
    }
    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] > 10) {
            myArr.push(obj[key][i]);
        }
    }

    return myArr;
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]