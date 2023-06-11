// Variable to hold the words for the game
var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming', 
  'meatloaf',
  'ukulele',
  'mango'
];

// Create var to track game's state
var previousWord = ""
var remainingGuessesLeft = 10
var incorrectLettersGuesses = []
var wins = 0
var losses = 0
var correctLetters = []
var answer = false

// Retrieve the required elements from the HTML document using their IDs and store them for later use. Sets the initial values of some elements.
var wordToGuess = document.getElementById("word-to-guess")
wordToGuess.textContent = ""
var previousWord = document.getElementById("previous-word")
var incorrectLetters = document.getElementById("incorrect-letters")
var remainingGuesses = document.getElementById("remaining-guesses")
remainingGuesses.textContent = remainingGuessesLeft
var showWins = document.getElementById("wins")
var showLosses = document.getElementById("losses")

 // Select a random word from the words array and assign it to the variable correctWord. The variable lettersGuessed keeps track of the number of letters in the chosen word.
var correctWord = words[Math.floor(Math.random() * words.length)]
var lettersGuessed = correctWord.length

// Create an array called solution by splitting the correctWord into individual characters. It initializes each element of solution to an underscore. It then joins the solution array back into a string and assigns it to displayWord. It logs the correctWord to the console and sets the textContent of wordToGuess to displayWord, displaying the underscores representing the unknown letters of the word.
var solution = correctWord.split("")
for (i = 0; i < correctWord.length; i++) {
  solution[i] = "_"
}

var displayWord = solution.join("")
console.log(correctWord)
wordToGuess.textContent = displayWord

// Function to initialize a new game
document.body.onkeyup = function(e){

  // Attach an event listener to the keyup event of the body element. Capture the key pressed by the user and assign it to the variable key in lowercase. The code inside this event listener should handle the logic for processing the user's input.
  var key = e.key.toLowerCase();
  console.log(e.key);
  if (
    incorrectLettersGuesses.includes(key) == false &&
    correctLetters.includes(key) == false
  ) {
    // Make loop to check if the guessed letter (key) is included in the correctWord. If it is, it sets answer to true, decreases the count of remaining letters to be guessed (lettersGuessed), adds the guessed letter to the correctLetters array, and updates the corresponding element in the solution array with the guessed letter.
    for (i = 0; i < correctWord.length; i++) {
      if (correctWord[i] == key) {
        answer = true;
        lettersGuessed--;
        correctLetters.push(key);
        solution[i] = key;
      }
    }

    // If the guessed letter was correct (answer is true) it should update the displayWord by joining the solution array into a string. If all letters have been guessed correctly (lettersGuessed == 0), it increments the wins count, updates the corresponding HTML element, sets the previousWord, selects a new random word, resets the game state, and updates the display.
    if (answer == true) {
      displayWord = solution.join("");
      wordToGuess.textContent = displayWord;
      if (lettersGuessed == 0) {
        wins++;
        showWins.textContent = wins;
        previousWord.textContent = correctWord;
        wordToGuess.textContent = "";
        correctWord = words[Math.floor(Math.random() * words.length)];
        solution = correctWord.split("");

        // Check if the word has been fully guessed
        for (i = 0; i < correctWord.length; i++) {
          wordToGuess.textContent = wordToGuess.textContent + "_";
          solution[i] = "_";
          remainingGuessesLeft = 10;
          displayWord = solution.join("");
          console.log(correctWord);
          correctLetters = [];
          incorrectLettersGuesses = [];
          lettersGuessed = correctWord.length;
          incorrectLetters.textContent = "";
          remainingGuesses.textContent = remainingGuessesLeft;
          wordToGuess.textContent = displayWord;
        }
      }
    }
    // If the guessed letter was incorrect it adds the guessed letter to the incorrectLettersGuesses array, decreases the count of remaining guesses, and updates the corresponding HTML elements to display the incorrect letters and the remaining guesses.
    else {
      incorrectLettersGuesses.push(key);
      remainingGuessesLeft--;
      remainingGuesses.textContent = remainingGuessesLeft;
      incorrectLetters.textContent = incorrectLettersGuesses;
    }

    // If the player has run out of guesses (remainingGuessesLeft is 0) it increments the losses count, updates the corresponding HTML element, sets the previousWord, selects a new random word, resets the game state, and updates the display.
    if (remainingGuessesLeft == 0) {
      losses++;
      showLosses.textContent = losses;
      previousWord.textContent = correctWord;
      wordToGuess.textContent = "";
      solution = correctWord.split("");

      for (i = 0; i < correctWord.length; i++) {
        wordToGuess.textContent = wordToGuess.textContent + "_";
        solution[i] = "_";
        remainingGuessesLeft = 10;
        displayWord = solution.join("");
        console.log(correctWord);
        correctLetters = [];
        incorrectLettersGuesses = [];
        lettersGuessed = correctWord.length;
        incorrectLetters.textContent = "";
        remainingGuesses.textContent = remainingGuessesLeft;
        wordToGuess.textContent = displayWord;
      }
    }
  }
  var answer = false;
}





    
