var num = window.prompt("тоо оруул:"); 
num = parseInt(num); 
const now = new Date();
const currentHour = now.getHours();
if (currentHour >= 6 && currentHour < 18) {
    const square = num ** 2;
    document.write(`5. Өглөө: ${num}-ын квадрат нь ${square} байна.<br>`);
} 
else {
    const squareRoot = Math.sqrt(num);
    document.write(`5. Орой: ${num}-ын язгуур нь ${squareRoot.toFixed(2)} байна.<br>`);
}

console.log(`Тоо: ${num}`);
