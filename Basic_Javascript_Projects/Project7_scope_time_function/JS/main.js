//Local variable and global variable

var x = 100;//global variable
function add_together() {
    var y = 10; //local variable
    console.log(x + y + 40 + "<br>");
}

function add_again() {
    console.log(x+y+40); //cannot pull var y because it is a local variable
}

add_together();
add_again();


//Practice code

//function mom_asks(){
//    if(new Date().getHours() < 20){
//        document.getElementById("concern").innerHTML = "Have you eaten yet?" + "<br>";
//    }
//}

//function year(){
//    if (2023 > 2022){
//        document.getElementById("logic").innerHTML = "I am from the future"
//    }
//}

function water_oz() { //makes function "water_oz()"
    ounces = document.getElementById("ounces").value; //draws "ounces" value from whatever is input by the user
    if (ounces >= 70 == ounces <= 150) { //lets program know what the compare "ounces" to, and what to do if it is more than 75
        result = "Yes, you are adequately hydrated. Good job!"; //tells the program that the variable "result" should equal to the set string IF the statement is true
    }
    else if (ounces >= 150) {
        result = "Wow, you must be peeing a lot. You're like Aquaman or something!"
    }
    else {
        result = "No, you should drink more water. Take a drink now!"; //tells program that variable "result" should equal to the set string IF the statement (ounces >=75) is false
    }
    document.getElementById("water_per_day").innerHTML = result; //tells program to print whichever "result" variable applies after user inputs their answer
}


//Time_function assignment
function Time_function() {
    var time = new Date().getHours(); //gets the program to call variable to get the time that is on the computer at the moment
    var reply; //sets variable "reply" for later use
    if (time < 12 == time > 0){ //"if time is before noon and is more than 0 (on a scale 0-24)...
        reply = "It is morning! Good morning!"; //""...call this reply"
    }
    else if (time >=12 == time < 18){ //same as above, but if the time is between noon and 6pm
        reply = "It is the afternoon. Did you eat lunch yet?";
    }
    else {
        reply = "It is the evening time. Time to wind down.";//if the time is anything other than 0-18 (6pm), then it would be evening time
    }
    document.getElementById("Time_of_day").innerHTML = reply; //tells program to call variable "reply" based on what time it pulled from variable "time"
}