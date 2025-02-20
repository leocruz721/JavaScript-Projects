// JavaScript function that performs addition, subtraction, multiplication, and division and updates the paragraph element
function performMath() {
    const additionResult = 5 + 3; // Addition operation
    const subtractionResult = 5 - 3; // Subtraction operation
    const multiplicationResult = 5 * 3; // Multiplication operation
    const divisionResult = 5 / 3; // Division operation (will result in a decimal)

    // Update the content of the paragraph with the results
    document.getElementById("Math").innerText = "The result of 5 + 3 is: " + additionResult + "\n" +
                                                 "The result of 5 - 3 is: " + subtractionResult + "\n" +
                                                 "The result of 5 * 3 is: " + multiplicationResult + "\n" +
                                                 "The result of 5 / 3 is: " + divisionResult.toFixed(2); // Format division result to 2 decimal places
}
