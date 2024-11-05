let x = [];
for (let i = 0; i < 5; i++) {
    let num = parseInt(window.prompt(`${i + 1}-р тоог оруул :`)); 
    x.push(num); 
}
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function findGCD(numbers) {
    return numbers.reduce((acc, num) => gcd(acc, num));
}
const resultGCD = findGCD(x);

console.log(`Хамгийн бага ерөнхий хуваагдагч: ${resultGCD}`);
document.write(`4. Хамгийн бага ерөнхий хуваагдагч: ${resultGCD}<br>`);
