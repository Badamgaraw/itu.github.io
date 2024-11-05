var toot = window.prompt("Тоот оруул:");
toot = parseInt(toot);

function apartment(davhar, orts, ail) {
    if (toot > davhar * orts * ail || toot < 1) {
        document.writeln("Invalid apartment number<br>");
        return; 
    }
    const totalApartments = davhar * ail; 
    const entrance = Math.ceil(toot / totalApartments); 
    const floor = Math.ceil((toot - (entrance - 1) * totalApartments) / ail);
    const haalga = (toot - (entrance - 1) * totalApartments) % ail || ail; 

    return { entrance, floor, haalga }; 
}

const davhar = 9; 
const orts = 3;  
const ail = 4;   

const details = apartment(davhar, orts, ail);

document.writeln(`3. ${details.entrance} -р орцны ${details.floor} давхарын ${details.haalga} хаалга <br>`);