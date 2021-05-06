function DropCommand(tetromino, playfield, column) {
  this.title = "DROP";
  this.tetromino = tetromino;
  this.playfield = playfield;
  this.column = column;
  this.executed = false;

  this.getTitle = function() {
    return this.title;
  }

  this.execute = function() {
    this.executed = true;
    if(!this.playfield.isGameOver(this.tetromino, this.column.value)) {
      this.playfield.drop(this.tetromino, this.column.value);
    }
  }

  this.getExecuted = function() {
    return this.executed;
  }

}
