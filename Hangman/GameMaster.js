function GameMaster() {
  this.secretWord = chooseRandomWord();
  this.triesLeft = Hangman.TRIES;
  this.screen = new Screen();
  this.maskedWord = createMaskedWord(this.secretWord);

  function chooseRandomWord() {
    return WORDS[Math.round(Math.random() * WORDS.length)].toUpperCase();
  }

  function createMaskedWord(secretWord) {
    let result = "";
    for(let i = 0; i < secretWord.length; i++) {
      result += Hangman.MASKED_CHARACTER;
    }
    return result;
  }

  this.feedback = function(character) {
    this.triesLeft--;
    for(let i = 0; i < this.secretWord.length; i++) {
      if(this.secretWord[i].indexOf(character) == 0) {
        this.updateMaskedWord(character, i);
      }
    }
  }

  this.updateMaskedWord = function(character, position) {
    this.maskedWord = this.maskedWord.substr(0, position) + character + this.maskedWord.substr(position + 1, this.maskedWord.length);
  }

  this.isGameOver = function() {
    return this.triesLeft == 0;
  }

  this.isGuess = function() {
    return this.maskedWord == this.secretWord;
  }

  this.getTriesLeft = function() {
    return this.triesLeft;
  }

  this.getMaskedWord = function() {
    return this.maskedWord;
  }

  this.getSecretWord = function() {
    return this.secretWord;
  }
}
