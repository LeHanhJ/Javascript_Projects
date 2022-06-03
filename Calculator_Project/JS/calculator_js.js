//creates an object to keep track of values
const calculator = {
    //this displays 0 on the screen
    Display_value: '0',
    //this will hold the first operand for any expressions, we set it to null for now
    First_operand: null,
    //this checks whether or not the second operand has been input
    Wait_second_operand: false,
    //this will hold the operator, we will set it to null for now
    operator: null,
};

//this modifies values each time a button is clicked
function Input_digit(digit) {
    const { Display_value, Wait_second_operand } = calculator;
    //we are checking to see if Wait_second_operand is true and set Display_value to the key that was clicked
    if (Wait_second_operand === true){
        calculator.Display_value = digit;
        calculator.Wait_second_operand=false;
    } else {
    //this overwrites Display_value if the current value is 0
    //otherwise it adds onto it
        calculator.Display_value = Display_value === '0' ? digit : Display_value + digit ;
    }
}

//this section handles decimal points
function Input_decimal(dot) {
    //this ensures that accidental clicking of the decimal point doesn't cause bugs in your operation
    if (calculator.Wait_second_operand === true) return;
    if (!calculator.Display_value.includes(dot)) {
        //we are saying that if the Display_value does not contain a decimal point
        //we want to add a decimal point
        calculator.Display_value += dot;
    }
}



//this section handles operators
function Handle_operator(Next_operator) {
    const { First_operand, Display_value, operator } = calculator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in 
    //Calculator.First_operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_value);
    //checks if an operator already exists and if Wait_second_operand is true,
    //then updates the operator and exits from the function
    if (operator && calculator.Wait_second_operand) {
        calculator.operator = Next_operator;
        return;
    }
    if (First_operand == null) {
        calculator.First_operand = Value_of_Input;
    } else if (operator) {//checks if an operator already exists
    const Value_now = First_operand || 0;
    //if the operator exists, property lookup is performed for the operator
    //in the Perform_calculation object and the function that matches the operator is executed
    let result = Perform_calculation[operator] (Value_now,Value_of_Input);
    //here we add a fixed amount of numbers after the decimal
    result = Number(result).toFixed(9)
    //this will remove any trailing 0s
    result = (result * 1).toString()
    calculator.Display_value = parseFloat(result);
    calculator.First_operand = parseFloat(result);

    }

    calculator.Wait_second_operand = true;
    calculator.First_operand = Next_operator;

}

    const Perform_calculation = {
        '/': (First_operand,Second_operand) => First_operand / Second_operand,

        '*': (First_operand,Second_operand) => First_operand * Second_operand,

        '+': (First_operand,Second_operand) => First_operand + Second_operand,

        '-': (First_operand,Second_operand) => First_operand - Second_operand,

        '=': (First_operand,Second_operand) => Second_operand
    };

    function Calculator_reset() {
        calculator.Display_value = '0';
        calculator.First_operand = null;
        calculator.Wait_second_operand = false;
        calculator.operator = null;
    }

    //this function updates the screen with the contents of Display_value
    function Update_display() {
        const display = document.querySelector('.calculator-screen');
        display.value = calculator.Display_value;
    }

    Update_display();

    //this section monitors button clicks
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        //the target variable is an object that represents the element
        //that was clicked
        const { target } = event; 
        //if the element that was clicked on is not a button, exit the function
        if (!target.matches('button')) {
            return;
        }

        if (target.classList.contains('operator')) {
            Handle_operator(target.value);
            Update_display();
            return;
        }

        if (target.classList.contains('decimal')) {
            Input_decimal(target.value);
            Update_display();
            return;
        }

        //ensures that AC clears the numbers from the calculator
        if (target.classList.contains('all-clear')) {
            Calculator_reset();
            Update_display();
            return;
        }

    Input_digit(target.value);
    Update_display();
})