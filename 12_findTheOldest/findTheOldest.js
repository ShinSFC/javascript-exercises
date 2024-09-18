const findTheOldest = function(array) {
    array.sort((a, b) => {
        if (((a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth) < ((b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth)) {
            return -1;
        } else {
         return 1;
        }
    });
    return array[array.length - 1];
};

// Do not edit below this line  
module.exports = findTheOldest;
