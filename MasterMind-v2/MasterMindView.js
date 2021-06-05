function MasterMindView() {
  this.combinationView = new CombinationView();

  this.showAttemptsLeft = function(attempts) {
    console.log(this.getMessage("ATTEMPT") + (attempts + 1) + "/" + MasterMind.MAX_ATTEMPTS + ".");
  }

  this.showLoser = function(combination) {
    console.log(this.getMessage("YOU_LOSE") + this.combinationView.getColors(combination) + ".");
  }

  this.showWinner = function() {
    console.log(this.getMessage("YOU_WIN"));
  }

  this.getMessage = function(key) {
    return MasterMindView[key];
  }
}

MasterMindView.ATTEMPT = "Attempt ";
MasterMindView.YOU_LOSE = "Game over! The secret combination was: ";
MasterMindView.YOU_WIN = "Congratulations! You broke the secret code!";
