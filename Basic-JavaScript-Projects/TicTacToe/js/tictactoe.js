// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an X or O in a square
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checks who's turn it is.
        if (activePlayer === 'X') {
            // If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/X.jpg")';
        } else {
            // If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/O.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to the array.
        selectedSquares.push(squareNumber + activePlayer);
        // This calls a function to check for any win condition.
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            activePlayer = 'O'; // Change to computer's turn
            disableClick(); // Disable clicking for the computer's turn
            setTimeout(computersTurn, 1000); // Wait 1 second before computer plays
        } else {
            activePlayer = 'X'; // Change to player's turn
        }
        // This function plays placement sound.
        audio('./media/place.mp3');
        return true;
    }
}

// This function is for the computer's turn
function computersTurn() {
    let success = false;
    let pickASquare;

    // Keep trying until a valid square is found
    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9)); // Random square 0-8

        // If the random square is available
        if (placeXOrO(pickASquare)) {
            success = true; // Valid move made
        }
    }
    enableClick(); // Enable clicking after the computer's turn
}

// Function to check win conditions
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 508) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(resetGame, 500); // Reset game after a tie
    }

    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        return a && b && c;
    }
}

// Function to reset the game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = ''; // Clear the square's background
    }
    selectedSquares = []; // Reset the selected squares array
}

// Function to play sound
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

// Function to disable clicking
function disableClick() {
    const body = document.querySelector('body');
    body.style.pointerEvents = 'none';
}

// Function to enable clicking
function enableClick() {
    const body = document.querySelector('body');
    body.style.pointerEvents = 'auto';
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');

    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    // Track the progress of the line animation
    let animationFrame;

    // This function will animate the drawing of the win line
    function animateLineDrawing() {
        c.clearRect(0, 0, 608, 608); // Clear canvas on each frame

        // Start a new path for the line
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);  // Draw the line up to the current point (x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(250, 4, 4, 0.8)';
        c.stroke();

        // Update the coordinates to gradually draw the line
        if (x < x2) {
            x += 10;
        }
        if (y < y2) {
            y += 10;
        }

        // Stop the animation once the line reaches the end point
        if (x >= x2 && y >= y2) {
            cancelAnimationFrame(animationFrame);
        } else {
            animationFrame = requestAnimationFrame(animateLineDrawing); // Keep the animation going
        }
    }

    // Disable click while the line is being drawn
    disableClick();

    // Play the win sound
    audio('./media/winGame.mp3');

    // Start drawing the line
    animateLineDrawing();

    // After the animation completes, reset the game
    setTimeout(function () {
        clearCanvas();
        resetGame();
    }, 1000); // Wait for the animation to finish before resetting
}

// Clear the canvas after the animation finishes
function clearCanvas() {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, 608, 608); // Clear the entire canvas
}

// Disable clicks during the animation
function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(function () {
        document.body.style.pointerEvents = 'auto';
    }, 1000); // Re-enable clicks after 1 second
}
