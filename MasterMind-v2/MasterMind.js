function MasterMind() {
  this.masterMindView = new MasterMindView();
  this.board = new Board();
  this.secretCombination = new SecretCombination();
  this.secretCombinationView = new SecretCombinationView();
  this.combinationView = new CombinationView();

  this.play = function() {
    let isWinner = false;
    let isLoser = false;
    let combination = new Combination();
    do {
      this.masterMindView.showAttemptsLeft(this.board.getAttempts());
      combination.set(this.combinationView.read());
      this.combinationView.showAttempt(combination);
      this.board.add(combination);
      isWinner = this.secretCombination.equals(this.board.getLastCombination());
      if(!isWinner) {
        isLoser = this.board.isLoser();
        this.secretCombinationView.showFeedback(this.secretCombination.feedback(this.board.getLastCombination()));
      }
    } while(!isWinner && !isLoser);
    isWinner ?
      this.masterMindView.showWinner() :
      this.masterMindView.showLoser(this.secretCombination.getCombination());
  }
}

MasterMind.MAX_ATTEMPTS = 10;
