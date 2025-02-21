// Example of type coercion
let number = 5;  // A number
let text = "The number is: ";  // A string

// Using the "+" operator to concatenate a string and a number (type coercion occurs here)
let result = text + number;  // JavaScript coerces the number to a string

// Output the result to the webpage
document.write(result);  // "The number is: 5"

// Log the result to the console for debugging
console.log(result);  // "The number is: 5"

// Another example of type coercion (numeric coercion)
let number2 = "10";  // A string
let result2 = number2 * 2;  // JavaScript coerces the string to a number before multiplication

// Output the result to the webpage
document.write("<br>The result of multiplying string '10' by 2 is: " + result2);  // 20

// Log the result to the console for debugging
console.log(result2);  // 20
