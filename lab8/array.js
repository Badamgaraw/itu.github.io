function getArrayResult() {
    let x = [];
    for (var i = 0; i < 5; i++) {
        var num = parseInt(window.prompt(`${i + 1}-р тоог оруул :`)); 
        num = parseInt(num);
        x.push(num); 
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function findGCD(numbers) {
        return numbers.reduce((acc, num) => gcd(acc, num));
    }

    const resultGCD = findGCD(x);
    
    return `4. Хамгийн бага ерөнхий хуваагдагч: ${resultGCD}<br>`;
}
