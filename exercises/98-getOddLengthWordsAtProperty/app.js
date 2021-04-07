// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    let myArr = [];

    if (!obj.hasOwnProperty(key)) { // Si la key no tiene propiedad, debería retornar undefined.
        return undefined;
    }
    if (obj[key].length == 0) { // Si el array está vacío, debería retornar undefined.
        return undefined;
    }
    if (!Array.isArray(obj[key])) { // Si el propiedad en la key dada no es un array, debería retornar undefined.
        return undefined;
    }

    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i].length % 2 != 0) {
            myArr.push(obj[key][i]);
        }
    }

    return myArr;
}


var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']