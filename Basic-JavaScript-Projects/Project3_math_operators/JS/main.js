// JavaScript function that performs both addition and subtraction and updates the paragraph element
function performMath() {
    const additionResult = 5 + 3; // Addition operation
    const subtractionResult = 5 - 3; // Subtraction operation

    // Update the content of the paragraph with the results
    document.getElementById("Math").innerText = "The result of 5 + 3 is: " + additionResult + "\n" +
                                                 "The result of 5 - 3 is: " + subtractionResult;
}
