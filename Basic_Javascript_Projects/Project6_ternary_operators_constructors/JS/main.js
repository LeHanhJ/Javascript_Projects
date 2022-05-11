//ternary operation assignment

function vote_function() { //sets the vote_function function
    var age,can_vote; //sets variables "age" and "can_vote"
    age = document.getElementById("age").value; //"age" is the value that is input by the user in input id "age" in the HTML file
    can_vote= (age < 18 ) ? "You are not old enough":"You are old enough"; //the variable "can_vote" interprets user input "age" and judges if it is less than 18. the ? makes the string on the left side of the : display if the statement is true, and it displays the string on the right when false
    document.getElementById("vote").innerHTML = can_vote + " to vote."; //prints either the string on the left or right side of the : depending on whether the previous statement is true or false, and adds "to vote." to complete the statement and function
}

//new_and_this assignment

function clothing(material,bodyPart,weatherType,typeOfWear) { //creates object constructor "clothing()" with properties "material", "bodyPart", "weatherType", and "typeOfWear"
    this.clothing_material = material; //"this" is keyword that indicates object "clothing", assigns "clothing_material" to "material" property
    this.clothing_part = bodyPart; //see above; assigns "clothing_part" to "bodyPart" property
    this.clothing_type = weatherType; //assigns "clothing_type" to "weatherType" property
    this.clothing_wear = typeOfWear; //assigns "clothing_wear" to typeOfWear property
}

var windbreaker = new clothing("polyester" , "torso" , "windy" ,"outer wear"); //creates new instance of "windbreaker" in class/object "clothing" with appropriate properties based on what was preestablished 
var bra = new clothing("cotton", "upper torso", "every day", "every-day" ); //see above, with instance "bra"
var shoes = new clothing("leather", "feet", "every-day", "every-day"); //see above, with instance "shoes"
function clothes() { //creates function clothes()
    document.getElementById("New_and_This").innerHTML= "When I wear a bra, it is usually made of " + bra.clothing_material + " and I wear it " + bra.clothing_type + "."; //"bra.clothing_material" and "bra.clothing_type" is the instance the calls whatever properties was assigned to it when creating the variable "bra"
}

// nested_function assignment

function counting_function() {  //creates counting_function() function
    document.getElementById("nested_function").innerHTML = count(); //tells function to call count() function
    function count() { //creates count() function
        var start = 5; ///sets start variable to 5
        function plus_one() {start += 1;} //creates plus_one() function, tells it to call "start" [which is 5] and add 1
        plus_one(); //calls previous function
        return start; //returns to variable start; ends function
    } //end of function
}
