//WHILE LOOP
function loopdeloop(){ //creates function loopdeloop()
    var number=""; //sets variable number to an empty string
    var x = 2; //sets variable x to 2
    while ( x < 5000 ) { //sets a while loop
        number +="<br>" + x;
        x+=x; //this loop sets that when x (2) is less than 5000, then add it by itself.
    }
    document.getElementById("Loop").innerHTML = number; //tells the program to print out what is defined in variable "number", which in this case will make a break and define whatever x += x is until 5000.
}

//FOR LOOP

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //defines variable instrument as having multiple values in different types of instruments
var content = ""; //sets variable content to an empty string
var y; //sets a variable y
function for_loop(){ //defines function for_loop()
    for (y=0; y< instruments.length; y++){ // begins a loop; y will start at 0, for everytime instrument.length is less than y (0), y will increase by 1. instruments.length is referring to the length of the array that variable instruments has. so the loop will end when we run out of instruments
    content += instruments[y] + "</br>"; //sets content as whatever instrument will be defined per what point of the array it is in, starting from 0, and adds a break at the end
    }
    document.getElementById("List_of_Instruments").innerHTML = content; //prints variable content as defined above
}  

//ARRAY FUNCTION

function array_function() { //creates an array function
    var food = []; //sets up variable food f or an array
    food[0] = " a kiwi."; //defines what is at each index of variable "food"
    food[1] = " lentils.";
    food[2] = " mac and cheese.";
    food[3] = " a mango.";
    document.getElementById("Array").innerHTML = "My favorite food has to be" + food[3]; //calls whatever food is in position 3 above in addition to the string defined
}

//CONSTANT FUNCTION

function constant_function() { //creates contant_function() function
    const seating = {type: "lounger", color: "black", seats:"one"}; //defines a constant of "seating", establishing different values, such as type, color, and seats
    document.getElementById("constant").innerHTML = "I'd like to buy a " + seating.type + " that is " + seating.color + "."; //prints respective seating definitions as stated above
    seating.type = "sofa"; //changed seating types, seat, and added a seating price value of constant seating
    seating.seats = "two";
    seating.price = "$400";
    document.getElementById("constant").innerHTML = "I'd like to buy a " + seating.type + " that costs around " + seating.price + " and it must seat " + seating.seats + "."; //prints out seating values as changed above
}

//LET KEYWORD

var x = " a sandwich!"; //sets variable x as the defined string in a global scope
{
    let x = " some beef noodle soup!"; //sets x to be a differently defined string in this local scope
    document.write("Let's eat" + x + "<br>"); //document writes the strings plus the x variable that is within this local scope
}
document.write("Let's eat" + x + "<br>"); // document writes string plus x that is defined in the global scope

//RETURN STATEMENT

function return_function() {  //creates function return_function()
    document.getElementById("return").innerHTML = funkytion(); 
    function funkytion(){ //creates function funkytion()
        var u = 98; //sets variable u to 98
        u++; //increases variable u (98) by 1
        return "I got " + u + " problems, and my inability to do things is one."; //returns variable u++ plus the strings defined
    }
}

//OBJECT ASSIGNMENT - I had an issue with this assignment not showing up when I first wrote it out. Frank told me to put "defer" in the source tag and it worked, but not before something else broke too. We fixed everything by putting the source tag right before the closing body tag, so everything works now. Thanks Frank!
let book = { //sets variable book and imbues it with values title, genre, length, published, and author
    title: "Hitchhiker's Guide to the Internet",
    genre: "Non-fiction",
    length: "200-300 pages",
    published: "1987",
    author: "Ed Krol",
    description: function() { //also sets value description as a function
        return this.title + " by " + this.author + " is a " + this.genre + " book around " + this.length +". It was published in " + this.published + ". "; //this function will return set strings and object values defined
    }
};
document.getElementById("booked").innerHTML = book.description(); //prints out book.description() as description() returns the set strings/object.vaules

//BREAK STATEMENT
function breaked() { //creates function breaked() when p element is pressed
    let r = ""; //sets variable r as a string
        for (let l = 1; l < 20; l++) { //begins loop; l starts as 1 and for everytime l is less than 20, it will add 1 at the end of the loop
            if (l==8) {break;} //states that if l is equal to 8, then the loop jumps out of the loop
            if (l == 5) {continue;} //states that if l is equal to five, it will continue from the next number
            r += "this number is " + l + "<br>" ;  //makes r equate to the string plus whatever r is, and a break
        }
   
    document.getElementById("breaked").innerHTML = r; //prints r as defined as above
    }