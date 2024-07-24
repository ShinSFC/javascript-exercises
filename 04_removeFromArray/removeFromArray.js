const removeFromArray = function(array, ...element) {
    // element becomes an array because of ...
    for (let value1 of element) {
        console.log(value1);
        array = array.filter( function(value2) { // return is needed here or result is undefined
            return value2 != value1;
        });
    }
    return array
};
  

let result = removeFromArray([1, 2, 3, 4], 2, 3);
console.log(result);

// Do not edit below this line
module.exports = removeFromArray;
