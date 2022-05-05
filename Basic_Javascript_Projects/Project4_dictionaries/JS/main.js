function hero_select() {
    var winston = {
        Name: "Winston",
        Role: "Tank",
        Primary: "Tesla cannon",
        Secondary: "Rail gun",
        Age: 29,
        Ultimate: "Primal Rage"
    }; //putting in key:value pairs for variable 'winston'
    delete winston.Secondary; //deletes secondary key on variable 'winston'
    document.getElementById("dictionary").innerHTML = winston.Secondary; //prints secondary value of variable winston
}