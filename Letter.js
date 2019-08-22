var Letter = function(alphaCharacter) {
    this.alphaCharacter = alphaCharacter; //string value to store the underlying character for the letter
    this.letterGuessedYet = false; //boolean that stores whether that letter has been guessed yet
}

/* A function that returns the underlying character if the letter has been guessed,
or a placholder (like an underscore) if the letter has not been guessed. */
Letter.prototype.toString = function() {
    if(this.alphaCharacter === " ") {
        return " ";
    } else if(!this.letterGuessedYet) {
        return "_";
    } else {
        return this.alphaCharacter;
    }
}

/* A function that takes a character as an argument, namely letterGuess in this function, and checks it against the underlying character,
updating the stored boolean value to true if it was guessed correctly. */
Letter.prototype.check = function (letterGuess) {
    if(letterGuess === this.alphaCharacter) {
        this.letterGuessedYet = true;
    }
}

/* var l1 = new Letter("a");
var l2 = new Letter("b");
var l3 = new Letter(" "); */
/*console.log(l1.toString()); 
console.log(l2.toString());
console.log(l3.toString());*/
/* console.log("Before Check: ");
console.log(l1.letterGuessedYet);
console.log(l2.letterGuessedYet);
console.log(l3.letterGuessedYet);
console.log("-----------------------------------");
console.log("After Check: ");
l1.check("a");
console.log(l1.toString("a"));
console.log(l1.letterGuessedYet);
l2.check("b");
console.log(l2.toString("b"));
console.log(l2.letterGuessedYet);
l3.check(" ");
console.log(l3.toString());
console.log(l3.letterGuessedYet); */
module.exports = Letter;