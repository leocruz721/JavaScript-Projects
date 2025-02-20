// Function to perform addition and display the result
function performAddition() {
    // Addition of two numbers
    var result = 2 + 2;
    // Displaying the result in the paragraph with id "additionResult"
    document.getElementById("additionResult").innerHTML = "2 + 2 = " + result;
}

// Function to perform subtraction and display the result
function performSubtraction() {
    // Subtraction of two numbers
    var result = 5 - 3;
    // Displaying the result in the paragraph with id "subtractionResult"
    document.getElementById("subtractionResult").innerHTML = "5 - 3 = " + result;
}

// Function to perform multiplication and display the result
function performMultiplication() {
    // Multiplication of two numbers
    var result = 6 * 3;
    // Displaying the result in the paragraph with id "multiplicationResult"
    document.getElementById("multiplicationResult").innerHTML = "6 * 3 = " + result;
}

// Function to perform modulus (remainder of division) and display the result
function performModulus() {
    // Modulus operation to find the remainder of division
    var result = 7 % 3; // Remainder when dividing 7 by 3
    // Displaying the result in the paragraph with id "modulusResult"
    document.getElementById("modulusResult").innerHTML = "7 % 3 = " + result;
}

// Function to perform increment and display the result
function performIncrement() {
    // Start with a number
    var number = 5;
    // Post-increment: the current value is used before the increment
    var result = number++;
    // Displaying the result in the paragraph with id "incrementResult"
    document.getElementById("incrementResult").innerHTML = "Increment 5 (Post-increment): " + result;
}

// Function to perform decrement and display the result
function performDecrement() {
    // Start with a number
    var number = 5;
    // Post-decrement: the current value is used before the decrement
    var result = number--;
    // Displaying the result in the paragraph with id "decrementResult"
    document.getElementById("decrementResult").innerHTML = "Decrement 5 (Post-decrement): " + result;
}

// Function to generate a random number and display it
function performRandom() {
    // Generating a random number between 0 and 1
    var randomNum = Math.random();
    // Generating a random integer between 1 and 100
    var randomInRange = Math.floor(Math.random() * 100) + 1;
    // Displaying the result in the paragraph with id "randomResult"
    document.getElementById("randomResult").innerHTML = 
        "Random number between 0 and 1: " + randomNum.toFixed(4) + "<br>" + 
        "Random number between 1 and 100: " + randomInRange;
}
