
var num = window.prompt("Тоо оруул: ");
num = parseInt(num);

function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

function digitSumIsPalindrome(number) {
    const digits = number.toString().split('').map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    return isPalindrome(sum);
}
document.write("1. Palindrome: " + isPalindrome(num) + "<br>");

document.write("Digit sum is palindrome: " + digitSumIsPalindrome(num) + "<br>");



