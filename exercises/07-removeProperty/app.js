function removeProperty(obj, key) {
  // your code here
    for (property in obj) {
        if (property == key) {
            delete obj[key];
        }
    }
}

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined