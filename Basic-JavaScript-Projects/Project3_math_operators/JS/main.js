function performMath() {
    var addition = 2 + 2;  // Addition operation
    var subtraction = 5 - 3;  // Subtraction operation
    var multiplication = 6 * 3;  // Multiplication operation
    var division = 12 / 4;  // Division operation
    var simple_Math = (1 + 2) * 10 / 2 - 5;  // Multiple Operations
    var modulus = 7 % 3; // Modulus operation

    var negationTrue = !true;  // Negation of true
    var negationFalse = !false;  // Negation of false
    var negationZero = !0;  // Negation of 0
    var negationOne = !1;  // Negation of 1

    // Display the results in the paragraph with id "Math"
    document.getElementById("Math").innerHTML = 
        "2 + 2 = " + addition + "<br>" +  // Addition result
        "5 - 3 = " + subtraction + "<br>" +  // Subtraction result
        "6 * 3 = " + multiplication + "<br>" +  // Multiplication result
        "12 / 4 = " + division + "<br>" +  // Division result
        "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals: " + simple_Math + "<br>" +  // Multiple Result
        "7 % 3 = " + modulus+ "<br>" +  // Modulus Result
        "!true = " + negationTrue + "<br>" +  // Negation of true
        "!false = " + negationFalse + "<br>" +  // Negation of false
        "!0 = " + negationZero + "<br>" +  // Negation of 0
        "!1 = " + negationOne;  // Negation of 1
}



