function Ride_Function (){
    var Height, Can_ride;
    Height = document.getElementById("Height").ariaValueMax;
    Can_ride = (Height < 52) ? "You are too short":"you are all enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}