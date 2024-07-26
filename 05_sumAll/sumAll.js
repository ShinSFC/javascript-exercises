let array = []

const sumAll = function(num1, num2) {
    let result = 0;
    if ((num1 || num2) < 0) {
        return 'ERROR';
    } else if ((Number.isInteger(num2) != true) ||
        (Number.isInteger(num1) != true)) {
        return 'ERROR';
    } else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            result += i;
        }   
    } else {
        for (let i = num2; i <= num1; i++) {
            result += i;
        }
    }
    console.log(result);
    return result;
}

// sumAll(13, 10); 


// Do not edit below this line
module.exports = sumAll;
