// Write your function here
function getNthElementOfProperty(obj, key, nth) {
    if (!obj.hasOwnProperty(key)) { // Si la key no tiene propiedad, debería retornar undefined.
        return "lol";
    }
    if (obj[key].length == 0) { // Si el array está vacío, debería retornar undefined.
        return 0;
    }
    if (obj[key].length < nth - 1 ) { // Si n está fuera de rango, debería retornar undefined.
        return "oh oh";
    }
    if (!Array.isArray(obj[key])) { // Si el propiedad en la key dada no es un array, debería retornar undefined.
        return "no";
    }

    return(obj[key][nth]);
}


var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2