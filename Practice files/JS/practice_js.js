alert("Click \"OK\" to proceed :)");

function toCelsius(f) {
    return (5/9) * (f-32); 
}

function celsius(f) {
    var f;
    var c=((5/9) * (f-32));
    document.getElementById('test').innerText = "It is " + c.toFixed(1) + " celsius";
}