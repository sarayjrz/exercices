function TicTacToe() {
  this.board = new Board();
  this.turn = new Turn(this.board);
  this.message = new Message();

  this.play = function() {
    let isTicTacToe = false;
    let currentPlayer = this.turn.getCurrentPlayer();
    this.message.showBoard(this.board);
    do {
      this.turn.play();
      isTicTacToe = this.board.isTicTacToe(currentPlayer.color);
      if(!isTicTacToe) {
        this.turn.change();
      }
    } while(!isTicTacToe);
    this.message.showVictory(currentPlayer);
  }
}

TicTacToe.TOKENS_IN_ROW = 3;
