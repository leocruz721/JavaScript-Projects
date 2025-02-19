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
//Function that uses the += operator
function myFunction() {
    var sentence = "I am learning"; //Creating the variable
    sentence += " a lot from this book!"; //using the += operator to add to the variable
    document.getElementById('Concatenate').innerHTML = sentence; //using document.getElementByID()
}