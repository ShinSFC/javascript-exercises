const reverseString = function(string) {
    let array = string.split('');
    let newString = array.reverse();
    return (newString.join(''));
};

reverseString('hello, sir!')

// Do not edit below this line
module.exports = reverseString;
