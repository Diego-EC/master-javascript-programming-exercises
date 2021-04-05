// Write your function here
function getAverageOfElementsAtProperty(obj, key) {
        if (!obj.hasOwnProperty(key)) {
            console.log("lol");
            return 0;
        }
        if(!Array.isArray(obj[key])) {
            return 0;
        }
        if (obj[key].length > 0) {            
            let sum = 0;
            for(var i = 0; i < obj[key].length; i++) {
                sum += obj[key][i];
            }
            console.log(sum);
            return sum / obj[key].length;
        } else {
            return 0;
        }
}


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2