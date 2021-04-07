// Write your function here
function getFirstElementOfProperty(obj, key) {
    /*if (typeof obj[key] === 'undefined' && obj[key].length == 0) {
        // the array is defined and has at least one element
    }*/

    if (!obj.hasOwnProperty(key)) { // Si la key no tiene propiedad, debería retornar undefined.
        return undefined;
    }
    if (!Array.isArray(obj[key])) { // Si el propiedad en la key dada no es un array, debería retornar undefined.
        return undefined;
    }
    if (obj[key].length == 0) { // Si el array está vacío, debería retornar undefined.
        return undefined;
    }

    return(obj[key][0]);
}


var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1