function getUgluuoroiResult() {
    var num = window.prompt("Тоо оруул:"); 
    num = parseInt(num); 
    const now = new Date();
    const currentHour = now.getHours();
    
    let result; 

    if (currentHour >= 6 && currentHour < 18) {
        const square = num ** 2;
        result = `5. Өглөө: ${num}-ын квадрат нь ${square} байна.<br>`;
    } else {
        const squareRoot = Math.sqrt(num);
        result = `5. Орой: ${num}-ын язгуур нь ${squareRoot.toFixed(2)} байна.<br>`;
    }

    console.log(`Тоо: ${num}`);
    return result; 
}
