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

