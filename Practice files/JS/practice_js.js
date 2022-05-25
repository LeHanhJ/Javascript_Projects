alert("Click \"OK\" to proceed :)");

function toCelsius(f) {
    return (5/9) * (f-32); 
}

function celsius(f) {
    var f;
    var c=((5/9) * (f-32));
    document.getElementById('test').innerText = "It is " + c.toFixed(1) + " celsius";
}

let book = {
    title: "Hitchhiker's Guide to the Internet",
    genre: "Non-fiction",
    length: "200-300 pages",
    published: "1987",
    author: "Ed Krol",
    description: function() {
        return this.title + " by " + this.author + " is a " + this.genre + " book around " + this.length +". It was published in " + this.published + ". ";
    }
};
document.getElementById("booked").innerHTML = book.description();
