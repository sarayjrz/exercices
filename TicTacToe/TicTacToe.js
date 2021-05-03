function TicTacToe() {
  this.board = new Board();
  this.turn = new Turn(this.board);

  this.play = function() {
    let isTicTacToe = false;
    let currentPlayer = this.turn.getCurrentPlayer();
    do {
      this.turn.play();
      isTicTacToe = this.board.isTicTacToe(currentPlayer.color);
      if(!isTicTacToe) {
        this.turn.change();
      }
    } while(!isTicTacToe)
    currentPlayer.declareVictory();
  }
}
