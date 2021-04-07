// Write your function here
function getLastElementOfProperty(obj, key) {
    let lastIndex;

    if (!obj.hasOwnProperty(key)) { // Si la key no tiene propiedad, debería retornar undefined.
        return undefined;
    }
    if (obj[key].length == 0) { // Si el array está vacío, debería retornar undefined.
        return undefined;
    }
    if (!Array.isArray(obj[key])) { // Si el propiedad en la key dada no es un array, debería retornar undefined.
        return undefined;
    }

    lastIndex = obj[key].length - 1;

    return(obj[key][lastIndex]);
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5