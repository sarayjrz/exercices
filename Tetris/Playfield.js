function Playfield() {
  this.cells = create();
  this.message = new Message();

  function create() {
    let result = [];
    for(let i = 0; i < Playfield.HEIGHT; i++) {
      result.push(addEmptyRow());
    }
    result.push(addFullRow());
    return result;
  }

  function addEmptyRow() {
    let result = [];
    for(let i = 0; i < Playfield.WIDTH; i++) {
      result.push(Playfield.EMPTY);
    }
    return result;
  }

  function addFullRow() {
    let result = [];
    for(let i = 0; i < Playfield.WIDTH; i++) {
      result.push(Playfield.FILLED);
    }
    return result;
  }

  this.drop = function(tetromino, column) {
    let row = this.getAvailableRow(tetromino, column);
    this.fillCells(tetromino, new Coordinate(row, column));
    this.message.showDropSuccess(this);
    if(this.isAnyCompleteRow()) {
      this.clearCompleteRows();
    }
  }

  this.getFilter = function(tetromino, fromRow, fromColumn) {
    let result = [];
    for(let i = fromRow; i < fromRow + tetromino.getHeight(); i++) {
      result[i - fromRow] = [];
      for(let j = fromColumn; j < fromColumn + tetromino.getWidth(); j++) {
        result[i - fromRow][j - fromColumn] = this.cells[i][j];
      }
    }
    return result;
  }

  this.getAvailableRow = function(tetromino, column) {
    for(let i = 0; i < Playfield.HEIGHT; i++) {
      let filter = this.getFilter(tetromino, i, column);
      if(tetromino.isCollision(filter)) {
        return i + tetromino.getHeight() - 1;
      }
    }
    return Playfield.HEIGHT;
  }

  this.fillCells = function(tetromino, coordinate) {
    let topLeft = new Coordinate(coordinate.row - tetromino.getHeight(), coordinate.column);
    for(let i = 0; i < tetromino.getHeight(); i++) {
      for(let j = 0; j < tetromino.getWidth(); j++) {
        if(tetromino.isFilledCell(new Coordinate(i,j))) {
          this.cells[topLeft.row + i][topLeft.column + j] = tetromino.getTetromino()[i][j];
        }
      }
    }
  }

  this.isOutOfBoundaries = function(tetromino, column) {
    return column + tetromino.getWidth() - 1 > Playfield.WIDTH;
  }

  this.isEmptyCell = function(coordinate) {
    return this.cells[coordinate.row][coordinate.column] == Playfield.EMPTY;
  }

  this.isGameOver = function(tetromino, column) {
    return this.getAvailableRow(tetromino, column) == -1;
  }

  this.isAnyCompleteRow = function() {
    for(let i = 0; i < Playfield.HEIGHT; i++) {
      if(this.isCompleteRow(i)) {
        return true;
      }
    }
    return false;
  }

  this.isCompleteRow = function(row) {
    for(let i = 0; i < Playfield.WIDTH; i++) {
      if(this.isEmptyCell(new Coordinate(row, i))) {
        return false;
      }
    }
    return true;
  }

  this.clearCompleteRows = function() {
    while(this.isAnyCompleteRow()) {
      for(let i = Playfield.HEIGHT - 1; i > 0; i--) {
        if(this.isCompleteRow(i)) {
          this.copyUpperRows(i);
          this.cells[0] = addEmptyRow();
        }
      }
    }
    this.message.showClearSuccess(this);
  }

  this.copyUpperRows = function(start) {
    for(let i = start; i > 1; i--) {
      this.cells[i] = this.cells[i - 1];
    }
  }
}

Playfield.WIDTH = 10;
Playfield.HEIGHT = 20;
Playfield.EMPTY = 0;
Playfield.FILLED = 1;
