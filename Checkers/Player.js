function Player(color) {
  this.color = color;
  this.surrender = false;
  this.view = new View();
  this.strings = new Strings();

  this.playTurn = function(board) {
    this.view.showTurn(this.color);
    let coordinate;
    let error;
    do {
      coordinate = new ChooseTokenDialog().show();
      error = !board.isMoveValid(coordinate, this.color) || !board.canTokenMove(coordinate);
      if(error) {
        this.view.showMoveError();
      }
    } while(error)
    board.move(coordinate);
  }

  this.getColor = function() {
    return this.color;
  }
}

Player.COLORS = ['white', 'black'];
Player.TOKENS = 12;
