function Player() {
  this.attempts = [];
  this.view = new View();

  this.playNewCombination = function() {
    this.view.showStartAttempt(this.attempts.length + 1);
    let combination = new Combination();
    combination.read();
    this.attempts.push(combination);
    this.view.showProposedCombination(this.getLastCombination());
  }

  this.getLastCombination = function() {
    return this.attempts[this.attempts.length - 1];
  }

  this.isGameOver = function() {
    return this.attempts.length == MasterMind.MAX_ATTEMPTS;
  }
}
