function Ride_Function (){
    var Height, Can_ride;
    Height = document.getElementById("Height").ariaValueMax;
    Can_ride = (Height < 52) ? "You are too short":"you are all enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function checkVotingAge() {
    // Get the user's age from the input field
    let age = document.getElementById("age").value;

    // Use the ternary operator to determine if the user can vote
    let message = (age >= 18) ? "You can vote!" : "You are not old enough to vote.";

    // Display the message in the paragraph with id "result"
    document.getElementById("result").innerText = message;
}

function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make
    this.Vehicle_Model = Model
    this.Vehicle_Year = Year
    this.Vehicle_Color = Color
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emlily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + 
    " manufacted in " + Erik.Vehicle_Year;
}

// Car class definition
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display car info
    getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// Function to create a car instance using the new keyword
function createCar() {
    // Create a new instance of the Car class
    const myCar = new Car("Toyota", "Corolla", 2020);

    // Display the car info in the HTML paragraph with id "result"
    document.getElementById("result").innerText = "Car Created: " + myCar.getCarInfo();
}
