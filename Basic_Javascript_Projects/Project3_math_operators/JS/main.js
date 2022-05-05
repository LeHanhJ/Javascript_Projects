function addResult(a) {
    var a;
    var add = (a+a);
    document.getElementById("Math").innerText = "5 + 5 =" + add;

} // '+' adds  variables

function subtractResult() {
    var subtract = 5 - 2;
    document.getElementById("Maths").innerHTML = "5 - 2 = " + subtract;
} //'-' subtracts 

function multiplication() {
    var simple_math= 6*8;
    document.getElementById("math").innerHTML = "6 x 8 = " + simple_math;
} //'x' multiplies integers
function division(){
    var simple_Maths = 48/6;
    document.getElementById("maths").innerHTML = "48 / 6 = " + simple_Maths;
} //'/' divides integers

function more_maths() {
    var moreMath = (1+2) * 10 / 2 -5;
    document.getElementById("mathz").innerHTML = "1 plus 2, multiplied by 10, divided in half, and then subtracted by 5 =" + moreMath;
} //multiple operators

function dividend(){
    var div=9%4;
    document.getElementById("divi").innerHTML = "The remainder for 9 divided by 4 =" + div;
}//'%' gives remainder of whatever is divided

function negation(){
    var z = 9;
    document.getElementById("negi").innerHTML = "A random number with a negation operator would be " + -z;
} //'-' in front of variable makes it a negation

function increment(){
    var x = 10;
    x++;
    document.getElementById("increment").innerHTML = x;  
}//increase variable number by 1

function decrement() {
    var u=9;
    u--;
    document.getElementById("decrement").innerHTML = u;
} //decrease variable number by 1

window.alert(Math.random());//choose random number between 0 and 1
window.alert(Math.random()*50); //choose random number between 0 and 50

function pi(){
    var pi_val = Math.PI;
    document.getElementById("pi").innerHTML = pi_val*2; //Math as an object
}

function round(){
    var r_num = Math.random(4).toFixed(2);
    document.getElementById("round").innerHTML = r_num; //random to choose a random bumber between 0 and 4, and toFixed to make number stop at the hundreths digit
}

function rounds(){
    var r_nums = Math.sqrt(5);
    document.getElementById("rounds").innerHTML = r_nums; //sqrt() squares ()
}