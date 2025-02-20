function performMath() {
    var addition = 2 + 2;  // Addition operation
    var subtraction = 5 - 3;  // Subtraction operation
    var multiplication = 6 * 3;  // Multiplication operation
    var division = 12 / 4;  // Division operation
    var modulus = 7 % 3;  // Modulus operation (remainder of 7 divided by 3)

    var negationTrue = !true;  // Negation of true
    var negationFalse = !false;  // Negation of false
    var negationZero = !0;  // Negation of 0
    var negationOne = !1;  // Negation of 1

    // Using increment and decrement operators
    var number = 5;  // Starting number
    var incremented = number++;  // Post-increment: Increments after assignment
    var decremented = number--;  // Post-decrement: Decrements after assignment

    // Generate a random number between 0 and 1
    var randomNum = Math.random();

    // Generate a random number between 1 and 100 (inclusive)
    var randomInRange = Math.floor(Math.random() * 100) + 1;

    // Display all results in the paragraph with id "Math"
    document.getElementById("Math").innerHTML = 
        "2 + 2 = " + addition + "<br>" +  // Addition result
        "5 - 3 = " + subtraction + "<br>" +  // Subtraction result
        "6 * 3 = " + multiplication + "<br>" +  // Multiplication result
        "12 / 4 = " + division + "<br>" +  // Division result
        "7 % 3 = " + modulus + "<br>" +  // Modulus result
        "!true = " + negationTrue + "<br>" +  // Negation of true
        "!false = " + negationFalse + "<br>" +  // Negation of false
        "!0 = " + negationZero + "<br>" +  // Negation of 0
        "!1 = " + negationOne + "<br>" +  // Negation of 1
        "Increment 5 (Post-increment): " + incremented + "<br>" +  // Post-increment result
        "Decrement after increment (Post-decrement): " + decremented + "<br>" +  // Post-decrement result
        "Random number between 0 and 1: " + randomNum.toFixed(4) + "<br>" +  // Random number between 0 and 1
        "Random number between 1 and 100: " + randomInRange;  // Random number between 1 and 100
}
