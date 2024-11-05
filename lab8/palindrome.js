function getPalindromeResult() {
    var num = parseInt(window.prompt("Тоо оруул: "));

    function isPalindrome(value) {
        const str = value.toString();
        return str === str.split('').reverse().join('');
    }

    function sumIsPalindrome(value) {
        var sum = 0;
        const digits = value.toString().split(''); 

        for (var digit of digits) {
            sum += parseInt(digit);
        }

        return isPalindrome(sum);
    }

    const isNumPalindrome = isPalindrome(num);
    const isSumPalindrome = sumIsPalindrome(num);

    return `Palindrome: ${isNumPalindrome} <br> Digit sum is palindrome: ${isSumPalindrome}`;
}

