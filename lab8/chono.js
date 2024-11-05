function getChonoResult() {
    var s = window.prompt("Зай оруул:"); 
    s = parseFloat(s); 
    
    const rabbitSpeed = 18; // km/h
    const wolfSpeed = 25; // km/h
    const distance = s;

    if (distance < 0) {
        return "Зай нь сөрөг утга байна.";
    }
    
    if (distance === 0) {
        return "Чоно аль хэдийн туулайг гүйцсэн байна.";
    }

    const v = wolfSpeed - rabbitSpeed;
    if (v <= 0) {
        return "Чоно туулайг гүйцэхгүй.";
    }

    const t = distance / v;
    const totalMinutes = t * 60; 
    const minutes = Math.floor(totalMinutes);
    const seconds = Math.round((totalMinutes - minutes) * 60);
    
    return `${minutes} минут ${seconds} секундын дараа гүйцэнэ`;
}
