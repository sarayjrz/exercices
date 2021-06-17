function ResultView(board) {
  this.board = board;
  this.combinationView = new CombinationView();

  this.showResult = function() {
    if(this.board.isWinner()) {
      console.log(this.getMessage("YOU_WIN"));
    } else {
      console.log(
        this.getMessage("YOU_LOSE") +
        this.combinationView.getColors(this.board.getSecretCombination()) + "."
      );
    }
  }

  this.getMessage = function(key) {
    return ResultView[key];
  }
}

ResultView.YOU_LOSE = "Game over! \nThe secret combination was: ";
ResultView.YOU_WIN = "Congratulations! \nYou broke the secret code!";
