const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^\w]|_/g, '');
    if (str == str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
};
const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
str.filter((char) => alphanumerical.includes(character))
// Do not edit below this line
module.exports = palindromes;
