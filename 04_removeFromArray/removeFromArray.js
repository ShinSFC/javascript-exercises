const removeFromArray = function(array, ...element) {
    //console.log(element); // element becomes an array
    for (let value1 of element) {
        console.log(value1);
        // console.log(array) array is available here
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
