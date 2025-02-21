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
