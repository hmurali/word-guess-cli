var Word = require("./Word.js");
var inquirer = require('inquirer');

var provinceList = ["Ontario", "Quebec", "Alberta", "Manitoba", "Saskatchewan", "British Columbia", "Newfoundland and Labrador", "Prince Edward Island", "Nova Scotia"];
var selection = 0;
var selectedProvince = "";
var wordToGuess = "";
var numGuesses = 0;

function startWordCliGame() {
    if(provinceList.length < 2) {
        provinceList = ["Ontario", "Quebec", "Alberta", "Manitoba", "Saskatchewan", "British Columbia", "Newfoundland and Labrador", "Prince Edward Island", "Nova Scotia"];
    }
    selection = Math.floor(Math.random()*provinceList.length);
    selectedProvince = provinceList[selection];
    console.log("selected Province: " + selectedProvince);
    wordToGuess = new Word(selectedProvince);
    wordToGuess.createAndDisplayWord();
    if(selection > -1) {
        provinceList.splice(selection, 1);
    }
    console.log("\nYou get 8 letter guesses to find the province.\n");
    promptUserInput();
}

function promptUserInput() {
    if(numGuesses < 8) {
        console.log(wordToGuess.createAndDisplayWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "\nPick a letter and press enter. "
            }
        ]).then(function(data) {
            checkUserInput(data);
        });
    }else {
        console.log("\nSorry, you've ran out of guesses.\n");
        console.log(selectedProvince);
        selectedProvince = "";
        wordToGuess = "";
        selection = 0;
        numGuesses = 0;
        startWordCliGame();
    }
}

function checkUserInput(data) {
    if((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        var checkableLetter = data.letter.toUpperCase();
        var tempWord = wordToGuess.createAndDisplayWord();
        wordToGuess.checkWordGuess(checkableLetter);
        if(tempWord === wordToGuess.createAndDisplayWord()) {
            console.log("\nSorry, wrong letter!\n");
            numGuesses++;
            console.log(((8-numGuesses) + " guesses remaining"));
            promptUserInput();
        } else {
            correctGuess();
        }
    } else {
        console.log("\nPlease enter a letter, one at a time.\n");
        promptUserInput();
    }
}

function correctGuess() {
    console.log("\nYou guessed correctly.\n");
    if(selectedProvince.replace(/ /g,"") == (wordToGuess.createAndDisplayWord()).replace(/ /g,"")) {
        console.log(wordToGuess.createAndDisplayWord());
        console.log("Congratulations, you Win!!\n");
        selectedProvince = "";
        wordToGuess = "";
        selection = 0;
        numGuesses = 0;
        startWordCliGame();
    } else {
        promptUserInput();
    }
}

startWordCliGame();