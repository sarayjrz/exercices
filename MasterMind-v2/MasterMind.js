function MasterMind() {
  this.secretCombination = new SecretCombination();
  this.player = new Player();
  this.view = new View();

  this.play = function() {
    let isVictory = false;
    let isGameOver = false;
    do {
      this.player.playNewCombination();
      isVictory = this.secretCombination.equals(this.player.getLastCombination());
      if(!isVictory) {
        isGameOver = this.player.isGameOver();
        this.view.showFeedback(this.secretCombination.feedback(this.player.getLastCombination()));
      }
    } while(!isVictory && !isGameOver);
    isVictory ?
      this.view.showVictory() :
      this.view.showGameOver(this.secretCombination.getCombination());
  }
}

MasterMind.MAX_ATTEMPTS = 2;
