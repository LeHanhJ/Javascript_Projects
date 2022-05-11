//.CONCAT 

function sentence(){
    var part1= "I think";
    var part2= " that I";
    var part3 = " can pass this course";
    var part4 = " even after being";
    var part5 = " scheduled for more shifts";
    var part6 = " than I signed up for.";
    var full_sentence = part1.concat(part2, part3, part4, part5, part6);
    document.getElementById("concat").innerHTML = full_sentence;
}

//SLICE method

function slice() {
    var saying = "Who am I? I am Me!";
    var section = saying.slice(15,18); //takes whatever is in the 15th to 18th position in pre-established string
    document.getElementById("slice").innerHTML = section;
}

//toUpperCase() method

function shout() {
    var sentence = "What do you want for dinner, honey?!";
    var shouting = sentence.toUpperCase(); //makes sentence definined previously to all uppercase letters
    document.getElementById("uppercase").innerHTML = shouting;
}

//search() method -- looking at w3schools, what does "/" mean when added to the string during search()? I tried it and it gave me -1 to instances of / ("/i/"", "/i/i"), which means it cannot find it.
function searchMe() {
    var sentence = "Which position am I at?";
    var me = sentence.search("I"); //searches "I" in the string of variable "sentence"
    document.getElementById("search").innerHTML = "'I' is in the " + me + " position.";
}

//toString() method
function stringTheoryjk() {
    var number = (Math.random() * 10 + 1); //sets "number" variable to a random number between 1 and 10
    document.getElementById("string_theory").innerHTML = number.toString(); //makes previous number into a string
}

//toPrecision() method
function precise() {
    var x = 97341.2391;
    document.getElementById("precision").innerHTML = x.toPrecision(6); //calls number that was previously defined by variable "x" to 6 places, ignoring decimals
}

//toFixed() method
function fixed() {
    var y = 98174.1458889174988992834792427;
    document.getElementById("fixed").innerHTML = y.toFixed(2); //calls number from preestablished variable and stops in position specified, after the decimal

}

//valueOf() method
function value_of() {
    var number = 29;
    var u = number.valueOf();
    document.getElementById("value").innerHTML = u; //makes the number value a primitive value
}