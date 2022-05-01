var x = 25; //sets the variable of X
var y = 54; //sets the variable of y

function colorChange() { //calls colorChange function
    document.getElementById('colors').style.color = 'blue'; //calls function to change color of id 'colors' to blue
}

function areaFunc() { //calls areaFunc to run when pressing button element
    var length = x; //sets "length" to equal to x
    var width = y; //sets "width" to equal to y
    var area = length*width; //sets 'area' to be 'length' multiplied by 'width', which in turn equals x multiplied by y
    document.getElementById('total').innerText = area + 'm'; //calls 'area' and sets it to innerText when clicked on

}

function Concatenate() { //calls concatenate function
    var sentence = "I'm getting used to this."; //sets variable to string 
    sentence += " But I still need a lot of practice!"; //adds string to string set in variable "sentence"
    document.getElementById("concatenate").innerHTML = sentence; //sets sentence with added concatenate (+=) to be called when rolled over
}

//THIS IS PRACTICE CODE
//function myFunction() {
   // var sentence = "I am learning";
    //sentence += " a lot from this course!";
   // document.getElementById("Concatenate").innerHTML = sentence;
//}


//function Button() {
    //var str = 'Hello there!';
    //document.getElementById('Button_Text').innerHTML = str;
//}

//function mouseOver() {
   // document.getElementById('Button_Text').style.color = "green";
//}

//function mouseOut() {
//    document.getElementById('Button_Text').style.color = "white";
//}
