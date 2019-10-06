// game.js -- Psychic Game JScript

// Initialize Computer Options array (a-z)
var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Initialize Wins, Losses, GuessesLeft, GuessesSoFar
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = " ";

// Create variables that hold references to places in HTML to display things
var directionsText = document.getElementById("directions-text");
var computerChoiceText = document.getElementById("computer-choice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far");
 
// Start round
// Computer randomly chooses from the array
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

// Load all HMTL before executing
$(document).ready(function() {

    // Function captures user keypress
    document.onkeyup = function (event) {

        // Reset Computer Choice
        computerChoiceText.textContent = " ";

        // Determine which key was pressed
        var userGuess = event.key.toLowerCase();

        // Check for inpur error. If invalid, repeat directions!
        if (computerOptions.indexOf(userGuess) < 0) {
            directionsText.textContent = "Please enter a valid letter (a-z)!!!";
        }
        // Check for inpur error. If repeat, repeat directions!
        else if (guessesSoFar.includes(userGuess)) {
            directionsText.textContent = "Please enter a new letter (a-z)!";
        }
        // If not correct, decrement GuessesLeft, and ...
        else if (userGuess !== computerChoice) {
            guessesLeft--;
            guessesSoFar = guessesSoFar + userGuess + ", ";
            directionsText.textContent = "Not " + userGuess + ". Try again!";
            // Check for loss, if so, declare loss and reset
            if (guessesLeft === 0) {
                losses++;
                guessesLeft = 10;
                guessesSoFar = " ";
                directionsText.textContent = "You lost! Try again ...";
                computerChoiceText.textContent = "Computer chose " + computerChoice;
            }
        }
        // If correct, declare WINNER and reset
        else {
            wins++;
            guessesLeft = 10;
            guessesSoFar = " ";
            directionsText.textContent = "You win!!! Try again ...";
            computerChoiceText.textContent = "Computer chose " + computerChoice;
        }
        // Display game status
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;         
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar;         
    }     
});

// Copywrite 2019 Dean McCluskey 