function Coordinate(row, column) {
  this.row = row;
  this.column = column;

  this.equals = function(coordinate) {
    return this.row == coordinate.row && this.column == coordinate.column;
  }

  this.isValid = function() {
    return this.row >= 0 && this.row < Board.DIMENSION &&
      Number.isInteger(this.row) &&
      this.column >= 0 && this.column < Board.DIMENSION &&
      Number.isInteger(this.column);
  }
}
