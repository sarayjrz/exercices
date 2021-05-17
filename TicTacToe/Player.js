function Player(color, board) {
  this.message = new Message();
  this.color = color;
  this.board = board;
  this.tokensLeft = TicTacToe.TOKENS_IN_ROW;

  this.play = function() {
    this.message.showCurrentTurn(this.color);
    let coordinateDialog = new CoordinateDialog();
    if(!this.haveTokensLeft()) {
      let origin = coordinateDialog.readOrigin(this.board, this.color);
      this.board.removeToken(origin);
    }
    let target = coordinateDialog.readTarget(this.board);
    this.putToken(target);
  }

  this.putToken = function(coordinate) {
    if(this.tokensLeft > 0) {
      this.tokensLeft--;
    }
    this.board.putToken(coordinate, this.color);
    this.message.showBoard(this.board);
  }

  this.haveTokensLeft = function() {
    return this.tokensLeft > 0;
  }
}
