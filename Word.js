var Letter = require("./Letter.js");

var Word = function(wordArray) {
    this.wordArray = wordArray;
    //console.log("wordArray: " + wordArray);
    this.testWordArray = []; // array of Letter objects
    /* A function that returns a string representing the word. This calls the function on each 
    Letter object (the first function defined in Letter.js) that displays the character or an underscore 
    and concatenate those together.*/
    this.createAndDisplayWord = function() {
        var wordDispl = [];
        console.log("wordArray inside createAndDisplayWord: " + wordArray);
        for(var i = 0; i < wordArray.length; i++) {
            //console.log("wordArray["+i+"]:" + wordArray[i]);
            var lettr = new Letter(wordArray[i]); // Letter object
            this.testWordArray.push(lettr); // Letter object is pushed to testWordArray
            //console.log("testWordArray["+i+"]:" + this.testWordArray[i]);
        }

        for(var i = 0; i < this.testWordArray.length; i++) {
            wordDispl.push(this.testWordArray[i].toString());
        }
        //console.log("wordDispl: " + wordDispl);
        return wordDispl.join(" ");
    }
    
    /* this.displayWord = function() {
        var wordDispl = [];
        for(var i = 0; i < this.testWordArray.length; i++) {
            wordDispl.push(this.testWordArray[i].toString());
        }
        return wordDispl.join(" ");
    } */

    /* A function that takes a character as an argument */
    this.checkWordGuess = function(userGuess) {
        //console.log("userGuess: " + userGuess);
        for(var i = 0; i < this.testWordArray.length; i++) {
            this.testWordArray[i].check(userGuess);
        }
    }
}

/* var w1 = new Word(["h", "e", "l", "l", "o"]);
console.log(w1.createAndDisplayWord());
w1.checkWordGuess("h");

w1.checkWordGuess("e");

w1.checkWordGuess("l");

w1.checkWordGuess("l");

w1.checkWordGuess("o");
console.log(w1.testWordArray);
console.log(w1.createAndDisplayWord()); */
module.exports = Word;