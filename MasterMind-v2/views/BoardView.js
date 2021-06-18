function BoardView(board) {
  this.board = board;
  this.combinationView = new CombinationView();
  this.secretCombinationView = new SecretCombinationView();

  this.showBoard = function() {
    console.clear();
    let message = "";
    for(let i = 0; i < this.board.attempts.length; i++) {
      message += this.messageAttemptNumber(i) + "\n";
      message += this.getMessage("SUGGESTED_COMBINATION") + "\n";
      message += this.combinationView.getColors(board.attempts[i]) + ".\n";
      message += this.secretCombinationView.messageFeedback(this.board.secretCombination.feedback(this.board.attempts[i]));
      if(i != board.attempts.length - 1) {
        message += this.getMessage("SEPARATOR");
      }
    }
    console.log(message);
  }

  this.messageAttemptNumber = function(num) {
    return this.getMessage("ATTEMPT") + (num + 1) + "/" + MasterMind.MAX_ATTEMPTS + ".";
  }

  this.getMessage = function(key) {
    return BoardView[key];
  }
}

BoardView.ATTEMPT = "Attempt ";
BoardView.SEPARATOR = "\n-----------------------\n";
BoardView.SUGGESTED_COMBINATION = "Suggested combination:";
