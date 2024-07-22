const removeFromArray = function(array, element) {
    // console.log(element); // element becomes an array
    // for (value of element) {
    // console.log(value);
    return array.filter( function(value) {
        return value != element;
    });
    
};

let array = [1, 2, 3, 4];
let result = removeFromArray(array, 2);
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
