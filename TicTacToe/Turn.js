function Turn(board) {
  this.board = board;
  this.COLORS = ['o','x'];
  this.players = [];
  for(let color of this.COLORS) {
    this.players.push(new Player(color, this.board))
  }
  this.currentPlayer = Math.round(Math.random());

  this.play = function() {
    this.getCurrentPlayer().play();
  }

  this.change = function() {
    this.currentPlayer = (this.currentPlayer + 1) % 2;
  }

  this.getCurrentPlayer = function() {
    return this.players[this.currentPlayer];
  }
}
