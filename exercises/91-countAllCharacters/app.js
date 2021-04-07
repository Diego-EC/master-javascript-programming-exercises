// Write your function here
function countAllCharacters(string) {
    let myArr = Array.from(string);
    let myObj = {};
    
    for (let i = 0; i < myArr.length; i++) {
        if(typeof myObj[myArr[i]] !== 'undefined'){
            myObj[myArr[i]]+=1;
        } else {
            myObj[myArr[i]]=1;
        }
    }
    
    return myObj;
}


var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}