function for_Loop() {
    const instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"]; // Array of instruments
    let result = ""; // Variable to store the list of instruments

    // Use a for loop to iterate through the array
    for (let i = 0; i < instruments.length; i++) {
        result += instruments[i] + "<br>"; // Add each instrument to the result string with a line break
    }

    // Display the result in the <p> tag with id "List_of_Instruments"
    document.getElementById("List_of_Instruments").innerHTML = result;
}

function array_Function() {
    // Define an array with some values
    const myArray = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    // Use innerHTML to display the array values in the <p> element with id "Array"
    document.getElementById("Array").innerHTML = myArray.join(", ");
}

// Create an object using const keyword (still use const as the object is not reassigned)
const person1 = {
    name: "John",
    age: 30,
    profession: "Developer"
};

// Function to display the object properties and modify values
function constant_function() {
    // Using let to declare a new variable for the output string
    let output = `Name: ${person1.name}, Age: ${person1.age}, Profession: ${person1.profession}`;
    
    // Display the initial properties of the object in the <p> tag
    document.getElementById("Constant").innerHTML = output;

    // Change a property’s value using let
    person1.age = 35;  // Change the age value

    // Add a new property with let
    person1.city = "New York";  // Add a new property 'city'

    // Create a new variable with updated values
    let updatedOutput = `${output}, Age: ${person1.age}, City: ${person1.city}`;
    
    // Display the updated output
    document.getElementById("Constant").innerHTML = updatedOutput;
}

// Create an object using let keyword
let person = {
    name: "Alice",
    age: 25,
    profession: "Engineer",

    // Method to return a description of the person
    description: function() {
        return `My name is ${this.name}, I am ${this.age} years old, and I work as an ${this.profession}.`;
    }
};

// Function to display the description in the HTML
function display_description() {
    // Accessing the description method of the person object
    let descriptionText = person.description();
    
    // Display the result inside the <p> tag with id "description"
    document.getElementById("description").innerHTML = descriptionText;
}

