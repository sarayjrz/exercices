function Coordinate(row, column) {
  this.row = row;
  this.column = column;
  this.LIMIT = 3;
  this.DIRECTIONS = {
    DIAGONAL: 'diagonal',
    INVERSE_DIAGONAL: 'inverse diagonal',
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical'
  };

  this.isValid = function() {
    return this.row >= 0 && this.row < this.LIMIT &&
      this.column >= 0 && this.column < this.LIMIT;
  }

  this.equals = function(coordinate) {
    return this.row == coordinate.row && this.column == coordinate.column;
  }

  this.getDirection = function(coordinate) {
    if(this.isInDiagonal() && coordinate.isInDiagonal()) {
      return this.DIRECTIONS.DIAGONAL;
    } else if(this.isInInverseDiagonal() && coordinate.isInInverseDiagonal()) {
      return this.DIRECTIONS.INVERSE_DIAGONAL;
    } else if(this.getRow() == coordinate.getRow()) {
      return this.DIRECTIONS.HORIZONTAL;
    } else if(this.getColumn() == coordinate.getColumn()) {
      return this.DIRECTIONS.VERTICAL;
    }
    return null;
  }

  this.isInDiagonal = function() {
    return this.row - this.column == 0;
  }

  this.isInInverseDiagonal = function() {
    return this.row + this.column == this.LIMIT;
  }

  this.getRow = function() {
    return this.row;
  }

  this.getColumn = function() {
    return this.column;
  }
}
