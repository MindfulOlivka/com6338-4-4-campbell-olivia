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

// Initialize game state
var previousWord = ""
var remainingGuessesLeft = 10
var incorrectLettersGuesses = []
var wins = 0
var losses = 0
var correctLetters = []
var answer = false

// Required elements from the DOM. Get variables with IDs from HTML
var wordToGuess = document.getElementById("word-to-guess")
wordToGuess.textContent = ""
var previousWord = document.getElementById("previous-word")
var incorrectLetters = document.getElementById("incorrect-letters")
var remainingGuesses = document.getElementById("remaining-guesses")
remainingGuesses.textContent = remainingGuessesLeft
var showWins = document.getElementById("wins")
var showLosses = document.getElementById("losses")

 // How to select a random word from the words array
var correctWord = words[Math.floor(Math.random() * words.length)]
var lettersGuessed = correctWord.length

// Display underscore for each letter
var solution = correctWord.split("")
for (i = 0; i < correctWord.length; i++) {
  solution[i] = "_"
}

var displayWord = solution.join("")
console.log(correctWord)
wordToGuess.textContent = displayWord

// Function to initialize a new game
document.body.onkeyup = function(e){}






    
