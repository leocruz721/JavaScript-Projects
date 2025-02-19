// Function that assigns two variables and modifies an HTML element using document.getElementById
function changeText() {
    // Assigning values to two variables
    var greeting = "Hello, ";
    var name = "Alice!";

    // Concatenate the two variables
    var message = greeting + name;

    // Use document.getElementById to change the text of the paragraph with id "output"
    document.getElementById("output").innerHTML = message;
}

// Get the element by its ID
let element = document.getElementById("output");

// Initialize the string and concatenate
let message = "Hello, ";
message += "world! This is concatenated text.";

// Set the concatenated string as the content of the element
element.innerText = message;
