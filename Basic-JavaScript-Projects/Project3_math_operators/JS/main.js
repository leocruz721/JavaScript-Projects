// JS/main.js

// JavaScript function that performs multiple mathematical operations and updates the paragraph element
function performMath() {
    const additionResult = 5 + 3;          // Addition operation
    const subtractionResult = 5 - 3;       // Subtraction operation
    const multiplicationResult = 5 * 3;    // Multiplication operation
    const divisionResult = 5 / 3;          // Division operation (will result in a decimal)
    const modulusResult = 5 % 3;           // Modulus operation (remainder of division)
    const exponentiationResult = 5 ** 3;   // Exponentiation operation (5 raised to the power of 3)

    // Update the content of the paragraph with the results of all operations
    document.getElementById("Math").innerText = 
        "The result of 5 + 3 is: " + additionResult + "\n" +
        "The result of 5 - 3 is: " + subtractionResult + "\n" +
        "The result of 5 * 3 is: " + multiplicationResult + "\n" +
        "The result of 5 / 3 is: " + divisionResult.toFixed(2) + "\n" + // Format division result to 2 decimal places
        "The result of 5 % 3 is: " + modulusResult + "\n" +
        "The result of 5 ** 3 is: " + exponentiationResult;
}
