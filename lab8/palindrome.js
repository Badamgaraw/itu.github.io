function getPalindromeResult() {
    var num = window.prompt("Тоо оруул: ");
    num = parseInt(num);

    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    const result = isPalindrome(num.toString());
    return `Palindrome: ${result}`;
}
