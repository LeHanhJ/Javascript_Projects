document.write("Typeof: " + typeof "six"); //displays the type of 
document.write(" " + typeof 5); //displays output. number because it is a number with no quotes
document.write(" " + typeof "5"); //displays  type of output. string because it is in quotes
document.write(" " + typeof string + "..."); // displays 'undefined' because it is not recognized as a string due to no quotes
document.write(" String plus number: " + "6"+8 + "..."); //combines string '6' and number 8 together


function infinity(){
    document.getElementById("infinity").innerHTML = 2E310;
}

function negInfinity(){
    document.getElementById("neg_infinity").innerHTML = -2E310;
}

//boolean logic
    document.write(" Boolean Logic: " + (4>3)); //true
    document.write(" " + (5>=10)); //false
    document.write(" " + (5==9));//false
    document.write(" " + (99==99) + "...");//true


//console (F12>console)
console.log(2>2);

//triple equals comparison
a=5;
b=5;

c=4;
d=10;

e=9;
f="9";

document.write(" Triple equals Comparison: " + (a===b)); //true
document.write(" " + (f===a)); //false
document.write(" " + (c===d));//false
document.write(" " + (e===f) + "...");//false

//logical operators

//AND operators
document.write(" Logical Operators[AND]: " + (6>4 && 7>3)); //true
document.write(" " + (4>6 && 7>3) + "..."); //false

//OR operators
document.write(" Logical Operators[OR]: " + (4>6 || 7>3));//true
document.write(" " + (4>6 || 7>9) + "...");//false

//NOT operators
function not() {
    document.getElementById("not").innerHTML = !(30<40);
}

function not2(){
    document.getElementById("not2").innerHTML = !(10>40);
}