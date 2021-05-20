function Hangman() {
  this.gameMaster = new GameMaster();
  this.characterDialog = new CharacterDialog();
  this.screen = new Screen();

  this.play = function() {
    let guess = false;
    let gameOver = false;
    this.screen.showBoard(this.gameMaster, this.characterDialog);
    do {
      let character = this.characterDialog.read();
      this.gameMaster.feedback(character);
      this.screen.showBoard(this.gameMaster, this.characterDialog);
      guess = this.gameMaster.isGuess();
      gameOver = this.gameMaster.isGameOver();
    } while(!guess && !gameOver);
    if(gameOver) {
      this.screen.showGameOver(this.gameMaster);
    } else {
      this.screen.showVictory();
    }
  }
}

Hangman.TRIES = 10;
Hangman.MASKED_CHARACTER = "_";
