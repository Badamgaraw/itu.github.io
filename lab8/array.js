function getArrayResult() {
    let x = [];
    
    for (var i = 0; i < 5; i++) {
        var num = parseInt(window.prompt(`${i + 1}-р тоог оруул :`)); 
        x.push(num); 
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function find(numbers) {
        var current = numbers[0]; 

        for (var i = 1; i < numbers.length; i++) {
            current = gcd(current, numbers[i]);
        }
        
        return current;
    }

    const result = find(x);
    
    return `4. Хамгийн бага ерөнхий хуваагдагч: ${result}<br>`;
}
