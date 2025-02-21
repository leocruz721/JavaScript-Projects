// Global variable
let globalVar = "I am a global variable";

// Function with a local variable
function debugFunction() {
    // Local variable
    let localVar = "I am a local variable";

    console.log(globalVar); // This will work because globalVar is a global variable
    console.log(localVar); // This will work because localVar is within the function scope

    // Intentional error: trying to log a non-existing variable `nonExistentVar`
    console.log(nonExistentVar); // This will throw an error because nonExistentVar is not defined
}

// Function to display a time-based message
function displayTimeMessage() {
    // Get the current hour using new Date().getHours()
    let currentHour = new Date().getHours();

    // Use an if statement to determine the message based on the time
    let message = "";

    if (currentHour < 12) {
        message = "Good morning!";
    } else if (currentHour < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }

    // Use document.getElementById() to modify the content of the paragraph with id 'timeMessage'
    document.getElementById("timeMessage").innerHTML = message;
}

// Example of an if statement

let number = -5;  // You can change this number to test different scenarios

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enought to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

// Function to check voting eligibility
function checkVotingEligibility() {
    // Get the age entered by the user
    let age = document.getElementById("userAge").value;
    
    // Get the paragraph element to display the result
    let resultMessage = document.getElementById("resultMessage");

    // Check if the age is 18 or greater
    if (age >= 18) {
        resultMessage.innerHTML = "You are eligible to vote!";
    } else {
        resultMessage.innerHTML = "You are not old enough to vote.";
    }
}
