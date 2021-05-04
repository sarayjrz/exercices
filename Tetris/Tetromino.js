function Tetromino(type) {
  this.type = type;
  this.rotation = 0;

  this.getTetromino = function() {
    return TETROMINOES[this.type][this.rotation];
  }

  this.rotate = function() {
    this.rotation = (this.rotation + 1) % 4;
  }

  this.getWidth = function() {
    return this.getTetromino()[0].length;
  }

  this.getHeight = function() {
    return this.getTetromino().length;
  }

  this.isFilledCell = function(coordinate) {
    return this.getTetromino()[coordinate.row][coordinate.column] == Playfield.FILLED;
  }
}
