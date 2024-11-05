var s = window.prompt("Зай оруул:"); 
s = parseFloat(s); 
function timeToCatch(rabbitSpeed, wolfSpeed, distance) {
    const v = wolfSpeed - rabbitSpeed;
    if (distance < 0) {
        return { error: "Зай нь сөрөг утга байна." }; 
    }
    if (distance === 0) {
        return { message: "Чоно аль хэдийн туулайг гүйцсэн байна." };
    }
    const t = distance / v; 
    const totalMinutes = t * 60; 
    const minutes = Math.floor(totalMinutes);
    const seconds = Math.round((totalMinutes - minutes) * 60);
    
    return { minutes, seconds };
}

const rabbitSpeed = 18; // km/h
const wolfSpeed = 25; // km/h
const time = timeToCatch(rabbitSpeed, wolfSpeed, s);

if (time.error) {
    document.write(`2. ${time.error}<br>`); // Output the error message
    console.log(time.error);
} else {
    document.write(`2. ${time.minutes} минут ${time.seconds} секундын дараа гүйцнэ<br>`); // Output the result
    console.log(`Minutes: ${time.minutes}, Seconds: ${time.seconds}`);
}
