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
