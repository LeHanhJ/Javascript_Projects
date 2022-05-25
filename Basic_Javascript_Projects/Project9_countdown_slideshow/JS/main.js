//COUNTDOWN TIMER ASSIGNMENT

function countdown() { //sets function countdown()
    var seconds = document.getElementById("seconds").value; //variable 'seconds' will grab whatever value is inputted by the user in the element input with id "seconds"

   function tick() { //creates a tick() subfunction within countdown()
        seconds = seconds - 1; //seconds defined in the beginning of the overall function will be defined as seconds (based on user input) minus 1 in this subfunction
        timer.innerHTML=seconds; //this makes the timer in innerHTML go down since seconds is defined as seconds-1
        var time = setTimeout(tick,1000);
            if (seconds == -1) { //if the seconds go below 0, there will be an alert on the webpage
                alert ("Time's up!"); //brings up an alert once the timer reaches -1
                clearTimeout(time); //clears the timer once the alert is confirmed
                timer.innerHTML = ""; // again, clears the timer to start anew
            }
    }
    tick(); //runs the tick() subfunction as stated above based on what value of seconds the user inputs
}


////SLIDESHOW ASSIGNMENT

let slideIndex = 1; //starts slideIndex at 1
showSlides (slideIndex); //we will start the slides at index 1 

//Next/Previous controls
function plusSlides(n) { //sets function "plusSlides(n), which we have defined in the html as 1 and -1
    showSlides(slideIndex += n); //based on the html file, this function will be called on click, which will add 1 or -1 to the slide index, going forward or backward of the current slide
}

// Thumbnail image controls
function currentSlide(n) { //need help with this; from what I can understand, it is calling function currentSlides(n), where n is defined as 1, 2, and 3 in the html file. contd in next comment
    showSlides(slideIndex = n);//this means that when we click on each dot, it will show us whatever slide is associated with the number, since n is equal to whatever the current slide is and consequently is equal to the slideIndex. The problem I have is that the dot disappears when I click to view it. I've looked over it several times but I can't figure out what's wrong.
}

//can someone doublecheck on whether i have understood everything with my explanations? Not sure of the latter part of this code. Thanks!
function showSlides(n) { //sets function showSlides(n)
    var i; //sets variable i for future use in the function
    var slides = document.getElementsByClassName("mySlides"); //sets variable slides to grab element div with class mySlides
    let dots = document.getElementsByClassName("dot"); //sets variable dots to grab element span with class dot
    if (n > slides.length) {slideIndex = 1} //resets if we are on the last slide
    if (n < 1) {slideIndex = slides.length} //if we are on slide 1, we will go to slide.length = 3
    for (i = 0; i < slides.length; i++) { //this says that for i that is equal to 0, and if i is less than slides.length (2), then add another number to i, so it will count up until it is not less than 2
        slides[i].style.display = "none"; // a subfunction that uses i from the previous function; for whatever slide it is on, it will display none(?)
    }
    for (i=0; i < dots.length; i++) { //basically same as previous subfunction with slides.length.
        dots[i].className = dots[i].className.replace(" active", ""); //for whatever variable i is, it will replace the className with "active"(?)
    }
    slides[slideIndex-1].style.display = "block"; //not sure what these two lines are regarding, other than .active being in the css code with a dot:hover effect
    dots[slideIndex-1].className += " active"; 
}


