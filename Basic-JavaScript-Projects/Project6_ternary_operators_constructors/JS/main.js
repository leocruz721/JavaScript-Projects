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