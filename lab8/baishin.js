function getBaishinResult() {
    var toot = window.prompt("Тоот оруул:");
    toot = parseInt(toot);

    function apartment(davhar, orts, ail) {
        if (toot > davhar * orts * ail || toot < 1) {
            return "Invalid apartment number<br>"; 
        }
        const totalApartments = davhar * ail; 
        const entrance = Math.ceil(toot / totalApartments); 
        const floor = Math.ceil((toot - (entrance - 1) * totalApartments) / ail);
        const haalga = (toot - (entrance - 1) * totalApartments) % ail || ail; 

        return `3. ${entrance} -р орцны ${floor} давхарын ${haalga} хаалга <br>`; 
    }

    const davhar = 9; 
    const orts = 3;  
    const ail = 4;   

    const result = apartment(davhar, orts, ail);

    return result; // Return the result string for display
}
