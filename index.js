var Word = require("./Word.js");
var inquirer = require('inquirer');

var provinceList = ["ONTARIO", "QUEBEC", "ALBERTA", "MANITOBA", "SASKATCHEWAN", "BRITISH COLUMBIA", "NEWFOUNDLAND AND LABRADOR", "PRINCE EDWARD ISLAND", "NOVA SCOTIA"];
var selection = 0;
var selectedProvince = "";
var wordToGuess = "";
var numGuesses = 0;

function startWordCliGame() {
    if(provinceList.length < 2) {
        provinceList = ["ONTARIO", "QUEBEC", "ALBERTA", "MANITOBA", "SASKATCHEWAN", "BRITISH COLUMBIA", "NEWFOUNDLAND AND LABRADOR", "PRINCE EDWARD ISLAND", "NOVA SCOTIA"];
    }
    selection = Math.floor(Math.random()*provinceList.length);
    selectedProvince = provinceList[selection];
    console.log("selected Province: " + selectedProvince);
    wordToGuess = new Word(selectedProvince);
    wordToGuess.createWord();
    if(selection > -1) {
        provinceList.splice(selection, 1);
    }
    console.log("\nYou get 8 letter guesses to find the province.\n");
    promptUserInput();
}

function promptUserInput() {
    if(numGuesses < 8) {
        console.log(wordToGuess.displayWord());
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
        var tempWord = wordToGuess.displayWord();
        wordToGuess.checkWordGuess(checkableLetter);
        if(tempWord === wordToGuess.displayWord()) {
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
    if(selectedProvince.replace(/ /g,"") == (wordToGuess.displayWord()).replace(/ /g,"")) {
        console.log(wordToGuess.displayWord());
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