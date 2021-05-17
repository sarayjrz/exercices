function Coordinate(row, column) {
  this.row = row;
  this.column = column;

  this.isValid = function() {
    return this.row >= 0 && this.row < TicTacToe.TOKENS_IN_ROW &&
      this.column >= 0 && this.column < TicTacToe.TOKENS_IN_ROW;
  }

  this.equals = function(coordinate) {
    return this.row == coordinate.row && this.column == coordinate.column;
  }

  this.getDirection = function(coordinate) {
    if(this.isInDiagonal() && coordinate.isInDiagonal()) {
      return Coordinate.DIRECTIONS.DIAGONAL;
    } else if(this.isInInverseDiagonal() && coordinate.isInInverseDiagonal()) {
      return Coordinate.DIRECTIONS.INVERSE_DIAGONAL;
    } else if(this.getRow() == coordinate.getRow()) {
      return Coordinate.DIRECTIONS.HORIZONTAL;
    } else if(this.getColumn() == coordinate.getColumn()) {
      return Coordinate.DIRECTIONS.VERTICAL;
    }
    return null;
  }

  this.isInDiagonal = function() {
    return this.row - this.column == 0;
  }

  this.isInInverseDiagonal = function() {
    return this.row + this.column == TicTacToe.TOKENS_IN_ROW;
  }

  this.getRow = function() {
    return this.row;
  }

  this.getColumn = function() {
    return this.column;
  }
}

Coordinate.DIRECTIONS = {
  DIAGONAL: 'diagonal',
  INVERSE_DIAGONAL: 'inverse diagonal',
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
};
