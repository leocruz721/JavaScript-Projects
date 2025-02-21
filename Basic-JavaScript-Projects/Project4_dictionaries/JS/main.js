// Function to output a value to the HTML element with id "Dictionary"
function showDefinition() {
    // Dictionary containing KVPs
    const myDictionary = {
        "apple": "A sweet fruit that is typically red, green, or yellow.",
        "car": "A four-wheeled vehicle used for transportation.",
        "dog": "A domesticated carnivorous mammal, known as man's best friend."
    };

    // Accessing the dictionary and displaying the value of a specific key
    // For example, showing the definition of "apple"
    delete myDictionary.car;
    document.getElementById("Dictionary").innerHTML = "The definition of 'apple': " + myDictionary["apple"];
}

