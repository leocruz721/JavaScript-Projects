//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXorO(sqaureNumber) {
    //This condition ensures a sqaure hasn't been selected already.
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the swaure number clicked on.
    if (!selectedSquares.some(Element => Element.includes(sqaureNumber))) {
        //This variable retreives the HTML element is that was clicked.
        let select = document.getElementById(sqaureNumber);
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/X.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to 'O', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/O.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(sqaureNumber + activePlayer);
        //This calls a function to check for any win condition.
        checkwinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'.
            activePlayer = 'O';
            //If active player is anything other than 'X'
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X';
        }

        //This funtion plays placement sound.
        Audio('./media/place.mp3');
        //This conditon checks to see if it the computers turn.
        if (activePlayer === 'O') {
            //This funtion disbales clicking for computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image and enable clicks.
            setTimeout(function() {computerTurns()}, 1000);
        }
        //Returning true is needed for our coumpterTurns() function to work.
        return true;
    }
    //This function results in a random square being selected by the computer.
    function computerTurns() {
        //This boolean is needed for our while loop.
        let succes = false;
        //This varibale stores a random number 0-8.
        let pickASqaure;
        //This condition allows our while loop to keepo trying if a swaure hasn't been selected yet.
        while (!succes) {
            //A random number between 0 and 8 is selected.
            pickASqaure = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the sqaures hasn't been selected yet.
            if (placeXorO(pickASqaure)) {
                //This lines calls the function.
                placeXorO(pickASqaure);
                //This changes our boolean and ends the loop.
                succes = true;
            };
        }
    }
}
