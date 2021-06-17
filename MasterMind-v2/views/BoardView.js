function BoardView(board) {
  this.board = board;
  this.combinationView = new CombinationView();
  this.secretCombinationView = new SecretCombinationView();

  this.showBoard = function() {
    console.clear();
    // TODO pulir como se muestra el board, sacar todo en la misma linea de consola
    for(let i = 0; i < this.board.attempts.length; i++) {
      this.showAttemptNumber(i);
      this.combinationView.showAttempt(this.board.attempts[i]);
      this.secretCombinationView.showFeedback(
        this.board.secretCombination.feedback(this.board.attempts[i])
      );
    }
  }

  this.showAttemptNumber = function(num) {
    console.log(this.getMessage("ATTEMPT") + (num + 1) + "/" + MasterMind.MAX_ATTEMPTS + ".");
  }

  this.getMessage = function(key) {
    return BoardView[key];
  }
}

BoardView.ATTEMPT = "Attempt ";
